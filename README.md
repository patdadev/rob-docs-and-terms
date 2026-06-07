# Rob Docs and Terms

Static React site for Rob's public Terms of Service and Privacy Policy pages.

The site builds with Vite and generates `public/sitemap.xml` before local dev and production builds.

## GitHub Pages

The repo includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml` that builds and deploys the site to GitHub Pages on every push to `main`.

By default, the workflow publishes to the project Pages URL for this repository and configures the Vite base path automatically. If you later attach a custom domain, set `PAGES_BASE_PATH=/` and `SITE_URL=https://your-domain.example` in the workflow or repository Actions variables before deploying.
