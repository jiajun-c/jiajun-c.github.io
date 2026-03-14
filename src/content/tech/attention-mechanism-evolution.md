---
title: 注意力机制演进史 - 从 MHA 到 FlashAttention
date: 2026-03-14
category: tech
tags: ["Attention", "Transformer", "FlashAttention", "LLM"]
description: 全面梳理注意力机制的演进历程，从 MHA、MQA、GQA 到 FlashAttention，深入解析每种变体的原理和实现
---

# 注意力机制演进史 - 从 MHA 到 FlashAttention

Attention 机制是 Transformer 架构的核心。自 2017 年 Google 提出 Transformer 以来，Attention 机制经历了多次重要的演进和优化。本文将全面梳理这一演进历程。

## 一、Scaled Dot-Product Attention

### 1.1 基础公式

注意力机制最基础的形式是缩放点积注意力：

$$Attention(Q, K, V) = softmax(\frac{QK^T}{\sqrt{d_k}})V$$

其中：
- $Q \in \mathbb{R}^{n \times d_k}$: Query 矩阵
- $K \in \mathbb{R}^{n \times d_k}$: Key 矩阵
- $V \in \mathbb{R}^{n \times d_v}$: Value 矩阵
- $d_k$: 缩放因子，防止点积过大

### 1.2 PyTorch 实现

```python
import torch
import torch.nn as nn
import math

class ScaledDotProductAttention(nn.Module):
    def __init__(self, dim):
        super().__init__()
        self.dim = dim
        # 将 Q, K, V 放到一个线性层中
        self.proj = nn.Linear(dim, dim * 3)
        self.att_drop = nn.Dropout(0.1)
        self.output_proj = nn.Linear(dim, dim)

    def forward(self, X, attention_mask=None):
        QKV = self.proj(X)
        # X shape: (batch, seq, dim)
        Q, K, V = torch.split(QKV, self.dim, dim=-1)

        # Q, K, V shape: (batch, seq, dim)
        att_weight = Q @ K.transpose(-1, -2) / math.sqrt(self.dim)
        # att_weight: (batch, seq, seq)

        if attention_mask is not None:
            att_weight = att_weight.masked_fill(attention_mask == 0, float('-inf'))

        att_weight = torch.softmax(att_weight, dim=-1)
        att_weight = self.att_drop(att_weight)

        output = att_weight @ V
        return self.output_proj(output)
```

### 1.3 复杂度分析

| 操作 | 计算复杂度 | 内存复杂度 |
|------|-----------|-----------|
| QK^T 乘法 | O(n²·d) | O(n²) |
| Softmax | O(n²) | O(n²) |
| Attention×V | O(n²·d) | O(n²) |

**问题：** 序列长度增加时，内存消耗呈**平方级增长**！

## 二、Multi-Head Attention (MHA)

### 2.1 多头注意力公式

MHA 将上述操作并行执行 h 次：

$$MultiHead(Q, K, V) = Concat(head_1, ..., head_h)W^O$$

$$head_i = Attention(QW_i^Q, KW_i^K, VW_i^V)$$

### 2.2 PyTorch 实现

```python
class MultiHeadAttention(nn.Module):
    def __init__(self, hidden_dim, num_heads):
        super().__init__()
        self.num_heads = num_heads
        self.head_dim = hidden_dim // num_heads
        self.hidden_dim = hidden_dim

        self.q_proj = nn.Linear(hidden_dim, hidden_dim)
        self.k_proj = nn.Linear(hidden_dim, hidden_dim)
        self.v_proj = nn.Linear(hidden_dim, hidden_dim)
        self.o_proj = nn.Linear(hidden_dim, hidden_dim)

    def forward(self, X, attention_mask=None):
        batch_size, seq_len, _ = X.size()

        Q = self.q_proj(X)
        K = self.k_proj(X)
        V = self.v_proj(X)

        # 重塑为多头格式
        q_state = Q.view(batch_size, seq_len, self.num_heads, self.head_dim).transpose(1, 2)
        k_state = K.view(batch_size, seq_len, self.num_heads, self.head_dim).transpose(1, 2)
        v_state = V.view(batch_size, seq_len, self.num_heads, self.head_dim).transpose(1, 2)

        # 计算 attention
        attention_weight = (q_state @ k_state.transpose(-1, -2)) / math.sqrt(self.head_dim)

        if attention_mask is not None:
            attention_weight = attention_weight.masked_fill(attention_mask == 0, float("-1e20"))

        attention_weight = torch.softmax(attention_weight, dim=-1)
        output_mid = attention_weight @ v_state

        output = output_mid.transpose(1, 2).contiguous()
        output = output.view(batch_size, seq_len, -1)
        return self.o_proj(output)
```

### 2.3 MHA 的瓶颈

MHA 虽然提高了模型表达能力，但带来了显著的**显存和计算开销**：

