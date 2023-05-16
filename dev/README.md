# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```
$ pnpm i
```

## Local Development

```
$ npm start
$ npm start -- --locale en
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Translation

Basic rules for translate the website:

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
