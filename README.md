# FromMallika

A personal website for vegetarian recipes, hosting menus, and thoughtful guides.

## Local Setup

```bash
npm install
npm run dev
```

## Deploying On GitHub Pages

This project includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Create a GitHub repository named `frommallika.github.io` for the cleanest URL, or `FromMallika` if you prefer a normal project site.
2. Push this project to the repository's `main` branch.
3. In GitHub, open `Settings > Pages`.
4. Under `Build and deployment`, set `Source` to `GitHub Actions`.
5. Push to `main` again if the workflow has not already started.

The site uses hash-based routing, so direct links work cleanly on GitHub Pages.
