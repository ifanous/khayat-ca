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
src/components/                 Shared Astro components
src/data/                       Generated review data (gitignored)
src/layouts/                    Page and article layouts
src/pages/                      Routes and blog posts
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
