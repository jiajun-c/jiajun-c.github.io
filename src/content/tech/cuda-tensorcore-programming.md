---
title: CUDA TensorCore 编程详解 - 从指令到优化
date: 2026-03-14
category: tech
tags: ["CUDA", "TensorCore", "GPU Programming", "Performance Optimization"]
description: 深入解析 NVIDIA TensorCore 编程模型，包括 mma 指令、数据布局、访存优化和实际算子实现
---

# CUDA TensorCore 编程详解 - 从指令到优化

TensorCore 是 NVIDIA GPU 中的专用矩阵运算单元，能够提供比传统 CUDA Core 高出一个数量级的矩阵乘法性能。本文将深入讲解 TensorCore 编程的核心技术。

## 一、TensorCore 架构演进

### 1.1 各代 TensorCore 特性对比

| 架构 | TensorCore 类型 | 支持的精度 | 每 SM TensorCore 数 |
|------|---------------|----------|-------------------|
| Volta (V100) | 第一代 | FP16 | 8 |
| Ampere (A100) | 第二代 | FP16/BF16/TF32/FP64 | 4 |
| Hopper (H100) | 第三代 | FP8/FP16/BF16/TF32 | 4 |
| Blackwell (B200) | 第四代 | FP4/FP8/FP16/BF16 | 8 |

### 1.2 TensorCore 性能优势

以 A100 为例：
- CUDA Core FP16 算力：~19.5 TFLOPS
- TensorCore FP16 算力：~312 TFLOPS
- **性能提升：约 16 倍**

## 二、MMA 指令基础

### 2.1 mma 指令语法

MMA (Matrix Multiply-Accumulate) 指令是 TensorCore 的底层编程接口：

```
mma.sync.aligned.<m>n<k>.<layout>.<outType>.<inType1>.<inType2>.<accType>
    {d}, {a}, {b}, {c};
```

参数说明：
- `<m>n<k>`: 矩阵尺寸 (M × N × K)
- `<layout>`: 数据布局 (row/col)
- `<outType>`: 输出数据类型
- `<inType1/2>`: 输入数据类型
- `<accType>`: 累加器数据类型

### 2.2 支持的矩阵形状

常用的 TensorCore 矩阵形状：

| 形状 | 说明 |
|------|------|
| m16n8k16 | Volta/Ampere 基本形状 |
| m16n8k32 | Ampere 扩展形状 |
| m32n8k16 | Ampere 扩展形状 |
| m64n128k16 | Hopper 大矩阵 |

### 2.3 最小可运行示例

以 m16n8k16 的 FP16 矩阵乘法为例：

```cpp
__global__ void mma_fp16_acc_fp32(float *out) {
    float c[4] = {0., 0., 0., 0.};  // 累加器
    float d[4] = {0., 0., 0., 0.};  // 输出
    half a[8] = {1., 2., 1., 2., 1., 2., 1., 2.};  // 矩阵 A
    half b[4] = {1., 2., 3., 4.};   // 矩阵 B

    unsigned const *rA = reinterpret_cast<unsigned const *>(&a);
    unsigned const *rB = reinterpret_cast<unsigned const *>(&b);
    float const *rC = reinterpret_cast<float const *>(&c);
    float *rD = reinterpret_cast<float *>(&d);

    asm("mma.sync.aligned.m16n8k16.row.col.f32.f16.f16.f32 "
        "{%0,%1,%2,%3}, {%4,%5,%6,%7}, {%8,%9}, {%10,%11,%12,%13};\n"
        : "=f"(rD[0]), "=f"(rD[1]), "=f"(rD[2]), "=f"(rD[3])
        : "r"(rA[0]), "r"(rA[1]), "r"(rA[2]), "r"(rA[3]),
          "r"(rB[0]), "r"(rB[1]),
          "f"(rC[0]), "f"(rC[1]), "f"(rC[2]), "f"(rC[3]));

    // 输出结果
    printf("%f\n", rD[0]);
    memcpy(out + threadIdx.x * 2, rD, 8);
    memcpy(out + 8 * 8 + threadIdx.x * 2, rD + 2, 8);
}
```

## 三、数据布局详解

### 3.1 Warp 级别的数据分布

mma 指令以**warp**(32 线程) 为执行单位。对于 m16n8k16 的矩阵乘法：

```
矩阵 A (16×16):
- 每个线程负责 4 个元素
- 32 线程 × 4 元素 = 128 元素 = 16×16/2 (FP16)

矩阵 B (16×8):
- 每个线程负责 2 个元素
- 32 线程 × 2 元素 = 64 元素 = 16×8/2 (FP16)

矩阵 C/D (16×8):
- 每个线程负责 4 个元素
```

