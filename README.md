# Diya Krishna — Cyberpunk Portfolio

A responsive multi-page React + TypeScript + Tailwind portfolio with a neon cyberpunk visual system.

## Run locally
1. Install Node.js 18+.
2. Extract this folder and open it in a terminal.
3. Run `npm install`.
4. Run `npm run dev` and open the local URL shown by Vite.

## Production build
Run `npm run build`. The deployable site is generated in `dist/`.

## Personalise before publishing
- Replace `public/profile-placeholder.svg` with your own portrait. Keep the filename `profile-placeholder.svg`, or update the image path in `src/data.ts`.
- Update your email, LinkedIn, GitHub, project links and certificates in `src/data.ts`.
- Add your actual resume PDF as `public/resume.pdf`. The Resume page includes a download link to that path.
- Replace sample certificate entries with your actual certificate names and issuing organisations.
- Verify all project descriptions and links before publishing.

## Deploy
### Vercel
Import the GitHub repository into Vercel. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.

### Netlify
Build command: `npm run build`. Publish directory: `dist`.

This project uses client-side routes. For Netlify, the included `public/_redirects` file routes all paths to `index.html`.
