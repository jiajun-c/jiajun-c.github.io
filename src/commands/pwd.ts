import type { CommandResult } from '../types';
import { registerCommand } from './index';
import { getFullPath } from './cd';

const pwdHandler = (): CommandResult => {
  return {
    type: 'success',
    output: [getFullPath()],
  };
};

registerCommand('pwd', pwdHandler);
