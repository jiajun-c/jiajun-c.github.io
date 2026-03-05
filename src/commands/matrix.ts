import type { CommandResult } from '../types';
import { registerCommand } from './index';

const matrixHandler = (): CommandResult => {
  // 生成黑客帝国风格的字符雨
  const katakana = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ';

  const width = 40;
  const height = 15;
  const lines: string[] = [''];

  for (let i = 0; i < height; i++) {
    let line = '  ';
    for (let j = 0; j < width; j++) {
      const char = katakana[Math.floor(Math.random() * katakana.length)];
      // 随机使用不同亮度的绿色
      line += char;
    }
    lines.push(line);
  }

  lines.push('');
  lines.push('  Follow the white rabbit...');
  lines.push('');

  return {
    type: 'success',
    output: lines,
  };
};

registerCommand('matrix', matrixHandler);
