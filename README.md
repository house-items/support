# Home Stock Support

A dependency-free, responsive support website for Home Stock. It is ready to publish as a static GitHub Pages site.

## Languages

- English (`?lang=en`)
- 简体中文 (`?lang=zh-CN`)
- 繁體中文 (`?lang=zh-TW`)

The page detects the browser language, remembers the visitor's selection, and exposes a visible language switcher.

## Preview locally

From the Flutter frontend directory:

```sh
python3 -m http.server 4173 --directory support
```

Then open `http://localhost:4173`.

## Publish to GitHub Pages

Publish the contents of this directory as the root of the Pages artifact or `gh-pages` branch. All URLs are relative, so the page works both at a custom domain and under a repository subpath.

If using GitHub's branch-based Pages configuration, copy this directory's contents to the repository-level `docs/` directory, then select **Deploy from a branch → your branch → /docs** in **Settings → Pages**.

## Configuration

Before publishing, verify these values near the top of `app.js`:

- `SUPPORT_EMAIL`: currently `support@awibox.com`
- `APP_VERSION`: currently `1.0.1`

The contact form is privacy-friendly and serverless. It prepares a `mailto:` message in the visitor's default email client; it does not submit or store form data on the website.
