# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start development server (hot reload)
npm run build      # Build production bundle
npm run preview    # Preview production build
npm run lint       # ESLint check
npm run deploy     # Build and deploy to gh-pages
```

## Architecture Overview

**Tech Stack:** React 19 + TypeScript + Vite + Tailwind CSS 4

**Core Structure:**
- `src/components/Terminal/Terminal.tsx` - Main terminal component handling UI, input, keyboard navigation, and rendering
- `src/commands/` - Individual command handlers (`ls`, `cd`, `cat`, `search`, etc.)
- `src/commands/index.ts` - Command registry using a Map to register/retrieve command handlers
- `src/utils/commandParser.ts` - Parses input, executes commands, handles command history and suggestions
- `src/content/` - Markdown blog posts organized by category (`tech/`, `life/`, `projects/`)
- `src/types/index.ts` - TypeScript types (`BlogPost`, `CommandResult`, `SelectableItem`, etc.)

**Command System:**
- Commands are registered via `registerCommand(name, handler)` in `src/commands/index.ts`
- Each command file exports a handler function `(args: string[]) => CommandResult`
- Commands are side-effecting modules that self-register on import
- All command modules must be imported in `src/main.tsx` to be available

**Content System:**
- Blog posts use frontmatter (`title`, `date`, `category`, `tags`, `description`, `draft`)
- Posts loaded dynamically via `import.meta.glob('../content/**/*.md', { eager: true, query: '?raw' })`
- `src/commands/ls.ts` exports `loadPosts()`, `getCategories()`, `getPostsByCategory()`, `searchPosts()`, `getPostBySlug()`
- Custom Markdown renderer in `src/commands/cat.ts` (`renderMarkdown`, `highlightCode`)

**State Management:**
- Terminal state (history, path, commands) managed within `Terminal.tsx`
- Current directory path shared via `getCurrentPath()`/`setCurrentPath()` in `src/commands/cd.ts`

**Themes:**
- 7 built-in themes defined in `Terminal.tsx` (default, matrix, sunset, ocean, fire, cyberpunk, monochrome)
- Theme switching via `theme` command