### 3.2 数据加载模式

#### 矩阵 A 的加载

```cpp
// 对于 m16n8k16，warp 中的线程 (row, col) 加载：
int row = threadIdx.x / 4;
int col = threadIdx.x % 4;
int warpID = row * 8 + col;

// A 矩阵：每个线程加载 4 个 register
unsigned rA[4];
rA[0] = load_A(warpID);
rA[1] = load_A(warpID + 64);
rA[2] = load_A(warpID + 4);
rA[3] = load_A(warpID + 68);
```

#### 矩阵 B 的加载

```cpp
// B 矩阵：每个线程加载 2 个 register (非连续元素)
half b[4];
b[0] = d_B[col*8*2+row];
b[1] = d_B[col*8*2+row + 8];
b[2] = d_B[64 + col*8*2+row];
b[3] = d_B[64 + col*8*2+row + 8];
```

### 3.3 完整的 TensorCore GEMM 内核

```cpp
__global__ void tensorCore_gemm(
    half* d_A,      // [M, K]
    half* d_B,      // [K, N]
    float* d_C,     // [M, N]
    int M, int N, int K
) {
    // 每个 block 计算一个 64x64 的 tile
    const int BM = 64, BN = 64, BK = 16;

    // 共享内存
    __shared__ half As[BM * BK];
    __shared__ half Bs[BK * BN];

    // 计算全局坐标
    int bx = blockIdx.x, by = blockIdx.y;
    int tx = threadIdx.x, ty = threadIdx.y;

    // 加载矩阵 A 到共享内存
    int aRow = by * BM + ty;
    int aCol = tx;
    if (aRow < M && aCol < K) {
        As[ty * BK + tx] = d_A[aRow * K + aCol];
    }

    // 加载矩阵 B 到共享内存
    int bRow = tx;
    int bCol = bx * BN + ty;
    if (bRow < K && bCol < N) {
        Bs[tx * BN + ty] = d_B[bRow * N + bCol];
    }

    __syncthreads();

    // TensorCore 计算
    float accum[4] = {0.f};

    for (int k = 0; k < K; k += BK) {
        // 从共享内存加载到 register
        half a_frag[8], b_frag[4];
        load_from_shared(As, Bs, tx, ty, a_frag, b_frag);

        // mma 指令
        asm volatile(
            "mma.sync.aligned.m16n8k16.row.col.f32.f16.f16.f32 "
            "{%0,%1,%2,%3}, {%4,%5,%6,%7}, {%8,%9}, {%10,%11,%12,%13};\n"
            : "=f"(accum[0]), "=f"(accum[1]), "=f"(accum[2]), "=f"(accum[3])
            : "r"(*(unsigned*)&a_frag[0]), "r"(*(unsigned*)&a_frag[2]),
              "r"(*(unsigned*)&a_frag[4]), "r"(*(unsigned*)&a_frag[6]),
              "r"(*(unsigned*)&b_frag[0]), "r"(*(unsigned*)&b_frag[2]),
              "f"(accum[0]), "f"(accum[1]), "f"(accum[2]), "f"(accum[3]));

        __syncthreads();
    }

    // 存储结果
    store_result(d_C, accum, bx, by, tx, ty, M, N);
}
```

## 四、访存优化

### 4.1 共享内存地址转换

`__cvta_generic_to_shared` 将普通地址转换为共享内存地址：

```cpp
unsigned shared_addr = __cvta_generic_to_shared(&As[threadIdx.x]);
```

### 4.2 LDMATRIX 指令

LDMATRIX 用于从共享内存高效加载数据到 register：

```cpp
// 加载 1 个 8×8 矩阵
#define LDMATRIX_X1(R, addr) \
    asm volatile("ldmatrix.sync.aligned.x1.m8n8.shared.b16 {%0}, [%1];\n" \
                 : "=r"(R) : "r"(addr))

// 加载 2 个 8×8 矩阵
#define LDMATRIX_X2(R0, R1, addr) \
    asm volatile("ldmatrix.sync.aligned.x2.m8n8.shared.b16 {%0, %1}, [%2];\n" \
                 : "=r"(R0), "=r"(R1) : "r"(addr))

// 加载 4 个 8×8 矩阵
#define LDMATRIX_X4(R0, R1, R2, R3, addr) \
    asm volatile("ldmatrix.sync.aligned.x4.m8n8.shared.b16 {%0, %1, %2, %3}, [%4];\n" \
                 : "=r"(R0), "=r"(R1), "=r"(R2), "=r"(R3) : "r"(addr))
```

