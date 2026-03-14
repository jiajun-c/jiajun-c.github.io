---
title: "CUDA Warp 原语详解 - 线程束级并行编程"
date: 2026-03-14
category: tech
tags: ["CUDA", "Warp Primitives", "GPU Programming", "Parallel Computing"]
description: "深入解析 CUDA Warp 级原语操作，包括 shuffle、vote、ballot 等指令的原理与应用"
---

# CUDA Warp 原语详解 - 线程束级并行编程

在 CUDA 编程中，**Warp**（线程束）是 GPU 调度和执行的基本单位。理解并掌握 Warp 级原语操作，对于编写高性能的 GPU 程序至关重要。本文将深入讲解各类 Warp 原语的使用方法与应用场景。

## 一、Warp 基础概念

### 1.1 什么是 Warp？

- **Warp** 是 GPU 中最小的执行单位，包含 32 个并行线程
- 同一 Warp 内的线程**同步执行**相同指令（SIMT 模型）
- Warp 内的线程可以通过**共享寄存器和特殊指令**进行高效通信

### 1.2 Warp ID 和 Lane ID

```cpp
int warpID = threadIdx.x / warpSize;      // 所属 Warp 编号
int laneID = threadIdx.x % warpSize;      // Warp 内的线程编号 (0-31)
```

## 二、Vote 投票原语

### 2.1 `__all_sync` - 全票通过

`__all_sync(mask, predicate)` 当 mask 指定的所有线程的 predicate 都为真时，返回非零值。

```cpp
__global__ void vote_all(int *a, int *b, int n) {
    int tid = threadIdx.x;
    if (tid >= n) return;

    int temp = a[tid];
    // 只有当 warp 内所有线程的 temp > 24 时，结果才为 1
    b[tid] = __all_sync(0xffffffff, temp > 24);
}
```

**应用场景**：判断一个 Warp 内的数据是否满足某个统一条件。

### 2.2 `__any_sync` - 有票即过

`__any_sync(mask, predicate)` 只要 mask 指定的任意线程的 predicate 为真，就返回非零值。

```cpp
__global__ void vote_any(int *a, int *b, int n) {
    int tid = threadIdx.x;
    if (tid >= n) return;

    int temp = a[tid];
    // 只要有一个线程的 temp > 24，结果就为 1
    b[tid] = __any_sync(0xffffffff, temp > 24);
}
```

**应用场景**：检测 Warp 内是否存在满足条件的线程。

### 2.3 `__uni_sync` - 一致性检查

`__uni_sync(mask, predicate)` 当所有线程的 predicate 值**完全相同**（全为 0 或全为 1）时返回 1。

```cpp
__global__ void vote_uni(int *a, int *b, int n) {
    int tid = threadIdx.x;
    if (tid >= n) return;

    int temp = a[tid];
    // 只有当所有线程的 predicate 值一致时才返回 1
    b[tid] = __uni_sync(0xffffffff, temp > 24);
}
```

**应用场景**：检查分支发散（branch divergence）。

## 三、Ballot 投票原语

### 3.1 `__ballot_sync` - 位掩码投票

`__ballot_sync(mask, predicate)` 返回一个 32 位整数，其中第 i 位表示第 i 个线程的 predicate 值。

```cpp
__global__ void ballot(int *a, int *b, int n) {
    int tid = threadIdx.x;
    if (tid >= n) return;

    // 返回一个位掩码，表示哪些线程满足条件
    b[tid] = __ballot_sync(0xffffffff, a[tid] > 12);
}
```

**应用场景**：
- 构建活跃线程的位图
- 高效的稀疏数据处理

## 四、Shuffle 数据交换原语

### 4.1 `__shfl_sync` - 指定线程广播

`__shfl_sync(mask, value, srcLane, width)` 从指定的 srcLane 线程广播数据。

```cpp
__global__ void shfl(int *a, int *b, int n) {
    int tid = threadIdx.x;
    int value = tid & 0x1f;  // lane ID

    if (tid >= n) return;

    // 从 lane 2 广播数据
    value = __shfl_sync(0xffffffff, value, 2, 8);
    b[tid] = value;
}
// 输出：2 2 2 2 2 2 2 2 | 10 10 10 10 10 10 10 10 | ...
```

```
┌─────────────────────────────────┐
│ 每个 width=8 的组都从 lane 2 获取值 │
│  [0-7] 组：都得到值 2              │
│  [8-15] 组：都得到值 10            │
│  [16-23] 组：都得到值 18           │
└─────────────────────────────────┘
```

### 4.2 `__shfl_up_sync` - 向上移位

`__shfl_up_sync(mask, value, delta, width)` 将数据向**上**移动 delta 个位置。

```cpp
__global__ void shfl_up(int *a, int *b, int n) {
    int tid = threadIdx.x;
    int value = tid & 0x1f;

    if (tid >= n) return;

    // 向上移动 2 个位置 (lane i 获取 lane i-2 的值)
    value = __shfl_up_sync(0xffffffff, value, 2, 8);
    b[tid] = value;
}
```

```
Lane:   0   1   2   3   4   5   6   7
Before: 0   1   2   3   4   5   6   7
After:  ?   ?   0   1   2   3   4   5  (前 delta 个位置值未定义)
```

### 4.3 `__shfl_down_sync` - 向下移位

`__shfl_down_sync(mask, value, delta, width)` 将数据向**下**移动 delta 个位置。

