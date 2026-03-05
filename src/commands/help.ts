import type { CommandResult } from '../types';
import { registerCommand } from './index';

const helpHandler = (): CommandResult => {
  return {
    type: 'success',
    output: [
      '',
      'Available commands:',
      '',
      '  File System:',
      '    ls [path]         - List categories or articles',
      '    cat <article>     - Read an article',
      '    cd <category>     - Navigate to category',
      '    pwd               - Show current path',
      '',
      '  Navigation:',
      '    search <keyword>  - Search articles by keyword',
      '    history           - Show command history',
      '    imgview <index>   - View image by index',
      '',
      '  Cool Commands:',
      '    neofetch          - Display system information',
      '    matrix            - Show Matrix-style rain',
      '    clock             - Display ASCII digital clock',
      '    theme             - Change terminal theme',
      '',
      '  Utilities:',
      '    help              - Show this help message',
      '    clear             - Clear the screen',
      '',
      'Navigation tips:',
      '  - Use ↑/↓ arrows to select items from ls output',
      '  - Press Enter to open selected item',
      '  - Press Esc to cancel selection',
      '  - Tab for auto-completion',
      '',
    ],
  };
};

registerCommand('help', helpHandler);
