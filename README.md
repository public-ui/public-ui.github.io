# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
$ pnpm i
```

## Local Development

```bash
$ npm start
$ npm start -- --locale en
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Tagging new versions

Whenever a new KoliBri version is ready, the current state of the docs describing that version should be persisted with the following command:

```sh
npm run docusaurus docs:version $version_number
``` 

The changed files have to be committed.

Afterwards, the new version will be available to select in the version-dropdown in the header of the website. 

For further reading, consult the [Docusaurus docs regarding versioning](https://docusaurus.io/docs/versioning#tagging-a-new-version). 

## Translation

Basic rules for translate the website:

- File names all in english - for SEO URLs.
- The translation should be as close as possible to the original text.
- The translation keys should be in English separated by dashes (kebab-case).
- The default translation text (`message`) should be in German. So we does not need always a description. Later they will be replaced with other language values.
- Only use the `translate` method! Do not use the `Translate` component!
- We handle no own translation descriptions.
- SEO-Urls
  - Do not use `slug` seo url definitions in the translated files (only `docs/welcome.md`).
  - The `slug` is automatically generated from the file name.
  - So all file names should be in English.
- All code samples should be in English.
- All technical terms should be in English.
- Use no tags: replace `/tags:(\n.+)+/` - `---`
