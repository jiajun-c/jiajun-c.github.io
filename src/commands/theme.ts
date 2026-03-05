import type { CommandResult } from '../types';
import { registerCommand } from './index';

// 可用的主题列表
const themes = {
  default: {
    name: 'Default',
    primary: 'text-green-400',
    secondary: 'text-cyan-400',
    accent: 'text-purple-400',
    bg: 'from-gray-900 via-gray-950 to-gray-950',
  },
  matrix: {
    name: 'Matrix',
    primary: 'text-green-500',
    secondary: 'text-green-300',
    accent: 'text-green-400',
    bg: 'from-black via-gray-900 to-black',
  },
  sunset: {
    name: 'Sunset',
    primary: 'text-orange-400',
    secondary: 'text-pink-400',
    accent: 'text-purple-400',
    bg: 'from-purple-900 via-pink-900 to-orange-900',
  },
  ocean: {
    name: 'Ocean',
    primary: 'text-cyan-400',
    secondary: 'text-blue-400',
    accent: 'text-teal-400',
    bg: 'from-blue-900 via-cyan-900 to-teal-900',
  },
  fire: {
    name: 'Fire',
    primary: 'text-red-400',
    secondary: 'text-orange-400',
    accent: 'text-yellow-400',
    bg: 'from-red-900 via-orange-900 to-yellow-900',
  },
  cyberpunk: {
    name: 'Cyberpunk',
    primary: 'text-yellow-400',
    secondary: 'text-pink-400',
    accent: 'text-cyan-400',
    bg: 'from-gray-900 via-purple-900 to-pink-900',
  },
  monochrome: {
    name: 'Monochrome',
    primary: 'text-gray-300',
    secondary: 'text-gray-400',
    accent: 'text-white',
    bg: 'from-gray-800 via-gray-900 to-black',
  },
} as const;

type ThemeName = keyof typeof themes;

const themeHandler = (args: string[]): CommandResult => {
  if (args.length === 0) {
    // 显示所有可用主题
    const output = [
      '',
      'Available themes:',
      '',
    ];

    (Object.keys(themes) as ThemeName[]).forEach((themeName) => {
      const theme = themes[themeName];
      output.push(`  ${themeName.padEnd(12)} - ${theme.name}`);
    });

    output.push('');
    output.push('Usage: theme <name>');
    output.push('');

    return {
      type: 'info',
      output,
    };
  }

  const [themeName] = args;

  if (themeName && themeName in themes) {
    // 这里只是预览主题，实际主题切换需要在 Terminal 组件中实现
    const theme = themes[themeName as ThemeName];

    return {
      type: 'success',
      output: [
        '',
        `Theme "${theme.name}" preview:`,
        '',
        `  Primary color:   ████ ${theme.primary}`,
        `  Secondary color: ████ ${theme.secondary}`,
        `  Accent color:    ████ ${theme.accent}`,
        `  Background:      ████ ${theme.bg}`,
        '',
        'Note: Theme switching will be available in future updates.',
        '',
      ],
    };
  }

  return {
    type: 'error',
    output: [
      '',
      `Unknown theme: ${themeName}`,
      'Available themes: ' + Object.keys(themes).join(', '),
      '',
    ],
  };
};

registerCommand('theme', themeHandler);
