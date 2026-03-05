import { useState, useEffect, useRef, useCallback } from 'react';
import { executeCommand } from '../../utils/commandParser';
import { getFullPath, getCurrentPath } from '../../commands/cd';
import { AVAILABLE_COMMANDS, type CommandName } from '../../commands';
import type { SelectableItem } from '../../types';
import { setCurrentImages } from '../../commands/imgview';
import { getCategories, getPostsByCategory } from '../../commands/ls';

interface TerminalLine {
  type: 'input' | 'output' | 'error' | 'info' | 'system';
  content: string | string[];
  path?: string;
  // 可选择的项目列表（用于交互式选择）
  selectableItems?: SelectableItem[];
  hint?: string;
  // 代码块状态
  inCodeBlock?: boolean;
  codeBlockLang?: string;
  codeBlockContent?: string[];
}

interface TerminalProps {
  username?: string;
  hostname?: string;
}

export default function Terminal({
  username = 'guest',
  hostname = 'blog',
}: TerminalProps) {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      type: 'system',
      content: [
        '',
        `  Welcome to ${username}@${hostname}`,
        '  Type \'help\' for available commands',
        '',
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  // 交互式选择状态
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectableItems, setSelectableItems] = useState<SelectableItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // 光标闪烁效果
  useEffect(() => {
    const interval = setInterval(() => {
      setIsCursorVisible((v) => !v);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // 滚动到底部
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  // 保持输入框聚焦
  useEffect(() => {
    const handleClick = () => {
      inputRef.current?.focus();
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // 命令历史导航和交互选择
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      // 处理交互选择模式
      if (isSelecting) {
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : selectableItems.length - 1));
          return;
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev < selectableItems.length - 1 ? prev + 1 : 0));
          return;
        } else if (e.key === 'Enter') {
          e.preventDefault();
          const selectedItem = selectableItems[selectedIndex];
          if (selectedItem) {
            // 执行相应的操作
            if (selectedItem.type === 'category') {
              // 进入分类
              executeCommand(`cd ${selectedItem.value}`);
              setLines((prev) => [
                ...prev,
                { type: 'input', content: `cd ${selectedItem.value}`, path: `${username}@${hostname}:${getFullPath()}$` },
              ]);
              // 然后列出分类内容
              const lsResult = executeCommand('ls');
              setLines((prev) => [
                ...prev,
                {
                  type: lsResult.type === 'error' ? 'error' : 'output',
                  content: lsResult.output,
                  selectableItems: lsResult.selectableItems,
                  hint: lsResult.hint,
                },
              ]);
            } else if (selectedItem.type === 'article' || selectedItem.type === 'file') {
              // 查看文章
              const catResult = executeCommand(`cat ${selectedItem.value}`);
              setLines((prev) => [
                ...prev,
                { type: 'input', content: `cat ${selectedItem.value}`, path: `${username}@${hostname}:${getFullPath()}$` },
                {
                  type: catResult.type === 'error' ? 'error' : 'output',
                  content: catResult.output,
                },
              ]);
            }
          }
          setIsSelecting(false);
          setSelectableItems([]);
          setSelectedIndex(0);
          setInputValue('');
          return;
        } else if (e.key === 'Escape') {
          e.preventDefault();
          setIsSelecting(false);
          setSelectableItems([]);
          setSelectedIndex(0);
          setInputValue('');
          return;
        }
      }

      if (e.key === 'ArrowUp') {
        // 如果有可选择的项目，进入选择模式
        const lastLine = lines[lines.length - 1];
        if (lastLine?.selectableItems && lastLine.selectableItems.length > 0) {
          e.preventDefault();
          setIsSelecting(true);
          setSelectableItems(lastLine.selectableItems);
          setSelectedIndex(0);
          return;
        }
        // 否则使用命令历史
        if (historyIndex < commandHistory.length - 1) {
          e.preventDefault();
          const newIndex = historyIndex + 1;
          setHistoryIndex(newIndex);
          setInputValue(commandHistory[commandHistory.length - 1 - newIndex]);
        }
      } else if (e.key === 'ArrowDown') {
        if (isSelecting) {
          e.preventDefault();
          setSelectedIndex((prev) => (prev < selectableItems.length - 1 ? prev + 1 : 0));
          return;
        }
        if (historyIndex > 0) {
          e.preventDefault();
          const newIndex = historyIndex - 1;
          setHistoryIndex(newIndex);
          setInputValue(commandHistory[commandHistory.length - 1 - newIndex]);
        } else {
          setHistoryIndex(-1);
          setInputValue('');
        }
      } else if (e.key === 'Tab') {
        e.preventDefault();
        // 自动补全
        const parts = inputValue.trim().split(' ');
        const currentWord = parts[parts.length - 1];

        if (parts.length === 1) {
          // 补全命令
          const matches = AVAILABLE_COMMANDS.filter((cmd: CommandName) =>
            cmd.startsWith(currentWord)
          );
          if (matches.length === 1) {
            setInputValue(matches[0]);
          } else if (matches.length > 1) {
            // 显示所有匹配的命令
            const prompt = `${username}@${hostname}:${getFullPath()}$`;
            setLines((prev) => [
              ...prev,
              { type: 'input', content: inputValue, path: prompt },
              {
                type: 'info',
                content: ['', 'Available commands: ' + matches.join(', '), ''],
              },
            ]);
            setInputValue('');
          }
        } else if (parts.length === 2) {
          // 补全参数（分类名或文章名）
          const command = parts[0];
          const currentPath = getCurrentPath();
          const currentCategory = currentPath.length > 0 ? currentPath[0] : null;

          let matches: string[] = [];

          if (command === 'cd' || command === 'ls') {
            // 补全分类名
            const categories = getCategories();
            matches = categories.filter((c) => c.startsWith(currentWord));
          } else if (command === 'cat') {
            // 补全文章名
            if (currentCategory) {
              // 在当前分类下查找
              const posts = getPostsByCategory(currentCategory);
              matches = posts.map((p) => p.slug + '.md').filter((s) => s.startsWith(currentWord));
            } else {
              // 全局查找
              const categories = getCategories();
              categories.forEach((cat) => {
                const posts = getPostsByCategory(cat);
                posts.forEach((p) => {
                  matches.push(`${cat}/${p.slug}.md`);
                });
              });
              matches = matches.filter((s) => s.startsWith(currentWord));
            }
          }

          if (matches.length === 1) {
            setInputValue(`${command} ${matches[0]}`);
          } else if (matches.length > 1) {
            // 显示所有匹配的选项
            const prompt = `${username}@${hostname}:${getFullPath()}$`;
            setLines((prev) => [
              ...prev,
              { type: 'input', content: inputValue, path: prompt },
              {
                type: 'info',
                content: ['', 'Matches: ' + matches.slice(0, 10).join(', ') + (matches.length > 10 ? ` ... (${matches.length} total)` : ''), ''],
              },
            ]);
            setInputValue('');
          }
        }
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const command = inputValue.trim();

        if (command) {
          // 添加到历史
          setCommandHistory((prev) => [...prev, command]);
          setHistoryIndex(-1);

          // 执行命令
          const result = executeCommand(command);

          // 添加输入行
          const prompt = `${username}@${hostname}:${getFullPath()}$`;
          setLines((prev) => [
            ...prev,
            { type: 'input', content: command, path: prompt },
          ]);

          // 如果有图片，设置当前图片
          if (result.images && result.images.length > 0) {
            setCurrentImages(result.images.map(img => ({ alt: img.alt, src: img.src })));
          }

          // 处理清屏
          if (result.output.some((o: string) => o === '__CLEAR__')) {
            setLines([
              {
                type: 'system',
                content: [
                  '',
                  `  Welcome to ${username}@${hostname}`,
                  '  Type \'help\' for available commands',
                  '',
                ],
              },
            ]);
          } else {
            // 添加输出行
            setLines((prev) => [
              ...prev,
              {
                type:
                  result.type === 'error'
                    ? 'error'
                    : result.type === 'info'
                      ? 'info'
                      : 'output',
                content: result.output.filter((o: string) => o !== '__CLEAR__'),
                selectableItems: result.selectableItems,
                hint: result.hint,
              },
            ]);
          }
        } else {
          // 空命令只显示提示符
          const prompt = `${username}@${hostname}:${getFullPath()}$`;
          setLines((prev) => [...prev, { type: 'input', content: '', path: prompt }]);
        }

        setInputValue('');
      } else if (e.key === 'c' && e.ctrlKey) {
        e.preventDefault();
        const prompt = `${username}@${hostname}:${getFullPath()}$`;
        setLines((prev) => [
          ...prev,
          { type: 'input', content: inputValue + '^C', path: prompt },
        ]);
        setInputValue('');
      }
    },
    [inputValue, commandHistory, historyIndex, username, hostname, lines, isSelecting, selectableItems, selectedIndex]
  );

  const prompt = `${username}@${hostname}:${getFullPath()}$`;

  return (
    <div
      ref={terminalRef}
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950 text-green-400 font-mono text-sm md:text-base p-4 md:p-6"
      onClick={() => inputRef.current?.focus()}
    >
      {/* 终端窗口 */}
      <div className="max-w-5xl mx-auto">
        {/* 窗口标题栏 */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700/50 bg-gray-800/30 rounded-t-lg px-4 py-3 backdrop-blur-sm">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-lg"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-lg"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-lg"></div>
          </div>
          <div className="flex-1 text-center text-gray-400 text-xs md:text-sm font-medium">
            <span className="opacity-75">{username}@{hostname}</span>
            <span className="mx-2 opacity-50">|</span>
            <span className="opacity-75">{getFullPath()}</span>
          </div>
          <div className="text-gray-500 text-xs">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        {/* 终端内容区域 */}
        <div className="bg-gray-950/80 rounded-b-lg rounded-tr-lg p-4 md:p-6 shadow-2xl border border-gray-800/50">
          <div className="space-y-1.5">
          {lines.map((line, index) => {

            if (line.type === 'input') {
              return (
                <div key={index} className="flex flex-wrap">
                  <span className="text-blue-400 whitespace-nowrap mr-2">
                    {line.path}
                  </span>
                  <span className="text-green-400">{line.content}</span>
                </div>
              );
            }

            if (line.type === 'system') {
              return (
                <div key={index} className="text-cyan-400">
                  {Array.isArray(line.content)
                    ? line.content.map((c, i) => <div key={i}>{c}</div>)
                    : line.content}
                </div>
              );
            }

            if (line.type === 'error') {
              return (
                <div key={index} className="text-red-400">
                  {Array.isArray(line.content)
                    ? line.content.map((c, i) => <div key={i}>{c}</div>)
                    : line.content}
                </div>
              );
            }

            if (line.type === 'info') {
              return (
                <div key={index} className="text-yellow-400">
                  {Array.isArray(line.content)
                    ? line.content.map((c, i) => <div key={i}>{c}</div>)
                    : line.content}
                </div>
              );
            }

            // output 类型，处理代码块和格式化文本
            if (Array.isArray(line.content)) {
              return (
                <div key={index}>
                  {line.content.map((c, i) => {
                    // 图片标记
                    if (typeof c === 'string' && c.startsWith('__IMG:')) {
                      const content = c.slice(6);
                      const lastColonIndex = content.lastIndexOf(':');
                      if (lastColonIndex > 0 && content.endsWith('__')) {
                        const src = content.slice(0, lastColonIndex);
                        const alt = content.slice(lastColonIndex + 1, -2);
                        return (
                          <div key={i} className="my-4">
                            <figure className="my-2">
                              <img
                                src={src}
                                alt={alt}
                                className="max-w-full rounded-lg shadow-lg"
                                style={{ maxHeight: '400px', objectFit: 'contain' }}
                                onError={() => {
                                  console.error('Image load error:', src);
                                }}
                              />
                              {alt && (
                                <figcaption className="text-gray-500 text-xs mt-2 text-center">
                                  {alt}
                                </figcaption>
                              )}
                            </figure>
                          </div>
                        );
                      }
                    }

                    // 代码块开始（上边框）
                    if (typeof c === 'string' && c.startsWith('  ┌─') && c.includes('┐')) {
                      return (
                        <div key={i} className="text-gray-500 font-mono text-xs leading-none">
                          {c}
                        </div>
                      );
                    }

                    // 代码块语言标题
                    if (typeof c === 'string' && c.startsWith('  │') && c.includes('Code:')) {
                      return (
                        <div key={i} className="text-cyan-400 font-mono text-xs bg-gray-900/80 px-2">
                          {c}
                        </div>
                      );
                    }

                    // 代码块分隔线
                    if (typeof c === 'string' && c.startsWith('  ├─') && c.includes('┤')) {
                      return (
                        <div key={i} className="text-gray-500 font-mono text-xs leading-none">
                          {c}
                        </div>
                      );
                    }

                    // 代码块内容行（带 │ 边框）
                    if (typeof c === 'string' && c.startsWith('  │ ') && c.endsWith('│') && !c.includes('Code:')) {
                      const codeContent = c.slice(3, -1);
                      // 如果包含 HTML 标签，使用 dangerouslySetInnerHTML
                      if (codeContent.includes('<span')) {
                        return (
                          <div
                            key={i}
                            className="font-mono text-xs bg-gray-900/60 px-2 py-0.5 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: codeContent.trimEnd() }}
                          />
                        );
                      }
                      return (
                        <div key={i} className="text-green-300 font-mono text-xs bg-gray-900/60 px-2 py-0.5 leading-relaxed">
                          {codeContent.trimEnd()}
                        </div>
                      );
                    }

                    // 代码块结束（下边框）
                    if (typeof c === 'string' && c.startsWith('  └─') && c.includes('┘')) {
                      return (
                        <div key={i} className="text-gray-500 font-mono text-xs leading-none">
                          {c}
                        </div>
                      );
                    }

                    // 解析格式化标记
                    if (typeof c === 'string') {
                      // 检查是否是可选择列表中的项
                      let displayContent = c;
                      let itemClass = '';

                      if (isSelecting && line.selectableItems) {
                        const trimmed = c.trim().replace(/\/$/, '').replace(/\.md$/, '');
                        const matchingIndex = line.selectableItems.findIndex(
                          (item) => item.value === trimmed
                        );

                        if (matchingIndex !== -1) {
                          if (matchingIndex === selectedIndex) {
                            itemClass = 'bg-green-700 text-white ';
                            displayContent = `> ${c.trim()} `;
                          } else {
                            displayContent = `  ${c.trim()}`;
                          }
                        }
                      }

                      const parts = displayContent.split(/(__BOLD__|__BOLDEND__|__ITALIC__|__ITALICEND__|__CODE__|__CODEEND__|__H1__|__H1END__|__H2__|__H2END__|__H3__|__H3END__)/);
                      let inBold = false;
                      let inItalic = false;
                      let inCode = false;
                      let headingLevel = 0;

                      const rendered = parts.map((part, j) => {
                        if (part === '__BOLD__') {
                          inBold = true;
                          return null;
                        } else if (part === '__BOLDEND__') {
                          inBold = false;
                          return null;
                        } else if (part === '__ITALIC__') {
                          inItalic = true;
                          return null;
                        } else if (part === '__ITALICEND__') {
                          inItalic = false;
                          return null;
                        } else if (part === '__CODE__') {
                          inCode = true;
                          return null;
                        } else if (part === '__CODEEND__') {
                          inCode = false;
                          return null;
                        } else if (part === '__H1__') {
                          headingLevel = 1;
                          return null;
                        } else if (part === '__H1END__') {
                          headingLevel = 0;
                          return null;
                        } else if (part === '__H2__') {
                          headingLevel = 2;
                          return null;
                        } else if (part === '__H2END__') {
                          headingLevel = 0;
                          return null;
                        } else if (part === '__H3__') {
                          headingLevel = 3;
                          return null;
                        } else if (part === '__H3END__') {
                          headingLevel = 0;
                          return null;
                        }

                        let className = itemClass;
                        if (headingLevel === 1) {
                          className = `${itemClass} text-white font-bold text-2xl`;
                        } else if (headingLevel === 2) {
                          className = `${itemClass} text-white font-bold text-xl`;
                        } else if (headingLevel === 3) {
                          className = `${itemClass} text-white font-bold text-lg`;
                        }

                        if (inBold) {
                          return <strong key={j} className={`${itemClass} text-white font-bold text-lg`}>{part}</strong>;
                        } else if (inItalic) {
                          return <em key={j} className={`${itemClass} text-cyan-300`}>{part}</em>;
                        } else if (inCode) {
                          return <code key={j} className={`${itemClass} bg-gray-800 px-1.5 py-0.5 rounded text-yellow-300 text-sm`}>{part}</code>;
                        }
                        return <span key={j} className={className}>{part}</span>;
                      });

                      return <div key={i} className={`whitespace-pre-wrap ${itemClass}`}>{rendered}</div>;
                    }

                    return <div key={i} className="whitespace-pre-wrap">{c}</div>;
                  })}
                </div>
              );
            }

            // 非数组内容
            return (
              <div key={index} className="text-green-300 whitespace-pre-wrap">
                {line.content}
              </div>
            );
          })}
          </div>

          {/* 当前输入行 */}
          <div className="flex flex-wrap items-center gap-3 mt-6 pt-4 border-t border-gray-700/60">
            <span className="text-emerald-400 font-bold whitespace-nowrap text-sm md:text-base tracking-wide" style={{ textShadow: '0 0 10px rgba(52, 211, 153, 0.5)' }}>{prompt}</span>
            <span className="text-green-300 flex items-center bg-gray-900/70 px-3 py-1.5 rounded-md border border-gray-700/50 shadow-inner min-w-[200px]">
              {isSelecting ? (
                <span className="text-yellow-400">
                  {selectedIndex >= 0 && selectableItems[selectedIndex]
                    ? `${selectableItems[selectedIndex].value} (press Enter to open, Esc to cancel)`
                    : '(press Esc to cancel)'}
                </span>
              ) : (
                <>
                  {inputValue}
                  <span
                    className={`inline-block w-3 h-5 bg-emerald-400 ml-1 rounded-sm ${
                      isCursorVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ boxShadow: '0 0 8px rgba(52, 211, 153, 0.6)' }}
                  ></span>
                </>
              )}
            </span>
          </div>

          {/* 隐藏的实际输入框 */}
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="opacity-0 absolute pointer-events-none"
            autoFocus
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />
        </div>

        {/* 滚动锚点 */}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
