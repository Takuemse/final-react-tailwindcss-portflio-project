# Portfolio — Takudzwa Musemwa

A personal developer & product design portfolio built with React, React Router, and Tailwind CSS. Designed with an Apple × Linear × Vercel aesthetic — dark, minimal, purposeful motion.

## Live Demo

https://takues-portfolio.vercel.app/

## Tech Stack

React: functional components, hooks
React Router DOM: client-side routing across multi-page structure
Tailwind CSS v4: utility-first styling, custom theme tokens
React Icons: `react-icons/hi2` and `react-icons/fa6`
Vite: build tooling and dev server
Formspree: contact form submission handling

## Design System

| Token | Value |
|---|---|
| Background | `#0A0A0A` |
| Surface / Cards | `#171717` |
| Border | `#2E2E2E` |
| Text Primary | `#FAFAFA` |
| Text Secondary | `#A1A1AA` |
| Accent | `#F64900` |
| Accent Hover | `#EA580C` |
| Headings | Space Grotesk |
| Body | Manrope |

## Project Structure


src/
├── assets/
├── components/
│   ├── Navbar/
│   ├── Navigation/
│   ├── Footer/
│   ├── ProjectCard/
│   ├── SkillCard/
│   ├── SectionTitle/
│   └── ui/            # Button, Badge, Section
├── sections/           # Hero, About, Philosophy, Skills, Projects, Timeline, Certificates, Contact
├── pages/              # Home, AboutPage, ProjectsPage, ContactPage
├── data/                # projects, skills, timeline, certificates, navLinks
├── App.jsx
├── main.jsx
└── index.css


## Featured Projects

- **Zuva Rescue** — UI/UX case study for an on-demand roadside assistance app
- **Simple Store** — React e-commerce build with cart state, filtering, and mock checkout
- **FreshDrop** — Digital marketing campaign for a local grocery delivery concept

## Getting Started

bash
# install dependencies
npm install

# run the dev server
npm run dev

# build for production
npm run build


## Fonts

Space Grotesk and Manrope are loaded via Google Fonts in `index.css` no local font files required.

## Notes

Resume PDF should live in `public/resume.pdf` (not `src/assets/`) so it's servable as a static download.
External project links (GitHub, Behance, Canva) open in a new tab via standard anchor tags rather than React Router's `Link`.