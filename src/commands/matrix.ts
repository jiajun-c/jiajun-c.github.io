import type { CommandResult } from '../types';
import { registerCommand } from './index';

const matrixHandler = (): CommandResult => {
  return {
    type: 'success',
    output: [
      '',
      '  🌧️ Digital rain started (5 seconds)',
      '',
    ],
  };
};

registerCommand('matrix', matrixHandler);

// 数字雨动画相关
let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;
let animationId: number | null = null;
let isMatrixActive = false;

// 开始数字雨动画
export function startMatrixRain(): void {
  if (isMatrixActive) return;
  isMatrixActive = true;

  // 创建或获取 canvas
  canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '1000';
  canvas.style.pointerEvents = 'none';
  canvas.style.background = 'transparent';
  document.body.appendChild(canvas);

  const resizeCanvas = () => {
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  };
  resizeCanvas();

  ctx = canvas.getContext('2d');
  if (!ctx) return;

  // 数字雨字符 - 使用黑客风格的数字和符号
  const matrixChars = '0123456789ABCDEFabcdef<>{}[]()$#@&*|/\\';
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  const drops: number[] = [];

  // 初始化每列的下落位置
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100;
  }

  // 绘制函数
  const draw = () => {
    if (!ctx || !canvas) return;

    // 半透明黑色覆盖，形成拖尾效果
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 设置字体样式 - 黑客风格的绿色
    ctx.fillStyle = '#0f0';
    ctx.font = `${fontSize}px 'Courier New', monospace`;

    // 绘制每一列
    for (let i = 0; i < drops.length; i++) {
      // 随机字符
      const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];

      // 某些字符使用亮绿色/白色，形成闪烁效果
      if (Math.random() > 0.95) {
        ctx.fillStyle = '#aff';
      } else if (Math.random() > 0.9) {
        ctx.fillStyle = '#6f6';
      } else {
        ctx.fillStyle = '#0f0';
      }

      // 绘制字符
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);

      // 重置到顶部或继续下落
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }

    animationId = requestAnimationFrame(draw);
  };

  // 开始动画
  draw();

  // 5 秒后停止
  setTimeout(() => {
    stopMatrixRain();
  }, 5000);
}

// 停止数字雨动画
export function stopMatrixRain(): void {
  if (!isMatrixActive) return;

  isMatrixActive = false;

  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }

  if (canvas) {
    canvas.remove();
    canvas = null;
  }

  ctx = null;
}
