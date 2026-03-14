import { useState, useEffect, useRef, useCallback } from 'react';
import { executeCommand } from '../../utils/commandParser';
import { getFullPath, getCurrentPath } from '../../commands/cd';
import { AVAILABLE_COMMANDS, type CommandName } from '../../commands';
import type { SelectableItem } from '../../types';
import { getCategories, getPostsByCategory } from '../../commands/ls';
import { highlightCode } from '../../commands/cat';
import { startMatrixRain } from '../../commands/matrix';

// 主题定义
const themes = {
  default: {
    name: 'Default',
    bg: 'from-gray-900 via-gray-950 to-gray-950',
    primary: 'text-green-400',
    secondary: 'text-cyan-400',
    accent: 'text-purple-400',
    promptSymbol: 'text-purple-400',
    path: 'text-cyan-400',
    arrow: 'text-green-400',
    cursor: 'bg-emerald-400',
    selection: 'bg-green-700',
  },
  matrix: {
    name: 'Matrix',
    bg: 'from-black via-gray-900 to-black',
    primary: 'text-green-500',
    secondary: 'text-green-300',
    accent: 'text-green-400',
    promptSymbol: 'text-green-400',
    path: 'text-green-300',
    arrow: 'text-green-500',
    cursor: 'bg-green-400',
    selection: 'bg-green-700',
  },
  sunset: {
    name: 'Sunset',
    bg: 'from-purple-900 via-pink-900 to-orange-900',
    primary: 'text-orange-400',
    secondary: 'text-pink-400',
    accent: 'text-purple-400',
    promptSymbol: 'text-pink-400',
    path: 'text-orange-400',
    arrow: 'text-purple-400',
    cursor: 'bg-orange-400',
    selection: 'bg-pink-700',
  },
  ocean: {
    name: 'Ocean',
    bg: 'from-blue-900 via-cyan-900 to-teal-900',
    primary: 'text-cyan-400',
    secondary: 'text-blue-400',
    accent: 'text-teal-400',
    promptSymbol: 'text-cyan-400',
    path: 'text-blue-400',
    arrow: 'text-teal-400',
    cursor: 'bg-cyan-400',
    selection: 'bg-cyan-700',
  },
  fire: {
    name: 'Fire',
    bg: 'from-red-900 via-orange-900 to-yellow-900',
    primary: 'text-red-400',
    secondary: 'text-orange-400',
    accent: 'text-yellow-400',
    promptSymbol: 'text-orange-400',
    path: 'text-red-400',
    arrow: 'text-yellow-400',
    cursor: 'bg-red-400',
    selection: 'bg-red-700',
  },
  cyberpunk: {
    name: 'Cyberpunk',
    bg: 'from-gray-900 via-purple-900 to-pink-900',
    primary: 'text-yellow-400',
    secondary: 'text-pink-400',
    accent: 'text-cyan-400',
    promptSymbol: 'text-pink-400',
    path: 'text-yellow-400',
    arrow: 'text-cyan-400',
    cursor: 'bg-yellow-400',
    selection: 'bg-pink-700',
  },
  monochrome: {
    name: 'Monochrome',
    bg: 'from-gray-800 via-gray-900 to-black',
    primary: 'text-gray-300',
    secondary: 'text-gray-400',
    accent: 'text-white',
    promptSymbol: 'text-gray-400',
    path: 'text-gray-300',
    arrow: 'text-white',
    cursor: 'bg-gray-400',
    selection: 'bg-gray-600',
  },
};

