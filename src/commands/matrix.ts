import type { CommandResult } from '../types';
import { registerCommand } from './index';

const matrixHandler = (): CommandResult => {
  // 生成黑客帝国风格的字符雨
  const chars = '01XYZ ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ';

  const width = 50;
  const height = 20;
  const lines: string[] = [''];

  // 生成多列字符雨
  for (let i = 0; i < height; i++) {
    let line = '  ';
    for (let j = 0; j < width; j++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      line += char;
    }
    lines.push(line);
  }

  lines.push('');
  lines.push('  Wake up, Neo...');
  lines.push('  The Matrix has you...');
  lines.push('  Follow the white rabbit.');
  lines.push('');

  return {
    type: 'success',
    output: lines,
  };
};

registerCommand('matrix', matrixHandler);