以 LLaMA-7B 为例 (hidden_dim=4096, num_heads=32):
- 每个 token 的 KV Cache: $2 \times 32 \times 128 \times 2bytes = 16KB$
- 序列长度 4096 时：$16KB \times 4096 = 64MB$ (单 token)
- 总 KV Cache: $64MB \times 32 \text{层} = 2GB$

## 三、Multi-Query Attention (MQA)

### 3.1 MQA 的核心思想

MQA 通过**共享键和值头**来减少 KV Cache：

| 类型 | Q 头数 | K 头数 | V 头数 | KV Cache 大小 |
|------|--------|--------|--------|--------------|
| MHA  | N      | N      | N      | N × 2       |
| MQA  | N      | 1      | 1      | 2           |

**KV Cache 减少：N 倍！**

### 3.2 MQA 实现

```python
class MultiQueryAttention(nn.Module):
    def __init__(self, hidden_dim, num_heads):
        super().__init__()
        assert hidden_dim % num_heads == 0

        self.hidden_dim = hidden_dim
        self.num_heads = num_heads
        self.head_dim = hidden_dim // num_heads

        # Q 保持多头，K, V 为单头
        self.q_proj = nn.Linear(hidden_dim, hidden_dim)
        self.k_proj = nn.Linear(hidden_dim, self.head_dim)
        self.v_proj = nn.Linear(hidden_dim, self.head_dim)
        self.o_proj = nn.Linear(hidden_dim, hidden_dim)

    def forward(self, X, attention_mask=None):
        batch_size, seq, _ = X.size()

        q = self.q_proj(X)
        k = self.k_proj(X)
        v = self.v_proj(X)

        # Q: (batch, seq, num_heads, head_dim)
        q = q.view(batch_size, seq, self.num_heads, self.head_dim).transpose(1, 2)
        # K, V: (batch, seq, 1, head_dim) -> (batch, 1, seq, head_dim)
        k = k.view(batch_size, seq, 1, self.head_dim).transpose(1, 2)
        v = v.view(batch_size, seq, 1, self.head_dim).transpose(1, 2)

        # K, V 通过广播与所有 Q 头计算 attention
        attention_score = (q @ k.transpose(2, 3)) / math.sqrt(self.head_dim)

        if attention_mask is not None:
            attention_score = attention_score.masked_fill(attention_mask == 0, float("-inf"))

        attention_weight = torch.softmax(attention_score, dim=-1)
        output = attention_weight @ v  # (batch, num_heads, seq, head_dim)

        output = output.transpose(1, 2).contiguous()
        output = output.view(batch_size, seq, -1)
        return self.o_proj(output)
```

### 3.3 MQA 的优缺点

**优点：**
- KV Cache 大小显著减少
- 推理速度提升 2-3 倍
- 内存带宽需求降低

**缺点：**
- 模型质量略有下降 (约 1-2%)

## 四、Grouped-Query Attention (GQA)

### 4.1 GQA 的设计思路

GQA 是 MHA 和 MQA 的折中方案：

- 将 Q 头分成 G 组
- 每组共享一个 K 头和 V 头

| 类型 | Q 头数 | K 头数 | V 头数 | KV Cache 大小 |
|------|--------|--------|--------|--------------|
| MHA  | N      | N      | N      | N × 2       |
| GQA  | N      | G      | G      | G × 2       |
| MQA  | N      | 1      | 1      | 2           |

### 4.2 GQA 实现

```python
class GroupedQueryAttention(nn.Module):
    def __init__(self, hidden_dim, num_heads, num_kv_heads):
        super().__init__()
        assert hidden_dim % num_heads == 0
        assert num_heads % num_kv_heads == 0

        self.hidden_dim = hidden_dim
        self.num_heads = num_heads
        self.num_kv_heads = num_kv_heads
        self.head_dim = hidden_dim // num_heads
        self.num_groups = num_heads // num_kv_heads

        self.q_proj = nn.Linear(hidden_dim, num_heads * self.head_dim)
        self.k_proj = nn.Linear(hidden_dim, num_kv_heads * self.head_dim)
        self.v_proj = nn.Linear(hidden_dim, num_kv_heads * self.head_dim)
        self.o_proj = nn.Linear(hidden_dim, hidden_dim)

    def forward(self, X, attention_mask=None):
        batch_size, seq, _ = X.size()

        q = self.q_proj(X)
        k = self.k_proj(X)
        v = self.v_proj(X)

        # 重塑形状
        q = q.view(batch_size, seq, self.num_heads, self.head_dim).transpose(1, 2)
        k = k.view(batch_size, seq, self.num_kv_heads, self.head_dim).transpose(1, 2)
        v = v.view(batch_size, seq, self.num_kv_heads, self.head_dim).transpose(1, 2)

        # K, V repeat_interleave 扩展到 num_heads
        k = k.repeat_interleave(self.num_groups, dim=1)
        v = v.repeat_interleave(self.num_groups, dim=1)

        attention_score = (q @ k.transpose(2, 3)) / math.sqrt(self.head_dim)
        attention_weight = torch.softmax(attention_score, dim=-1)
        output = attention_weight @ v

        output = output.transpose(1, 2).contiguous()
        return self.o_proj(output.view(batch_size, seq, -1))
```

