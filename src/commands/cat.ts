import type { CommandResult, ImageInfo } from '../types';
import { registerCommand } from './index';
import { getPostBySlug, getPostsByCategory } from './ls';
import { getCurrentPath } from './cd';

// 简单的代码高亮函数
export function highlightCode(code: string, language?: string): string {
  // 简单的关键词高亮
  const keywords: Record<string, RegExp> = {
    js: /\b(const|let|var|function|return|if|else|for|while|class|import|export|from|async|await|new|this|typeof|instanceof)\b/g,
    ts: /\b(const|let|var|function|return|if|else|for|while|class|import|export|from|async|await|new|this|typeof|instanceof|interface|type|extends|implements|public|private|protected|readonly)\b/g,
    py: /\b(def|class|return|if|elif|else|for|while|import|from|as|with|try|except|finally|raise|lambda|yield|global|nonlocal|pass|break|continue|and|or|not|in|is|None|True|False)\b/g,
    bash: /\b(if|then|else|fi|for|do|done|while|case|esac|function|return|exit|export|source|cd|pwd|ls|echo|cat|grep|find|rm|mv|cp|mkdir|chmod)\b/g,
    json: /\b(true|false|null)\b/g,
  };

  let highlighted = code
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // 字符串高亮
  highlighted = highlighted.replace(/(["'`])(?:(?!\1)[^\\]|\\.)*?\1/g, '<span class="code-string">$&</span>');

  // 注释高亮
  highlighted = highlighted.replace(/(\/\/.*$|#.*$)/gm, '<span class="code-comment">$&</span>');

  // 关键词高亮
  const lang = language?.toLowerCase() || 'js';
  if (keywords[lang]) {
    highlighted = highlighted.replace(
      keywords[lang],
      '<span class="code-keyword">$&</span>'
    );
  }

  // 数字高亮
  highlighted = highlighted.replace(/\b(\d+)\b/g, '<span class="code-number">$&</span>');

  // 函数名高亮
  highlighted = highlighted.replace(/\b([a-zA-Z_]\w*)(?=\()/g, '<span class="code-fn">$&</span>');

  return highlighted;
}

// 简单的 Markdown 渲染器，返回渲染结果和图片信息
export function renderMarkdown(content: string): { lines: string[]; images: ImageInfo[] } {
  const lines = content.split('\n');
  const result: string[] = [];
  const images: ImageInfo[] = [];
  let imageIndex = 0;

  // 代码块状态
  let inCodeBlock = false;
  let codeBlockContent: string[] = [];
  let codeBlockLanguage = '';

  // 图片正则表达式
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/;

  // 行内代码正则
  const inlineCodeRegex = /`([^`]+)`/g;

  // 粗体正则
  const boldRegex = /\*\*([^*]+)\*\*/g;

  // 斜体正则
  const italicRegex = /\*([^*]+)\*/g;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // 处理代码块
    if (line.startsWith('```')) {
      if (!inCodeBlock) {
        // 开始代码块
        inCodeBlock = true;
        codeBlockLanguage = line.slice(3).trim();
        codeBlockContent = [];
      } else {
        // 结束代码块
        inCodeBlock = false;
        result.push(`__CODEBLOCK_START:${codeBlockLanguage}__`);
        codeBlockContent.forEach((codeLine) => {
          result.push(codeLine);
        });
        result.push(`__CODEBLOCK_END__`);
      }
      continue;
    }

    // 如果在代码块内，收集代码行
    if (inCodeBlock) {
      codeBlockContent.push(line);
      continue;
    }

    // 检查是否是纯图片行
    const match = line.match(imageRegex);
    if (match) {
      const alt = match[1] || 'image';
      const src = match[2];
      // 检查这一行是否只有图片（允许前后有空格）
      const lineContent = line.trim();
      const isImageOnly = lineContent === `![${alt}](${src})`;

      if (isImageOnly) {
        images.push({
          index: imageIndex,
          alt,
          src,
          lineIndex: result.length,
        });
        imageIndex++;
        // 使用特殊标记，之后会被渲染成图片组件
        result.push(`__IMG:${src}:${alt}__`);
        continue;
      }
    }

    // 如果行内有图片但不是独占一行，替换为文字说明
    line = line.replace(imageRegex, '[🖼️ ' + (match ? match[1] || 'image' : 'image') + ']');

    // 处理行内格式化
    line = line.replace(boldRegex, '__BOLD__$1__BOLDEND__');
    line = line.replace(italicRegex, '__ITALIC__$1__ITALICEND__');
    line = line.replace(inlineCodeRegex, '__CODE__$1__CODEEND__');

    // 标题
    if (line.startsWith('### ')) {
      result.push('');
      result.push(`__H3__${line.slice(3)}__H3END__`);
      result.push('  ' + '-'.repeat(line.slice(3).length));
    } else if (line.startsWith('## ')) {
      result.push('');
      result.push(`__H2__${line.slice(2)}__H2END__`);
      result.push('  ' + '='.repeat(line.slice(2).length));
    } else if (line.startsWith('# ')) {
      result.push('');
      result.push(`__H1__${line.slice(1).toUpperCase()}__H1END__`);
      result.push('  ' + '='.repeat(line.slice(1).length));
    }
    // 引用
    else if (line.startsWith('> ')) {
      result.push(`  ▌ __ITALIC__:${line.slice(2)}:__ITALIC_END__`);
    }
    // 列表
    else if (line.startsWith('- ') || line.startsWith('* ')) {
      result.push(`  • ${line.slice(2)}`);
    }
    // 有序列表
    else if (/^\d+\. /.test(line)) {
      result.push(`  ${line.replace(/^\d+\. /, '→ ')}`);
    }
    // 复选框
    else if (line.startsWith('- [ ] ') || line.startsWith('- [x] ')) {
      const checked = line.startsWith('- [x] ');
      result.push(`  ${checked ? '✓' : '☐'} ${line.slice(6)}`);
    }
    // 普通段落
    else if (line.trim()) {
      result.push(`  ${line}`);
    } else {
      result.push('');
    }
  }

  return { lines: result, images };
}

const catHandler = (args: string[]): CommandResult => {
  if (args.length === 0) {
    return {
      type: 'error',
      output: ['cat: missing file operand'],
    };
  }

  let [articleName] = args;

  // 移除 .md 后缀（如果存在）
  if (articleName.endsWith('.md')) {
    articleName = articleName.slice(0, -3);
  }

  const currentPath = getCurrentPath();
  let post = null;

  // 如果在分类目录内，先在该分类下查找
  if (currentPath.length > 0) {
    const currentCategory = currentPath[0];
    const postsInCategory = getPostsByCategory(currentCategory);
    post = postsInCategory.find((p) => p.slug === articleName);
  }

  // 如果没找到，再全局查找
  if (!post) {
    post = getPostBySlug(articleName);
  }

  if (!post) {
    return {
      type: 'error',
      output: [`cat: ${articleName}: No such file or directory`],
    };
  }

  const output: string[] = [''];

  // 文章标题 - 使用特殊标记
  output.push(`__TITLE_START__`);
  output.push(`  ${post.title}`);
  output.push(`__TITLE_END__`);
  output.push('');
  output.push(`  Date: ${post.date}`);
  output.push(`  Category: ${post.category}`);
  output.push(`  Tags: ${post.tags.join(', ')}`);
  output.push('');

  // 渲染内容
  const { lines: renderedContent, images } = renderMarkdown(post.content);

  // 处理渲染后的行，包括代码块和图片
  let inCodeBlock = false;
  let codeBlockLang = '';
  let codeBlockLines: string[] = [];

  for (const line of renderedContent) {
    if (line.startsWith('__CODEBLOCK_START:')) {
      // 开始代码块
      inCodeBlock = true;
      codeBlockLang = line.replace('__CODEBLOCK_START:', '').replace('__', '');
      codeBlockLines = [];
    } else if (line === '__CODEBLOCK_END__') {
      // 结束代码块 - 输出带边框的代码块
      inCodeBlock = false;
      const boxWidth = 70; // 总宽度
      const codeLabel = ` Code: ${codeBlockLang || 'plaintext'} `;
      const contentWidth = boxWidth - 4; // 减去边框字符

      output.push('');
      output.push(`  ┌${'─'.repeat(boxWidth)}┐`);
      output.push(`  │${codeLabel}${'─'.repeat(contentWidth - codeLabel.length)}│`);
      output.push(`  ├${'─'.repeat(boxWidth)}┤`);
      // 输出代码内容（带高亮）
      const highlighted = highlightCode(codeBlockLines.join('\n'), codeBlockLang);
      highlighted.split('\n').forEach((codeLine) => {
        // 如果代码行为空，显示空格
        if (!codeLine.trim()) {
          output.push(`  │${' '.repeat(boxWidth)}│`);
        } else {
          // 截取过长的内容
          const truncated = codeLine.length > contentWidth
            ? codeLine.slice(0, contentWidth)
            : codeLine + ' '.repeat(contentWidth - codeLine.length);
          output.push(`  │ ${truncated}│`);
        }
      });
      output.push(`  └${'─'.repeat(boxWidth)}┘`);
      output.push('');
    } else if (inCodeBlock) {
      // 收集代码块内容
      codeBlockLines.push(line);
    } else if (line.startsWith('__IMG:')) {
      // 图片
      const parts = line.match(/^__IMG:([^:]+):(.+)__$/);
      if (parts) {
        const src = parts[1];
        const alt = parts[2];
        output.push('');
        output.push(`__IMG:${src}:${alt}__`);
        output.push('');
      }
    } else {
      output.push(line);
    }
  }

  output.push('');

  return {
    type: 'success',
    output,
    images,
  };
};

registerCommand('cat', catHandler);
