import { test, expect } from '@playwright/test';

test.describe('Terminal Blog - Functional Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
    await page.waitForSelector('.font-mono');
  });

  test.describe('Command Tests', () => {
    test('help command displays available commands', async ({ page }) => {
      await page.locator('input[type="text"]').focus();
      await page.keyboard.type('help');
      await page.keyboard.press('Enter');

      await expect(page.getByText('Available commands:')).toBeVisible();
      await expect(page.getByText('help')).toBeVisible();
      await expect(page.getByText('ls')).toBeVisible();
      await expect(page.getByText('cat')).toBeVisible();
      await expect(page.getByText('cd')).toBeVisible();
      await expect(page.getByText('pwd')).toBeVisible();
      await expect(page.getByText('clear')).toBeVisible();
      await expect(page.getByText('search')).toBeVisible();
      await expect(page.getByText('history')).toBeVisible();
      await expect(page.getByText('imgview')).toBeVisible();
    });

    test('ls command shows categories at root level', async ({ page }) => {
      await page.locator('input[type="text"]').focus();
      await page.keyboard.type('ls');
      await page.keyboard.press('Enter');

      await expect(page.getByText('tech/')).toBeVisible();
      await expect(page.getByText('life/')).toBeVisible();
      await expect(page.getByText('projects/')).toBeVisible();
    });

    test('pwd command shows current path', async ({ page }) => {
      await page.locator('input[type="text"]').focus();
      await page.keyboard.type('pwd');
      await page.keyboard.press('Enter');

      await expect(page.getByText('~')).toBeVisible();
    });

    test('cd command navigates to category', async ({ page }) => {
      await page.locator('input[type="text"]').focus();
      await page.keyboard.type('cd tech');
      await page.keyboard.press('Enter');

      await page.locator('input[type="text"]').focus();
      await page.keyboard.type('pwd');
      await page.keyboard.press('Enter');

      await expect(page.getByText('~/tech')).toBeVisible();
    });

    test('cat command displays article content', async ({ page }) => {
      await page.locator('input[type="text"]').focus();
      await page.keyboard.type('cat rust-intro');
      await page.keyboard.press('Enter');

      await expect(page.getByText('Rust 入门指南')).toBeVisible();
      await expect(page.getByText('什么是 Rust?')).toBeVisible();
    });

    test('clear command clears the screen', async ({ page }) => {
      // First execute some commands
      await page.locator('input[type="text"]').focus();
      await page.keyboard.type('help');
      await page.keyboard.press('Enter');

      await page.locator('input[type="text"]').focus();
      await page.keyboard.type('clear');
      await page.keyboard.press('Enter');

      // After clear, should see welcome message
      await expect(page.getByText("Welcome to kota@blog")).toBeVisible();
      // Old content should be gone
      await expect(page.getByText('Available commands:')).not.toBeVisible();
    });

    test('history command shows command history', async ({ page }) => {
      await page.locator('input[type="text"]').focus();
      await page.keyboard.type('ls');
      await page.keyboard.press('Enter');

      await page.locator('input[type="text"]').focus();
      await page.keyboard.type('history');
      await page.keyboard.press('Enter');

      await expect(page.getByText('ls')).toBeVisible();
    });

    test('search command finds articles', async ({ page }) => {
      await page.locator('input[type="text"]').focus();
      await page.keyboard.type('search rust');
      await page.keyboard.press('Enter');

      await expect(page.getByText('rust-intro.md')).toBeVisible();
      await expect(page.getByText(/found/i)).toBeVisible();
    });

    test('imgview command without args shows error', async ({ page }) => {
      await page.locator('input[type="text"]').focus();
      await page.keyboard.type('imgview');
      await page.keyboard.press('Enter');

      await expect(page.getByText('imgview: missing image index')).toBeVisible();
    });
  });

  test.describe('Interactive Selection Tests', () => {
    test('arrow keys navigate list items', async ({ page }) => {
      // Execute ls to show list
      await page.locator('input[type="text"]').focus();
      await page.keyboard.type('ls');
      await page.keyboard.press('Enter');

      // Press up arrow to enter selection mode
      await page.locator('input[type="text"]').focus();
      await page.keyboard.press('ArrowUp');

      // Should show selection indicator
      await page.waitForTimeout(500);

      // Press down arrow to navigate
      await page.keyboard.press('ArrowDown');
      await page.waitForTimeout(300);

      // Should still be in selection mode
      const selectionIndicator = page.locator('text=press Enter to open');
      await expect(selectionIndicator).toBeVisible();
    });

    test('Enter key opens selected item', async ({ page }) => {
      // Execute ls to show categories
      await page.locator('input[type="text"]').focus();
      await page.keyboard.type('ls');
      await page.keyboard.press('Enter');

      // Enter selection mode
      await page.locator('input[type="text"]').focus();
      await page.keyboard.press('ArrowUp');
      await page.waitForTimeout(300);

      // Press Enter to open first selected item
      await page.keyboard.press('Enter');
      await page.waitForTimeout(500);

      // Should have navigated into a category
      const pwdResult = await page.evaluate(() => {
        const allText = document.body.innerText;
        return allText.includes('~/tech') || allText.includes('~/life') || allText.includes('~/projects');
      });
      expect(pwdResult).toBe(true);
    });

    test('Escape key cancels selection', async ({ page }) => {
      // Execute ls to show list
      await page.locator('input[type="text"]').focus();
      await page.keyboard.type('ls');
      await page.keyboard.press('Enter');

      // Enter selection mode
      await page.locator('input[type="text"]').focus();
      await page.keyboard.press('ArrowUp');
      await page.waitForTimeout(300);

      // Press Escape to cancel
      await page.keyboard.press('Escape');
      await page.waitForTimeout(300);

      // Selection should be cancelled
      const selectionIndicator = page.locator('text=press Enter to open');
      await expect(selectionIndicator).not.toBeVisible();
    });
  });

  test.describe('Article with Images Tests', () => {
    test('cat demo-post displays article with images', async ({ page }) => {
      await page.locator('input[type="text"]').focus();
      await page.keyboard.type('cat demo-post');
      await page.keyboard.press('Enter');

      await expect(page.getByText('技术博客演示')).toBeVisible();

      // Check if image elements are rendered
      const images = page.locator('img');
      const imageCount = await images.count();
      expect(imageCount).toBeGreaterThan(0);
    });

    test('cat portfolio displays article with images', async ({ page }) => {
      await page.locator('input[type="text"]').focus();
      await page.keyboard.type('cat portfolio');
      await page.keyboard.press('Enter');

      await expect(page.getByText('我的项目展示')).toBeVisible();

      // Check if image elements are rendered
      const images = page.locator('img');
      const count = await images.count();
      expect(count).toBeGreaterThan(0);
    });
  });
});

