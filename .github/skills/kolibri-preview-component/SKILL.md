---
name: kolibri-preview-component
description: 'Creates an interactive Preview component for a KoliBri Web Component and integrates it into the documentation. Use when: adding a new preview, replacing Configurator/LiveEditorCompact with Preview component, implementing DetailsPreview/DrawerPreview/HeadingPreview pattern, migrating component docs, adding interactive component playground to MDX docs page.'
argument-hint: 'Component name, e.g. "Accordion" or "InputText"'
---

# KoliBri Preview Component erstellen

Dieses Skill erstellt eine interaktive Preview-Komponente für eine KoliBri Web Component und integriert sie in die Dokumentation. Es folgt dem etablierten Muster der Komponenten `Details`, `Drawer`, `Heading`, `Quote` und `Link`.

## Wann verwenden

- Ein Docusaurus-Komponentendokument nutzt noch `Configurator` und/oder `LiveEditorCompact`
- Eine neue interaktive Preview für eine KoliBri-Komponente soll hinzugefügt werden
- Eine bestehende Preview-Komponente soll um Properties oder Slots erweitert werden

## Übersicht der zu ändernden Dateien

| Datei | Aktion |
|---|---|
| `src/components/previews/components/<Name>.tsx` | Neu erstellen |
| `docs/30-components/<name>.mdx` | Migrieren |
| `i18n/en/docusaurus-plugin-content-docs/current/30-components/<name>.mdx` | Migrieren |
| `i18n/de/code.json` | Übersetzungen ergänzen |
| `i18n/en/code.json` | Übersetzungen ergänzen |

---

## Schritt 1: Komponente analysieren

**Ziel:** Alle Properties der Zielkomponente kennen.

1. JSX-Typen der Komponente ermitteln (liegt in `@public-ui/components`):
   ```bash
   grep -r "KolComponent" node_modules/@public-ui/components/dist/types/components/ --include="*.d.ts" -l
   ```
2. Properties und ihre Typen erfassen – besonders unterscheiden:
   - **Einfache Text-Properties** (`string`) → `KolInputText`
   - **Boolean-Properties** → `BooleanProperty`
   - **Level/Heading** (`0-6`) → `LevelProperty`
   - **Mehrzeiliger Text / HTML-Slot** → `MultiLineTextProperty` + `sanitizeHtml`
   - **Enum-Properties** (Varianten, Align etc.) → passende `*Property`-Komponente aus `src/components/previews/properties/`
3. Prüfen ob die Komponente einen **Slot** hat (Inhalt als children) → `_slot`-Pattern verwenden

---

## Schritt 2: Preview-Komponente erstellen

Datei: `src/components/previews/components/<ComponentName>.tsx`

### Vorlage (einfache Komponente ohne Slot)

```tsx
import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, LevelProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolComponentName } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';

interface ComponentNamePreviewProps {
	initialProps?: JSX.KolComponentName;
	visibleProperties?: (keyof JSX.KolComponentName)[];
	codeCollapsable?: boolean;
	codeCollapsed?: boolean;
}

const ComponentNamePreview: React.FC<ComponentNamePreviewProps> = (props) => {
	const defaultProps: JSX.KolComponentName = {
		_label: translate({ id: 'preview.component.component-name.label' }),
	};

	return (
		<Preview<JSX.KolComponentName>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_disabled: <BooleanProperty label="Disabled" />,
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolComponentName"
			visibleProperties={props.visibleProperties}
			codeCollapsable={props.codeCollapsable}
			codeCollapsed={props.codeCollapsed}
			layout={PreviewLayout.CENTERED}
		>
			{(componentProps) => <KolComponentName {...componentProps} />}
		</Preview>
	);
};

export default ComponentNamePreview;
```

### Vorlage (Komponente mit HTML-Slot, z. B. Details, Drawer)