### 4.3 异步内存拷贝 (Hopper)

Hopper 架构引入了 TMA (Tensor Memory Accelerator) 和异步拷贝：

```cpp
// 从全局内存异步拷贝到共享内存
#define CP_ASYNC_CA(dst, src, Bytes) \
    asm volatile("cp.async.ca.shared.global.L2::128B [%0], [%1], %2;\n" \
                 ::"r"(dst), "l"(src), "n"(Bytes))

// 提交拷贝组
#define CP_ASYNC_COMMIT_GROUP() \
    asm volatile("cp.async.commit_group;\n" ::)

// 等待指定的组完成
#define CP_ASYNC_WAIT_GROUP(N) \
    asm volatile("cp.async.wait_group %0;\n" ::"n"(N))

// 等待所有拷贝完成
#define CP_ASYNC_WAIT_ALL() \
    asm volatile("cp.async.wait_all;\n" ::)
```

### 4.4 完整的异步拷贝流程

```cpp
__global__ void async_gemm(half* A, half* B, float* C, int M, int N, int K) {
    // 共享内存双缓冲
    __shared__ half As[2][BM * BK];
    __shared__ half Bs[2][BK * BN];

    int load_phase = 0;

    // 预取第一阶段数据
    cp_async(As[load_phase], A, BM * BK * sizeof(half));
    cp_async(Bs[load_phase], B, BK * BN * sizeof(half));
    CP_ASYNC_COMMIT_GROUP();

    for (int k = 0; k < K; k += BK) {
        // 等待当前阶段加载完成
        CP_ASYNC_WAIT_GROUP(0);
        __syncthreads();

        // TensorCore 计算
        tensorCore_mma(As[load_phase], Bs[load_phase], accum);

        // 切换到下一缓冲
        load_phase = 1 - load_phase;

        // 预取下一阶段数据 (与计算重叠)
        if (k + BK < K) {
            cp_async(As[load_phase], A + (k + BK), BM * BK * sizeof(half));
            cp_async(Bs[load_phase], B + (k + BK), BK * BN * sizeof(half));
            CP_ASYNC_COMMIT_GROUP();
        }
    }

    CP_ASYNC_WAIT_ALL();

    // 存储结果
    store(C, accum);
}
```

## 五、性能优化最佳实践

### 5.1 优化策略总结

| 优化技术 | 效果 | 复杂度 |
|---------|------|--------|
| 共享内存缓存 | 2-5x | 低 |
| 双缓冲 | 1.5-2x | 中 |
| 指令级流水线 | 1.2-1.5x | 高 |
| TMA 异步拷贝 | 1.5-2x | 中 |

### 5.2 Bank 冲突避免

共享内存访问需要避免 bank 冲突：

```cpp
// 坏的布局：会有 bank 冲突
__shared__ float shared[32][32];

// 好的布局：添加 padding
__shared__ float shared[32][33];  // padding 避免冲突
```

### 5.3 Register 使用优化

```cpp
// 合理使用 register，避免 spill
// 每个 SM 的 register 数量有限 (A100: 65536 个)

// 优化前：使用过多 register
float accum[16];  // 可能 spill 到本地内存

// 优化后：减少 register 使用
float accum[4];   // 适合 m16n8k16
```

## 六、Hopper 架构新特性

### 6.1 WGMMA 指令

Hopper 引入了 Warp-Group MMA 指令，支持更大的矩阵：

```
wgmma.mma_async.sync.aligned.m64n128k128.f32.f16.f16
```

### 6.2 分布式共享内存 (DSMEM)

Hopper 的 DSMEM 允许跨 SM 访问共享内存：

```cpp
// 从远程 SM 加载数据
uint64_t remote_addr = cluster::get_remote_shared_mem_addr(sm_id, offset);
float data = ldmatrix(remote_addr);
```

## 七、总结

TensorCore 编程是 GPU 高性能计算的核心技能。

**核心要点：**
1. mma 指令以 warp 为执行单位，需要特定的数据布局
2. 使用 LDMATRIX 和异步拷贝优化访存
3. 双缓冲和流水线隐藏内存延迟
4. Hopper 架构引入 TMA 和 DSMEM 新特性

---

**参考资料:**
- [NVIDIA PTX 文档](https://docs.nvidia.com/cuda/parallel-thread-execution/)
- [CUDA Programming Guide](https://docs.nvidia.com/cuda/cuda-c-programming-guide/)