test.describe('Terminal Blog - Boundary Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
    await page.waitForSelector('.font-mono');
  });

  test('non-existent command shows error', async ({ page }) => {
    await page.locator('input[type="text"]').focus();
    await page.keyboard.type('nonexistent');
    await page.keyboard.press('Enter');

    await expect(page.getByText('Command not found: nonexistent')).toBeVisible();
    await expect(page.getByText("Type 'help' for available commands")).toBeVisible();
  });

  test('cat with non-existent file shows error', async ({ page }) => {
    await page.locator('input[type="text"]').focus();
    await page.keyboard.type('cat nonexistent-file');
    await page.keyboard.press('Enter');

    await expect(page.getByText('No such file or directory')).toBeVisible();
  });

  test('empty input shows only prompt', async ({ page }) => {
    const initialPrompts = await page.locator('text=@').count();

    await page.locator('input[type="text"]').focus();
    await page.keyboard.press('Enter');
    await page.waitForTimeout(300);

    const newPrompts = await page.locator('text=@').count();
    expect(newPrompts).toBeGreaterThan(initialPrompts);
  });

  test('cd .. returns to parent directory', async ({ page }) => {
    // Navigate to a category
    await page.locator('input[type="text"]').focus();
    await page.keyboard.type('cd tech');
    await page.keyboard.press('Enter');

    // Go back
    await page.locator('input[type="text"]').focus();
    await page.keyboard.type('cd ..');
    await page.keyboard.press('Enter');

    // Should be back at root
    await page.locator('input[type="text"]').focus();
    await page.keyboard.type('pwd');
    await page.keyboard.press('Enter');

    await expect(page.getByText('~$')).toBeVisible({ timeout: 3000 });
  });

  test('cd to non-existent directory shows error', async ({ page }) => {
    await page.locator('input[type="text"]').focus();
    await page.keyboard.type('cd nonexistent');
    await page.keyboard.press('Enter');

    await expect(page.getByText('no such file or directory')).toBeVisible();
  });

  test('cat without argument shows error', async ({ page }) => {
    await page.locator('input[type="text"]').focus();
    await page.keyboard.type('cat');
    await page.keyboard.press('Enter');

    await expect(page.getByText('missing file operand')).toBeVisible();
  });

  test('search without keyword shows error', async ({ page }) => {
    await page.locator('input[type="text"]').focus();
    await page.keyboard.type('search');
    await page.keyboard.press('Enter');

    await expect(page.getByText('missing keyword')).toBeVisible();
  });

  test('ls with non-existent path shows error', async ({ page }) => {
    await page.locator('input[type="text"]').focus();
    await page.keyboard.type('ls nonexistent');
    await page.keyboard.press('Enter');

    await expect(page.getByText("cannot access 'nonexistent'")).toBeVisible();
  });

  test('imgview with invalid index shows error', async ({ page }) => {
    await page.locator('input[type="text"]').focus();
    await page.keyboard.type('imgview abc');
    await page.keyboard.press('Enter');

    await expect(page.getByText('invalid index')).toBeVisible();
  });

  test('imgview with out-of-range index shows error', async ({ page }) => {
    await page.locator('input[type="text"]').focus();
    await page.keyboard.type('imgview 999');
    await page.keyboard.press('Enter');

    await expect(page.getByText('not found')).toBeVisible();
  });
});

