import type { CommandResult } from '../types';
import { registerCommand } from './index';

// 存储当前可用的图片列表
let currentImages: Array<{ alt: string; src: string }> = [];

export function setCurrentImages(images: Array<{ alt: string; src: string }>) {
  currentImages = images;
}

export function getCurrentImages() {
  return currentImages;
}

export function getImageByIndex(index: number) {
  return currentImages[index] || null;
}

const imgviewHandler = (args: string[]): CommandResult => {
  if (args.length === 0) {
    return {
      type: 'error',
      output: ['imgview: missing image index. Usage: imgview <index> (e.g., imgview 0)'],
    };
  }

  const [indexStr] = args;
  const index = parseInt(indexStr, 10);

  if (isNaN(index)) {
    return {
      type: 'error',
      output: [`imgview: invalid index: ${indexStr}`],
    };
  }

  const image = getImageByIndex(index);

  if (!image) {
    return {
      type: 'error',
      output: [`imgview: image ${index} not found`],
    };
  }

  return {
    type: 'success',
    output: [
      '',
      `  Opening image: ${image.alt}`,
      `  Source: ${image.src}`,
      '',
    ],
  };
};

registerCommand('imgview', imgviewHandler);
