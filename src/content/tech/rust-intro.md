---
title: "Rust 入门指南"
date: 2026-03-01
category: tech
tags: ["rust", "programming", "tutorial"]
description: "一篇介绍 Rust 编程语言基础的入门文章"
draft: false
---

# Rust 入门指南

## 什么是 Rust？

Rust 是一门系统级编程语言，专注于安全、并发和性能。它由 Mozilla 开发，自 2010 年首次发布以来，已成为最受开发者喜爱的语言之一。

## 为什么选择 Rust？

### 内存安全
Rust 的所有权系统（Ownership System）在编译时保证内存安全，无需垃圾回收机制。

```rust
fn main() {
    let s1 = String::from("hello");
    let s2 = s1; // 所有权转移
    // println!("{}", s1); // 编译错误：s1 已无效
    println!("{}", s2); // 正常输出
}
```

### 零成本抽象
Rust 的高级特性不会带来运行时开销，性能与 C/C++ 相当。

### 并发安全
Rust 的类型系统确保数据竞争在编译时就被捕获。

## 安装 Rust

使用 rustup 安装：

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

## Hello World

```rust
fn main() {
    println!("Hello, World!");
}
```

保存为 `main.rs`，然后运行：

```bash
rustc main.rs
./main
```

## 核心概念

### 变量与可变性
```rust
let x = 5;      // 不可变
let mut y = 10; // 可变
y = 15;         // OK
```

### 函数
```rust
fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

### 结构体
```rust
struct User {
    username: String,
    email: String,
    active: bool,
}
```

## 学习资源

- [Rust Book](https://doc.rust-lang.org/book/)
- [Rust by Example](https://doc.rust-lang.org/rust-by-example/)
- [Rustlings](https://github.com/rust-lang/rustlings)

---
*发布于 2026-03-01 | 分类：tech | 标签：rust, programming, tutorial*
