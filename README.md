# Divya Goyal · Portfolio

My personal site: one page covering my work as an AI/ML engineer (experience, projects, skills, mentoring, contact), plus a case-study page for each of my main projects.

Built with **Next.js 15 (pages router)**, **React 19**, **Tailwind CSS 4**, and **Framer Motion** (for a few small transitions), and deployed on **Vercel**.

## What's on the page

| Section | Component | What it shows |
|---|---|---|
| Hero | [Hero.tsx](Portfolio_final/Portfolio/components/Hero.tsx) | Name, current role, intro, links to work, résumé and email, and an example voice-agent conversation ([SampleCall.tsx](Portfolio_final/Portfolio/components/SampleCall.tsx)) that's clearly labelled as illustrative, or a real recording when `profile.callRecording` is set |
| About | [About.tsx](Portfolio_final/Portfolio/components/About.tsx) | Short bio, photo and a few facts |
| Experience | [Experience.tsx](Portfolio_final/Portfolio/components/Experience.tsx) | Timeline of roles and education |
| Projects | [Projects.tsx](Portfolio_final/Portfolio/components/Projects.tsx) | Filterable project grid. Projects with a case study link to `/work/<slug>`; the rest open a modal. Below the grid: a voice-agent pipeline diagram and a one-line list of earlier work |
| Skills | [Skills.tsx](Portfolio_final/Portfolio/components/Skills.tsx) | Grouped skill lists |
| Mentorship | [Mentorship.tsx](Portfolio_final/Portfolio/components/Mentorship.tsx) | Intern mentoring, Topmate sessions and one testimonial |
| Contact | [Contact.tsx](Portfolio_final/Portfolio/components/Contact.tsx) | Email and LinkedIn |

Case studies ([pages/work/[slug].tsx](Portfolio_final/Portfolio/pages/work/[slug].tsx)) follow one structure: problem, constraints, what I built, measured results, what broke, and next steps.

The design is deliberately quiet: no scroll effects or cursor tricks, only a short fade-in on scroll.

## How it's built

- **Content lives in two files:** [data/portfolio.ts](Portfolio_final/Portfolio/data/portfolio.ts) (profile, stats, experience, projects, mentorship, skills) and [data/caseStudies.ts](Portfolio_final/Portfolio/data/caseStudies.ts) (the long-form write-ups). Components only render this data. To add a project, add an object to `projects`. Optional fields: `featured` for a wide card, `measured` for results with their dataset note, `status` for an honest one-line state, `org` for the employer, `earlier` to list it under Earlier work, and `slug` plus a matching case study for its own page.
- **Fully static:** the home page and every case-study page are pre-rendered at build time. No API calls at runtime.
- **Styling:** Tailwind 4 with design tokens declared in [styles/globals.css](Portfolio_final/Portfolio/styles/globals.css) (dark theme). Fonts load through `next/font` in [_app.tsx](Portfolio_final/Portfolio/pages/_app.tsx) (Inter, Bricolage Grotesque, Cormorant Garamond, Instrument Serif and JetBrains Mono), and their variables sit on `:root` so modals rendered in portals inherit them too.
- **Old URLs still work:** the site used to have separate pages, so [next.config.ts](Portfolio_final/Portfolio/next.config.ts) permanently redirects `/about`, `/experience`, `/projects` and `/contact` to the matching section.
- **SEO and sharing:** description and Open Graph tags are set in [_document.tsx](Portfolio_final/Portfolio/pages/_document.tsx).

## Project layout

```
Portfolio_final/Portfolio/      ← the Next.js app
├── pages/          index (the whole site), work/[slug] (case studies), _app (fonts), _document (meta tags)
├── components/     one file per section plus shared project pieces
├── data/           portfolio.ts and caseStudies.ts, the content
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

On Vercel, import the repo and set **Root Directory** to `Portfolio_final/Portfolio`. Vercel detects Next.js and needs no other config. Every push to `main` redeploys the site.

## Use it for your own portfolio

You're welcome to fork this repo and turn it into your own site.

1. **Fork or clone** the repo, then run it locally as shown above.
2. **Swap in your content** in [data/portfolio.ts](Portfolio_final/Portfolio/data/portfolio.ts) and [data/caseStudies.ts](Portfolio_final/Portfolio/data/caseStudies.ts). Most of the site updates from these two files.
3. **Update the few places that hard-code personal details:**
   - [pages/index.tsx](Portfolio_final/Portfolio/pages/index.tsx) and [pages/_document.tsx](Portfolio_final/Portfolio/pages/_document.tsx): page title, description and link-preview tags
   - [components/About.tsx](Portfolio_final/Portfolio/components/About.tsx): the bio paragraph and photo alt text
   - [public/](Portfolio_final/Portfolio/public): replace `profilepic.jpg` and `favicon.ico` with your own
4. **Make it yours:** change the colours in [styles/globals.css](Portfolio_final/Portfolio/styles/globals.css) and the fonts in [_app.tsx](Portfolio_final/Portfolio/pages/_app.tsx). The voice-agent visuals ([SampleCall.tsx](Portfolio_final/Portfolio/components/SampleCall.tsx), [VoicePipeline.tsx](Portfolio_final/Portfolio/components/VoicePipeline.tsx)) are specific to my work, so swap or remove them.
5. **Deploy** it on Vercel as described above.

**One requirement:** keep the credit line in the footer ([Contact.tsx](Portfolio_final/Portfolio/components/Contact.tsx)) that reads *"Originally created by Divya Goyal in 2024"*. It's an attribution term of the license (see [NOTICE](NOTICE)). You can restyle it, but it has to stay visible on every page. Everything else is yours to change.

## License

[GPL-3.0](LICENSE) with one additional term under Section 7(b), set out in [NOTICE](NOTICE): the footer attribution above must be kept. If you redistribute a modified version, it has to stay under GPL-3.0, keep the copyright notice and keep that attribution.
