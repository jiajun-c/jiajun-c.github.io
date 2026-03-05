import type { CommandResult } from '../types';
import { getCommand, commandExists, getAllCommands } from '../commands';
import { historyHandler } from '../commands/history';

// 命令执行历史记录
let executionHistory: string[] = [];

export function getExecutionHistory(): string[] {
  return [...executionHistory];
}

export function addToHistory(command: string): void {
  executionHistory.push(command);
}

export function clearHistory(): void {
  executionHistory = [];
}

// 解析并执行命令
export function executeCommand(input: string): CommandResult {
  // 添加到执行历史
  addToHistory(input);

  // 解析命令和参数
  const parts = input.trim().split(/\s+/);
  const commandName = parts[0];
  const args = parts.slice(1);

  // 检查命令是否存在
  if (!commandExists(commandName)) {
    return {
      type: 'error',
      output: [
        '',
        `Command not found: ${commandName}`,
        `Type 'help' for available commands`,
        '',
      ],
    };
  }

  // 获取并执行命令
  const handler = getCommand(commandName);

  if (!handler) {
    return {
      type: 'error',
      output: [`Error: Command handler not found for ${commandName}`],
    };
  }

  // 特殊处理 history 命令，传入历史记录
  if (commandName === 'history') {
    return historyHandler(args, executionHistory.slice(0, -1));
  }

  try {
    return handler(args);
  } catch (error) {
    return {
      type: 'error',
      output: [
        '',
        `Error executing command: ${error instanceof Error ? error.message : String(error)}`,
        '',
      ],
    };
  }
}

// 获取命令补全建议
export function getCommandSuggestions(partial: string): string[] {
  const commands = getAllCommands();
  return commands.filter((cmd) => cmd.startsWith(partial.toLowerCase()));
}
