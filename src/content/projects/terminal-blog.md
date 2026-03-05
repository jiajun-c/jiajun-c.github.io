---
title: "个人博客项目"
date: 2026-03-03
category: projects
tags: ["react", "typescript", "blog"]
description: "使用 React + TypeScript 开发的终端风格个人博客"
draft: false
---

# 个人博客项目

## 项目概述

这是一个具有终端/命令行风格的个人博客网站，用户通过输入类 Unix 命令的方式浏览、搜索和阅读博客文章。

## 技术栈

- **前端框架**: React 19 + TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS
- **部署**: Vercel / Netlify

## 功能特性

### 核心命令

| 命令 | 功能 |
|------|------|
| `help` | 显示可用命令列表 |
| `ls` | 列出分类或文章 |
| `cat <article>` | 阅读文章 |
| `search <keyword>` | 搜索文章 |
| `cd <category>` | 进入分类 |
| `pwd` | 显示当前位置 |
| `clear` | 清屏 |

### 增强功能

- 命令历史记录（上下箭头切换）
- 命令自动补全（Tab 键）
- 响应式设计
- 主题定制

## 项目结构

```
src/
├── components/
│   └── Terminal/
├── commands/
├── content/
├── types/
└── utils/
```

## 使用示例

```bash
# 查看帮助
$ help

# 列出分类
$ ls

# 进入技术分类
$ cd tech

# 列出文章
$ ls

# 阅读文章
$ cat rust-intro
```

## 源码地址

[GitHub Repository](https://github.com/your-username/terminal-blog)

---
*发布于 2026-03-03 | 分类：projects | 标签：react, typescript, blog*
