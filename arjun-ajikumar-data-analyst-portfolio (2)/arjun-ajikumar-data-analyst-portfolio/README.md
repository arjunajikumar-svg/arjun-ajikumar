# Arjun Ajikumar | Data Analyst Portfolio

A dark portfolio with violet accents: floating pill navbar, animated hero, tool marquee, bento stat cards with counters, capability cards, selected projects with tilt, a four-step process timeline, experience and education cards, a contact banner with copy-to-clipboard, and a footer. Every project from the resume has its own page at `/projects/<slug>`.

All content comes from the resume PDF. No testimonials, ratings or client logos are included, because none exist in the source.

## Technology stack

React 18, TypeScript, Vite, Tailwind CSS 3, Framer Motion, Lucide React, React Router. Plus Jakarta Sans from Google Fonts. No API keys or environment variables.

## Run locally

Requires Node.js 18 or later.

```bash
npm install
npm run dev
```

Open the address Vite prints (usually http://localhost:5173). Other commands: `npm run build`, `npm run preview`, `npm run typecheck`.

## Customize

| What to change | Where |
| --- | --- |
| Name, intro, badge, resume file | `profile` in `src/data/portfolio.ts` |
| Email, phone, LinkedIn, GitHub | `contact` |
| Tool marquee | `tools` |
| About text and counters | `aboutParagraphs`, `aboutStats` |
| Capability cards | `capabilities` |
| Process steps | `process` |
| Experience, education, certification | `experience`, `education`, `certification` |
| Projects (add, edit or reorder) | `projects`. Each entry becomes its own page. Set `featured: true` to show it on the home page |
| Resume PDF | Replace `public/Arjun_Ajikumar_Data_Analyst_Resume.pdf` |
| Colors and fonts | `src/index.css`, `tailwind.config.js`, `index.html` |

## Deploy

Push to GitHub and import the repository in Vercel. `vercel.json` rewrites all paths to `index.html` so project pages work on refresh.
