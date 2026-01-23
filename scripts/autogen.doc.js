#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { rimraf } = require('rimraf');

function filterMdFiles(dir) {
	const dirPath = path.resolve(process.cwd(), dir);
	const files = [];

	const walk = (currentPath) => {
		fs.readdirSync(currentPath).forEach((file) => {
			const fullPath = path.resolve(currentPath, file);
			const stat = fs.lstatSync(fullPath);

			if (stat.isDirectory() && !/@else/.test(fullPath)) {
				walk(fullPath);
			} else if (path.extname(fullPath) === '.md') {
				files.push(fullPath);
			}
		});
	};

	walk(dirPath);
	return files;
}

// Bereinige MDX-Parse-Fehler aus den generierten Readmes
function sanitizeForMDX(content) {
	return (
		content
			// Entferne {@link ...} Syntax – verursacht MDX Acorn-Parse-Fehler
			.replace(/\{\@link\s+\w+\}/g, '')
			// Entferne Deprecated-Blöcke (verursachen MDX-Fehler mit className-Attributes in HTML)
			.replace(
				/###\s+`[^`]+`\s*\n\n<span className="text-red-500">\*\*\[DEPRECATED\]\*\*<\/span>.*?(?=\n###|\n##|$)/gs,
				''
			)
			// Entferne HTML <br/> Tags
			.replace(/<br\s*\/>/g, '')
			// Standard Replacements
			.replace(/style="color:red"/g, 'class="text-red-500"')
			.replace(/^# [\w-]+/, '')
			.replace(/^( *\r?\n)+/, '')
			.replace(/\]\(..\//g, '](./')
			.replace(/class=/g, 'className=')
			.replace(/"_target/g, '" _target')
			.replace(/ *\\_/g, ' _')
			.replace(/\[([^\]]+)\]\(([^)]+)\/readme\.md\)/g, '[$1]($2)')
			.replace(/(### )`([^(]+)/, '$1$2\n\n`$2')
	);
}

const DOC_FOLDERS = ['readmes'];

async function main() {
	try {
		await rimraf([...DOC_FOLDERS, '**/*.md'].join('/'));

		const README_PATHS = filterMdFiles(path.resolve(process.cwd(), 'node_modules/@public-ui/components/doc'));

		README_PATHS.forEach((readmePath) => {
			const name = path.basename(readmePath).replace(/\..+/g, '');
			const targetPath = path.resolve(process.cwd(), ...DOC_FOLDERS, name);

			fs.mkdirSync(targetPath, { recursive: true });

			const content = fs.readFileSync(readmePath, 'utf-8');
			fs.writeFileSync(path.resolve(targetPath, 'readme.md'), sanitizeForMDX(content), 'utf-8');
		});

		console.log('✓ Dokumentation erfolgreich generiert und für MDX bereinigt');
	} catch (error) {
		console.error('Fehler bei der Dokumentationsgenerierung:', error.message);
		process.exit(1);
	}
}

main();
