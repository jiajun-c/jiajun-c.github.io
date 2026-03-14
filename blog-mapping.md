# 博客文章映射关系

本文档记录 AI-infra-LearningNote 笔记与 terminal-blog 博客文章的映射关系，便于同步更新。

## 映射说明

- **Source**: AI-infra-LearningNote 中的源文件
- **Target**: terminal-blog/src/content/tech 中的博客文章
- **Status**: 同步状态

---

## 已同步的文章

| Target | Source | Status |
|--------|--------|--------|
| `cuda-tensorcore-programming.md` | `01-cuda/tensorCore/README.md` + 多文件整合 | ✅ 已同步 (扩展版) |
| `llm-inference-kv-cache.md` | `03-llm/inference/kvcache/README.md` | ✅ 已同步 (扩展版) |
| `tensor-parallelism-deep-dive.md` | `03-llm/train/TP/README.md` | ✅ 已同步 |
| `attention-mechanism-evolution.md` | `03-llm/arch/Attention/README.md` + 子目录 | ✅ 已同步 (整合版) |
| `llm-quantization-techniques.md` | `03-llm/inference/quant/*` 多文件整合 | ✅ 已同步 (整合版) |
| `cuda-warp-primitives.md` | `01-cuda/primitives/warp/README.md` | ✅ 已同步 (扩展版) |
| `cuda-reduce-optimization.md` | `01-cuda/reduce/README.md` | ✅ 已同步 (扩展版) |
| `cuda-architecture-evolution.md` | `01-cuda/arch/README.md` | ✅ 已同步 (扩展版) |

---

## 待同步的文章

### CUDA 编程系列

| Source | Suggested Target | Priority |
|--------|-----------------|----------|
| `01-cuda/memory/bank/README.md` | `cuda-bank-conflict-optimization.md` | 中 |
| `01-cuda/memory/cache/README.md` | `cuda-cache-optimization.md` | 中 |
| `01-cuda/launch/README.md` | `cuda-kernel-launch-config.md` | 中 |
| `01-cuda/vectorize/README.md` | `cuda-vectorize-memory.md` | 中 |
| `01-cuda/PTX/README.md` | `ptx-assembly-basics.md` | 中 |
| `01-cuda/sync/pipe/README.md` | `cuda-pipeline-mechanism.md` | 中 |
| `01-cuda/cg/README.md` | `cuda-cooperative-groups.md` | 低 |
| `01-cuda/dsmem/README.md` | `cuda-distributed-shared-memory.md` | 低 |
| `01-cuda/hopper/TMA/README.md` | `hopper-tma-async-copy.md` | 中 |
| `01-cuda/hopper/DistributedSM/README.md` | `hopper-distributed-sm.md` | 低 |
| `01-cuda/cutlass/cute/layout/layout.md` | `cute-layout-transformation.md` | 中 |
| `01-cuda/cutlass/cute/tensor/tensor.md` | `cute-tensor-operations.md` | 中 |
| `01-cuda/cutlass/gemm/cuteHigh/README.md` | `cute-gemm-implementation.md` | 高 |
| `01-cuda/blas/hgemv/README.md` | `cuda-hgemv-optimization.md` | 中 |
| `01-cuda/op/element_wise/README.md` | `cuda-elementwise-kernels.md` | 低 |
| `01-cuda/bench/README.md` | `cuda-performance-benchmarking.md` | 低 |
| `01-cuda/cccl/thrust/README.md` | `thrust-library-guide.md` | 低 |
| `01-cuda/cccl/cusparse/README.md` | `cusparse-sparse-matrix.md` | 低 |

### 编程语言系列

| Source | Suggested Target | Priority |
|--------|-----------------|----------|
| `02-lang/cpp/memory/README.md` | `cpp-memory-management.md` | 中 |
| `02-lang/cpp/template/README.md` | `cpp-template-basics.md` | 中 |
| `02-lang/cpp/stl/vector/README.md` | `cpp-stl-vector-internals.md` | 低 |
| `02-lang/Triton/basic/README.md` | `triton-programming-guide.md` | 高 |
| `02-lang/Triton/benchmark/README.md` | `triton-performance-benchmark.md` | 中 |
| `02-lang/Triton/autotune/README.md` | `triton-autotuning.md` | 中 |

### 大模型系列

