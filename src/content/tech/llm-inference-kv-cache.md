---
title: 大模型推理优化详解 - KV Cache 技术原理
date: 2026-03-14
category: tech
tags: ["LLM", "Inference", "KV Cache", "GPU 优化"]
description: 深入解析大语言模型推理中的 KV Cache 技术，包括其原理、显存开销计算和代码实现
---

# 大模型推理优化详解 - KV Cache 技术原理

在大规模语言模型的推理过程中，**KV Cache** 是最核心的优化技术之一。它通过缓存已经计算过的 Key 和 Value 状态，显著减少了重复计算，将推理的計算复杂度从 O(n²) 降低到 O(n)。

## 一、为什么需要 KV Cache？

### 1.1 自回归生成的特性

大模型的推理采用**自回归（Autoregressive）**方式，即根据已生成的 token 序列预测下一个 token。考虑一个简单的生成过程：

```
输入："今天天气" → 输出："很好"
输入："今天天气很好" → 输出："，"
输入："今天天气很好，" → 输出："适合"
```

在没有 KV Cache 的情况下，每次生成新 token 时，模型都需要**重新计算整个序列**的注意力。这意味着：
- 第 1 步：计算长度为 3 的序列注意力，计算量 = 3² × head_dim
- 第 2 步：计算长度为 4 的序列注意力，计算量 = 4² × head_dim
- 第 3 步：计算长度为 5 的序列注意力，计算量 = 5² × head_dim

**计算量随序列长度呈平方级增长！**

### 1.2 KV Cache 的核心思想

KV Cache 的关键洞察是：**Attention 计算中，历史 token 的 K 和 V 是可以复用的**。

对于第 t 步的生成：
- Query 必须是**当前时刻**的（无法复用）
- Key 和 Value 的历史部分**可以缓存**

这样，每步只需要计算**当前 token 的 K 和 V**，然后与缓存的历史 KV 拼接即可。

## 二、KV Cache 原理详解

### 2.1 Attention 计算回顾

标准的 Scaled Dot-Product Attention 公式：

$$Attention(Q, K, V) = softmax(\frac{QK^T}{\sqrt{d_k}})V$$

在自回归推理中，对于第 t 个位置：
- $Q_t$ 只依赖于当前位置
- $K_t, V_t$ 可以复用历史计算结果

### 2.2 KV Cache 工作流程

```
Step 1: Prefill 阶段（处理 prompt）
输入：[token1, token2, token3]
→ 计算完整的 K, V 并缓存
→ Cache: K=[k1,k2,k3], V=[v1,v2,v3]

Step 2: Decoding 阶段（生成新 token）
输入：[token4]
→ 只计算 k4, v4
→ 拼接：K=[k1,k2,k3,k4], V=[v1,v2,v3,v4]
→ 计算 Attention
→ 更新 Cache
```

### 2.3 代码实现对比

#### 无 KV Cache 的实现

```python
def demo_no_kv_cache():
    # 初始输入：[10, 20, 30]
    input_tokens = torch.tensor([[10, 20, 30]], device=device)
    generated = []
    current_input = input_tokens

    for step in range(3):
        seq_len = current_input.size(1)
        embedded = embedding(current_input)  # [1, seq_len, 32]

        # 每次都需要创建完整的 Causal Mask
        causal_mask = create_causal_mask(seq_len, seq_len, device)

        # 前向传播：use_cache=False
        output = layer(embedded, causal_mask=causal_mask, use_cache=False)

        # 预测下一个 token
        logits = lm_head(output)  # [1, seq_len, 100]
        next_token_logits = logits[:, -1, :]
        next_token = next_token_logits.argmax(dim=-1, keepdim=True)

        generated.append(next_token.item())
        current_input = torch.cat([current_input, next_token], dim=1)

        print(f"Step {step+1}: Input Len={seq_len} -> Generated token={next_token.item()}")
```

#### 有 KV Cache 的实现

