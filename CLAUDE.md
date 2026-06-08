# AptAirSense — Claude Code Guide

## Project Overview

Static Next.js 16 site for indoor air quality monitor reviews targeting apartment renters.
Deployed to VPS with Node.js + PM2 + Nginx. No database, no backend, no CMS.

## Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
```

## Architecture

- **Data layer**: `/data/*.ts` — all content lives here, pages are data-driven
- **Components**: reusable, typed, no hardcoded content
- **Pages**: render data through components only

## Content Updates

To add/update products: edit `data/products.ts`
To add/update articles: edit `data/articles.ts`
To add/update guides: edit `data/guides.ts`
To update site settings/nav: edit `data/site.ts`

## Styling

- CSS custom properties defined in `app/globals.css` under `:root`
- Tailwind CSS v4 syntax: `@import "tailwindcss"` + `@theme {}`
- No inline Tailwind classes — all styling done via CSS custom properties and inline styles
- Card hover: CSS `.card:hover { transform: translateY(-4px); box-shadow: ... }`

## Important Rules

- Affiliate tag is placeholder `YOURTAG-20` — replace before launch
- All placeholder images use placehold.co
- Product ASINs are `PLACEHOLDER` — replace with real Amazon ASINs before launch
- No price columns in comparison tables
- All article years reference 2026
- Email: contact@aptairsense.com only

## Server Component Rules

Pages using `generateMetadata()` must remain Server Components.
Use `"use client"` only for components with event handlers, hooks, or Framer Motion.

## File Encoding

Always write TypeScript/TSX/CSS files without BOM (UTF-8 without BOM).
When using PowerShell to write files, use:
```powershell
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($path, $content, $utf8NoBom)
```
