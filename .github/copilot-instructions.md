# KoliBri Documentation Site (public-ui.github.io)

**ALWAYS** follow these instructions first and only fallback to additional search and context gathering if the information here is incomplete or found to be in error.

This repository contains the Docusaurus v3 documentation website for the KoliBri Web Component Library. The site supports German (default) and English locales and includes live component playgrounds.

## Working Effectively

### Initial Setup and Dependencies
- Install Node.js 22 if not available: `curl -fsSL https://nodejs.org/dist/v22.17.1/node-v22.17.1-linux-x64.tar.xz | tar -xJ && export PATH=$(pwd)/node-v22.17.1-linux-x64/bin:$PATH`
- Install pnpm globally: `npm install -g pnpm`
- Install all dependencies: `pnpm install` -- takes 4 minutes. NEVER CANCEL. Set timeout to 8+ minutes.
- **CRITICAL TIMING**: pnpm install includes postinstall asset copying from @public-ui packages which takes significant time

### Essential Build and Development Commands
- **Development server**: `npm start` -- takes 30 seconds to start. NEVER CANCEL. Set timeout to 2+ minutes.
  - Runs on http://localhost:3000/
  - Includes auto-generation of documentation and hot reloading
  - German version by default, English at http://localhost:3000/en/
- **Production build**: `pnpm run build` -- takes 3 minutes. NEVER CANCEL. Set timeout to 8+ minutes.
  - Builds for both German and English locales
  - Includes asset optimization, search indexing, and minification
- **Serve production build**: `npm run serve` -- starts in 2 seconds on http://localhost:3000/
- **Generate docs only**: `npm run gen:doc` -- runs autogen script for component documentation
- **Dependency updates**: `pnpm run update` -- updates minor and checks major dependencies

### Code Quality and Formatting
- **Lint check**: `pnpm run lint` -- takes 5 seconds. Runs TypeScript compilation + ESLint.
- **Format check**: `pnpm run format` -- takes 3 seconds. Checks Prettier formatting.
- **Format fix**: `npx prettier blog docs src --write` -- fixes all formatting issues.
- **Clean build artifacts**: `pnpm run clean` -- removes generated files using git clean.

### Critical Timeout Values and Build Warnings
- **NEVER CANCEL**: `pnpm install` (4 min), `pnpm run build` (3 min), `npm start` (30 sec)
- Build warnings about "KoliBri TypeError: Cannot read properties of null" are NORMAL and expected
- Prettier warnings about "Critical dependency" are NORMAL for this Docusaurus setup
- Set timeouts: install=8min, build=8min, start=2min, lint=1min, format=1min

## Validation Requirements

### Manual Testing Scenarios
After making any changes, ALWAYS perform these validation steps:

1. **Basic functionality test**:
   ```bash
   npm start
   # Wait for "Client: Compiled successfully"
   # Access http://localhost:3000/ and verify site loads
   # Navigate to component docs at /docs/components/
   # Test search functionality (search box in header)
   ```

2. **Multi-language validation**:
   ```bash
   # Verify German version (default): http://localhost:3000/
   # Verify English version: http://localhost:3000/en/
   # Test language switcher in header
   ```

3. **Component playground testing**:
   ```bash
   # Navigate to any component page (e.g., /docs/components/button)
   # Verify live code editor works (Live-Editor section)
   # Test configuration options in Konfigurator panel
   # Verify component preview updates with property changes
   # Test different component variants and icons
   ```

4. **Production build validation**:
   ```bash
   pnpm run build
   npm run serve
   # Test same scenarios as above on production build
   ```

5. **Code quality validation**:
   ```bash
   pnpm run lint
   pnpm run format
   # Both must pass before committing
   ```

## Repository Structure and Key Locations

### Critical Directories
- `/docs/` -- Main German documentation content (Markdown/MDX)
- `/i18n/en/docusaurus-plugin-content-docs/current/` -- English translations
- `/docs/30-components/` -- Component documentation (50+ components: button, input, table, etc.)
- `/docs/10-get-started/` -- Getting started guides
- `/docs/20-concepts/` -- Architecture and concept documentation
- `/src/components/` -- React components for the docs site (LiveEditor, Configurator, etc.)
- `/src/theme/` -- Docusaurus theme customizations
- `/static/assets/` -- Static assets (auto-populated from @public-ui packages)
- `/scripts/` -- Build automation scripts (autogen.doc.js, minify.js, etc.)

### Configuration Files
- `package.json` -- Scripts and dependencies (uses pnpm)
- `docusaurus.config.js` -- Docusaurus configuration
- `sidebars.js` -- Documentation navigation structure
- `eslint.config.mjs` -- ESLint configuration
- `prettier.config.js` -- Prettier formatting (120 chars, single quotes, tabs)
- `commitlint.config.js` -- Conventional Commits enforcement
- `.editorconfig` -- Editor configuration (tabs for code, spaces for Markdown)

## Development Guidelines

### Documentation Rules
- File names must be in **English** for SEO-friendly URLs
- Translation keys use **kebab-case** in English
- Default translation text (`message`) is in **German**
- Use `translate` method, NOT `Translate` component
- Avoid explicit `slug` definitions (auto-generated from filenames)
- All code samples and technical terms in English
- Remove tag sections: replace `/tags:(\n.+)+/` with `---`

### Code Style
- Tabs for indentation (except Markdown files use spaces)
- Prettier: 120 character line width, single quotes
- TypeScript + React + Sass/CSS
- Conventional Commits for commit messages

### Common Issues and Solutions
- **Build fails**: Run `pnpm run clean` then `pnpm install`
- **Assets missing**: Postinstall copies assets from @public-ui packages automatically
- **Format errors**: Run `npx prettier blog docs src --write`
- **Lint errors**: Check TypeScript compilation errors first, then ESLint issues
- **Dev server slow**: Initial compile takes 30+ seconds, subsequent changes are fast

## Quick Reference Commands

```bash
# Complete development workflow
pnpm install                    # 4 min - NEVER CANCEL
npm start                       # 30 sec startup
# Make changes, test in browser
pnpm run lint                   # 5 sec
pnpm run format                 # 3 sec  
pnpm run build                  # 3 min - NEVER CANCEL
npm run serve                   # 2 sec

# Essential development commands
npm run gen:doc                 # Generate component docs
pnpm run update                 # Update dependencies (ncu)
pnpm run unused                 # Check unused deps (knip)

# Emergency cleanup
pnpm run clean                  # Git clean generated files
pnpm install                    # Reinstall everything

# Format fixes
npx prettier blog docs src --write  # Fix all formatting issues
```

## Architecture Notes

This is a Docusaurus v3 site that:
- Auto-generates component documentation from @public-ui packages
- Supports German/English with full localization
- Includes live component playgrounds with Monaco editor
- Uses Lunr for client-side search
- Builds static sites for production deployment
- Integrates with KoliBri Web Component Library for live examples

The build process is complex due to multi-locale support, asset processing, and search indexing, which is why build times are longer than typical documentation sites.