```cpp
// lane i 获取 lane i+delta 的值
value = __shfl_down_sync(0xffffffff, value, 2, 32);
```

### 4.4 `__shfl_xor_sync` - 异或交换

`__shfl_xor_sync(mask, value, laneMask, width)` 基于 laneID 与 laneMask 的异或结果进行数据交换。

```cpp
__global__ void shfl_xor(int *a, int *b, int n) {
    int tid = threadIdx.x;
    int value = tid & 0x1f;

    if (tid >= n) return;

    // laneID ^ 2 进行交换
    // lane 0 <-> lane 2, lane 1 <-> lane 3, ...
    value = __shfl_xor_sync(0xffffffff, value, 2);
    b[tid] = value;
}
```

```
Lane:   0   1   2   3   4   5   6   7
XOR 2:  2   3   0   1   6   7   4   5
```

## 五、Match 匹配原语

### 5.1 `__match_any_sync` - 任意匹配

`__match_any_sync(mask, value)` 比较 mask 指定的所有线程的 value，返回具有相同值线程的掩码。

```cpp
__global__ void match_any(int *a, unsigned *b, int n) {
    int tid = threadIdx.x;
    if (tid >= n) return;

    int value = a[tid];
    // 返回与 value 相同的所有线程的位掩码
    b[tid] = __match_any_sync(0xffffffff, value);
}
```

### 5.2 `__match_all_sync` - 全部匹配

`__match_all_sync(mask, value, &pred)` 检查所有指定线程的值是否完全相同。

```cpp
__global__ void match_all(int *a, unsigned *b, int *pred, int n) {
    int tid = threadIdx.x;
    if (tid >= n) return;

    int value = a[tid];
    int all_match;
    // 当所有线程的值相同时，返回 mask 且 all_match=1
    b[tid] = __match_all_sync(0xffffffff, value, &all_match);
}
```

## 六、实战应用：Warp Reduce

### 6.1 Warp 级 ReduceSum

使用 `__shfl_down_sync` 实现高效的 Warp 级归约：

```cpp
template <typename T>
__inline__ __device__ T WarpReduceSum(T val) {
    // 通过不断折半，将 warp 内的值累加到前一半线程
    for (int offset = (warpSize >> 1); offset > 0; offset >>= 1) {
        val += __shfl_down_sync(0xffffffff, val, offset, warpSize);
    }
    return val;
}
```

**执行过程**（以 32 线程为例）：
```
Step 1 (offset=16): lane[i] += lane[i+16]  → 前 16 个线程有值
Step 2 (offset=8):  lane[i] += lane[i+8]   → 前 8 个线程有值
Step 3 (offset=4):  lane[i] += lane[i+4]   → 前 4 个线程有值
Step 4 (offset=2):  lane[i] += lane[i+2]   → 前 2 个线程有值
Step 5 (offset=1):  lane[i] += lane[i+1]   → lane[0] 包含总和
```

### 6.2 Block 级 ReduceSum

结合共享内存和 Warp Reduce，实现 Block 级归约：

```cpp
template<typename T>
__inline__ __device__ T BlockReduceSum(T val, T* shared) {
    int laneid = threadIdx.x % warpSize;
    int warpid = threadIdx.x / warpSize;

    // Step 1: 每个 warp 内部归约
    val = WarpReduceSum(val);
    __syncthreads();

    // Step 2: 每个 warp 的结果写入共享内存
    if (laneid == 0) {
        shared[warpid] = val;
    }
    __syncthreads();

    // Step 3: 第一个 warp 读取共享内存并归约
    val = (threadIdx.x < blockDim.x / warpSize) ? shared[laneid] : T(0);
    if (warpid == 0) {
        val = WarpReduceSum(val);
    }

    return val;
}
```

## 七、性能最佳实践

### 7.1 使用 Warp 原语的优势

| 特性 | 传统方式 | Warp 原语 |
|------|---------|----------|
| 数据交换 | 通过共享内存 | 直接寄存器传输 |
| 延迟 | 高（~400 周期） | 极低（~1 周期） |
| 带宽 | 受限 | 接近峰值 |
| 代码复杂度 | 高 | 低 |

### 7.2 注意事项

1. **Mask 参数**: 所有 `_sync` 函数需要指定参与操作的线程掩码
2. **Warp 边界**: 注意 Warp 内线程数量（通常 32）
3. **分支发散**: 避免在 Warp 原语调用中出现分支

```cpp
// ❌ 错误：条件调用导致未定义行为
if (some_condition) {
    value = __shfl_sync(0xffffffff, value, 0);
}

// ✅ 正确：使用 mask 控制
value = __shfl_sync(mask, value, 0);
```

## 八、总结

Warp 原语是 CUDA 高性能编程的核心技能：

1. **Vote 原语** (`__all_sync`, `__any_sync`, `__uni_sync`) - 条件判断
2. **Ballot 原语** (`__ballot_sync`) - 位掩码收集
3. **Shuffle 原语** (`__shfl_*`) - 高效数据交换
4. **Match 原语** (`__match_*`) - 值匹配

掌握这些原语，可以编写出比传统共享内存方案**快数倍**的 GPU 程序。

---

**参考资料:**
- [CUDA PTX 文档 - Warp Level Instructions](https://docs.nvidia.com/cuda/parallel-thread-execution/)
- [CUDA Programming Guide](https://docs.nvidia.com/cuda/cuda-c-programming-guide/)
