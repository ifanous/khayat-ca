# Agents

## mise

This project uses [mise](https://mise.jdx.dev/) as the task runner. mise
automatically provisions the correct Node.js version (declared in `mise.toml`
under `[tools]`) before every command, so the runtime is always consistent.

Run any task with:

```shell
mise run <task>
```

### Available tasks

| Task                         | Description                                  |
| :--------------------------- | :------------------------------------------- |
| `mise run dev`               | Start the local dev server                   |
| `mise run build`             | Production build to `./dist/`                |
| `mise run preview`           | Preview the production build locally         |
| `mise run lint`              | Lint source files with ESLint                |
| `mise run format`            | Auto-format source files with Prettier       |
| `mise run format-check`      | Check formatting without writing changes     |
| `mise run type-check`        | Run TypeScript type checking                 |
| `mise run clean`             | Remove `.astro/` and `dist/` build artifacts |
| `mise run install-deps`      | Install npm dependencies                     |
| `mise run update-deps`       | Update npm dependencies                      |
| `mise run sort-package-json` | Sort `package.json` keys                     |
| `mise run astro`             | Run the Astro CLI directly                   |
| `mise run netlify`           | Run the Netlify CLI                          |
