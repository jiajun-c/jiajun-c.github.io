---
title: 大模型量化技术详解 - 从基础量化到 AWQ
date: 2026-03-14
category: tech
tags: ["Quantization", "LLM", "Model Compression", "INT8"]
description: 深入解析大模型量化技术，包括对称/非对称量化、PTQ/QAT、AWQ、SmoothQuant 等主流方法
---

# 大模型量化技术详解 - 从基础量化到 AWQ

随着大模型规模的不断增长，量化技术成为降低部署成本的关键手段。本文将深入讲解大模型量化的核心原理和主流方法。

## 一、量化基础

### 1.1 为什么要量化？

| 好处 | 说明 |
|------|------|
| 显存减少 | FP16→INT8 减少 50% 显存 |
| 带宽降低 | 更少的数据传输量 |
| 速度提升 | INT8 TensorCore 吞吐量更高 |
| 能耗降低 | 低精度计算更高效 |

### 1.2 线性量化公式

**对称量化 (Symmetric Quantization):**

```
scale = |x_max| / (2^(bits-1) - 1)
x_int = round(x_fp32 / scale)
x_fp32 = x_int * scale
```

**非对称量化 (Asymmetric Quantization):**

```
scale = (x_max - x_min) / (q_max - q_min)
zero_point = q_min - round(x_min / scale)
x_int = round(x_fp32 / scale + zero_point)
x_fp32 = (x_int - zero_point) * scale
```

## 二、对称量化实现

### 2.1 Python 实现

```python
import torch

def quantize_symmetric(x_fp32, bits=8):
    """
    对称量化 FP32 -> INT8
    """
    qmin = -(2 ** (bits - 1))      # -128
    qmax = 2 ** (bits - 1) - 1     # 127

    # 计算缩放系数 (使用绝对值最大值)
    scale = torch.max(torch.abs(x_fp32)) / qmax
    scale += 1e-7  # 数值稳定性

    # 量化
    x_int = x_fp32 / scale
    # 四舍五入
    x_int += 0.5 * torch.where(x_int >= 0, 1, -1)
    x_int = x_int.to(torch.int8).clamp(qmin, qmax)

    return x_int, scale

def dequantize_symmetric(x_int, scale):
    """
    反量化 INT8 -> FP32
    """
    return x_int.to(torch.float32) * scale

# 测试
input_data = torch.tensor([[1.2, 2.3, 3.4],
                           [4.5, 5.6, 6.7]])

x_int8, scale = quantize_symmetric(input_data)
x_fp32 = dequantize_symmetric(x_int8, scale)

print(f"原始数据：{input_data}")
print(f"量化后：{x_int8}")
print(f"反量化后：{x_fp32}")
print(f"量化误差：{torch.abs(input_data - x_fp32).max()}")
```

**输出:**
```
原始数据：tensor([[1.2000, 2.3000, 3.4000],
        [4.5000, 5.6000, 6.7000]])
量化后：tensor([[ 23,  44,  64],
        [ 85, 106, 127]], dtype=torch.int8)
反量化后：tensor([[1.2134, 2.3213, 3.3764],
        [4.4843, 5.5921, 6.7000]])
量化误差：0.0236
```

## 三、非对称量化实现

### 3.1 Python 实现

```python
def quantize_asymmetric(x_fp32, bits=8):
    """
    非对称量化 FP32 -> INT8
    """
    qmin = -(2 ** (bits - 1))      # -128
    qmax = 2 ** (bits - 1) - 1     # 127

    # 计算最小值和最大值
    min_val = torch.min(x_fp32).item()
    max_val = torch.max(x_fp32).item()

    # 计算缩放因子和零点
    scale = (max_val - min_val) / (qmax - qmin)
    zero_point = qmin - round(min_val / scale)

    # 量化
    x_int = torch.round(x_fp32 / scale + zero_point)
    x_int = x_int.clamp(qmin, qmax).to(torch.int8)

    return x_int, scale, zero_point

def dequantize_asymmetric(x_int, scale, zero_point):
    """
    反量化 INT8 -> FP32
    """
    return (x_int.to(torch.float32) - zero_point) * scale
```

### 3.2 对称 vs 非对称对比

| 特性 | 对称量化 | 非对称量化 |
|------|---------|-----------|
| 零点 | 0 | 需要计算 |
| 适用场景 | 权重 (分布对称) | 激活值 (ReLU 后非对称) |
| 计算开销 | 低 | 稍高 |
| 精度损失 | 对称分布时低 | 非对称分布时低 |

## 四、量化方法分类

### 4.1 训练后量化 (PTQ)

无需重新训练，直接使用校准数据集确定量化参数：

```python
def ptq_quantize_model(model, calib_loader, bits=8):
    """
    PTQ: 使用校准数据集确定 scale 和 zero_point
    """
    # 1. 收集激活值的统计信息
    activations = []
    model.eval()

    with torch.no_grad():
        for batch in calib_loader:
            output = model(batch)
            # 收集每个 Linear 层的激活值
            for name, module in model.named_modules():
                if isinstance(module, nn.Linear):
                    activations.append(module.output.abs().max())

    # 2. 计算每层的 quantization 参数
    scales = []
    for act in activations:
        scale = act.max() / (2**bits - 1)
        scales.append(scale)

    # 3. 应用量化参数
    apply_quantization_params(model, scales)

    return model
```

### 4.2 量化感知训练 (QAT)

