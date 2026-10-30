# Divya Goyal · Portfolio

My personal site: a single animated page covering my work as an AI/ML engineer, including voice agents, agentic systems, research projects, mentoring and contact links.

Built with **Next.js 15 (pages router)**, **React 19**, **Tailwind CSS 4**, **Framer Motion** and **Lenis**, and deployed on **Vercel**.

## What's on the page

| Section | Component | What it shows |
|---|---|---|
| Hero | [Hero.tsx](Portfolio_final/Portfolio/components/Hero.tsx) | Name, rotating roles, intro, a canvas waveform that reacts to the cursor, and a looping simulated call with one of my voice agents |
| About | [About.tsx](Portfolio_final/Portfolio/components/About.tsx) | Short bio, photo and animated stats |
| Experience | [Experience.tsx](Portfolio_final/Portfolio/components/Experience.tsx) | Timeline of roles and education |
| Mentorship | [Mentorship.tsx](Portfolio_final/Portfolio/components/Mentorship.tsx) | Intern mentoring, Topmate sessions, ratings and testimonials |
| Projects | [Projects.tsx](Portfolio_final/Portfolio/components/Projects.tsx) | Filterable project grid. Each card opens a modal with highlights, the stack, an optional "How it's built" section and links. An animated voice-agent pipeline diagram sits above the grid |
| Recent on GitHub | [GithubFeed.tsx](Portfolio_final/Portfolio/components/GithubFeed.tsx) | My latest public repos, pulled from the GitHub API |
| Skills | [Skills.tsx](Portfolio_final/Portfolio/components/Skills.tsx) | Grouped skill lists |
| Contact | [Contact.tsx](Portfolio_final/Portfolio/components/Contact.tsx) | Email, Topmate, Linktree and social links |

Small pieces add polish: smooth scrolling that pauses while a modal is open ([SmoothScroll.tsx](Portfolio_final/Portfolio/components/SmoothScroll.tsx)), a cursor glow, magnetic buttons, scroll-in reveals and a generated illustration for each project category ([ProjectArt.tsx](Portfolio_final/Portfolio/components/ProjectArt.tsx)). Smooth scrolling and the waveform respect the visitor's reduced-motion setting.

## How it's built

- **All content lives in one file:** [data/portfolio.ts](Portfolio_final/Portfolio/data/portfolio.ts). Profile, stats, experience, projects, mentorship and skills are typed data, and the components only render it. To add a project, add an object to `projects`. Set `featured: true` for a wide card. Fill in `builtWith` to explain each technology in the modal.
- **Static page with a fresh GitHub feed:** [pages/index.tsx](Portfolio_final/Portfolio/pages/index.tsx) is pre-rendered with `getStaticProps`. The repo list from [lib/github.ts](Portfolio_final/Portfolio/lib/github.ts) is fetched at build time and refreshed hourly through ISR (`revalidate: 3600`). Forks, private repos and this repo are skipped. If the API fails, the section is simply left out.
- **Styling:** Tailwind 4 with design tokens declared in [styles/globals.css](Portfolio_final/Portfolio/styles/globals.css) (dark theme). Fonts load through `next/font` in [_app.tsx](Portfolio_final/Portfolio/pages/_app.tsx) (Inter, Bricolage Grotesque, Cormorant Garamond, Instrument Serif and JetBrains Mono), and their variables sit on `:root` so modals rendered in portals inherit them too.
- **Old URLs still work:** the site used to have separate pages, so [next.config.ts](Portfolio_final/Portfolio/next.config.ts) permanently redirects `/about`, `/experience`, `/projects` and `/contact` to the matching section.
- **SEO and sharing:** description and Open Graph tags are set in [_document.tsx](Portfolio_final/Portfolio/pages/_document.tsx).

## Project layout

```
Portfolio_final/Portfolio/      ← the Next.js app
├── pages/          index (the whole site), _app (fonts, global effects), _document (meta tags)
├── components/     one file per section plus small animation helpers
├── data/           portfolio.ts, the single source of content
├── lib/            github.ts, the recent-repos fetch
├── styles/         globals.css, Tailwind and theme tokens
└── public/         profile photo, favicon and images
```

## Run it locally

Needs Node 18.18 or newer.

```bash
cd Portfolio_final/Portfolio
npm install
npm run dev        # http://localhost:3000
npm run build      # production build, the same one Vercel runs
npm run lint
```

## Deploy

On Vercel, import the repo and set **Root Directory** to `Portfolio_final/Portfolio`. Vercel detects Next.js and needs no other config. Optionally, add a `GITHUB_TOKEN` environment variable (any token with public read access) so the GitHub feed isn't hit by the API's unauthenticated rate limit. Every push to `main` redeploys the site.

## License

[GPL-3.0](LICENSE)
