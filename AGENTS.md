# Agents

## Design artifacts

`DESIGN.md` is the normative, machine-readable design-system source. The
`.impeccable/design.json` sidecar contains generated extension metadata that
cannot be represented in `DESIGN.md`; never edit it by hand. After changing the
design system, update the implementation and `DESIGN.md`, then regenerate the
sidecar with Impeccable.

## mise

This project uses [mise](https://mise.jdx.dev/) as the task runner. mise
automatically provisions the correct Node.js version (declared in `mise.toml`
under `[tools]`) before every command, so the runtime is always consistent.

Run any task with:

```shell
mise run <task>
```

### Available tasks

| Task                         | Description                                           |
| :--------------------------- | :---------------------------------------------------- |
| `mise run astro`             | Run the Astro CLI directly                            |
| `mise run build`             | Generate reviews, then production build to `./dist/`  |
| `mise run build-reviews`     | Build normalized Google reviews data from `reviews/`  |
| `mise run check`             | Run format check, type check, and lint                |
| `mise run clean`             | Remove `.astro/` and `dist/` build artifacts          |
| `mise run dev`               | Generate reviews, then start the local dev server     |
| `mise run fallow`            | Run all Fallow checks                                 |
| `mise run fallow-dead-code`  | Check for dead code with Fallow                       |
| `mise run fallow-dupes`      | Check for duplicate code with Fallow                  |
| `mise run format`            | Auto-format source/config files with Prettier         |
| `mise run format-check`      | Check formatting without writing changes              |
| `mise run install-deps`      | Add production npm dependencies with pnpm             |
| `mise run install-dev-deps`  | Add development npm dependencies with pnpm            |
| `mise run lint`              | Lint source/config files with Biome and ESLint        |
| `mise run lint-fix`          | Auto-fix lint issues with Biome and ESLint where safe |
| `mise run netlify`           | Run the Netlify CLI                                   |
| `mise run preview`           | Preview the production build locally                  |
| `mise run sort-package-json` | Sort `package.json` keys                              |
| `mise run type-check`        | Run TypeScript type checking                          |
| `mise run uninstall-deps`    | Remove npm dependencies with pnpm                     |
| `mise run update-deps`       | Update npm dependencies with pnpm                     |
