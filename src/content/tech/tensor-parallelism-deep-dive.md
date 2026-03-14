---
title: 大模型并行训练技术详解 - 张量并行原理
date: 2026-03-14
category: tech
tags: ["LLM", "Distributed Training", "Tensor Parallelism", "Deep Learning"]
description: 深入解析大模型分布式训练中的张量并行技术，包括行并行、列并行、序列并行和 3D 并行策略
---

# 大模型并行训练技术详解 - 张量并行原理

随着大语言模型规模的不断增长，单卡训练已经变得不再可行。本文将深入讲解**张量并行 (Tensor Parallelism, TP)** 的原理和实现细节。

## 一、为什么需要张量并行？

### 1.1 模型规模的爆炸式增长

| 模型 | 参数量 | 训练所需显存 (FP16) |
|------|--------|-------------------|
| BERT | 340M | ~1.4 GB |
| GPT-3 | 175B | ~700 GB |
| LLaMA-2 70B | 70B | ~280 GB |
| LLaMA-3 405B | 405B | ~1.6 TB |

对于 70B 参数的模型，即使使用 FP16 精度，也需要约 280GB 显存来存储参数，这远超单张 GPU 的容量。

### 1.2 并行策略分类

大模型训练主要有三种并行策略：

1. **数据并行 (Data Parallelism, DP)**: 复制模型，分发数据
2. **张量并行 (Tensor Parallelism, TP)**: 切分单层参数
3. **流水线并行 (Pipeline Parallelism, PP)**: 切分网络层

## 二、张量并行基础

### 2.1 行并行与列并行

张量并行的核心思想是**在矩阵层面进行切分**，将单个大的矩阵运算分散到多个设备上。

#### 列并行 (Column-wise Parallelism)

列并行将权重矩阵按**列**切分：

```
原始矩阵 W: [hidden_dim, hidden_dim]

在 2 个 GPU 上切分:
GPU0: W0 = [hidden_dim, hidden_dim/2]
GPU1: W1 = [hidden_dim, hidden_dim/2]

前向传播:
Y0 = X @ W0  -> shape: [batch, hidden_dim/2]
Y1 = X @ W1  -> shape: [batch, hidden_dim/2]

结果拼接：Y = concat(Y0, Y1)
```

#### 行并行 (Row-wise Parallelism)

行并行将权重矩阵按**行**切分：

```
原始矩阵 W: [hidden_dim, hidden_dim]

在 2 个 GPU 上切分:
GPU0: W0 = [hidden_dim/2, hidden_dim]
GPU1: W1 = [hidden_dim/2, hidden_dim]

前向传播需要先切分输入:
X0 = X[:, :hidden_dim/2]
X1 = X[:, hidden_dim/2:]

Y0 = X0 @ W0  -> shape: [batch, hidden_dim]
Y1 = X1 @ W1  -> shape: [batch, hidden_dim]

结果求和：Y = Y0 + Y1 (需要 AllReduce)
```

### 2.2 PyTorch 实现示例

使用 PyTorch 的 `torch.distributed.tensor.parallel` API：

```python
from torch.distributed.tensor.parallel import parallelize_module, ColwiseParallel, RowwiseParallel
from torch.distributed.device_mesh import init_device_mesh

# 创建 8 卡张量并行 mesh
tp_mesh = init_device_mesh("cuda", (8,))

# 对模型进行并行化
# w1 层使用列并行，w2 层使用行并行
model = parallelize_module(
    model,
    tp_mesh,
    {
        "w1": ColwiseParallel(),
        "w2": RowwiseParallel()
    }
)
```

## 三、Transformer 中的张量并行

### 3.1 Attention 层的并行策略

对于标准的 Attention 层：

```python
class Attention(nn.Module):
    def __init__(self, hidden_dim, num_heads):
        super().__init__()
        self.q_proj = nn.Linear(hidden_dim, hidden_dim)  # 列并行
        self.k_proj = nn.Linear(hidden_dim, hidden_dim)  # 列并行
        self.v_proj = nn.Linear(hidden_dim, hidden_dim)  # 列并行
        self.o_proj = nn.Linear(hidden_dim, hidden_dim)  # 行并行
```

**并行策略：**
- `q_proj`, `k_proj`, `v_proj`: **列并行** (输出需要拼接)
- `o_proj`: **行并行** (输出需要 AllReduce 求和)

### 3.2 MLP 层的并行策略

对于 MLP 层：

```python
class MLP(nn.Module):
    def __init__(self, hidden_dim, intermediate_dim):
        super().__init__()
        self.gate_proj = nn.Linear(hidden_dim, intermediate_dim)  # 列并行
        self.up_proj = nn.Linear(hidden_dim, intermediate_dim)    # 列并行
        self.down_proj = nn.Linear(intermediate_dim, hidden_dim)  # 行并行
```

### 3.3 完整的前向传播

