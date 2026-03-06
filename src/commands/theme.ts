import type { CommandResult, SelectableItem } from '../types';
import { registerCommand } from './index';

// 可用的主题列表
const themes = [
  {
    name: 'default',
    displayName: 'Default',
    primary: '█',
    secondary: '█',
    accent: '█',
    primaryColor: 'text-green-400',
    secondaryColor: 'text-cyan-400',
    accentColor: 'text-purple-400',
    description: 'Classic green terminal',
  },
  {
    name: 'matrix',
    displayName: 'Matrix',
    primary: '█',
    secondary: '█',
    accent: '█',
    primaryColor: 'text-green-500',
    secondaryColor: 'text-green-300',
    accentColor: 'text-green-400',
    description: 'Matrix green aesthetic',
  },
  {
    name: 'sunset',
    displayName: 'Sunset',
    primary: '█',
    secondary: '█',
    accent: '█',
    primaryColor: 'text-orange-400',
    secondaryColor: 'text-pink-400',
    accentColor: 'text-purple-400',
    description: 'Warm sunset colors',
  },
  {
    name: 'ocean',
    displayName: 'Ocean',
    primary: '█',
    secondary: '█',
    accent: '█',
    primaryColor: 'text-cyan-400',
    secondaryColor: 'text-blue-400',
    accentColor: 'text-teal-400',
    description: 'Cool ocean blues',
  },
  {
    name: 'fire',
    displayName: 'Fire',
    primary: '█',
    secondary: '█',
    accent: '█',
    primaryColor: 'text-red-400',
    secondaryColor: 'text-orange-400',
    accentColor: 'text-yellow-400',
    description: 'Hot fire colors',
  },
  {
    name: 'cyberpunk',
    displayName: 'Cyberpunk',
    primary: '█',
    secondary: '█',
    accent: '█',
    primaryColor: 'text-yellow-400',
    secondaryColor: 'text-pink-400',
    accentColor: 'text-cyan-400',
    description: 'Neon cyberpunk style',
  },
  {
    name: 'monochrome',
    displayName: 'Monochrome',
    primary: '█',
    secondary: '█',
    accent: '█',
    primaryColor: 'text-gray-300',
    secondaryColor: 'text-gray-400',
    accentColor: 'text-white',
    description: 'Clean grayscale',
  },
];

const themeHandler = (args: string[]): CommandResult => {
  if (args.length === 0) {
    // 显示所有可用主题，带可选择项目
    const output = [
      '',
      'Available themes (use ↑/↓ to select, Enter to preview):',
      '',
    ];

    const selectableItems: SelectableItem[] = [];

    themes.forEach((theme) => {
      output.push(`  ${theme.name.padEnd(12)} - ${theme.displayName}`);
      selectableItems.push({
        type: 'theme',
        value: theme.name,
        label: theme.displayName,
      });
    });

    output.push('');
    output.push('Usage: theme <name>');
    output.push('');

    return {
      type: 'info',
      output,
      selectableItems,
    };
  }

  const [themeName] = args;

  if (themeName) {
    const theme = themes.find((t) => t.name === themeName);

    if (theme) {
      return {
        type: 'success',
        output: [
          '',
          `Theme: ${theme.displayName}`,
          '',
          `  ${theme.description}`,
          '',
          '  Color Preview:',
          `    Primary:   ${theme.primaryColor.replace('text-', '')}`,
          `    Secondary: ${theme.secondaryColor.replace('text-', '')}`,
          `    Accent:    ${theme.accentColor.replace('text-', '')}`,
          '',
        ],
      };
    }
  }

  return {
    type: 'error',
    output: [
      '',
      `Unknown theme: ${themeName}`,
      'Available themes: ' + themes.map((t) => t.name).join(', '),
      '',
    ],
  };
};

registerCommand('theme', themeHandler);
