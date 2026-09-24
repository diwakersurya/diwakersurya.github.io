# diwakersurya.github.io

Resume and portfolio site. React 19.3 (`<ViewTransition>`), React Three Fiber, Vite. Static, deployed to GitHub Pages by `.github/workflows/deploy.yml`.

- `npm run dev` – local dev server
- `npm run fetch:github` – refresh repo stats into `src/data/github.json` (set `GITHUB_TOKEN` to avoid rate limits)
- `npm run build` – type-check and build to `dist/`

Resume content lives in `src/data/resume.ts`; the curated repo list is in `scripts/fetch-github.mjs`.
