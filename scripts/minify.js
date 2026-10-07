#!/usr/bin/env node

const { minify } = require('html-minifier-terser');
const fs = require('fs');
const path = require('path');

var options = {};

function minifyFiles(dir) {
		const dirItems = fs.readdirSync(dir);
		dirItems.forEach((dirItem) => {
			const dirItemPath = path.resolve(dir, dirItem);
			const stats = fs.lstatSync(dirItemPath);
			// Nur HTML-Markup minifieren: Auf .js-Dateien angewendet würde der HTML-Parser
			// JS-Dateien, deren String-Literale wohlgeformte Tags enthalten (z. B.
			// "<button>"), erfolgreich als HTML parsen und durch angehängte Schließ-Tags
			// korrupt machen. Bei Parse-Fehlern bleibt eine Datei zwar unangetastet, aber
			// genau dieser Zufallsschutz reicht nicht als Filter.
			if (
				stats.isFile() &&
				dirItemPath.endsWith('.html') &&
				/(htaccess|robots)/.test(dirItemPath) === false &&
				!dirItemPath.endsWith('.json')
			) {
			let code = fs.readFileSync(dirItemPath, { encoding: 'utf-8' });
			minify(code, options)
				.then((result) => {
					fs.writeFileSync(dirItemPath, result.replace(/\r?\n/g, ' ').replace(/(\t| {2,})/g, ' '), {
						encoding: 'utf-8',
					});
				})
				.catch(() => {
					//console.warn(`${dirItemPath} NOT minified`);
				});
		} else if (stats.isDirectory()) {
			minifyFiles(dirItemPath);
		}
	});
}

minifyFiles(path.resolve(process.cwd(), 'build'));