```tsx
import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, MultiLineTextProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolComponentName } from '@public-ui/react-v19';
import { sanitizeHtml } from '../../../shares/sanitize';

type ComponentNamePreviewProps = JSX.KolComponentName & { _slot?: string };

interface ComponentNamePreviewComponentProps {
	initialProps?: ComponentNamePreviewProps;
	visibleProperties?: (keyof JSX.KolComponentName | '_slot')[];
	codeCollapsable?: boolean;
	codeCollapsed?: boolean;
}

const ComponentNamePreview: React.FC<ComponentNamePreviewComponentProps> = (props) => {
	const defaultProps: ComponentNamePreviewProps = {
		_label: 'ComponentName Element',
		_slot: 'Lorem ipsum dolor sit amet.',
	};

	return (
		<Preview<ComponentNamePreviewProps>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_slot: <MultiLineTextProperty label="Content" />,
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolComponentName"
			visibleProperties={props.visibleProperties}
			codeCollapsable={props.codeCollapsable}
			codeCollapsed={props.codeCollapsed}
			layout={PreviewLayout.DEFAULT}
			slotKey="_slot"
		>
			{(componentProps) => {
				const { _slot, ...componentOnlyProps } = componentProps;
				const sanitizedHtml = sanitizeHtml(_slot ?? '');
				return (
					<div className="min-h-44">
						<KolComponentName {...componentOnlyProps}>
							<div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
						</KolComponentName>
					</div>
				);
			}}
		</Preview>
	);
};

export default ComponentNamePreview;
```

### Layout-Auswahl

| Layout | Wann verwenden |
|---|---|
| `PreviewLayout.CENTERED` | Komponente rendert inline/block, braucht Zentrierung (Heading, Quote, Button) |
| `PreviewLayout.DEFAULT` | Komponente braucht Mindesthöhe `min-h-44` (Details, Drawer) |
| `PreviewLayout.FULL_SIZE` | Komponente nimmt volle Höhe ein (`h-96`) |

### Verfügbare Property-Komponenten

Aus `src/components/previews/properties/`:

| Import | Für Properties des Typs |
|---|---|
| `KolInputText` (aus `@public-ui/react-v19`) | `string` |
| `BooleanProperty` | `boolean` |
| `LevelProperty` | Heading-Level `0-6` |
| `MultiLineTextProperty` | Mehrzeiliger Text / HTML-Inhalt |
| `AlignProperty` | Ausrichtung (`left`, `right`, `top`, `bottom`) |
| `BoundedNumberProperty` | Zahl mit Min/Max |
| `ClampedNumberProperty` | Zahl mit Clamp |
| `ButtonVariantProperty` | Button-Varianten |
| `AlertTypeProperty` | Alert-Typen |
| `AlertVariantProperty` | Alert-Varianten |
| `QuoteVariantProperty` | Quote-Varianten |
| `ResizeProperty` | Resize-Optionen |
| `IconsProperty` | Icons-Konfiguration |
| `LinksProperty` | Links-Array |
| `SmartButtonProperty` | SmartButton-Konfiguration |

---

## Schritt 3: Übersetzungen hinzufügen

Neue Keys in **beide** Dateien eintragen:

### `i18n/de/code.json` (Deutsch – Standard)
```json
"preview.component.component-name.label": {
    "message": "Deutsch-Standardtext"
},
"preview.component.component-name.content": {
    "message": "Optionaler Slot-Inhalt auf Deutsch"
}
```

### `i18n/en/code.json` (Englisch)
```json
"preview.component.component-name.label": {
    "message": "English default text"
},
"preview.component.component-name.content": {
    "message": "Optional slot content in English"
}
```

**Namens-Konvention für Keys:** `preview.component.<kebab-case-name>.<property>`

**Hinweis:** Einfache Default-Labels wie `'Button'` oder `'Details Element'` können hardcoded bleiben (ohne `translate()`). `translate()` nur verwenden, wenn der Text lokalisiert werden muss.

---

## Schritt 4: Deutsche Dokumentation migrieren

Datei: `docs/30-components/<component-name>.mdx`

### Alte Imports entfernen, neuen hinzufügen