### 4.3 实际应用

LLaMA-2 70B 和 LLaMA-3 都采用了 GQA：

| 模型 | num_heads | num_kv_heads | G 值 |
|------|-----------|--------------|-----|
| LLaMA-2 70B | 64 | 8 | 8 |
| LLaMA-3 70B | 64 | 8 | 8 |

## 五、FlashAttention

### 5.1 FlashAttention 的动机

标准 Attention 的问题：
1. **内存瓶颈**: 需要 O(n²) 的中间存储
2. **IO 瓶颈**: 频繁访问 HBM (高带宽但高延迟)

FlashAttention 的核心思想：
- **分块计算**: 将矩阵分块，在 SRAM 中完成计算
- **Online Softmax**: 流式计算 softmax，避免存储完整注意力矩阵

### 5.2 FlashAttention V1 算法

```python
import torch

def flash_attention_v1(Q, K, V, Br=4, Bc=4):
    """
    FlashAttention V1 简化实现
    Q, K, V: (N, d) 矩阵
    Br, Bc: 分块大小
    """
    N, d = Q.shape
    O = torch.zeros((N, d))
    l = torch.zeros((N, 1))  # 归一化因子
    m = torch.full((N, 1), -float('inf'))  # max 值

    # 外循环：遍历 K, V 的块
    for block_start_Bc in range(0, N, Bc):
        block_end_Bc = block_start_Bc + Bc
        Kj = K[block_start_Bc:block_end_Bc, :]
        Vj = V[block_start_Bc:block_end_Bc, :]

        # 内循环：遍历 Q 的块
        for block_start_Br in range(0, N, Br):
            block_end_Br = block_start_Br + Br
            mi = m[block_start_Br:block_end_Br, :]
            li = l[block_start_Br:block_end_Br, :]
            Oi = O[block_start_Br:block_end_Br, :]
            Qi = Q[block_start_Br:block_end_Br, :]

            # 计算注意力分数
            Sij = Qi @ Kj.T
            mij_hat = torch.max(Sij, dim=1).values[:, None]
            pij_hat = torch.exp(Sij - mij_hat)
            lij_hat = torch.sum(pij_hat, dim=1)[:, None]

            # Online Softmax 更新
            mi_new = torch.max(torch.column_stack([mi, mij_hat]), dim=1).values[:, None]
            li_new = torch.exp(mi - mi_new) * li + torch.exp(mij_hat - mi_new) * lij_hat
            Oi = (li * torch.exp(mi - mi_new) * Oi + torch.exp(mij_hat - mi_new) * pij_hat @ Vj) / li_new

            m[block_start_Br:block_end_Br, :] = mi_new
            l[block_start_Br:block_end_Br, :] = li_new
            O[block_start_Br:block_end_Br, :] = Oi

    return O
```

### 5.3 FlashAttention V2 改进

V2 相比 V1 的改进：

1. **更好的并行度**: 每个 warp 计算多个 output tiles
2. **减少共享内存**: 优化了数据布局
3. **非均匀分块**: 动态调整块大小

### 5.4 性能对比

| 实现 | A100 FP16 | 内存节省 |
|------|-----------|---------|
| 标准 Attention | 基准 | 基准 |
| FlashAttention V1 | 2.3x 更快 | 20x |
| FlashAttention V2 | 3.0x 更快 | 25x |

## 六、其他 Attention 变体

### 6.1 Ring Attention

用于分布式训练的序列并行：
- 将序列切分到多个设备
- 通过 ring all-reduce 交换 KV
- 支持超长序列 (1M+ tokens)

### 6.2 Window Attention

局部注意力窗口：
- 每个 token 只关注局部窗口内的 token
- 复杂度从 O(n²) 降至 O(n·w)
- 用于 LLaMA、Mistral 等模型

### 6.3 Sparse Attention

稀疏注意力模式：
- Strided Attention: 每隔 k 个 token 关注一次
- Global Attention: 只关注特殊 token (如 CLS)

## 七、总结

注意力机制的演进历程：

```
MHA (2017)
  ↓
MQA (2019) - 减少 KV Cache
  ↓
GQA (2023) - 平衡质量和效率
  ↓
FlashAttention (2022-) - IO 感知优化
```

**核心要点：**
1. MHA 提高表达能力但增加开销
2. MQA/GQA 通过共享 KV 头减少显存
3. FlashAttention 通过分块和 online softmax 优化 IO
4. 选择合适的 Attention 类型需要权衡质量和效率

---

**参考资料:**
- [Attention Is All You Need](https://arxiv.org/abs/1706.03762)
- [FlashAttention Paper](https://arxiv.org/abs/2205.14135)
- [GQA Paper](https://arxiv.org/abs/2305.13245)
