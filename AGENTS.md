# Coding agent guidelines for public-ui.github.io

This repository contains the Docusaurus documentation for the KoliBri component library.

## Development setup

- Use **pnpm** as the package manager. Run `pnpm install` if dependencies are missing.
- Check TypeScript and ESLint rules with `pnpm run lint`.
- Ensure the site can be built locally with `pnpm run build`.

## Commit messages

Commits must follow the [Conventional Commits](https://www.conventionalcommits.org) style. A commitlint configuration is present in `commitlint.config.js`.

## Documentation and translation rules

Follow these rules when editing or adding docs:

- File names must be in **English** to generate SEO-friendly URLs.
- Keep translations close to the original text.
- Translation keys are written in English using **kebab-case**.
- The default translation text (`message`) is written in **German**.
- Use the `translate` method rather than the `Translate` component.
- Do not add custom translation descriptions.
- Avoid explicit `slug` definitions (except in `docs/welcome.md`); slugs are generated from file names.
- All code samples and technical terms are in English.
- Remove tag sections: replace `/tags:(\n.+)+/` with `---`.

## Formatting conventions

- Tabs are used for indentation except in Markdown files (see `.editorconfig`).
- Prettier is configured for a line width of 120 characters and single quotes.

## Required checks before committing

Run the following commands and ensure they succeed:

```bash
pnpm run lint
pnpm run build
```

