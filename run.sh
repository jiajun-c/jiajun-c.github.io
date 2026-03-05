#!/bin/bash

# Terminal Blog 运行脚本
# 自动安装依赖并启动开发服务器

set -e

echo "🚀 Terminal Blog 启动脚本"
echo "========================"

# 检查 Node.js 是否安装
if ! command -v node &> /dev/null; then
    echo "❌ 错误：未找到 Node.js"
    echo "请先安装 Node.js: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js 版本：$(node -v)"
echo "✅ npm 版本：$(npm -v)"

# 检查 node_modules 是否存在
if [ ! -d "node_modules" ]; then
    echo ""
    echo "📦 首次运行，正在安装依赖..."
    npm install
fi

echo ""
echo "🎯 选择运行模式:"
echo "  1) 开发模式 (dev) - 热重载"
echo "  2) 生产构建 (build) - 编译优化版本"
echo "  3) 预览模式 (preview) - 本地预览生产版本"
echo "  4) 代码检查 (lint) - ESLint 检查"
echo ""
read -p "请输入选项 (1-4, 默认: 1): " choice

case ${choice:-1} in
    1)
        echo ""
        echo "🔧 启动开发服务器..."
        npm run dev
        ;;
    2)
        echo ""
        echo "🏗️  开始生产构建..."
        npm run build
        echo ""
        echo "✅ 构建完成！输出目录：dist/"
        ;;
    3)
        echo ""
        echo "👀 启动生产预览服务器..."
        npm run preview
        ;;
    4)
        echo ""
        echo "🔍 运行代码检查..."
        npm run lint
        ;;
    *)
        echo "❌ 无效选项"
        exit 1
        ;;
esac
