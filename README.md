# Rand — Portfolio

Next.js portfolio site. Dark/modern theme with an AHP/SAW decision-matrix
signature animation in the hero.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Before you ship it

- `app/page.js` — update the email address and GitHub link near the bottom
  (search for `your.email@example.com` and `yourusername`).
- `lib/projects.js` — this is the single source of truth for all project
  content. Each project has a `slug` (used in the URL, e.g. `/projects/spk-pemilihan-jurusan`),
  the short info shown on the homepage card (`points`, `stack`), and a `detail`
  object with the full write-up shown on `/projects/[slug]` (`summary`,
  `features`, `process`, `techStack`, `links`). Add a new project by adding a
  new object to this array — no other file needs to change.
- Clicking a project card on the homepage navigates to its detail page at
  `/projects/<slug>`. To add screenshots or images to a detail page, drop
  image files into the `public/` folder and reference them with `<img src="/yourfile.png" />`
  inside `app/projects/[slug]/page.js`.
- No external fonts are loaded — everything uses system font stacks, so it
  works offline with zero config.

## Build for production

```bash
npm run build
npm run start
```