test.describe('Terminal Blog - UX Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
    await page.waitForSelector('.font-mono');
  });

  test('command prompt is visible and clear', async ({ page }) => {
    const prompt = page.locator('text=kota@blog:');
    await expect(prompt).toBeVisible();
  });

  test('cursor blinks in input field', async ({ page }) => {
    const cursor = page.locator('.bg-green-400');
    await expect(cursor).toBeVisible();

    // Check cursor visibility changes (blinking)
    await page.waitForTimeout(600);
    const cursorAfter = page.locator('.bg-green-400');
    await expect(cursorAfter).toBeVisible();
  });

  test('terminal has proper styling', async ({ page }) => {
    // Check background color
    const terminal = page.locator('.bg-gray-950');
    await expect(terminal).toBeVisible();

    // Check text color
    const text = page.locator('.text-green-400');
    await expect(text).toBeVisible();

    // Check terminal window decorations
    const windowControls = page.locator('.rounded-full');
    await expect(windowControls).toHaveCount(3);
  });

  test('output is properly formatted', async ({ page }) => {
    await page.locator('input[type="text"]').focus();
    await page.keyboard.type('help');
    await page.keyboard.press('Enter');

    // Check for proper indentation
    const indentedText = page.locator('text=  help');
    await expect(indentedText).toBeVisible();
  });

  test('error messages are styled in red', async ({ page }) => {
    await page.locator('input[type="text"]').focus();
    await page.keyboard.type('invalid');
    await page.keyboard.press('Enter');

    const errorText = page.locator('.text-red-400');
    await expect(errorText).toBeVisible();
  });

  test('info messages are styled in yellow', async ({ page }) => {
    await page.locator('input[type="text"]').focus();
    await page.keyboard.type('history');
    await page.keyboard.press('Enter');

    const infoText = page.locator('.text-yellow-400');
    await expect(infoText).toBeVisible();
  });
});

