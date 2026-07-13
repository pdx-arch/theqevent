# The Q website

A lightweight, static marketing site for **The Q** — a fully hosted team trivia experience for fundraisers, corporate events, and community celebrations.

## Run locally

Open `index.html` in a browser, or serve this directory with any static web server.

## Deploy to GitHub Pages

1. Create a GitHub repository and upload the contents of this folder.
2. In the repository, go to **Settings → Pages**.
3. Select **Deploy from a branch**, then choose `main` and `/(root)`.
4. Add `www.theqevent.com` (or your preferred domain) under **Custom domain**, then follow GitHub's DNS instructions at your domain provider.

No build step, database, or server is required.

## Updating the site

- Main page copy is in `index.html`.
- Colors, layout, and responsive styling are in `assets/css/style.css`.
- Menu, FAQ, counters, and scroll effects are in `assets/js/main.js`.
- Replace the visual placeholders in `assets/images/` with real Q event photography when available. Keep the same file names or update the references in `index.html`.

## Planned pages

The navigation is ready for: Experience, Fundraisers, Corporate, Sponsors, Gallery, FAQ, and Contact. Add each as a separate `.html` file while retaining the shared header, footer, CSS, and JavaScript.
