# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start         # development server
npm run build     # production build
npm test          # run tests (watch mode)
npm run deploy    # build + deploy to GitHub Pages (gh-pages)
```

## Architecture

This is a single-page React/TypeScript portfolio site built with Create React App, deployed to `maxkrieg.com` via `gh-pages`.

**Page composition** is driven by `src/content/sections.tsx`, which exports an array of `{ title, content }` objects. `App.tsx` maps over this array to render each section as a full-width Bootstrap `<Row>`. Adding a new section means adding an entry to that array — the Navbar automatically picks it up and generates a scroll-tracked nav link from the same array.

**Section IDs for anchor navigation** come directly from the `title` field of each section object (e.g. `id="portfolio"`). The Navbar uses `window.scrollY` against each section's `offsetTop` to highlight the active link.

**Scroll reveal animations** are handled by the `useScrollReveal` hook (`src/utils/useScrollReveal.ts`), which uses an `IntersectionObserver` to add the `revealed` class to any element with `reveal-on-scroll`. It is called once in `App.tsx` and watches all matching elements globally. The CSS transitions are defined in `App.css`.

**Styling** uses a dark theme with a consistent color palette defined in `App.css`. Key values: background `#0d1117`, card/secondary `#161b22`, accent blue `#58a6ff`, muted text `#8b949e`. Component-specific styles live in `index.css` files co-located with each component. Font Awesome is loaded globally (via `public/index.html`) and used for icons throughout.

**Dependency note:** `ajv@^8` is listed as a direct devDependency to satisfy `ajv-keywords@5` (required by `schema-utils@4`, which is used by webpack 5, terser-webpack-plugin, and others bundled inside react-scripts 5). Without it, the build fails on Node 22 with `Cannot find module 'ajv/dist/compile/codegen'`.

**`Portfolio` component** (`src/components/Portfolio/`) fetches `https://api.github.com/users/maxkrieg/repos?per_page=100` on mount, sorts by `pushed_at`, and displays the 8 most recently pushed repos as cards. The fetch is unauthenticated (60 req/hr rate limit). The `topics` field requires the `Accept: application/vnd.github+json` header, which is already set.
