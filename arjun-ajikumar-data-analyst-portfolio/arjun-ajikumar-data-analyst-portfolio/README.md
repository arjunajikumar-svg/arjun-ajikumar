# Arjun Ajikumar | Data Analyst Portfolio

A black, single-viewport landing page with a liquid-metal navigation, liquid-glass buttons, film grain, staggered entrance motion and a three-stat footer, plus About, Projects and Resume pages. Projects lists all 10 public repositories from github.com/arjunajikumar-svg.

## Technology stack

- Next.js 14 (App Router, JavaScript)
- Plain CSS in `app/globals.css` for the landing design, Tailwind CSS 3 for base styles
- Inter and Instrument Serif (italic) via `next/font`
- No API keys or environment variables

## Run locally

Requires Node.js 18.17 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customize

| What to change | Where |
| --- | --- |
| Name, title, resume path | `profile` in `data/portfolio.js` |
| Contact links | `contact` in `data/portfolio.js` |
| The three landing-page stats | `stats` in `data/portfolio.js` |
| Featured projects (written up in full) | `projects` in `data/portfolio.js` |
| Other repositories | `moreProjects` in `data/portfolio.js` |
| About, experience, skills, education | `about`, `experience`, `skills`, `education`, `certifications` |
| Landing copy and background video | `app/page.js` (remove the `<video>` for plain black) |
| Colors, sizes, breakpoints | CSS variables at the top of `app/globals.css` |
| Resume file | Replace `public/Arjun_Ajikumar_Resume.docx` |

## Structure

```
app/          layout, globals.css, pages: / , about, projects, resume
components/   Header (menu), Motion (entrance fallback), MiniFooter, Icons
data/         portfolio.js, the single source of content
public/       resume file
```
