import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostBySlug, loadPosts } from '../../commands/ls';
import type { BlogPost } from '../../types';

// 简单的代码高亮函数
function highlightCode(code: string, language?: string): string {
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
    highlighted = highlighted.replace(keywords[lang], '<span class="code-keyword">$&</span>');
  }
  // 数字高亮
  highlighted = highlighted.replace(/\b(\d+)\b/g, '<span class="code-number">$&</span>');
  // 函数名高亮
  highlighted = highlighted.replace(/\b([a-zA-Z_]\w*)(?=\()/g, '<span class="code-fn">$&</span>');

  return highlighted;
}

export default function ArticleView() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [copiedBlockId, setCopiedBlockId] = useState<string | null>(null);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    // 查找文章
    if (!slug) return;
    const foundPost = getPostBySlug(slug);
    if (foundPost) {
      // 从完整文章列表中查找获取完整内容
      const allPosts = loadPosts();
      const postWithContent = allPosts.find((p: BlogPost) => p.slug === slug);
      setPost(postWithContent || foundPost);
    }
    setLoading(false);
  }, [slug]);

  // 阅读进度跟踪
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 复制代码块
  const copyToClipboard = async (text: string, blockId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedBlockId(blockId);
      setTimeout(() => setCopiedBlockId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // 解析 Markdown 内容
  const renderContent = () => {
    if (!post) return null;

    const lines = post.content.split('\n');
    const elements: React.JSX.Element[] = [];
    let inCodeBlock = false;
    let codeBlockLang = '';
    let codeBlockLines: string[] = [];
    let codeBlockIndex = 0;

    const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/;

    lines.forEach((line: string, lineIndex: number) => {
      // 代码块处理
      if (line.startsWith('```')) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeBlockLang = line.slice(3).trim();
          codeBlockLines = [];
        } else {
          inCodeBlock = false;
          const codeContent = codeBlockLines.join('\n');
          const blockId = `${codeBlockIndex}-${lineIndex}`;
          const isCopied = copiedBlockId === blockId;

          elements.push(
            <div key={`code-${codeBlockIndex}`} className="my-6 rounded-lg overflow-hidden border border-gray-700 shadow-lg">
              <div className="bg-gray-800/90 px-4 py-2 text-sm font-mono text-cyan-400 border-b border-gray-700 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  <span className="w-2 h-2 rounded-full bg-red-400"></span>
                  <span className="ml-2">{codeBlockLang || 'code'}</span>
                </span>
                <button
                  onClick={() => copyToClipboard(codeContent, blockId)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-all duration-200 ${
                    isCopied
                      ? 'text-green-400 bg-green-400/10'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs">Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span className="text-xs">Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div className="bg-gray-900/95 px-4 py-4 overflow-x-auto backdrop-blur-sm">
                <pre className="text-sm leading-relaxed font-mono text-gray-300">
                  <code dangerouslySetInnerHTML={{ __html: highlightCode(codeContent, codeBlockLang) }} />
                </pre>
              </div>
            </div>
          );
          codeBlockIndex++;
        }
        return;
      }

      if (inCodeBlock) {
        codeBlockLines.push(line);
        return;
      }

      // 图片处理
      const imageMatch = line.match(imageRegex);
      if (imageMatch) {
        const alt = imageMatch[1] || 'image';
        const src = imageMatch[2];
        const isImageOnly = line.trim() === `![${alt}](${src})`;

        if (isImageOnly) {
          elements.push(
            <div key={lineIndex} className="my-8">
              <figure className="my-2">
                <img
                  src={src}
                  alt={alt}
                  className="max-w-full rounded-lg shadow-2xl mx-auto border border-gray-700/50"
                  style={{ maxHeight: '500px', objectFit: 'contain' }}
                />
                {alt && (
                  <figcaption className="text-gray-500 text-sm mt-3 text-center italic">
                    {alt}
                  </figcaption>
                )}
              </figure>
            </div>
          );
          return;
        }
      }

      // 处理行内格式化
      let processedElements: (string | React.JSX.Element)[] = [line];

      // 粗体处理 - 替换为 React 元素
      const processBold = (elements: (string | React.JSX.Element)[]): (string | React.JSX.Element)[] => {
        const result: (string | React.JSX.Element)[] = [];
        elements.forEach((el, idx) => {
          if (typeof el === 'string') {
            const boldParts = el.split(/(\*\*[^*]+\*\*)/g);
            boldParts.forEach((part: string, i: number) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                result.push(
                  <strong key={`${idx}-${i}`} className="text-white font-bold text-lg">{part.slice(2, -2)}</strong>
                );
              } else {
                result.push(part);
              }
            });
          } else {
            result.push(el);
          }
        });
        return result;
      };

      processedElements = processBold(processedElements);

      // 斜体处理
      const processItalics = (elements: (string | React.JSX.Element)[]): (string | React.JSX.Element)[] => {
        const result: (string | React.JSX.Element)[] = [];
        elements.forEach((el, idx) => {
          if (typeof el === 'string') {
            const italicParts = el.split(/(\*[^*]+\*)/g);
            italicParts.forEach((part: string, i: number) => {
              if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
                result.push(
                  <em key={`${idx}-${i}`} className="text-cyan-300">{part.slice(1, -1)}</em>
                );
              } else {
                result.push(part);
              }
            });
          } else {
            result.push(el);
          }
        });
        return result;
      };

      processedElements = processItalics(processedElements);

      // 行内代码处理
      const processInlineCode = (elements: (string | React.JSX.Element)[]): (string | React.JSX.Element)[] => {
        const result: (string | React.JSX.Element)[] = [];
        elements.forEach((el, idx) => {
          if (typeof el === 'string') {
            const codeSegments = el.split(/(`[^`]+`)/g);
            codeSegments.forEach((segment: string, i: number) => {
              if (segment.startsWith('`') && segment.endsWith('`')) {
                result.push(
                  <code key={`${idx}-${i}`} className="bg-gray-800/80 px-2 py-0.5 rounded text-yellow-300 text-sm font-mono border border-gray-700/50">
                    {segment.slice(1, -1)}
                  </code>
                );
              } else {
                result.push(segment);
              }
            });
          } else {
            result.push(el);
          }
        });
        return result;
      };

      processedElements = processInlineCode(processedElements);

      // 标题处理
      if (line.startsWith('### ')) {
        elements.push(
          <h3 key={lineIndex} className="text-xl font-bold text-cyan-400 mt-8 mb-4 pb-2 border-b border-gray-700/50">
            {processedElements}
          </h3>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={lineIndex} className="text-2xl font-bold text-purple-400 mt-10 mb-5 pb-2 border-b border-gray-700/50">
            {processedElements}
          </h2>
        );
      } else if (line.startsWith('# ')) {
        elements.push(
          <h1 key={lineIndex} className="text-3xl font-bold text-white mt-10 mb-6 pb-3 border-b border-gray-600">
            {processedElements}
          </h1>
        );
      }
      // 引用处理
      else if (line.startsWith('> ')) {
        elements.push(
          <blockquote key={lineIndex} className="border-l-4 border-purple-500 pl-4 py-2 my-4 bg-gray-800/30 rounded-r-lg italic text-gray-300">
            {processedElements}
          </blockquote>
        );
      }
      // 列表处理
      else if (line.startsWith('- ') || line.startsWith('* ')) {
        elements.push(
          <li key={lineIndex} className="ml-4 text-gray-300 my-1.5 flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            <span>{processedElements}</span>
          </li>
        );
      }
      // 有序列表处理
      else if (/^\d+\. /.test(line)) {
        elements.push(
          <li key={lineIndex} className="ml-4 text-gray-300 my-1.5 flex items-start">
            <span className="text-cyan-400 mr-2 font-mono">{line.match(/^\d+/)?.[0]}.</span>
            <span>{processedElements}</span>
          </li>
        );
      }
      // 普通段落
      else if (line.trim()) {
        // 检查是否是表格行
        if (line.includes('|') && line.trim().startsWith('|') && line.trim().endsWith('|')) {
          // 简单表格处理
          const cells = line.split('|').filter((_c: string, i: number, arr: string[]) => {
            // 过滤掉首尾空单元格
            if (i === 0 || i === arr.length - 1) return false;
            return true;
          }).map((_c: string, _idx: number) => _c.trim());
          if (cells.length > 0 && !cells.every(c => c.startsWith('---'))) {
            elements.push(
              <div key={lineIndex} className="flex gap-4 my-1 text-gray-300 font-mono text-sm">
                {cells.map((cell, idx) => (
                  <span key={idx} className={`flex-1 ${idx === 0 ? 'font-bold text-cyan-400' : ''}`}>
                    {cell}
                  </span>
                ))}
              </div>
            );
          }
        } else {
          elements.push(
            <p key={lineIndex} className="text-gray-300 my-3 leading-relaxed">
              {processedElements}
            </p>
          );
        }
      }
    });

    return elements;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400 font-mono">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 font-mono text-lg mb-4">Article not found</p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-mono transition-colors duration-200"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950">
      {/* 阅读进度条 */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* 返回按钮 */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 z-40 group flex items-center gap-2 px-4 py-2 bg-gray-800/80 hover:bg-gray-700/90 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-200 shadow-lg hover:shadow-purple-500/10"
      >
        <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="text-gray-300 group-hover:text-white font-mono text-sm">Back</span>
      </button>

      {/* 文章元信息横幅 */}
      <div className="relative pt-24 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-r from-purple-900/50 via-pink-900/50 to-cyan-900/50 p-8 border border-gray-700/50 backdrop-blur-sm shadow-2xl">
            {/* 分类标签 */}
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-mono border border-purple-500/30">
                {post.category}
              </span>
              <span className="text-gray-500 font-mono text-sm">{post.date}</span>
            </div>

            {/* 标题 */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* 描述 */}
            {post.description && (
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                {post.description}
              </p>
            )}

            {/* 标签 */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string, idx: number) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-800/50 text-cyan-400 rounded-full text-xs font-mono border border-gray-700/50 hover:border-cyan-500/50 transition-colors cursor-default"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 文章内容 */}
      <div className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 rounded-2xl p-8 md:p-12 border border-gray-800/30 backdrop-blur-sm shadow-2xl">
            <article className="prose prose-invert prose-lg max-w-none">
              {renderContent()}
            </article>
          </div>

          {/* 文章底部装饰 */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-gray-600">
              <span className="w-2 h-2 bg-purple-500/50 rounded-full"></span>
              <span className="w-2 h-2 bg-pink-500/50 rounded-full"></span>
              <span className="w-2 h-2 bg-cyan-500/50 rounded-full"></span>
            </div>
            <p className="text-gray-600 font-mono text-sm mt-4">
              End of article
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
