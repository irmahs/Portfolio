# Portfolio — Irma Houver Sing

A personal portfolio designed as an iPhone app UI, with a toggleable web view. Deployed on GitHub Pages.

**Live:** https://irmahs.github.io/Portfolio

## Features

- iPhone mockup UI with status bar, bottom nav, and home indicator
- Toggle between **mobile** and **web** view
- **Dark / light** theme with persistence
- **EN / FR** language toggle
- Paris time in the status bar
- Page transition animations
- Deployed automatically via GitHub Actions

## Structure

| File / Folder | Purpose |
|---|---|
| `index.html` | Home — avatar, tags, quick-nav |
| `about.html` | Bio, values, hobbies |
| `journey.html` | Experience & education timeline |
| `skills.html` | Technical skills & proficiency bars |
| `projects.html` | Project list with links |
| `css/style.css` | All styles (mobile, web view, dark theme) |
| `js/layout.js` | Shared layout — partials, i18n, controls, transitions |
| `js/main.js` | Skill bar animation |
| `partials/` | Shared status bar and bottom nav HTML |
| `.github/workflows/deploy.yml` | GitHub Pages auto-deployment |

## Local development

Requires an HTTP server (partials load via `fetch`). Open with the **Live Server** VS Code extension — right-click `index.html` → *Open with Live Server*.

## Deployment

Automatically deployed to GitHub Pages on every push to `main`.
