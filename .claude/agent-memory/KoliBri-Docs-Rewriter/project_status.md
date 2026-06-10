---
name: Project Status
description: Overview of the KoliBri documentation rewrite initiative
type: project
---

## Documentation Rewrite Initiative

**Branch:** feature/473-rewrite-docs (based on main)

**Goal:** Systematically rewrite all 52 KoliBri component documentation pages to conform to a new unified standard that emphasizes clarity, structure, and accessibility information.

### Progress (as of 2026-04-10)

**All 54 component docs rewritten** — complete bulk rewrite finished on 2026-04-10.

Components completed:
- accordion.mdx, alert.mdx, textarea.mdx — reference examples (previously done)
- abbr, avatar, badge, breadcrumb, button, button-link, card, combobox
- details, dialog, drawer, form, heading, icon, image, input-checkbox
- input-color, input-date, input-email, input-file, input-number, input-password, input-radio, input-range
- input-text, link, link-button, meter, modal, nav, pagination, popover-button
- popover, progress, quote, select, single-select, skip-nav, spin, split-button
- table-stateful, table-stateless, tabs, toaster, toolbar, tooltip, tree, tree-item
- version, kolibri
- index.mdx — tags removed (overview page, not a component)

**Remaining components:** None — all docs rewritten.

### Reference Components

Two components serve as format templates for the rewrite:
1. **accordion.mdx** — simpler component without many Props; shows minimal structure
2. **textarea.mdx** — complex component with many Props; shows full structure with tables

Both use the new template format with:
- Frontmatter without tags/slug
- Preview components imported from `@site/src/components/previews/components/`
- Sections: Beispiel, Barrierefreiheit, Verwendung, Konstruktion/Technik, API
- Events tables in Konstruktion/Technik, not API
- `<Readme />` component at the end

### Key Information Sources

- **README for each component:** `readmes/{component}/readme.md` (Props, Events, API)
- **Preview component:** `src/components/previews/components/{Component}.tsx` (visibleProperties array, example props)
- **Live demo:** `https://develop--kolibri-public-ui.netlify.app/#/{component}/basic`
- **KoliBri source:** `https://github.com/public-ui/kolibri/`

### Quality Checklist

Before saving a rewritten component:
- No styling (colors, spacing, layout) — only functionality/behavior
- No hallucinated Props or Features
- visibleProperties arrays from existing code, not invented
- Links formatted as `<kol-link>` components
- Frontmatter has no tags or slug
- No double Links section at the end
- All template sections present or justified as removed
