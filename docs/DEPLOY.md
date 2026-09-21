# Deploying the project page with GitHub Pages

This site is intentionally static: HTML + CSS + JavaScript + local PNG assets. No build step is required.

## 1. Configure links

Edit `site-config.js` and replace:

```js
githubUrl: "https://github.com/YOUR_USERNAME/YOUR_REPOSITORY"
```

When the manuscript has a public landing page or DOI, replace `paperUrl` as well.

## 2. Recommended GitHub Pages setup: `/docs` on the main branch

If you want the project page to live alongside the code repository:

1. Create a `docs/` folder at the repository root.
2. Copy **all files and the `assets/` folder** from this package into `docs/`.
3. Commit and push.
4. On GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select your default branch (usually `main`) and the `/docs` folder.
7. Save.

The URL will normally be:

```text
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/
```

## 3. Alternative: repository dedicated to the website

If the website has its own repository named `YOUR_USERNAME.github.io`, place the files in the repository root and publish the main branch.

## 4. Local preview

From this folder:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## 5. Files that must be kept together

```text
index.html
styles.css
script.js
site-config.js
.nojekyll
assets/
  favicon.svg
  workflow.png
  overall-performance.png
  best-model-oof.png
  classifier-wins.png
  smote-effect.png
  feature-stability-shap.png
```
