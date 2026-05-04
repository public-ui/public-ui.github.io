---
name: Rewrite Template & Rules
description: Official template structure and quality rules for rewriting KoliBri component documentation
type: reference
---

## Documentation Template Structure

```
---
title: {KomponentenName}
description: Beschreibung, Spezifikation und Beispiele für die {KomponentenName}-Komponente.
---

import Readme from '@site/readmes/{component}/readme.md';
import {Component}Preview from '@site/src/components/previews/components/{Component}';

# {KomponentenName}

**Synonyme:** [Komma-separierte Liste, max 3–5]

**Beschreibung:** [1-2 Sätze, allgemeine Beschreibung]

## Beispiel

[Einleitender Satz]

<{Component}Preview
  visibleProperties={[]}
  initialProps={{ ... }}
  codeCollapsable
/>

## Barrierefreiheit

[Stichpunktliste aus alter Doku]

### Links und Referenzen

- <kol-link _href="..." _target="_blank" _label="..."></kol-link>

## Verwendung

### Tastatursteuerung

[Only if component has keyboard interaction. Table format.]

### Best Practices / Empfehlungen

[Do's/Don'ts, when to use, alternatives]

### Anwendungsfälle

[Typical use scenarios]

### FAQ

[Only if typical questions exist]

## Konstruktion / Technik

### Playground

<{Component}Preview codeCollapsable />

### Funktionalitäten (mit Code)

[Function groups with descriptions, visibleProperties, tables as needed]

#### Events

| Event | Auslöser | Value |
| ----- | -------- | ----- |
| ...   | ...      | ...   |

## API

<Readme />
```

## Critical Rules

### Never

1. **Hallucinate features.** If not in code/README/Preview, mark as `[Information nicht im Code gefunden]`
2. **Document styling.** No colors, spacing, layout — only functionality/behavior
3. **Invent visibleProperties arrays.** Use existing values from old docs or Preview component
4. **Create an empty Links section** at the end (only in Barrierefreiheit > Links und Referenzen)
5. **Include tags or slug in frontmatter** — these are auto-generated
6. **Use Preview components that don't exist.** If no .tsx Preview file, use direct `<kol-*>` tags instead

### Always

1. **Read three sources:** existing docs, README, Preview component
2. **Use external references when needed:** Live demo, GitHub source, KoliBri MCP
3. **Format links as** `<kol-link _href="..." _target="_blank" _label="..."></kol-link>`
4. **Put Events tables in Konstruktion/Technik**, not API section
5. **Import `<Readme />`** at end — this auto-includes the full API
6. **Use German language** — but keep tech terms and code in English
7. **Keep tabs for indentation,** 120 char max line width, single quotes in JSX
8. **Check old docs for visibleProperties arrays** — these are real, not invented

## Reference Templates

- `accordion.mdx` — simpler component structure
- `textarea.mdx` — complex component with Props tables and many sections
