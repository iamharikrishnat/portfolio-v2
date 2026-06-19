# Hari Krishna T — Portfolio (v2)

A premium, editorial portfolio for **Hari Krishna T, Full Stack Developer**. Dark
luxe aesthetic, smooth inertia scrolling, refined motion, and a fully static,
accessibility- and SEO-conscious build.

## Tech stack

- **Next.js 16** (App Router, fully static prerender)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** (`@theme` design tokens)
- **Framer Motion** (reveals, parallax, magnetic + custom cursor)
- **Lenis** (smooth scrolling)
- **lucide-react** (icons)

## Project structure

```
app/
  layout.tsx            Root layout: fonts, metadata, JSON-LD, providers
  page.tsx              Section composition
  globals.css           Design tokens + utilities
  opengraph-image.tsx   Dynamic social share image
  twitter-image.tsx     Re-uses the OG image
  icon.tsx / apple-icon.tsx   Generated monogram favicons
  manifest.ts           PWA web manifest
  sitemap.ts / robots.ts      SEO files
  not-found.tsx         Styled 404
components/
  providers/SmoothScroll.tsx
  layout/Header.tsx  layout/Footer.tsx
  sections/Hero.tsx  Work.tsx  About.tsx  Contact.tsx
  ui/                Reveal, MaskReveal, Magnetic, Cursor, ScrollProgress, LocalTime
lib/site.ts            ← Single source of truth for ALL content
```

## Editing content

Everything (name, role, projects, skills, socials, links, domain) lives in
**`lib/site.ts`**. Update that one file and the whole site + SEO + OG image
follow. Before deploying, set the real production domain in `site.url`.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000 (or PORT=3001 npm run dev)
```

## Build

```bash
npm run build    # static export, type-checked
npm start        # serve the production build
```

## Deploy (Vercel — recommended)

1. Push this folder to a GitHub repo.
2. Import the repo at [vercel.com/new](https://vercel.com/new) — Vercel
   auto-detects Next.js; no config needed.
3. Set `site.url` in `lib/site.ts` to your final domain and redeploy.

Or from the CLI:

```bash
npm i -g vercel
vercel            # preview deploy
vercel --prod     # production deploy
```