type ThemeName = keyof typeof themes;

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
  // 当前主题
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('cyberpunk');
  const theme = themes[currentTheme];

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
  const [selectingLineIndex, setSelectingLineIndex] = useState(-1);

  // 复制代码块状态
  const [copiedBlockId, setCopiedBlockId] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const copyToClipboard = async (text: string, blockId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedBlockId(blockId);
      setTimeout(() => setCopiedBlockId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

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
                { type: 'input', content: `cd ${selectedItem.value}`, path: getPromptString() },
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
              // 直接打开详情页
              window.location.hash = `/article/${selectedItem.value}`;
              setIsSelecting(false);
              setSelectableItems([]);
              setSelectingLineIndex(-1);
              setSelectedIndex(0);
              setInputValue('');
              return;
            } else if (selectedItem.type === 'theme') {
              // 切换主题
              setCurrentTheme(selectedItem.value as ThemeName);
              setLines((prev) => [
                ...prev,
                { type: 'input', content: `theme ${selectedItem.value}`, path: getPromptString() },
                {
                  type: 'info',
                  content: [
                    '',
                    `  Theme switched to: ${selectedItem.label}`,
                    '',
                  ],
                },
              ]);
            }
          }
          setIsSelecting(false);
          setSelectableItems([]);
          setSelectingLineIndex(-1);
          setSelectedIndex(0);
          setInputValue('');
          return;
        } else if (e.key === 'Escape') {
          e.preventDefault();
          setIsSelecting(false);
          setSelectableItems([]);
          setSelectingLineIndex(-1);
          setSelectedIndex(0);
          setInputValue('');
          return;
        }
      }

      if (e.key === 'ArrowUp') {
        // 如果有可选择的项目，进入选择模式（只检查最后一行）
        const lastLine = lines[lines.length - 1];
        if (lastLine?.selectableItems && lastLine.selectableItems.length > 0) {
          e.preventDefault();
          setIsSelecting(true);
          setSelectableItems(lastLine.selectableItems);
          setSelectingLineIndex(lines.length - 1);
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
            const prompt = getPromptString();
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
            const prompt = getPromptString();
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

          // 特殊处理 matrix 命令 - 启动背景动画
          if (command === 'matrix') {
            startMatrixRain();
          }

          // 执行命令
          const result = executeCommand(command);

          // 添加输入行
          const prompt = getPromptString();
          setLines((prev) => [
            ...prev,
            { type: 'input', content: command, path: prompt },
          ]);

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
          const prompt = getPromptString();
          setLines((prev) => [...prev, { type: 'input', content: '', path: prompt }]);
        }

        setInputValue('');
      } else if (e.key === 'c' && e.ctrlKey) {
        e.preventDefault();
        const prompt = getPromptString();
        setLines((prev) => [
          ...prev,
          { type: 'input', content: inputValue + '^C', path: prompt },
        ]);
        setInputValue('');
      }
    },
    [inputValue, commandHistory, historyIndex, username, hostname, lines, isSelecting, selectableItems, selectedIndex]
  );

  // 生成炫酷的提示符（字符串版本，用于命令历史）
  const getPromptString = () => {
    const path = getFullPath() || '~';
    return `❯ ${path} │ ⟠`;
  };

  return (
    <div
      ref={terminalRef}
      className={`min-h-screen bg-gradient-to-b ${theme.bg} text-${theme.primary.split('-')[1]}-400 font-mono text-sm md:text-base p-4 md:p-6 transition-colors duration-500`}
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
          <div className="flex items-center gap-3 flex-1 justify-center">
            {/* Arch Linux 图标 */}
            <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 22h20L12 2zm0 3.5L18.5 20h-13L12 5.5z"/>
              <path d="M12 6L6 19h12L12 6zm0 2.5L14.5 17h-5L12 8.5z"/>
            </svg>
            <span className="text-gray-400 text-xs md:text-sm font-medium">
              <span className="opacity-75">{username}@{hostname}</span>
              <span className="mx-2 opacity-50">|</span>
              <span className="opacity-75">{getFullPath()}</span>
            </span>
          </div>
          <div className="text-gray-500 text-xs">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        {/* 终端内容区域 */}
        <div className={`bg-gray-950/80 rounded-b-lg rounded-tr-lg p-4 md:p-6 shadow-2xl border border-gray-800/50 transition-colors duration-500`}>
          <div className="space-y-3">
          {lines.map((line, index) => {

            if (line.type === 'input') {
              return (
                <div key={index} className="flex flex-wrap items-center">
                  <span className={`${theme.promptSymbol} font-bold mr-2`}>❯</span>
                  <span className={`${theme.path} font-bold whitespace-nowrap mr-2`}>
                    {typeof line.path === 'string' ? line.path.replace(/❯ /, '').replace(/ \| ⟠/, '') || '~' : line.path}
                  </span>
                  <span className="text-gray-500 mr-2">│</span>
                  <span className={`${theme.arrow} font-bold mr-2`}>⟠</span>
                  <span className={theme.primary}>{line.content}</span>
                </div>
              );
            }

            if (line.type === 'system') {
              return (
                <div key={index} className={theme.secondary}>
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
                <div key={index} className={theme.accent}>
                  {Array.isArray(line.content)
                    ? line.content.map((c, i) => <div key={i}>{c}</div>)
                    : line.content}
                </div>
              );
            }

            // output 类型，处理代码块和格式化文本
            if (Array.isArray(line.content)) {
              // 代码块状态
              let inCodeBlock = false;
              let codeBlockLang = '';
              const codeBlockLines: string[] = [];

              return (
                <div key={index} className="mb-3">
                  {line.content.map((c, i) => {
                    // 代码块开始标记 ```lang
                    if (typeof c === 'string' && c.startsWith('```')) {
                      if (!inCodeBlock) {
                        inCodeBlock = true;
                        codeBlockLang = c.slice(3).trim();
                        codeBlockLines.length = 0;
                        return null;
                      } else {
                        inCodeBlock = false;
                        const codeContent = codeBlockLines.join('\n');
                        const blockId = `${index}-${i}`;
                        const isCopied = copiedBlockId === blockId;
                        return (
                          <div key={i} className="mt-2 mb-2 rounded-md overflow-hidden border border-gray-700">
                            <div className="bg-gray-800/80 px-3 py-1.5 text-xs font-mono text-cyan-400 border-b border-gray-700 flex items-center justify-between">
                              <span>{codeBlockLang || 'code'}</span>
                              <button
                                onClick={() => copyToClipboard(codeContent, blockId)}
                                className={`flex items-center gap-1 px-2 py-0.5 rounded transition-all duration-200 ${
                                  isCopied
                                    ? 'text-green-400 bg-green-400/10'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                                }`}
                                title={isCopied ? '已复制' : '复制代码'}
                              >
                                {isCopied ? (
                                  <>
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-xs">已复制</span>
                                  </>
                                ) : (
                                  <>
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-xs">复制</span>
                                  </>
                                )}
                              </button>
                            </div>
                            <div className="bg-gray-900 px-4 py-3 overflow-x-auto">
                              <pre 
                                className={`text-sm leading-relaxed ${theme.primary}`}
                                style={{ fontFamily: "'IBM Plex Mono', 'BlexMono Nerd Font', 'JetBrains Mono', monospace", letterSpacing: '0.02em' }}
                              >
                                <code dangerouslySetInnerHTML={{ __html: highlightCode(codeContent, codeBlockLang) }} />
                              </pre>
                            </div>
                          </div>
                        );
                      }
                    }

                    if (inCodeBlock) {
                      codeBlockLines.push(c);
                      return null;
                    }

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

                    // 隐藏文章装饰线（═ 和 ─ 开头的行）
                    if (typeof c === 'string' && /^[ ═─]+$/.test(c) && c.length > 5) {
                      return null;
                    }

                    // 表格处理
                    if (typeof c === 'string') {
                      // 表格开始
                      if (c === '__TABLE_START__') {
                        return null;
                      }
                      // 表格结束
                      if (c === '__TABLE_END__') {
                        return null;
                      }
                      // 表头
                      const headerMatch = c.match(/^__TABLE_HEADER__(\[[\s\S]*?\])__TABLE_HEADER_END__$/);
                      if (headerMatch) {
                        const headers = JSON.parse(headerMatch[1]) as string[];
                        return (
                          <div key={i} className="my-4 overflow-hidden rounded-lg border border-gray-700">
                            <div className="grid" style={{ gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))` }}>
                              <div className="contents">
                                {headers.map((header, idx) => (
                                  <div
                                    key={idx}
                                    className="px-4 py-3 bg-gradient-to-b from-purple-900/50 to-purple-800/30 text-purple-200 font-bold text-sm border-b border-gray-700 first:border-l-0 last:border-r-0 border-l border-r border-gray-700"
                                  >
                                    {header}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        );
                      }
                      // 表格行
                      const rowMatch = c.match(/^__TABLE_ROW__(\[[\s\S]*?\])__TABLE_ROW_END__$/);
                      if (rowMatch) {
                        const cells = JSON.parse(rowMatch[1]) as string[];
                        return (
                          <div className="grid" style={{ gridTemplateColumns: `repeat(${cells.length}, minmax(0, 1fr))` }}>
                            <div className="contents">
                              {cells.map((cell, idx) => (
                                <div
                                  key={idx}
                                  className={`px-4 py-2.5 text-sm border-b border-gray-800 first:border-l-0 last:border-r-0 border-l border-r border-gray-700 ${
                                    idx % 2 === 0 ? 'bg-gray-800/30' : 'bg-gray-800/10'
                                  } text-gray-300 hover:bg-gray-700/50 transition-colors`}
                                >
                                  {cell}
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      }
                    }

                    // 解析格式化标记
                    if (typeof c === 'string') {
                      // 检查是否是可选择列表中的项（只高亮当前选择的行）
                      let displayContent = c;
                      let itemClass = '';

                      if (isSelecting && line.selectableItems && index === selectingLineIndex) {
                        const trimmed = c.trim().replace(/\/$/, '').replace(/\.md$/, '');
                        const matchingIndex = line.selectableItems.findIndex(
                          (item) => item.value === trimmed
                        );

                        if (matchingIndex !== -1) {
                          if (matchingIndex === selectedIndex) {
                            itemClass = `${theme.selection} text-white `;
                            displayContent = `> ${c.trim()} `;
                          } else {
                            displayContent = `  ${c.trim()}`;
                          }
                        }
                      }

                      const parts = displayContent.split(/(__BOLD__|__BOLDEND__|__ITALIC__|__ITALICEND__|__INLINE_CODE_START__|__INLINE_CODE_END__|__H1__|__H1END__|__H2__|__H2END__|__H3__|__H3END__)/);
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
                        } else if (part === '__INLINE_CODE_START__') {
                          inCode = true;
                          return null;
                        } else if (part === '__INLINE_CODE_END__') {
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
            <span className="flex items-center gap-2">
              <span className={`${theme.promptSymbol} font-bold`}>❯</span>
              <span className={`${theme.path} font-bold`}>{getFullPath() || '~'}</span>
              <span className="text-gray-500">│</span>
              <span className={`${theme.arrow} font-bold`}>⟠</span>
            </span>
            <span className={`${theme.primary} flex items-center bg-gray-900/70 px-3 py-1.5 rounded-md border border-gray-700/50 shadow-inner min-w-[200px]`}>
              {isSelecting ? (
                <span className={theme.accent}>
                  {selectedIndex >= 0 && selectableItems[selectedIndex]
                    ? `${selectableItems[selectedIndex].value} (press Enter to open, Esc to cancel)`
                    : '(press Esc to cancel)'}
                </span>
              ) : (
                <>
                  {inputValue}
                  <span
                    className={`inline-block w-3 h-5 ${theme.cursor} ml-1 rounded-sm ${
                      isCursorVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ boxShadow: `0 0 8px rgba(${currentTheme === 'fire' ? '248, 113, 113' : currentTheme === 'sunset' ? '251, 113, 133' : currentTheme === 'cyberpunk' ? '250, 204, 21' : '52, 211, 153'}, 0.6)` }}
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
