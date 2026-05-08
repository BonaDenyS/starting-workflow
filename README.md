# CorpX Knowledge Base

## Project Links

| | URL |
|---|---|
| **GitHub Repository** | https://github.com/BonaDenyS/starting-workflow |
| **Published Website** | https://BonaDenyS.github.io/starting-workflow/ |

## CI/CD Pipeline

Three-job GitHub Actions workflow in `.github/workflows/ci-cd.yml`:

| Job | What it does |
|---|---|
| **Test** | Lint (JS + SCSS + Markdown) + URL checker |
| **Build** | `npm run prod` → uploads `_site/` as Pages artifact |
| **Deploy** | Deploys to GitHub Pages + creates summary issue |

## Required Repository Variables

Set these under **Settings → Secrets and variables → Actions → Variables**:

| Variable | Example value |
|---|---|
| `NODE_ENV` | `production` |
| `SITE_TITLE` | `Knowledge Base` |
| `URL_CHECKER_TIMEOUT` | `30` |
