# Kapitelstruktur einer Komponenten-Doku

Source of truth: public-ui/interne-todos#124. Blueprint: `docs/30-components/input-number.mdx`.

The order is mandatory. A chapter is omitted only if the component has demonstrably no content for it (e.g. "Tastatursteuerung" for a non-interactive component).

## Frontmatter and imports

```mdx
---
title: <Name>
description: Beschreibung, Spezifikation und Beispiele für die <Name>-Komponente.
---

import Readme from '@site/readmes/<komponente>/readme.md';
import <Name>Preview from '@site/src/components/previews/components/<Name>';
import LabelNote from './_shared/a11y-properties/label.md';
// … further snippets
```

No `slug`, no `tags`, no banner component.

## `# <Komponentenname>`

- **Synonyme:** 3–5 terms users would search for (German and English).
- **Beschreibung:** purpose in 1–2 sentences. Which native HTML element or WAI-ARIA pattern is the basis? For groupings: what is grouped and how does the content behave?

## `## Beispiel`

One introductory sentence and one preview (`context="example"`) showing the default rendering without optional properties.

## `## Barrierefreiheit`

Bullets: what KoliBri adds on top of the native element or pattern to make the component accessible, and which accessibility-related recommendations we give.

- Yardstick: what does a developer or accessibility tester gain from it?
- Describe observable behaviour (what users and screen readers experience) – **no implementation details** (ARIA roles/attributes, `tabindex`, hidden elements, CSS, internal mechanics).
- No features (they go to "Funktionalitäten") and nothing that is already in "Konkrete Designentscheidungen".
- Recurring statements via shared snippets from `_shared/a11y-properties/` (e.g. label, error message for form fields).

### `### Konkrete Designentscheidungen`

Table *Entscheidung | Begründung* with the decisions relevant for accessibility and operation.

- Rationales should be backed by the KoliBri source (comments, JSDoc) or its git history. Existing rationales without evidence stay unchanged and are listed in the report for manual verification – they may document decisions recorded nowhere else. Only rationales the code contradicts are corrected. Never add a rationale you can't back.
- No rows that merely restate the implementation or describe behaviour without a decision behind it. The "Begründung" cell never just repeats the decision.

### `### Links und Referenzen`

External references: MDN, HTML Living Standard, WAI-ARIA APG, WCAG/BITV, "Bekannte Probleme" if relevant.

## `## Verwendung`

When to use the component and when not (with alternatives). Central configuration, value formats, implicit behaviour and limits (e.g. validation happens in the application).

### `### Tastatursteuerung`

Table *Taste | Funktion*, aligned with the [UIE-Handreichung](https://handreichungen.bfit-bund.de/barrierefreie-uie/).

- Introduction: does the browser (native element) or KoliBri (custom widget) provide the keyboard behaviour? Use `_shared/keyboard/native-intro.md` or `_shared/keyboard/custom-intro.md`.
- Describe deviations from the WAI-ARIA pattern factually.
- Omit the chapter for non-interactive components (e.g. Card, Heading, Badge).

### `### Best Practices / Empfehlungen`

Do's and don'ts, general recommendations (e.g. validation, content, nesting) and pointers to better-suited components.

### `### Anwendungsfälle`

List of typical use cases.

### `### FAQ` (optional)

Only real, recurring questions that the page doesn't already answer elsewhere (otherwise link to the section). Existing "why" answers without evidence stay and are listed for manual verification; don't write new unbacked ones.

## `## Playground`

One preview (`context="playground"`) with all sensible properties.

## `## Funktionalitäten`

One `###` section per feature or property group with a short description and its own preview (`context="feature"`, `visibleProperties`).

- The first example is a working basic example (e.g. Combobox with suggestions, Accordion with content).
- The feature is visible immediately – set start values via `initialProps` instead of "enter something first".
- Accessibility-relevant behaviour of the feature belongs here, not under "Barrierefreiheit" (e.g. clear button, variants, states).
- No purely visual details (icon direction, colours, spacing) unless they matter for accessibility.
- Known KoliBri bugs as a note with a link to the issue, right at the feature.
- Recurring sections via shared snippets from `_shared/features/`.

## `## API`

### `### Events`

`<EventsIntro />` (`_shared/api/events-intro.md`) plus table *Event | Auslöser | Value* (value verified in the source). Omit if the component emits no events.

Then `<Readme />` (generated API reference).
