import type { CommandResult } from '../types';
import { registerCommand } from './index';
import { getCategories, getPostsByCategory } from './ls';

let currentPath: string[] = [];

export function getCurrentPath(): string[] {
  return [...currentPath];
}

export function setCurrentPath(path: string[]): void {
  currentPath = [...path];
}

export function getFullPath(): string {
  if (currentPath.length === 0) return '~';
  return '~/' + currentPath.join('/');
}

const cdHandler = (args: string[]): CommandResult => {
  if (args.length === 0) {
    currentPath = [];
    return {
      type: 'success',
      output: [],
    };
  }

  const [target] = args;

  if (target === '~' || target === '/') {
    currentPath = [];
    return { type: 'success', output: [] };
  }

  if (target === '..') {
    currentPath.pop();
    return { type: 'success', output: [] };
  }

  if (target === '.') {
    return { type: 'success', output: [] };
  }

  // 检查是否是有效的分类
  const categories = getCategories();

  if (categories.includes(target)) {
    currentPath = [target];
    return { type: 'success', output: [] };
  }

  // 检查是否是子路径
  if (target.includes('/')) {
    const parts = target.split('/');
    let valid = true;
    const newPath: string[] = [];

    for (const part of parts) {
      if (part === '..') {
        newPath.pop();
      } else if (part === '.' || part === '') {
        continue;
      } else {
        // 验证路径部分
        const cats = getCategories();
        if (newPath.length === 0 && cats.includes(part)) {
          newPath.push(part);
        } else if (newPath.length > 0) {
          // 在分类内，检查是否是文章
          const posts = getPostsByCategory(newPath[0]);
          if (posts.some((p) => p.slug === part)) {
            newPath.push(part);
          } else {
            valid = false;
            break;
          }
        } else {
          valid = false;
          break;
        }
      }
    }

    if (valid) {
      currentPath = newPath;
      return { type: 'success', output: [] };
    }
  }

  return {
    type: 'error',
    output: [`cd: no such file or directory: ${target}`],
  };
};

registerCommand('cd', cdHandler);
