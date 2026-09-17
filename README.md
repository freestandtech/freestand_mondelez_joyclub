# FreeStand × Mondelez — Demo Hub

Static site. No build step, no dependencies to install.

## Run locally
Open `index.html` in a browser, or serve the folder:

    python3 -m http.server 8080

then visit http://localhost:8080

## Publish on GitHub Pages
1. Push this folder to a repository (contents at the repo root).
2. Settings → Pages → Source: `Deploy from a branch`, branch `main`, folder `/ (root)`.
3. The hub is served at the repository's Pages URL.

## Structure
- `index.html` — the hub shell (left rail, Previous / Next demo, keyboard arrows)
- `mdlz-hub/demos.js` — the demo registry: order, names, per-demo step labels
- `mdlz-hub/` — snapshot, loyalty strategy, data enrichment, re-engagement, analytics, flow pages
- `hub/` — the enrollment journeys (Bournvita, Cadbury, Biscoff) and their shared chat/builder engine
- `Mondelez *.html` — the appendix demos embedded by the hub
- `mdlz/` — shared imagery and logos

Demo pages are loaded into the hub in an iframe by relative path, so keep the folder
structure as-is when uploading.
