# Knowledge Base

A static knowledge base website built with [11ty](https://www.11ty.dev/) and automatically deployed to GitHub Pages via GitHub Actions.

## Links

| | URL |
|---|---|
| **GitHub Repository** | https://github.com/BonaDenyS/starting-workflow |
| **Published Website** | https://BonaDenyS.github.io/starting-workflow/ |

## CI/CD Pipeline

This project uses a GitHub Actions workflow with three jobs:

- **Test** — installs dependencies, runs linter and tests
- **Build** — builds the 11ty static site and uploads the artifact
- **Deploy** — deploys to GitHub Pages and creates a summary issue

## Workflow Triggers

| Trigger | Jobs Run |
|---|---|
| `push` to `main` | Test → Build → Deploy |
| `pull_request` to `main` | Test → Build |
| `workflow_dispatch` | Test → Build → Deploy |
