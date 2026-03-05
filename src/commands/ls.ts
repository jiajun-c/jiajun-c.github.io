import type { CommandResult, SelectableItem, BlogPost } from '../types';
import { registerCommand } from './index';
import { getCurrentPath } from './cd';

// 从原始内容加载所有文章
let loadedPosts: BlogPost[] | null = null;

export function parseMarkdownRaw(raw: string, path: string): BlogPost | null {
  const frontmatterMatch = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!frontmatterMatch) return null;

  const [, frontmatterStr, content] = frontmatterMatch;
  const frontmatter: Record<string, string> = {};

  for (const line of frontmatterStr.split('\n')) {
    const match = line.match(/^(\w+):\s*(.+)$/);
    if (match) {
      const [, key, value] = match;
      // 处理数组格式
      if (value.startsWith('[')) {
        frontmatter[key] = value.replace(/[["\]]/g, '');
      } else {
        frontmatter[key] = value.replace(/"/g, '');
      }
    }
  }

  // 从路径提取 slug
  const pathParts = path.split('/');
  const category = pathParts[pathParts.length - 2] || 'unknown';
  const slugWithExt = pathParts[pathParts.length - 1];
  const slug = slugWithExt.replace('.md', '');

  return {
    slug,
    title: frontmatter.title || 'Untitled',
    date: frontmatter.date || '',
    category: frontmatter.category || category,
    tags: frontmatter.tags?.split(',').map((t) => t.trim()) || [],
    description: frontmatter.description || '',
    content: content.trim(),
    draft: frontmatter.draft === 'true',
  } as BlogPost;
}

// 加载所有文章
export function loadPosts(): BlogPost[] {
  if (loadedPosts) return loadedPosts;

  const modules = import.meta.glob('../content/**/*.md', { eager: true, query: '?raw' }) as Record<string, { default: string }>;
  loadedPosts = Object.entries(modules)
    .map(([path, mod]) => {
      const raw = typeof mod === 'string' ? mod : (mod as { default: string }).default;
      return parseMarkdownRaw(raw, path);
    })
    .filter((p): p is BlogPost => p !== null && !p.draft);

  return loadedPosts;
}

// 获取分类列表
export function getCategories(): string[] {
  const posts = loadPosts();
  const categories = new Set(posts.map((p) => p.category));
  return Array.from(categories);
}

// 获取指定分类的文章
export function getPostsByCategory(category: string): BlogPost[] {
  const posts = loadPosts();
  return posts.filter((p) => p.category === category);
}

// 搜索文章
export function searchPosts(keyword: string): BlogPost[] {
  const posts = loadPosts();
  const lowerKeyword = keyword.toLowerCase();
  return posts.filter(
    (p) =>
      p.title.toLowerCase().includes(lowerKeyword) ||
      p.content.toLowerCase().includes(lowerKeyword) ||
      p.tags.some((t) => t.toLowerCase().includes(lowerKeyword))
  );
}

// 根据 slug 获取文章
export function getPostBySlug(slug: string): BlogPost | null {
  const posts = loadPosts();
  // 支持 category/slug 格式
  if (slug.includes('/')) {
    const [category, s] = slug.split('/');
    return posts.find((p) => p.category === category && p.slug === s) || null;
  }
  return posts.find((p) => p.slug === slug) || null;
}

const lsHandler = (args: string[]): CommandResult => {
  const currentPath = getCurrentPath();
  const currentCategory = currentPath.length > 0 ? currentPath[0] : null;

  if (args.length === 0) {
    // 没有参数：根据当前路径决定显示什么
    if (currentCategory) {
      // 在分类内：显示该分类的文章
      const posts = getPostsByCategory(currentCategory);
      const selectableItems: SelectableItem[] = posts.map((p) => ({
        value: p.slug,
        label: `${p.slug}.md`,
        type: 'article' as const,
      }));
      return {
        type: 'success',
        output: [
          '',
          ...posts.map((p) => `  ${p.slug}.md`),
          '',
          '  ↑↓ to select, Enter to open, Esc to cancel',
          '',
        ],
        selectableItems,
        hint: 'article',
      };
    } else {
      // 根目录：显示分类
      const categories = getCategories();
      const selectableItems: SelectableItem[] = categories.map((c) => ({
        value: c,
        label: `${c}/`,
        type: 'category' as const,
      }));
      return {
        type: 'success',
        output: [
          '',
          ...categories.map((c) => `  ${c}/`),
          '',
          '  ↑↓ to select, Enter to open, Esc to cancel',
          '',
        ],
        selectableItems,
        hint: 'category',
      };
    }
  }

  const [path] = args;

  if (path === '-l') {
    // 详细模式：显示分类和文章数量
    const categories = getCategories();
    return {
      type: 'success',
      output: [
        '',
        ...categories.map((c) => {
          const count = getPostsByCategory(c).length;
          return `  ${c}/  (${count} posts)`;
        }),
        '',
      ],
    };
  }

  // 检查是否是分类名
  const categoryPosts = getPostsByCategory(path);
  if (categoryPosts.length > 0) {
    const selectableItems: SelectableItem[] = categoryPosts.map((p) => ({
      value: p.slug,
      label: `${p.slug}.md`,
      type: 'article' as const,
    }));
    return {
      type: 'success',
      output: [
        '',
        ...categoryPosts.map((p) => `  ${p.slug}.md`),
        '',
        '  ↑↓ to select, Enter to open, Esc to cancel',
        '',
      ],
      selectableItems,
      hint: 'article',
    };
  }

  return {
    type: 'error',
    output: [`ls: cannot access '${path}': No such file or directory`],
  };
};

registerCommand('ls', lsHandler);
