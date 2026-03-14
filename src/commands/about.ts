import type { CommandResult } from '../types';
import { registerCommand } from './index';

const aboutHandler = (): CommandResult => {
  // 打开详情页
  window.location.hash = '/about';
  return {
    type: 'success',
    output: [
      '',
      '  Opening about page...',
      '',
    ],
  };
};

registerCommand('about', aboutHandler);