```python
def forward_parallel(x):
    # ========== Attention 层 ==========
    # Q, K, V 投影 (列并行)
    q_local = q_proj(x)  # 每个 GPU 计算一部分
    k_local = k_proj(x)
    v_local = v_proj(x)

    # AllGather 收集完整的 Q, K, V
    q = all_gather(q_local, dim=-1)
    k = all_gather(k_local, dim=-1)
    v = all_gather(v_local, dim=-1)

    # 每个 GPU 都有完整的 Q, K, V，独立计算 Attention
    attn_out = scaled_dot_product_attention(q, k, v)

    # 切分 Attention 输出
    attn_out_local = split_tensor(attn_out, dim=-1, rank=rank)

    # O 投影 (行并行)
    o_local = o_proj(attn_out_local)

    # AllReduce 求和得到最终输出
    o = all_reduce(o_local, op='sum')

    # ========== MLP 层 ==========
    # 类似的列并行 -> 行并行模式
    gate_local = gate_proj(x)
    up_local = up_proj(x)

    gate = all_gather(gate_local, dim=-1)
    up = all_gather(up_local, dim=-1)

    intermediate = gate * up  # SiLU 激活
    intermediate_local = split_tensor(intermediate, dim=-1, rank=rank)

    mlp_out = down_proj(intermediate_local)
    mlp = all_reduce(mlp_out, op='sum')

    return o + mlp
```

## 四、序列并行

### 4.1 序列并行的动机

标准的张量并行在每个设备上都需要**完整的序列**，这在长序列场景下会导致显存浪费。

**序列并行 (Sequence Parallelism)** 在序列维度上进行切分：

```
原始序列：[batch, seq_len, hidden_dim]

在 4 个 GPU 上切分:
GPU0: [batch, seq_len/4, hidden_dim]
GPU1: [batch, seq_len/4, hidden_dim]
GPU2: [batch, seq_len/4, hidden_dim]
GPU3: [batch, seq_len/4, hidden_dim]
```

### 4.2 LayerNorm 的序列并行

对于 `nn.LayerNorm` 和 `nn.RMSNorm`，序列维度的切分不影响计算结果：

```python
class SequenceParallelRMSNorm(nn.Module):
    def __init__(self, hidden_dim, eps=1e-6):
        super().__init__()
        self.weight = nn.Parameter(torch.ones(hidden_dim))
        self.eps = eps

    def forward(self, x):
        # x shape: [batch, local_seq, hidden_dim]
        variance = x.pow(2).mean(dim=-1, keepdim=True)  # 本地计算
        # AllReduce 聚合全局方差
        variance = all_reduce(variance, op='sum') / get_tp_world_size()
        x = x * torch.rsqrt(variance + self.eps)
        return x * self.weight
```

## 五、并行损失函数计算

### 5.1 Cross Entropy Loss 并行化

当词汇表被切分到不同的 GPU 上时，需要收集所有 GPU 上的 logits 来计算全局的 softmax 和 loss。

```python
# Megatron-LM 风格的实现
vocab_start_index = rank * vocab_chunk_size
vocab_end_index = vocab_start_index + vocab_chunk_size

# 获取当前 GPU 的 vocab 范围
target_mask = (target >= vocab_start_index) & (target < vocab_end_index)
local_target = target - vocab_start_index

# 计算本地 loss，然后通过 all-reduce 聚合
local_loss = cross_entropy(local_logits, local_target)
global_loss = all_reduce(local_loss, op='sum')
```

### 5.2 梯度聚合

在反向传播时，来自不同设备的梯度需要进行聚合：

```python
for param in model.parameters():
    if param.is_tensor_parallel:
        all_reduce(param.grad, op='sum')
```

## 六、3D 并行策略

### 6.1 3D 并行概述

将数据并行、张量并行和流水线并行结合起来：

```
总 GPU 数 = DP × TP × PP
```

以 64 卡集群训练 LLaMA-70B 为例：

```
配置：DP=4, TP=4, PP=4

GPU 组织:
DP0: [TP0-TP3] -> PP0-PP3
DP1: [TP0-TP3] -> PP0-PP3
DP2: [TP0-TP3] -> PP0-PP3
DP3: [TP0-TP3] -> PP0-PP3
```

### 6.2 通信模式对比

| 并行类型 | 通信频率 | 通信量 | 典型场景 |
|---------|---------|--------|---------|
| 数据并行 | 每步 1 次 | 全部梯度 | 小模型 |
| 张量并行 | 每层多次 | 隐藏层维度 | 中等模型 |
| 流水线并行 | 每 micro-batch 1 次 | 激活/梯度 | 超大模型 |
| 3D 并行 | 组合 | 按配置变化 | 工业级训练 |

## 七、实际部署建议

### 7.1 并行策略选择

| 模型规模 | 推荐配置 | 说明 |
|---------|---------|------|
| <7B | DP only | 单卡可放下 |
| 7B-13B | DP + TP=2 | 轻度张量并行 |
| 13B-70B | DP + TP=4/8 | 中度张量并行 |
| >70B | 3D 并行 | 需要流水线并行 |

### 7.2 性能优化技巧

1. **选择合适的 TP 大小**: TP 过大会增加通信开销
2. **使用 NCCL 优化通信**: 配置 `NCCL_IB_DISABLE=0` 启用 InfiniBand
3. **梯度累积**: 减少通信频率
4. **激活检查点**: 降低显存占用

## 八、总结

张量并行是大模型训练的核心技术，理解其原理对于设计和优化分布式训练系统至关重要。

**核心要点：**
1. 列并行输出需要拼接，行并行输出需要 AllReduce
2. Transformer 中 Q/K/V 投影用列并行，O 投影用行并行
3. 序列并行是张量并行的有效补充
4. 3D 并行结合三种策略，适合超大规模训练

---

**参考资料:**
- [Megatron-LM Paper](https://arxiv.org/abs/1909.08053)
- [PyTorch Distributed Documentation](https://pytorch.org/docs/stable/distributed.html)