在训练中模拟量化效应：

```python
class FakeQuantize(torch.autograd.Function):
    @staticmethod
    def forward(ctx, x, scale, zero_point, qmin, qmax):
        # 前向传播：模拟量化
        x_int = torch.round(x / scale + zero_point)
        x_int = x_int.clamp(qmin, qmax)
        return x_int * scale - zero_point * scale

    @staticmethod
    def backward(ctx, grad_output):
        # 反向传播：直通估计器 (STE)
        return grad_output, None, None, None, None

class QATLinear(nn.Module):
    def __init__(self, in_features, out_features, bits=8):
        super().__init__()
        self.linear = nn.Linear(in_features, out_features)
        self.bits = bits
        self.qmin = -(2 ** (bits - 1))
        self.qmax = 2 ** (bits - 1) - 1
        self.scale = nn.Parameter(torch.ones(1))
        self.zero_point = nn.Parameter(torch.zeros(1))

    def forward(self, x):
        weight_q = FakeQuantize.apply(
            self.linear.weight,
            self.scale,
            self.zero_point,
            self.qmin,
            self.qmax
        )
        return nn.functional.linear(x, weight_q, self.linear.bias)
```

## 五、AWQ 量化

### 5.1 AWQ 的核心洞察

AWQ (Activation-aware Weight Quantization) 发现：
- **并非所有权重都同等重要**
- 激活值幅度大的权重对输出影响更大
- 保护 1% 的重要权重可以显著降低量化损失

### 5.2 AWQ 算法流程

```python
def awq_quantize(W, X, bits=4):
    """
    AWQ 量化
    W: 权重矩阵 [out_features, in_features]
    X: 激活值 [batch, in_features]
    """
    # 1. 计算每个输出通道的重要性
    importance = (W.abs() * X.abs().mean(dim=0)).sum(dim=1)

    # 2. 选择最重要的 1% 通道
    k = int(0.01 * W.shape[0])
    top_indices = importance.topk(k).indices

    # 3. 对重要通道使用更高的精度
    scales = compute_scales(W, bits)
    zero_points = compute_zero_points(W, scales, bits)

    # 4. 量化权重
    W_q = quantize_weights(W, scales, zero_points, bits)

    return W_q, scales, zero_points, top_indices
```

### 5.3 AWQ 的优势

| 模型 | 精度 | W4A16 | W4A4 |
|------|------|-------|------|
| LLaMA-7B | FP16 | 基准 | 基准 |
| LLaMA-7B | AWQ | -0.5% | -2.1% |
| LLaMA-7B | 标准 PTQ | -3.2% | -15.4% |

## 六、SmoothQuant

### 6.1 SmoothQuant 的动机

问题：激活值中存在**异常值 (outliers)**，导致量化困难

解决：将量化难度从激活值迁移到权重

### 6.2 SmoothQuant 变换

```python
def smoothquant_transform(W, X, alpha=0.5):
    """
    SmoothQuant 变换
    alpha: 迁移因子 (0-1)

    核心思想:
    X' = X / s
    W' = W * diag(s)

    其中 s 是每个通道的迁移因子
    """
    # 计算每个通道的激活最大值
    x_max = X.abs().amax(dim=0)

    # 计算每个通道的权重最大值
    w_max = W.abs().amax(dim=1)

    # 计算迁移因子
    s = (x_max ** alpha) / (w_max ** (1 - alpha))

    # 变换激活值和权重
    X_smooth = X / s
    W_smooth = W * s.unsqueeze(0)

    return X_smooth, W_smooth, s
```

### 6.3 SmoothQuant 的优势

- **激活值更平滑**: 异常值被抑制
- **权重吸收难度**: 权重可以逐通道量化
- **INT8 推理**: 激活值和权重都可以用 INT8

## 七、量化策略最佳实践

### 7.1 精度选择建议

| 场景 | 推荐精度 | 说明 |
|------|---------|------|
| 云端推理 | W8A8 | 精度高，速度提升明显 |
| 边缘设备 | W4A8 | 显存受限 |
| 极致压缩 | W4A4 + AWQ | 需要校准 |

### 7.2 逐层 vs 逐组量化

```python
# 逐层量化 (per-layer)
scale = W.abs().max() / qmax  # 整个层一个 scale

# 逐通道量化 (per-channel)
scale = W.abs().max(dim=1).values / qmax  # 每个输出通道一个 scale

# 逐组量化 (per-group, AWQ 风格)
group_size = 128
W_groups = W.view(-1, group_size)
scale = W_groups.abs().max(dim=1).values / qmax
```

### 7.3 量化配置示例

```python
quant_config = {
    "bits": 4,
    "group_size": 128,
    "zero_point": True,
    "q Scheme": "symmetric",
    "activation_bits": 8,
    "llm_int8_skip_modules": ["lm_head"],  # 跳过输出层
}
```

## 八、总结

**量化技术要点：**
1. 对称量化适合权重，非对称量化适合激活值
2. PTQ 无需训练，QAT 精度更高
3. AWQ 通过保护重要权重提升精度
4. SmoothQuant 迁移量化难度，实现 INT8 推理

**未来趋势：**
- FP8 量化 (NVIDIA H100 支持)
- 混合精度量化
- 动态量化

---

**参考资料:**
- [AWQ Paper](https://arxiv.org/abs/2306.00978)
- [SmoothQuant Paper](https://arxiv.org/abs/2211.10438)
