# khayat.ca

Astro site for Brigitte Khayat Immigration & Refugee Consulting.

## Setup

The project uses pnpm for dependencies and mise as the canonical task runner.
mise provisions the Node.js version declared in `mise.toml`.

```shell
pnpm install
mise run dev
```

The development server runs at `http://localhost:4321`.

## Project structure

```text
public/                         Static files copied as-is
reviews/                        Raw Google Takeout review exports
scripts/build-google-reviews.ts Review normalization script
src/assets/                     Images processed by Astro
keystatic.config.ts             Keystatic blog editor configuration
src/components/                 Shared Astro components
src/content/blog/                Blog posts managed by Keystatic
src/data/                       Generated review data (gitignored)
src/layouts/                    Page and article layouts
src/pages/                      Routes and page templates
src/styles/global.css           Global styles and design tokens
```

## Google reviews

The raw exports under `reviews/` are the source of truth. Before development
and production builds, the review task normalizes them into the gitignored
`src/data/google-reviews.json` file.

```shell
mise run build-reviews
```

See [`reviews/README.md`](reviews/README.md) for export and update instructions.

## Editing blog posts

Open [`https://www.khayat.ca/keystatic`](https://www.khayat.ca/keystatic) and
sign in with the GitHub account that has write access to this repository. Create
or edit a post in the **Blog posts** collection, then save it to publish. Netlify
usually rebuilds the site within one to two minutes.

The slug and URL are generated automatically from the title. Review the slug if
you want to change it before the first save; it cannot be changed afterwards.
The publish date defaults to today for new posts, and the author is set
automatically to Brigitte Khayat.

Use a landscape cover image at least 1200×630 pixels and under about 1 MB. Add
accurate, descriptive alt text for every cover image.

## Common tasks

| Command                    | Description                                               |
| :------------------------- | :-------------------------------------------------------- |
| `mise run dev`             | Generate reviews and start the development server         |
| `mise run build`           | Generate reviews and build the production site to `dist/` |
| `mise run preview`         | Preview the production build                              |
| `mise run check`           | Run formatting, type, and lint checks                     |
| `mise run fallow`          | Check for dead code and duplication                       |
| `mise run format`          | Format source and configuration files                     |
| `mise run clean`           | Remove Astro and production build artifacts               |
| `mise run astro -- <args>` | Run Astro CLI commands                                    |

`pnpm run build` remains available for Netlify and other environments that use
the standard package build script.