test.describe('Terminal Blog - Edge Cases', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
    await page.waitForSelector('.font-mono');
  });

  test('command with extra whitespace is handled', async ({ page }) => {
    await page.locator('input[type="text"]').focus();
    await page.keyboard.type('  ls   ');
    await page.keyboard.press('Enter');

    await expect(page.getByText('tech/')).toBeVisible();
  });

  test('cat with .md extension works', async ({ page }) => {
    await page.locator('input[type="text"]').focus();
    await page.keyboard.type('cat rust-intro.md');
    await page.keyboard.press('Enter');

    await expect(page.getByText('Rust 入门指南')).toBeVisible();
  });

  test('cd ~returns to home', async ({ page }) => {
    await page.locator('input[type="text"]').focus();
    await page.keyboard.type('cd tech');
    await page.keyboard.press('Enter');

    await page.locator('input[type="text"]').focus();
    await page.keyboard.type('cd ~');
    await page.keyboard.press('Enter');

    await page.locator('input[type="text"]').focus();
    await page.keyboard.type('pwd');
    await page.keyboard.press('Enter');

    await expect(page.getByText('~$')).toBeVisible();
  });

  test('cd without arguments returns home', async ({ page }) => {
    await page.locator('input[type="text"]').focus();
    await page.keyboard.type('cd tech');
    await page.keyboard.press('Enter');

    await page.locator('input[type="text"]').focus();
    await page.keyboard.type('cd');
    await page.keyboard.press('Enter');

    await page.locator('input[type="text"]').focus();
    await page.keyboard.type('pwd');
    await page.keyboard.press('Enter');

    await expect(page.getByText('~$')).toBeVisible();
  });

  test('command history with arrow keys', async ({ page }) => {
    // Execute a command
    await page.locator('input[type="text"]').focus();
    await page.keyboard.type('ls');
    await page.keyboard.press('Enter');

    // Press up arrow to recall
    await page.locator('input[type="text"]').focus();
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(200);

    const inputValue = await page.locator('input[type="text"]').inputValue();
    expect(inputValue).toBe('ls');
  });

  test('Tab completion works for commands', async ({ page }) => {
    await page.locator('input[type="text"]').focus();
    await page.keyboard.type('h');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);

    const inputValue = await page.locator('input[type="text"]').inputValue();
    expect(inputValue).toBe('help');
  });

  test('Ctrl+C cancels current input', async ({ page }) => {
    await page.locator('input[type="text"]').focus();
    await page.keyboard.type('some command');
    await page.keyboard.press('Control+c');
    await page.waitForTimeout(200);

    // Should show ^C and new prompt
    await expect(page.getByText('^C')).toBeVisible();
  });
});

test.describe('Terminal Blog - Images Rendering Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
    await page.waitForSelector('.font-mono');
  });

  test('demo-post images are rendered', async ({ page }) => {
    await page.locator('input[type="text"]').focus();
    await page.keyboard.type('cat demo-post');
    await page.keyboard.press('Enter');

    // Wait for images to load
    await page.waitForTimeout(1000);

    const images = page.locator('img');
    await expect(images).toHaveCount(2);

    // Check first image alt text
    const firstImage = images.first();
    await expect(firstImage).toHaveAttribute('alt', '技术博客封面');

    // Check second image alt text
    const secondImage = images.nth(1);
    await expect(secondImage).toHaveAttribute('alt', '随机风景图');
  });

  test('portfolio images are rendered', async ({ page }) => {
    await page.locator('input[type="text"]').focus();
    await page.keyboard.type('cat portfolio');
    await page.keyboard.press('Enter');

    // Wait for images to load
    await page.waitForTimeout(1000);

    const images = page.locator('img');
    await expect(images).toHaveCount(3);
  });

  test('images have proper styling classes', async ({ page }) => {
    await page.locator('input[type="text"]').focus();
    await page.keyboard.type('cat demo-post');
    await page.keyboard.press('Enter');

    await page.waitForTimeout(1000);

    const images = page.locator('img');
    // Check for responsive image classes
    const firstImage = images.first();
    await expect(firstImage).toHaveClass(/max-w-full/);
  });

  test('images have captions', async ({ page }) => {
    await page.locator('input[type="text"]').focus();
    await page.keyboard.type('cat demo-post');
    await page.keyboard.press('Enter');

    await page.waitForTimeout(1000);

    // Check for figcaption elements
    const figcaptions = page.locator('figcaption');
    await expect(figcaptions).toHaveCount(2);
  });
});
