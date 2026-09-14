#!/usr/bin/env node
/**
 * Checks MDX component pages for import problems that the MDX compiler does not report:
 * - components used as <Name /> without an import
 * - imports that are never used
 * - relative imports (e.g. './_shared/…') pointing to files that don't exist
 * Usage: node check-imports.cjs <file.mdx> [file …]
 */
const fs = require('fs');
const path = require('path');

const files = process.argv.slice(2);
if (files.length === 0) {
	console.error('Usage: node check-imports.cjs <file.mdx> [file …]');
	process.exit(2);
}

let problems = 0;
for (const file of files) {
	const source = fs.readFileSync(file, 'utf8');
	// Supports `import A from '…'`, `import { B, C as D } from '…'` and `import A, { B } from '…'`.
	const imports = [...source.matchAll(/^import\s+(?:(\w+)\s*,?\s*)?(?:\{([^}]*)\})?\s*from\s+'([^']+)';?\s*$/gm)].flatMap(
		([, defaultName, namedList, target]) => {
			const named = (namedList ?? '')
				.split(',')
				.map((part) => part.trim().split(/\s+as\s+/).pop())
				.filter(Boolean);
			return [defaultName, ...named].filter(Boolean).map((name) => ({ name, target }));
		}
	);
	const importedNames = new Set(imports.map((entry) => entry.name));
	const used = new Set([...source.matchAll(/<([A-Z]\w*)[\s/>]/g)].map(([, name]) => name));

	const missing = [...used].filter((name) => !importedNames.has(name));
	const unused = imports.filter((entry) => !used.has(entry.name)).map((entry) => entry.name);
	const broken = imports
		.filter((entry) => entry.target.startsWith('.') && !fs.existsSync(path.resolve(path.dirname(file), entry.target)))
		.map((entry) => entry.target);

	if (missing.length || unused.length || broken.length) {
		problems++;
		console.log(`FAIL ${file}`);
		if (missing.length) console.log(`  used but not imported: ${missing.join(', ')}`);
		if (unused.length) console.log(`  imported but not used: ${unused.join(', ')}`);
		if (broken.length) console.log(`  import target missing: ${broken.join(', ')}`);
	} else {
		console.log(`OK   ${file}`);
	}
}
process.exit(problems ? 1 : 0);
