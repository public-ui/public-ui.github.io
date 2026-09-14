---
name: komponenten-doku-anpassen
description: Überarbeitet eine KoliBri-Komponentendokumentation (docs/30-components/<komponente>.mdx) nach dem verbindlichen Kapitelschema (Blaupause input-number.mdx, Sammelticket public-ui/interne-todos#124) und prüft jede Aussage gegen den KoliBri-Quellcode. Verwende diesen Skill immer, wenn eine Komponenten-Doku angepasst, überarbeitet, vereinheitlicht oder „nach dem Schema/der Blaupause“ umgebaut werden soll, wenn ein Unter-Issue „Doku prüfen: <Komponente>“ bearbeitet wird oder wenn nur einzelne Kapitel einer Komponenten-Doku (Barrierefreiheit, Designentscheidungen, Tastatursteuerung, Funktionalitäten) überarbeitet werden sollen – auch für Nicht-Eingabe-Komponenten wie Accordion, Card oder Tabs.
---

# Komponenten-Doku nach dem Schema anpassen

Goal: one component page under `docs/30-components/` follows the fixed chapter structure, contains only verified statements, and reads like every other component page. The work ends with a checked page and a short report – no commit, PR or issue changes unless the user asks.

The content rules (no implementation details under "Barrierefreiheit", backed rationales, features in "Funktionalitäten", …) are in the repo's `CLAUDE.md`, which is loaded automatically. This skill adds the workflow and the chapter schema. Read [references/kapitelstruktur.md](references/kapitelstruktur.md) before editing – it defines what each chapter must contain.

## 1. Gather the sources

Read all of these before changing anything; the old page is a source of hints, not of truth.

- the page itself and the blueprint `docs/30-components/input-number.mdx`
- the preview `src/components/previews/components/<Name>.tsx` (which `propertyComponents` exist)
- the generated API readme `readmes/<komponente>/readme.md` (run `pnpm run gen:doc` if missing)
- all snippets in `docs/30-components/_shared/` (to know what can be reused)
- the KoliBri source for the component (see step 2)

## 2. Verify against KoliBri

Statements in the docs must match the KoliBri version pinned in `package.json` (`@public-ui/components`). The readmes/JSDoc lag behind the code, and old docs contain invented behaviour – every earlier rewrite found several errors this way.

- Locate the KoliBri repo. It is usually cloned next to this repo (e.g. `../kolibri`). If you can't find it, ask the user for the path rather than guessing; as a fallback read files via `gh api repos/public-ui/kolibri/contents/<path>?ref=<tag>`.
- Read at the tag, not the checked-out branch – the local clone is often on a feature branch: `git -C <kolibri> show <tag>:packages/components/src/components/<komponente>/shadow.tsx`. Shared behaviour lives in `functional-components/` and `functional-component-wrappers/`.
- For every rationale ("bewusst", "um … zu", "damit", a "Begründung" cell) look for evidence in code comments/JSDoc or `git -C <kolibri> log --grep=<term> -- <path>`. No evidence → keep the observable fact, drop the motive.
- Keyboard behaviour: native elements get their keys from the browser (say so via `keyboard/native-intro.md`); custom widgets (listbox, tabs, tree …) implement keys in KoliBri – read the key handlers and e2e tests. Also check for form submission on `Enter` (`propagateSubmitEventToForm`).
- Note real bugs you stumble upon (with file:line at the tag) for the report. Don't document workarounds for unverified suspicions.

## 3. Rebuild the page

Follow [references/kapitelstruktur.md](references/kapitelstruktur.md) chapter by chapter. Practical points learned from the form components:

- **Keep what is correct.** Valid use cases, best practices, FAQs and links from the old page stay – rewording is not the goal, structure and correctness are.
- **Barrierefreiheit stays short.** Typically 2–4 bullets. For each bullet ask: is it an implementation detail (→ remove or describe the observable effect), a feature (→ Funktionalitäten), a general recommendation (→ Best Practices) or already a row in "Konkrete Designentscheidungen" (→ remove)?
- **Non-interactive or grouping components** (Card, Heading, Badge, Quote …): omit "Tastatursteuerung" if nothing is operable; describe what is grouped and how headings/structure reach assistive technology.
- **Snippets:** use a `_shared` snippet only if it is accurate for this component. If a text you write would be identical in other component pages, create a snippet (no headings inside) and mention it in the report; edit a snippet instead of copying and adapting it. When a snippet changes, check every page that imports it (`Select-String`/`grep` for the file name).
- **Previews:**
  - every preview needs `context` (`example` / `playground` / `feature`) matching its section, and `feature` previews need `visibleProperties`
  - add a missing control to the preview `.tsx` when the component supports the property (follow the existing pattern, e.g. `_touched: <BooleanProperty label="Touched" />`)
  - examples must show the feature immediately via `initialProps`; if a preview keeps `_value` in state, initialise it from `props.initialProps?._value`
- **Known KoliBri bugs**: short note with issue link next to the affected feature, never under "Barrierefreiheit".
- German prose with correct umlauts, camelCase property names, tabs in JSX, single quotes.

## 4. Check

Run from the repo root:

```bash
node .claude/skills/komponenten-doku-anpassen/scripts/mdx-check.cjs . docs/30-components/<komponente>.mdx
node .claude/skills/komponenten-doku-anpassen/scripts/check-imports.cjs docs/30-components/<komponente>.mdx
node scripts/check.preview.context.js
```

If you changed a preview or snippet, also run `pnpm run lint` (tsc + ESLint + context check) and re-check every page importing the changed snippet.

Then open the page in the dev server (`pnpm run startonly`, http://localhost:3000/docs/components/<komponente>): it must render without "This page crashed", show every preview, and the feature examples must display their feature without user interaction. A dev server that compiled a broken intermediate state (e.g. merge conflict markers) can keep serving blank pages – restart it before debugging the page.

## 5. Report

End with a short German summary for the user:

1. Changed files
2. What changed per chapter (moved, removed, added) – especially removed rationales that could not be backed
3. Facts verified in KoliBri that contradicted the old page (with file:line at the tag)
4. Suspected KoliBri bugs (not filed – the user decides)
5. New or changed snippets and which other pages they affect
6. Open questions
