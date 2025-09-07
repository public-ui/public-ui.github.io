---
title: Scss
description: Auf dieser Seite wird beschrieben, wie Scss zur Erstellung von KoliBri-Themes verwendet werden kann.
---

import { KolAlert, KolLink } from '@public-ui/react';

# Scss

Dieser Artikel beschreibt, wie Scss zur Erstellung von KoliBri-Themes genutzt werden kann.

<KolAlert _label="Designer oder Scss" _type="info" _variant="card">
  KoliBri bietet zum Erstellen von Themes auch einen <KolLink _label="Designer" _href="/docs/concepts/styling/designer" /> an. Je nach persönlichen Präferenzen kann Scss oder der Designer verwendet werden.
</KolAlert><br/>

<KolAlert _label="CSS-Properties" _type="warning" _variant="card">
  CSS-Custom-Properties wirken global und sind nicht durch den Shadow DOM geschützt. Verwende präfixierte Namen und bilde interne Werte über SASS-Variablen ab, damit es zu keinen Kollisionen mit Variablen der hostenden Seite kommt.
</KolAlert><br/>

Scss ist eine Erweiterung von CSS, die es ermöglicht, Variablen, Funktionen, Mixins und vieles mehr zu verwenden. Scss kann für die Erstellung von KoliBri-Themes genutzt. Hierfür hat das Entwicklungsteam vom Projekt <KolLink _label="KERN" _href="https://gitlab.opencode.de/kern-designsystem/pattern-library" _target="_blank" /> ein Build-Script geschrieben, um aus Scss-Dateien die entsprechenden KoliBri-Themes zu generieren.

## Hintergrund

Wir haben in den <KolLink _label="FAQ" _href="/docs/faq" /> beschrieben, warum wir CSS in JavaScript verwalten. Das bedeutet, dass das einfach Einbinden von CSS in der Rahmenseite nicht die KoliBri-Komponenten styled. Denn jede Komponente weiß über JavaScript selbst, welches CSS es verwenden soll. Das CSS muss also in JavaScript verpackt werden, so dass es bei der Ausführung der Web Component geladen werden kann.

## Erstellung

Um ein Theme zu erstellen, kann in grob drei Schritten vorgegangen werden:

- **Erste Schritte:** Ein Theme prototypisch erstellen
- **Paketierung:** Theme-Paket erstellen und bauen
- **Optimierung:** Theme-Paket laden und durch Patchen modifizieren

### Prototyping

Im ersten Schritt empfiehlt es sich zunächst mit der Art und Weise des Themings vertraut zu machen. Hierzu kann man einfach in einem KoliBri-Projekt (z.B. einer App) bei der Registrierung der KoliBri-Komponenten inline ein Theme zu erstellen und zu laden.

```tsx
import { register } from '@public-ui/components';
import { defineCustomElements } from '@public-ui/components/dist/loader';
import { KoliBri } from '@public-ui/schema';

// ts-prune-ignore-next
export default (): void => {
	register(
		KoliBri.createTheme('my-theme-identifier', {
			'KOL-BUTTON': `button {
        background-color: #000;
        color: #fff;
        padding: .5em .75em;
      }`,
		}),
		defineCustomElements,
		{
			theme: {
				detect: 'fixed',
				name: 'my-theme-identifier',
			},
		}
	).catch(console.warn);
};
```

### Bundling

Im zweiten Schritt sollte ein eigenständiges JavaScript-Projekt angelegt werden. Den Aufbau und die Scripte können der Scss-Ansatz vom KERN-Team entnommen werden. Das Projekt hat grob folgende Struktur und kann um eigenen Code erweitert werden:

```
/scripts/
  compileAll.js
  compileOne.js
  sassCompiler.js
/src/
  /themes/
    /my-theme/
      *.scss
/package.json
```

Die `package.json` beinhaltet folgende wesentliche Scripte:

```json
{
	"scripts": {
		"build": "unbuild",
		"compile": "node scripts/compileOne.js",
		"compile-all": "node scripts/compileAll.js",
		"compile-all-and-build": "npm run compile-all && npm run build",
		"prepack": "npm run compile-all-and-build"
	},
	"dependencies": {
		"sass": "1.62.1"
	},
	"devDependencies": {
		"@public-ui/components": "1.5.1",
		"@public-ui/schema": "1.5.1",
		"@types/node": "18.16.14",
		"typescript": "5.0.4",
		"unbuild": "1.1.2"
	},
	"peerDependencies": {
		"@public-ui/components": "1.5.1"
	}
}
```

Mittels `npm pack` kann ein Theme kompiliert werden. Das Ergebnis ist ein JavaScript-Modul, welches das Theme enthält. Dieses kann dann in einem KoliBri-Projekt über die Register-Methode geladen werden.

### Patching

Möchte man später das Theme optimieren, ist es möglich dies über das Patching zu tun. Hierzu wird das Theme-Paket geladen und die entsprechenden CSS-Regeln überschrieben. Das Patching kann in einem KoliBri-Projekt erfolgen.

```tsx
import { register, KoliBriDevHelper } from '@public-ui/components';
import { defineCustomElements } from '@public-ui/components/dist/loader';
import { KoliBri } from '@public-ui/schema';

// ts-prune-ignore-next
export default (): void => {
	register(
		KoliBri.createTheme('my-theme-identifier', {
			'KOL-BUTTON': `button {
        background-color: #000;
        color: #fff;
        padding: .5em .75em;
      }`,
		}),
		defineCustomElements,
		{
			theme: {
				detect: 'fixed',
				name: 'my-theme-identifier',
			},
		}
	)
		.then(() => {
			KoliBriDevHelper.patchTheme('my-theme-identifier', {
				'KOL-BUTTON': `button {
          background-color: #fff;
          color: #000;
        }`,
			});
		})
		.catch(console.warn);
};
```

Identifizierte Änderungen können dann später wieder in den Scss-Dateien übernommen werden.

## Referenzprojekt

Mehr zur Umsetzung des Scss-Ansatz findet sich im <KolLink _label="Git-Repository von KERN" _href="https://gitlab.opencode.de/kern-designsystem/pattern-library/-/tree/main/packages/themes" _target="_blank" />.
