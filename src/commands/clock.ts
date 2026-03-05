import type { CommandResult } from '../types';
import { registerCommand } from './index';

// ASCII 数字字体
const asciiNumbers: Record<string, string[]> = {
  '0': [
    ' ███ ',
    '█  █',
    '█  █',
    '█  █',
    ' ███ ',
  ],
  '1': [
    '  █ ',
    ' ██ ',
    '  █ ',
    '  █ ',
    '████',
  ],
  '2': [
    ' ███',
    '█  █',
    '  ██',
    ' █  ',
    '████',
  ],
  '3': [
    '████',
    '   █',
    ' ██ ',
    '   █',
    '████',
  ],
  '4': [
    '█  █',
    '█  █',
    '████',
    '   █',
    '   █',
  ],
  '5': [
    '████',
    '█   ',
    '███ ',
    '   █',
    '███ ',
  ],
  '6': [
    ' ███',
    '█   ',
    '████',
    '█  █',
    ' ███',
  ],
  '7': [
    '████',
    '   █',
    '  █ ',
    ' █  ',
    ' █  ',
  ],
  '8': [
    ' ███',
    '█  █',
    ' ███',
    '█  █',
    ' ███',
  ],
  '9': [
    ' ███',
    '█  █',
    ' ████',
    '   █',
    ' ███',
  ],
  ':': [
    '    ',
    ' ██ ',
    '    ',
    ' ██ ',
    '    ',
  ],
  ' ': [
    '    ',
    '    ',
    '    ',
    '    ',
    '    ',
  ],
};

function renderTime(time: string): string[] {
  const lines: string[] = ['', ''];

  for (let row = 0; row < 5; row++) {
    let line = '  ';
    for (const char of time) {
      const digit = asciiNumbers[char] || asciiNumbers[' '];
      line += (digit[row] || '     ') + ' ';
    }
    lines.push(line);
  }

  return lines;
}

const clockHandler = (): CommandResult => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const time = `${hours}:${minutes}`;

  const output = [
    '',
    ...renderTime(time),
    '',
    `  ${now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`,
    '',
  ];

  return {
    type: 'success',
    output,
  };
};

registerCommand('clock', clockHandler);
