#!/usr/bin/env node
/**
 * Compiles MDX/MD files with @mdx-js/mdx (+ remark-gfm) to catch syntax errors before Docusaurus does.
 * Usage: node mdx-check.cjs <repo-root> <file> [file …]
 * Frontmatter is stripped; imports are not resolved (see check-imports.cjs for that).
 */
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const [root, ...files] = process.argv.slice(2);
if (!root || files.length === 0) {
	console.error('Usage: node mdx-check.cjs <repo-root> <file> [file …]');
	process.exit(2);
}

(async () => {
	const resolveFrom = (name) => pathToFileURL(require.resolve(name, { paths: [path.resolve(root)] })).href;
	const { compile } = await import(resolveFrom('@mdx-js/mdx'));
	const gfm = (await import(resolveFrom('remark-gfm'))).default;

	let failed = 0;
	for (const file of files) {
		const source = fs.readFileSync(file, 'utf8').replace(/^---[\s\S]*?---/, '');
		try {
			await compile(source, { remarkPlugins: [gfm] });
			console.log(`OK   ${file}`);
		} catch (error) {
			failed++;
			console.log(`FAIL ${file}: ${error.message}`);
		}
	}
	process.exit(failed ? 1 : 0);
})();
