# dreammill-web

Marketing site for Dreammill Productions (Harri Haanpää's film company). Astro static site, deployed on Cloudflare Pages.

- Owner communicates in Finnish. Site is bilingual: Finnish at `/`, English at `/en/`. Every visible string needs both languages (`src/i18n.ts`, and `fi`/`en` fields in project files).
- Projects live one per file in `src/content/projects/*.md`; schema in `src/content.config.ts`. `featured: true` puts a project in the homepage hero/feature blocks (lowest `order` becomes the hero).
- Never invent project facts (years, credits, clients). Leave a `# TÄYDENNÄ:` comment at the top of the file for anything missing.
- Media go in `public/media/<project-id>/`. Trailers are YouTube ids, loaded only on click (youtube-nocookie).
- Design: dark cinema look, Instrument Serif + Inter Tight, amber accent `--amber`, 2.39:1 frames. Check 390px width has no horizontal scroll.
- Work on a branch and open a PR; Harry approves merges to `main`.