| Source | Suggested Target | Priority |
|--------|-----------------|----------|
| `03-llm/arch/README.md` | `llm-architecture-overview.md` | 高 |
| `03-llm/arch/Attention/README.md` | `attention-mechanism-survey.md` | 高 |
| `03-llm/arch/Attention/FlashAttention/README.md` | `flashattention-v1-deep-dive.md` | 高 |
| `03-llm/arch/Attention/flashAttentionv2/README.md` | `flashattention-v2-improvements.md` | 高 |
| `03-llm/arch/Attention/ring-attention/README.md` | `ring-attention-distributed.md` | 中 |
| `03-llm/arch/MoE/README.md` | `moe-architecture-guide.md` | 中 |
| `03-llm/arch/position_encode/absolute/README.md` | `positional-encoding-absolute.md` | 低 |
| `03-llm/arch/position_encode/relative/README.md` | `positional-encoding-relative.md` | 中 |
| `03-llm/arch/Linear/README.md` | `llm-linear-layers.md` | 低 |
| `03-llm/arch/Norm/README.md` | `llm-normalization-layers.md` | 低 |
| `03-llm/train/DP/README.md` | `data-parallelism-ddp.md` | 中 |
| `03-llm/train/PP/README.md` | `pipeline-parallelism.md` | 中 |
| `03-llm/train/HybirdParallel/README.md` | `hybrid-parallel-strategies.md` | 高 |
| `03-llm/train/EP/README.md` | `expert-parallel-moe.md` | 中 |
| `03-llm/train/finetuning/SFT/README.md` | `sft-finetuning-guide.md` | 高 |
| `03-llm/train/finetuning/RLHF/README.md` | `rlhf-algorithm.md` | 高 |
| `03-llm/train/finetuning/DPO/README.md` | `dpo-direct-preference.md` | 高 |
| `03-llm/inference/contiuousBatching/README.md` | `continuous-batching-vllm.md` | 高 |
| `03-llm/inference/chunkPrefill/README.md` | `chunked-prefill-optimization.md` | 中 |
| `03-llm/inference/flashDecode/README.md` | `flashdecode-kernel.md` | 中 |
| `03-llm/inference/speculative/README.md` | `speculative-decoding.md` | 高 |
| `03-llm/inference/TensorRT/README.md` | `tensorrt-llm-guide.md` | 高 |
| `03-llm/inference/prune/fine-grain/README.md` | `model-pruning-techniques.md` | 中 |
| `03-llm/inference/quant/AWQ/README.md` | `awq-activation-aware.md` | 中 |
| `03-llm/inference/quant/smooth/README.md` | `smoothquant-quantization.md` | 中 |
| `03-llm/bench/InferBench/README.md` | `llm-inference-benchmark.md` | 中 |
| `03-llm/bench/metrics/README.md` | `llm-evaluation-metrics.md` | 中 |
| `03-llm/model/save_load/README.md` | `model-checkpoint-format.md` | 低 |
| `03-llm/multimodal/vit/README.md` | `vision-transformer-vit.md` | 低 |
| `03-llm/multimodal/clip/README.md` | `clip-multimodal.md` | 低 |

### 通信与框架系列

| Source | Suggested Target | Priority |
|--------|-----------------|----------|
| `04-comm/collective/README.md` | `collective-communication-primitives.md` | 高 |
| `04-comm/CCL/NCCL/README.md` | `nccl-architecture.md` | 中 |
| `04-comm/backend/gloo/README.md` | `gloo-communication-backend.md` | 低 |
| `05-framework/pytorch/graph/README.md` | `pytorch-computation-graph.md` | 中 |
| `05-framework/pytorch/dist/README.md` | `pytorch-distributed.md` | 中 |
| `05-framework/vllm/README.md` | `vllm-architecture.md` | 高 |
| `05-framework/vllm/arch.md` | `vllm-internal-design.md` | 中 |

### 系统与工具系列

| Source | Suggested Target | Priority |
|--------|-----------------|----------|
| `07-system/gpu/README.md` | `gpu-architecture-intro.md` | 中 |
| `07-system/npu/README.md` | `npu-architecture-intro.md` | 中 |
| `07-system/memory/README.md` | `memory-system-basics.md` | 中 |
| `07-system/process/README.md` | `process-thread-coroutine.md` | 中 |
| `08-tools/pyproject/README.md` | `python-project-management.md` | 低 |
| `09-profile/cuda/README.md` | `cuda-profiling-guide.md` | 中 |
| `09-profile/improve/README.md` | `performance-optimization-methods.md` | 中 |

---

## 同步操作指南

### 同步单个文件

```bash
# 基本同步命令
cp /home/star/workspace/AI-infra-LearningNote/<source-path> \
   /home/star/workspace/kota-home/terminal-blog/src/content/tech/<target-name>.md
```

### 添加 Frontmatter

目标文件需要添加标准 frontmatter:

```yaml
---
title: "文章标题"
date: 2026-03-14
category: tech
tags: ["tag1", "tag2"]
description: "文章描述"
---
```

### 推送更新

```bash
cd /home/star/workspace/kota-home/terminal-blog
git add .
git commit -m "feat: add new blog post <topic>"
git push
```

---

## 更新日志

| Date | Action | Description |
|------|--------|-------------|
| 2026-03-14 | 更新 | 新增 3 篇 CUDA 系列文章：Warp Primitives、Reduce 优化、架构演进 |
| 2026-03-14 | 初始化 | 创建映射文档，整理现有文章 |
