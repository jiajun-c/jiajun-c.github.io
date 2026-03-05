import type { CommandResult } from '../types';
import { registerCommand } from './index';

export const historyHandler = (_args: string[], history?: string[]): CommandResult => {
  if (!history || history.length === 0) {
    return {
      type: 'info',
      output: ['  (no command history)'],
    };
  }

  const output = [''];
  history.forEach((cmd, index) => {
    output.push(`  ${index + 1}  ${cmd}`);
  });
  output.push('');

  return {
    type: 'success',
    output,
  };
};

// 注册不带历史参数的版本（实际历史由 Terminal 注入）
registerCommand('history', (args) => historyHandler(args));
