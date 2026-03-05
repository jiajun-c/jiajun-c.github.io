import type { CommandResult } from '../types';
import { registerCommand } from './index';

const helpHandler = (): CommandResult => {
  return {
    type: 'success',
    output: [
      '',
      'Available commands:',
      '',
      '  help              - Show this help message',
      '  ls [path]         - List categories or articles',
      '  cat <article>     - Read an article',
      '  search <keyword>  - Search articles by keyword',
      '  cd <category>     - Navigate to category',
      '  pwd               - Show current path',
      '  clear             - Clear the screen',
      '  history           - Show command history',
      '  imgview <index>   - View image by index (e.g., imgview 0)',
      '',
      'Navigation tips:',
      '  - Use ↑/↓ arrows to select items from ls output',
      '  - Press Enter to open selected item',
      '  - Press Esc to cancel selection',
      '',
    ],
  };
};

registerCommand('help', helpHandler);
