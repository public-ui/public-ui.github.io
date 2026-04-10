---
name: Project Status
description: Overview of the KoliBri documentation rewrite initiative
type: project
---

## Documentation Rewrite Initiative

**Branch:** feature/473-rewrite-docs (based on main)

**Goal:** Systematically rewrite all 52 KoliBri component documentation pages to conform to a new unified standard that emphasizes clarity, structure, and accessibility information.

### Progress (as of 2026-04-10)

**Recently merged/in progress:**
- accordion.mdx — completed
- alert.mdx — completed (copilot branch merged)
- textarea.mdx — completed (copilot branch merged)

**Remaining components:** ~49 components still need rewriting

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
