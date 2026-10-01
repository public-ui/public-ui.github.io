# Hinweise zur Umsetzung der Kapitel

The chapter schema itself – which chapters exist, in which order, and what each must contain – is defined **only** in `docs/30-components/_STRUCTURE.md`. Read it first. This file deliberately does not repeat it; it only adds what you need to apply the schema: how to migrate old pages, MDX formats, and per-chapter pitfalls. If something here seems to contradict `docs/30-components/_STRUCTURE.md`, follow that file and tell the user.

Worked examples of the schema: `docs/30-components/input-number.mdx` (form component) and `docs/30-components/accordion.mdx` (non-form component).

## Migrating a page from the old schema

Older pages use a previous structure (`## Verwendung` with `###` subchapters, Playground before "Funktionalitäten"). Nothing is dropped during the move – the content changes its place:

| Old chapter                               | New place                                                                                         |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `## Verwendung` (intro text)              | FAQ entries                                                                                       |
| `### Tastatursteuerung`                   | `## Tastatursteuerung`                                                                            |
| `### Best Practices / Empfehlungen`       | FAQ answers                                                                                       |
| `### Anwendungsfälle`                     | `**Anwendungsfälle:**` paragraph below the description                                            |
| `### FAQ`                                 | `## FAQ`                                                                                          |
| `## Playground` before "Funktionalitäten" | `## Playground` after "Funktionalitäten"                                                          |

Turning a recommendation into an FAQ entry means finding the question it answers ("Validieren Sie Werte in der Anwendung" → "Wie schränke ich Wertebereiche ein?"). Group related recommendations under one question instead of creating one question per bullet, and merge them into an existing FAQ entry on the same topic.

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

## Formats

Synonyme, Beschreibung and Anwendungsfälle are paragraphs with a bold lead-in, not headings:

```mdx
**Anwendungsfälle:**
- Altersangaben in Registrierungs- oder Kontaktformularen
- Eingabe von Mengen, Stückzahlen oder Preisen
```

FAQ entries: the question in bold with two trailing spaces (hard line break), the answer on the next line, a blank line between entries – no headings and no `<details>`:

```mdx
**Wofür sollte ich InputNumber nicht verwenden?**  
Verwenden Sie InputNumber ausschließlich für Werte, die mathematisch verarbeitet werden. …
```

## Per-chapter pitfalls

**Beschreibung** – for components without a native element, name the WAI-ARIA pattern; for groupings, say what is grouped and how the content behaves.

**Barrierefreiheit**

- Yardstick: what does a developer or accessibility tester gain from it?
- No features (they go to "Funktionalitäten") and nothing that is already in "Konkrete Designentscheidungen".
- Recurring statements via shared snippets from `_shared/a11y-properties/` (e.g. label, error message for form fields).

**Konkrete Designentscheidungen**

- Existing rationales without evidence stay unchanged and are listed in the report for manual verification – they may document decisions recorded nowhere else. Only rationales the code contradicts are corrected. Never add a rationale you can't back.
- No rows that merely restate the implementation or describe behaviour without a decision behind it. The "Begründung" cell never just repeats the decision.

**Links und Referenzen** – besides MDN and the HTML Living Standard, the WAI-ARIA APG pattern (custom widgets) and WCAG/BITV criteria are suitable references.

**Tastatursteuerung**

- Use `_shared/keyboard/native-intro.md` or `_shared/keyboard/custom-intro.md` for the introduction.
- Align the table with the [UIE-Handreichung](https://handreichungen.bfit-bund.de/barrierefreie-uie/); describe deviations from the WAI-ARIA pattern factually.

**FAQ** – an entry only answers what the page doesn't already say; otherwise link to the section. Existing "why" answers without evidence stay and are listed for manual verification; don't write new unbacked ones.

**Funktionalitäten**

- The first example is a working basic example (e.g. Combobox with suggestions, Accordion with content).
- The feature is visible immediately – set start values via `initialProps` instead of "enter something first".
- Accessibility-relevant behaviour of the feature belongs here, not under "Barrierefreiheit" (e.g. clear button, variants, states).
- No purely visual details (icon direction, colours, spacing) unless they matter for accessibility.
- Known KoliBri bugs as a note with a link to the issue, right at the feature.
- Recurring sections via shared snippets from `_shared/features/`.

**Events** – `<EventsIntro />` is `_shared/api/events-intro.md`. Verify the "Value" column in the source. Omit the chapter if the component emits no events.
