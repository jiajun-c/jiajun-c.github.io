import type { CommandResult, BlogPost } from '../types';
import { registerCommand } from './index';
import { searchPosts } from './ls';

const searchHandler = (args: string[]): CommandResult => {
  if (args.length === 0) {
    return {
      type: 'error',
      output: ['search: missing keyword. Usage: search <keyword> [--limit=N] [--category=cat]'],
    };
  }

  // 解析参数
  let keyword = '';
  let limit = 10;
  let category = '';

  for (const arg of args) {
    if (arg.startsWith('--limit=')) {
      limit = parseInt(arg.slice(8), 10) || 10;
    } else if (arg.startsWith('--category=')) {
      category = arg.slice(13);
    } else if (!arg.startsWith('-')) {
      keyword = arg;
    }
  }

  if (!keyword) {
    return {
      type: 'error',
      output: ['search: missing keyword'],
    };
  }

  const results = searchPosts(keyword);

  if (results.length === 0) {
    return {
      type: 'info',
      output: [
        '',
        `No articles found matching "${keyword}"`,
        '',
        'Tip: Try different keywords or check spelling',
        '',
      ],
    };
  }

  const filteredResults = category
    ? results.filter((r: BlogPost) => r.category === category)
    : results;

  const displayResults = filteredResults.slice(0, limit);

  const output: string[] = [
    '',
    `Search results for "${keyword}" (${filteredResults.length} found):`,
    '',
  ];

  for (const post of displayResults) {
    const matchInfo: string[] = [];
    if (post.title.toLowerCase().includes(keyword.toLowerCase())) {
      matchInfo.push('title');
    }
    if (post.content.toLowerCase().includes(keyword.toLowerCase())) {
      matchInfo.push('content');
    }
    if (post.tags.some((t: string) => t.toLowerCase().includes(keyword.toLowerCase()))) {
      matchInfo.push('tags');
    }

    output.push(`  ${post.slug}.md`);
    output.push(`     Title: ${post.title}`);
    output.push(`     Category: ${post.category} | Date: ${post.date}`);
    output.push(`     Tags: ${post.tags.join(', ')}`);
    output.push(`     Match: ${matchInfo.join(', ')}`);
    output.push('');
  }

  if (filteredResults.length > limit) {
    output.push(`  ... and ${filteredResults.length - limit} more results`);
    output.push('');
  }

  return {
    type: 'success',
    output,
  };
};

registerCommand('search', searchHandler);
