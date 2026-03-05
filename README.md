# Terminal Blog

一个基于 React + TypeScript + Vite 的终端风格博客系统。

![Vite](https://img.shields.io/badge/Vite-7.3.1-blue?logo=vite)
![React](https://img.shields.io/badge/React-19.2.0-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2-38bdf8?logo=tailwindcss)

## ✨ 特性

- 🖥️ **终端风格界面** - 复古的命令行交互体验
- 📁 **文件系统导航** - 使用 `ls`, `cd`, `cat` 等命令浏览文章
- 🔍 **全文搜索** - 快速查找感兴趣的内容
- 🎨 **代码高亮** - 支持多种编程语言的语法高亮
- 🖼️ **图片展示** - 在文章中嵌入和查看图片
- ⌨️ **键盘导航** - 使用方向键选择，Enter 打开，Esc 取消
- 📱 **响应式设计** - 支持桌面和移动设备

## 🚀 快速开始

### 方法一：使用运行脚本（推荐）

```bash
# Linux / macOS
chmod +x run.sh
./run.sh

# Windows (Git Bash 或 WSL)
./run.sh
```

### 方法二：手动运行

```bash
# 1. 进入项目目录
cd terminal-blog

# 2. 安装依赖（首次运行）
npm install

# 3. 启动开发服务器
npm run dev

# 4. 在浏览器中打开
# http://localhost:5173
```

## 📋 可用命令

| 命令 | 描述 |
|------|------|
| `npm run dev` | 启动开发服务器（热重载） |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览生产版本 |
| `npm run lint` | ESLint 代码检查 |

## 📖 终端命令

在博客终端中可以使用以下命令：

| 命令 | 描述 |
|------|------|
| `help` | 显示帮助信息 |
| `ls` | 列出分类或文章 |
| `ls -l` | 显示详细信息（文章数量）|
| `cd <分类>` | 进入分类目录 |
| `cd ..` | 返回上级目录 |
| `pwd` | 显示当前路径 |
| `cat <文章>` | 阅读文章 |
| `search <关键词>` | 搜索文章 |
| `clear` | 清屏 |
| `history` | 查看命令历史 |
| `imgview <索引>` | 查看文章中的图片 |

### 交互操作

- `↑` / `↓` - 在列表中选择项目
- `Enter` - 打开选中的项目
- `Esc` - 取消选择
- `Tab` - 自动补全命令

## 📂 项目结构

```
terminal-blog/
├── src/
│   ├── components/
│   │   └── Terminal/
│   │       └── Terminal.tsx    # 主终端组件
│   ├── commands/               # 命令实现
│   │   ├── index.ts            # 命令注册表
│   │   ├── help.ts
│   │   ├── ls.ts
│   │   ├── cd.ts
│   │   ├── cat.ts
│   │   ├── search.ts
│   │   └── ...
│   ├── content/                # 博客文章内容
│   │   ├── tech/               # 技术类文章
│   │   ├── life/               # 生活类文章
│   │   └── projects/           # 项目类文章
│   ├── utils/
│   │   └── commandParser.ts    # 命令解析器
│   ├── types/
│   │   └── index.ts            # TypeScript 类型定义
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.ts
```

## 📝 添加文章

在 `src/content/` 目录下创建 Markdown 文件：

```markdown
---
title: 我的新文章
date: 2026-03-06
category: tech
tags: ["React", "TypeScript"]
description: 这是一篇示例文章
---

## 正文内容

在这里写你的文章内容...

### 支持的特性

- 代码块高亮
- 图片展示
- 列表和引用
- ...
```

## 🛠️ 技术栈

- **React 19** - UI 框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **Tailwind CSS 4** - 样式框架
- **ESLint** - 代码检查

## 🎨 定制

### 修改用户名和主机名

编辑 `src/App.tsx`：

```tsx
function App() {
  return <Terminal username="你的名字" hostname="你的主机名" />
}
```

### 修改主题颜色

编辑 `src/index.css` 中的 Tailwind 配置。

## 📄 License

MIT
