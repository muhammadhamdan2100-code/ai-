# hamiaiworks

**Building Intelligent AI Employees for Modern Businesses.**

Enterprise AI automation agency website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> Fonts (Space Grotesk, Inter, JetBrains Mono) load via `next/font/google` and are fetched
> at build/dev time — an internet connection is required the first time you run `dev` or `build`.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build (static-generates all pages, including dynamic service/case-study/blog routes)
- `npm run start` — serve the production build
- `npm run typecheck` — run `tsc --noEmit`
- `npm run lint` — run ESLint (Next.js core-web-vitals config)

## Project structure

```
src/
  app/                    Route segments (App Router)
    page.tsx              Home
    about/                About
    services/             Services list + /services/[slug] detail
    portfolio/             Portfolio grid
    case-studies/          Case studies list + /case-studies/[slug] deep dive
    pricing/               Pricing (tiers + comparison table)
    founder/               Founder page
    blog/                  Blog list + /blog/[slug] detail
    contact/               Contact form
    layout.tsx             Root layout, fonts, global metadata
    globals.css            Design tokens' CSS layer, glass utilities
    sitemap.ts / robots.ts SEO
  components/
    layout/                Navbar, Footer, PageHero
    home/                  Home-page sections (Hero, Services, Process, Portfolio,
                            TechStack, Testimonials, FAQ, CTA, FounderSection, ContactForm)
    case-studies/          CaseStudyCard, ArchitectureDiagram
    ui/                    Reusable primitives: Button, GlassCard, SectionHeading,
                            RevealOnScroll, AnimatedCounter, NodeNetwork, TrustBadges,
                            ComparisonTable
  lib/
    data/                  Typed content: services, case-studies, testimonials, site
                            constants, pricing tiers, comparison rows, blog posts
    utils.ts                cn() class merge helper, formatters
  types/index.ts           Shared TypeScript interfaces for all content models
public/
  images/founder.jpg       Founder portrait (cropped square, ready for the circular frame)
```

## Design system

- **Palette**: deep navy-black base (`#0A0E17`), glass surfaces at ~5% white opacity,
  violet→cyan signal gradient (`#6E5BFF` → `#22D3EE`) as the primary brand accent,
  emerald reserved for success/metric states. See `tailwind.config.ts`.
- **Type**: Space Grotesk (display), Inter (body), JetBrains Mono (labels/stats/tags).
- **Signature motif**: `NodeNetwork` — an animated automation-graph SVG (nodes + traveling
  pulses along connecting paths), used in hero backgrounds and section dividers.
- **Glassmorphism utilities**: `.glass` / `.glass-strong` in `globals.css`.

## Content model

All copy lives in typed data files under `src/lib/data/` rather than hardcoded in JSX —
update services, case studies, pricing, FAQ, or blog posts there and the relevant pages/
sitemap update automatically (all dynamic routes use `generateStaticParams`).

## Founder photo

The founder portrait at `public/images/founder.jpg` is already cropped to a square and
wired into `components/home/FounderSection.tsx` inside the animated glow-ring/rotating-border
frame via `next/image`. To replace it, swap the file at the same path (keep it roughly
square — the component crops to a circle at render time).

## Known items for a real deployment

- Contact form currently only validates and shows a success state client-side — wire
  `ContactForm.tsx`'s `handleSubmit` to an API route, form service, or CRM webhook.
- Replace placeholder screenshot blocks (gradient panels marked "Product screenshot — …")
  in Portfolio/Case Study cards with real product screenshots.
- Update `SITE.url` in `src/lib/data/site.ts` to your real production domain before
  deploying (used in metadata, sitemap, and OpenGraph tags).
