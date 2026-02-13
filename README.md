# Man Cave Academy

Production-ready Next.js 14 content site for the Man Cave Academy brand.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- MDX content system (file-based)

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Project structure

- `app/` App Router pages and SEO route handlers
- `components/` shared UI and JSON-LD components
- `content/articles/` MDX blog posts
- `lib/articles.ts` MDX parsing, compile, and related post logic

## Content authoring

Add new `.mdx` files under `content/articles/` with frontmatter:

```md
---
title: "Your Title"
excerpt: "Short summary"
categories:
  - "AI Leverage"
publishedAt: "2026-01-01"
---
```

Allowed categories:

- AI Leverage
- Digital Assets
- Micro SaaS & Tools
- Local Leverage
- Financial Infrastructure

## SEO included

- Metadata API (`app/layout.tsx` and per-page metadata)
- OpenGraph defaults + article overrides
- `app/sitemap.ts`
- `app/robots.ts`
- JSON-LD for Organization and Article

## Newsletter

`components/newsletter-signup-placeholder.tsx` is intentionally provider-agnostic and ready to connect to your ESP.

