#!/bin/bash
# Blog Push Skill - 自动部署博客到 GitHub Pages

set -e

cd /home/star/workspace/kota-home/terminal-blog

echo "🚀 开始部署博客到 GitHub Pages..."

# 添加所有更改
git add -A

# 检查是否有更改
if git diff --staged --quiet; then
    echo "✨ 没有需要部署的更改"
    exit 0
fi

# 提交更改
git commit -m "chore: auto deploy blog update"

# 推送到 GitHub
git push origin main

echo "✅ 部署完成！访问 https://jiajun-c.github.io/ 查看更新"
