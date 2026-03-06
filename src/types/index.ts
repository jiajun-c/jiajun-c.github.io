// 博客文章类型定义
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  description: string;
  content: string;
  draft?: boolean;
}

// 目录结构类型
export interface Directory {
  name: string;
  type: 'dir' | 'file';
  children?: Directory[];
  post?: BlogPost;
}

// 命令执行结果类型
export interface CommandResult {
  output: string[];
  type: 'success' | 'error' | 'info';
  // 可选：支持交互式选择的项目列表
  selectableItems?: SelectableItem[];
  // 可选：提示信息
  hint?: string;
  // 可选：文章中的图片列表（用于查看）
  images?: ImageInfo[];
}

// 图片信息
export interface ImageInfo {
  index: number;
  alt: string;
  src: string;
  lineIndex: number;
}

// 可选择的项目类型
export interface SelectableItem {
  value: string;
  label: string;
  type: 'category' | 'article' | 'file' | 'theme';
}

// 终端状态类型
export interface TerminalState {
  history: string[];
  historyIndex: number;
  currentPath: string[];
  commands: Array<{ command: string; output: string[] }>;
}

// 命令处理器类型
export type CommandHandler = (args: string[]) => CommandResult;

// 命令定义类型
export interface CommandDefinition {
  name: string;
  description: string;
  usage: string;
  handler: CommandHandler;
}
