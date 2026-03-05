import type { CommandResult } from '../types';
import { registerCommand } from './index';

const clearHandler = (): CommandResult => {
  // 返回一个特殊标记，由 Terminal 组件处理清屏
  return {
    type: 'success',
    output: ['__CLEAR__'],
  };
};

registerCommand('clear', clearHandler);