```python
def demo_kv_cache():
    input_tokens = torch.tensor([[10, 20, 30]], device=device)
    past_kv = None
    current_input = input_tokens

    # Prefill 阶段：处理完整的 prompt
    embedded_prompt = embedding(current_input)
    _, past_kv = layer(embedded_prompt, use_cache=True)
    print(f"Cache length: {past_kv[0].shape[2]}")  # 3

    # Decoding 阶段：逐个生成 token
    for step in range(3):
        last_token_id = current_input[:, -1:]
        last_embed = embedding(last_token_id)  # [1, 1, 32]

        # 创建 mask：只需要考虑当前 1 个 token
        total_len = past_kv[0].shape[2] + 1
        causal_mask = create_causal_mask(1, total_len, device)

        # 前向传播：传入 past_key_value
        output_step, past_kv = layer(
            last_embed,
            causal_mask=causal_mask,
            past_key_value=past_kv,
            use_cache=True
        )

        next_token = lm_head(output_step).argmax(dim=-1)
        current_input = torch.cat([current_input, next_token], dim=1)

        print(f"Step {step+1}: generated token={next_token.item()}, cache length={past_kv[0].shape[2]}")
```

## 三、KV Cache 显存开销分析

### 3.1 显存计算公式

KV Cache 的显存开销为：

$$Memory_{KV} = 2 \times sizeof(type) \times n_{layer} \times d_{model} \times seq_{len} \times batch_{size}$$

以 LLaMA-7B 为例：
- 参数量：7B
- 层数 $n_{layer}$：32
- 隐藏层维度 $d_{model}$：4096
- 数据类型：FP16 (2 bytes)
- 序列长度：4096
- Batch size：1

$$Memory_{KV} = 2 \times 2 \times 32 \times 4096 \times 4096 \times 1 \approx 2GB$$

### 3.2 不同模型/序列长度的 KV Cache 大小

| 模型 | 序列长度 | Batch Size | KV Cache 大小 |
|------|---------|-----------|--------------|
| LLaMA-7B | 4096 | 1 | ~2 GB |
| LLaMA-7B | 4096 | 32 | ~64 GB |
| LLaMA-70B | 4096 | 1 | ~20 GB |
| LLaMA-70B | 32768 | 8 | ~640 GB |

可以看出，**长序列 + 大批量**场景下，KV Cache 可能成为显存瓶颈。

### 3.3 优化策略

1. **量化 KV Cache**: 使用 INT8/FP8 存储，减少 50-75% 显存
2. **PageAttention**: 类似操作系统虚拟内存，按需分配
3. **KV Cache Eviction**: 驱逐不重要的 KV 对
4. **Multi-Query Attention (MQA)**: 共享 K/V 头
5. **Grouped-Query Attention (GQA)**: 折中方案

## 四、为什么不需要 Q Cache？

一个常见的问题是：**为什么只缓存 K 和 V，不缓存 Q？**

答案在于自回归生成的本质：
- **Q（Query）**代表"当前要预测什么"
- 每一步的 Q 都是**全新的**，对应新生成的 token
- 历史的 Q 在推理中**永远不会被再次使用**

而 K 和 V 代表"历史信息"，每一步都需要与新的 Q 做 Attention，所以必须缓存。

## 五、总结

KV Cache 是大模型推理优化的**基石技术**，理解它对于深入掌握推理系统至关重要。

**核心要点：**
1. KV Cache 通过复用历史 K、V 状态，避免重复计算
2. 计算复杂度从 O(n²) 降至 O(n)
3. 显存开销与序列长度、batch size 成正比
4. 长序列场景需要考虑 KV Cache 优化策略

在后续文章中，我们会继续探讨 **PagedAttention**、**Continuous Batching** 等更先进的推理优化技术。

---

**参考资料：**
- [FlashAttention Paper](https://arxiv.org/abs/2205.14135)
- [vLLM: Easy, Fast, and Cheap LLM Serving](https://arxiv.org/abs/2309.06180)
