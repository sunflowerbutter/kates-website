# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important: unfamiliar Next.js version

This project uses Next.js 16.2.12 and React 19.2.4 — newer than your training data. Per `AGENTS.md`,
**read the relevant guide in `node_modules/next/dist/docs/` before writing any code**, and heed any
deprecation notices found there. Do not assume APIs/conventions from older Next.js versions still apply.
The docs are organized into `01-app` (App Router), `02-pages` (Pages Router), `03-architecture`, and
`04-community`.

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint (flat config via `eslint.config.mjs`, extends `eslint-config-next`'s
  `core-web-vitals` and `typescript` rule sets)

There is no test setup in this repository yet.

## Architecture

This is a freshly bootstrapped `create-next-app` project (App Router) with no custom application code yet:

- `app/` — App Router root. `layout.tsx` defines the root HTML shell and loads the Geist Sans/Mono fonts
  via `next/font/google`; `page.tsx` is the default starter homepage; `globals.css` imports Tailwind
  (`@import "tailwindcss"`) and defines theme tokens via `@theme inline` plus a `prefers-color-scheme: dark`
  override.
- `components/` — currently empty; intended location for shared React components.
- Path alias `@/*` resolves to the project root (see `tsconfig.json`).
- Styling is Tailwind CSS v4 via the `@tailwindcss/postcss` PostCSS plugin (no `tailwind.config.js` —
  v4 is configured through CSS with `@theme`).
- TypeScript strict mode is enabled.