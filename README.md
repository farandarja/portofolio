# rand.dev — Portfolio

Personal developer portfolio built with Next.js (App Router). Dark, minimal
theme with a few custom interactive touches: a 3D-tilt profile photo with a
cursor-following glare, a typewriter-style role cycler in the hero, and
image galleries on each project's detail page.

**Live site:** [add your Vercel URL here once deployed]

## Features

- Hero section with a tilt/glare interactive photo card and a typing role
  cycler
- Project listing with cover-image cards that link out to full detail pages
- Per-project detail pages (`/projects/[slug]`) with an image gallery
  (prev/next arrows + dot indicators)
- About page with logo-based skill chips (via [Simple Icons](https://simpleicons.org)),
  a tools/workflow section, and soft skills
- No external fonts, no client-side state libraries — plain React state and
  system font stacks throughout

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- React
- [lucide-react](https://lucide.dev/) for icons
- [Simple Icons CDN](https://simpleicons.org/) for skill/tool logos

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  page.js                    → homepage (hero, about, projects preview, contact)
  about/page.js               → full About page (bio, skills, tools, photos)
  projects/page.js            → full project listing page
  projects/[slug]/page.js     → project detail page
  projects/[slug]/ImageGallery.js → carousel used on detail pages
lib/
  projects.js                → all project content (single source of truth)
  theme.js                   → shared color palette
public/
  projects/                  → project screenshots referenced in lib/projects.js
```

## Editing content

- **Projects** — everything lives in `lib/projects.js`. Each entry has a
  `slug`, the info shown on the homepage/listing card (`title`, `thumbnail`,
  `tag`), and a `detail` object with the full write-up (`summary`,
  `features`, `process`, `techStack`, `screenshots`, `links`). Add a new
  project by adding a new object to the array — no other file needs to
  change.
- **About page** — bio, skills, tools, and soft skills are defined as plain
  arrays near the top of `app/about/page.js`.
- **Images** — thumbnails and screenshots can either be files inside
  `public/` (referenced as `/filename.jpg`) or direct URLs to hosted images.

## Build for production

```bash
npm run build
npm run start
```

## Deploy

Deployed on [Vercel](https://vercel.com) — push to `main` and it redeploys
automatically. No environment variables or extra config needed.