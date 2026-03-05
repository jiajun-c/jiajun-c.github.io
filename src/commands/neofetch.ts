import type { CommandResult } from '../types';
import { registerCommand } from './index';

const neofetchHandler = (): CommandResult => {
  const asciiArt = [
    '       ███╗   ██╗███████╗██╗  ██╗',
    '       ████╗  ██║██╔════╝██║  ██║',
    '       ██╔██╗ ██║█████╗  ███████║',
    '       ██║╚██╗██║██╔══╝  ╚════██║',
    '       ██║ ╚████║███████╗     ██║',
    '       ╚═╝  ╚═══╝╚══════╝     ╚═╝',
  ];

  const info = [
    '',
    `${'█'.repeat(50)}`,
    '',
  ];

  // 系统信息
  const systemInfo = [
    `  ${'█'.repeat(2)}  OS: Terminal Blog v1.0.0`,
    `  ${'█'.repeat(2)}  Shell: React Terminal`,
    `  ${'█'.repeat(2)}  Resolution: ${typeof window !== 'undefined' ? `${window.screen.width}x${window.screen.height}` : 'N/A'}`,
    `  ${'█'.repeat(2)}  Theme: Default (Green Matrix)`,
    `  ${'█'.repeat(2)}  CPU: Virtual Core`,
    `  ${'█'.repeat(2)}  Memory: N/A`,
    `  ${'█'.repeat(2)}  User: Guest`,
    `  ${'█'.repeat(2)}  Uptime: Since page load`,
    '',
  ];

  // 颜色条
  const colors = [
    `  ${'█'.repeat(8)}`,
    '  ████ ████ ████ ████ ████ ████ ████ ████',
    '  \x1b[30m█\x1b[0m \x1b[31m█\x1b[0m \x1b[32m█\x1b[0m \x1b[33m█\x1b[0m \x1b[34m█\x1b[0m \x1b[35m█\x1b[0m \x1b[36m█\x1b[0m \x1b[37m█\x1b[0m',
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
