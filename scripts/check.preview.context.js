#!/usr/bin/env node

/**
 * Prüft, dass jede Preview-Instanz in den Komponentendokumentationen eine `context`-Property
 * trägt und diese zum umgebenden Abschnitt passt.
 *
 * Hintergrund: Die Darstellung der Previews (Eigenschaften-Auswahl und Zustand des
 * Quellcode-Bereichs) wird zentral aus `context` abgeleitet, siehe `PREVIEW_CONTEXT_CONFIG`
 * in `src/components/previews/Preview.tsx`. MDX wird weder von `tsc` noch von ESLint erfasst,
 * eine fehlende oder falsche `context`-Property fiele daher sonst nicht auf.
 */

const fs = require('fs');
const path = require('path');

const CONTEXTS = ['example', 'playground', 'feature'];
const REMOVED_PROPERTIES = ['sourceCodeDetailsCollapsed', 'hideSourceCodeDetails', 'codeCollapsable', 'codeCollapsed'];
const TAG_PATTERN = /<([A-Za-z][A-Za-z0-9]*Preview)\b/g;

/**
 * Die deutsche Fassung ist die Leitfassung und wird streng gegen die Abschnittsstruktur
 * geprüft. Die englischen Übersetzungen weichen strukturell ab (Previews stehen dort auch
 * unter "Usage" oder "Accessibility"); dort wird nur geprüft, dass ein gültiger Kontext
 * gesetzt ist.
 */
const SOURCES = [
	{ dir: path.join(__dirname, '..', 'docs', '30-components'), strict: true },
	{
		dir: path.join(__dirname, '..', 'i18n', 'en', 'docusaurus-plugin-content-docs', 'current', '30-components'),
		strict: false,
	},
];

/**
 * Die Abschnitte der deutschen Leitfassung. Die Überschriften werden exakt abgeglichen,
 * damit ein neuer oder umbenannter Abschnitt als Fehler auffällt, statt still einem
 * Kontext zugeordnet zu werden.
 */
const SECTION_CONTEXTS = [
	{ level: 2, heading: /^Beispiel$/, context: 'example' },
	{ level: 3, heading: /^Playground$/, context: 'playground' },
	{ level: 3, heading: /^Funktionalitäten \(mit Code\)$/, context: 'feature' },
];

/** Ermittelt den erwarteten Kontext aus den Überschriften oberhalb der Fundstelle. */
function expectedContext(source, index) {
	let heading2 = '';
	let heading3 = '';
	for (const match of source.slice(0, index).matchAll(/^(#{2,3}) (.+)$/gm)) {
		if (match[1] === '##') {
			heading2 = match[2].trim();
			heading3 = '';
		} else {
			heading3 = match[2].trim();
		}
	}
	// Die spezifischere Überschrift gewinnt, daher zuerst Ebene 3 prüfen.
	for (const level of [3, 2]) {
		const heading = level === 3 ? heading3 : heading2;
		if (!heading) continue;
		const section = SECTION_CONTEXTS.find((entry) => entry.level === level && entry.heading.test(heading));
		if (section) return section.context;
	}
	return null;
}

/** Findet das Ende des öffnenden Tags und beachtet dabei Klammern und Zeichenketten. */
function findTagEnd(source, start) {
	let depth = 0;
	let quote = null;
	for (let i = start; i < source.length; i++) {
		const character = source[i];
		if (quote) {
			if (character === quote) quote = null;
		} else if (character === '"' || character === "'") {
			quote = character;
		} else if (character === '{') {
			depth++;
		} else if (character === '}') {
			depth--;
		} else if (character === '>' && depth === 0) {
			return i;
		}
	}
	return -1;
}

const errors = [];

for (const { dir, strict } of SOURCES) {
	for (const file of fs.readdirSync(dir).filter((name) => name.endsWith('.mdx'))) {
		const filePath = path.join(dir, file);
		const source = fs.readFileSync(filePath, 'utf-8');

		for (const match of source.matchAll(TAG_PATTERN)) {
			const end = findTagEnd(source, match.index);
			if (end === -1) continue;

			const tag = source.slice(match.index, end + 1);
			const line = source.slice(0, match.index).split('\n').length;
			const location = `${path.relative(process.cwd(), filePath)}:${line}`;
			const expected = strict ? expectedContext(source, match.index) : null;
			const actual = /\bcontext="([a-z]+)"/.exec(tag);

			for (const removed of REMOVED_PROPERTIES) {
				if (tag.includes(removed)) {
					errors.push(`${location}: "${removed}" wurde durch "context" ersetzt.`);
				}
			}

			if (!actual) {
				errors.push(
					`${location}: <${match[1]}> ohne "context". Erwartet: context="${expected ?? CONTEXTS.join('|')}".`
				);
				continue;
			}
			if (!CONTEXTS.includes(actual[1])) {
				errors.push(`${location}: context="${actual[1]}" ist unbekannt. Erlaubt: ${CONTEXTS.join(', ')}.`);
				continue;
			}
			if (actual[1] !== 'feature' && /\bvisibleProperties=/.test(tag)) {
				errors.push(`${location}: "visibleProperties" wird nur bei context="feature" ausgewertet.`);
			}
			if (!strict) continue;

			if (expected === null) {
				errors.push(
					`${location}: <${match[1]}> steht in keinem bekannten Abschnitt. Erwartet wird "## Beispiel", ` +
						`"### Playground" oder "### Funktionalitäten (mit Code)".`
				);
				continue;
			}
			if (actual[1] !== expected) {
				errors.push(`${location}: context="${actual[1]}", erwartet wird laut Abschnitt context="${expected}".`);
				continue;
			}
			if (actual[1] === 'feature' && !/\bvisibleProperties=/.test(tag)) {
				errors.push(
					`${location}: context="feature" benötigt "visibleProperties". Jeder Unterabschnitt zeigt gezielt ` +
						`einzelne Eigenschaften; "visibleProperties={[]}" blendet sie bewusst aus.`
				);
			}
		}
	}
}

if (errors.length > 0) {
	console.error(`Preview-Kontext: ${errors.length} Problem(e) gefunden.\n`);
	errors.forEach((error) => console.error(`  ${error}`));
	process.exit(1);
}

console.log('Preview-Kontext: alle Previews korrekt ausgezeichnet.');