```diff
-import { Configurator } from '@site/src/components/Configurator';
-import { LiveEditorCompact } from '@site/src/components/LiveEditorCompact';
+import ComponentNamePreview from '@site/src/components/previews/components/ComponentName';
```

### Statisches Beispiel ersetzen

Den Block mit statischem Code-Snippet und `<kol-component ...>` Beispiel ersetzen durch:

```mdx
<ComponentNamePreview
  visibleProperties={['_label', '_disabled']}
  codeCollapsable
  codeCollapsed
/>
```

`visibleProperties` enthält die Properties, die in der seitlichen Konfigurations-Leiste sichtbar sein sollen (typischerweise 2-4 der wichtigsten). Alle anderen sind via "Weitere Properties" erreichbar.

### `## Live-Editor` Abschnitt entfernen

```diff
-## Live-Editor
-
-<LiveEditorCompact component="component-name" />
```

### README unter `# API` verschieben

```diff
-<Readme />
-
-<ExampleLink component="component-name" />
-
-## Live editor
-
-<LiveEditorCompact component="component-name" />

+# API
+
+<Readme />

## Beispiele

-<Configurator component="component-name" sample="basic" />
+<ExampleLink component="component-name" />
```

---

## Schritt 5: Englische Dokumentation migrieren

Datei: `i18n/en/docusaurus-plugin-content-docs/current/30-components/<component-name>.mdx`

Gleiche Änderungen wie in Schritt 4, aber mit englischen Texten. Der Import-Pfad ist identisch (verwendet `@site/`-Alias):

```diff
-import { Configurator } from '@site/src/components/Configurator';
-import { LiveEditorCompact } from '@site/src/components/LiveEditorCompact';
+import ComponentNamePreview from '@site/src/components/previews/components/ComponentName';
```

---

## Schritt 6: Qualitätsprüfung

```bash
# TypeScript + ESLint prüfen
pnpm run lint

# Prettier-Formatierung prüfen (und ggf. fixen)
npx prettier blog docs src --write

# Dev-Server starten und manuell testen
npm start
# Dann: http://localhost:3000/docs/components/<component-name>
# Prüfen: Preview-Komponente sichtbar, Properties schaltbar, Code wird generiert
```

---

## Muster-Referenz: Fertige Implementierungen

Orientiere dich an diesen bereits fertigen Preview-Komponenten:

| Datei | Besonderheit |
|---|---|
| [`src/components/previews/components/Details.tsx`](../../../src/components/previews/components/Details.tsx) | Slot mit `sanitizeHtml`, `min-h-44` |
| [`src/components/previews/components/Drawer.tsx`](../../../src/components/previews/components/Drawer.tsx) | Slot + `useRef` + Trigger-Button, `translate()` |
| [`src/components/previews/components/Heading.tsx`](../../../src/components/previews/components/Heading.tsx) | Einfach, kein Slot, `CENTERED` |
| [`src/components/previews/components/Quote.tsx`](../../../src/components/previews/components/Quote.tsx) | Enum-Variante, `translate()` für alle Labels |
| [`src/components/previews/components/Link.tsx`](../../../src/components/previews/components/Link.tsx) | Link-spezifische Properties |

---

## Häufige Fehler vermeiden

- **Vergessen `sanitizeHtml` zu verwenden** wenn HTML-Inhalt in Slots gerendert wird → XSS-Risiko
- **`translate()` im Default-Objekt außerhalb von Render** ist ok, da `translate()` von Docusaurus clientseitig ausgeführt wird
- **Layout vergessen** → immer explizit `layout={PreviewLayout.XYZ}` setzen
- **`slotKey` vergessen** wenn `_slot` aus den Props extrahiert und separat als children übergeben wird
- **Nur eine JSON-Datei aktualisieren** → immer beide (`i18n/de/code.json` UND `i18n/en/code.json`)
- **Alte Imports nicht entfernen** → `Configurator` und `LiveEditorCompact` vollständig aus MDX entfernen
