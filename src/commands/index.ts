import type { CommandHandler } from '../types';

// 所有可用的命令名称
export const AVAILABLE_COMMANDS = [
  'help',
  'ls',
  'cd',
  'cat',
  'pwd',
  'clear',
  'search',
  'history',
  'theme',
  'neofetch',
  'matrix',
  'clock',
  'about',
] as const;

export type CommandName = typeof AVAILABLE_COMMANDS[number];

// 命令注册表
export const commandRegistry = new Map<CommandName, CommandHandler>();

// 注册命令
export function registerCommand(name: CommandName, handler: CommandHandler): void {
  commandRegistry.set(name, handler);
}

// 获取命令
export function getCommand(name: string): CommandHandler | undefined {
  return commandRegistry.get(name as CommandName);
}

// 检查命令是否存在
export function commandExists(name: string): boolean {
  return commandRegistry.has(name as CommandName);
}

// 获取所有命令名称
export function getAllCommands(): CommandName[] {
  return [...AVAILABLE_COMMANDS];
}
