import type { CommandResult } from '../types';
import { registerCommand } from './index';

const neofetchHandler = (): CommandResult => {
  // 使用简单的 ASCII 字符画代替 Unicode
  const asciiArt = [
    '       /\\',
    '      /  \\',
    '     / /\\ \\',
    '    / ____ \\',
    '   /_/    \\_\\',
    '  TERMINAL BLOG',
  ];

  const info = [
    '',
    '----------------------------------------',
    '',
  ];

  // 系统信息
  const systemInfo = [
    '  OS:        Terminal Blog v1.0.0',
    '  Shell:     React Terminal',
    '  Theme:     Default (Green Matrix)',
    '  Resolution: Client-side only',
    '  User:      Guest',
    '',
  ];

  // 颜色条使用文字描述
  const colors = [
    '  Colors:',
    '  [0] Black   [4] Blue',
    '  [1] Red     [5] Purple',
    '  [2] Green   [6] Cyan',
    '  [3] Yellow  [7] White',
    '',
  ];

  return {
    type: 'success',
    output: [
      '',
      ...asciiArt,
      ...info,
      ...systemInfo,
      ...colors,
    ],
  };
};

registerCommand('neofetch', neofetchHandler);
