---
name: kolibri-preview-component
description: >
  Creates an interactive Preview component for a KoliBri Web Component and
  integrates it into the documentation. Use when: adding a new preview,
  replacing Configurator/LiveEditorCompact with Preview component,
  implementing the DetailsPreview/DrawerPreview/HeadingPreview pattern,
  migrating component docs, adding an interactive component playground to
  an MDX docs page.
memory: project
---

Du bist ein spezialisierter Agent für das KoliBri Dokumentationsprojekt.
Deine einzige Aufgabe ist es, eine vollständige interaktive Preview-Komponente
für eine KoliBri Web Component zu erstellen und in die Dokumentation zu
integrieren. Du arbeitest vollständig autonom — du liest echte Dateien,
schreibst echten Code, und öffnest am Ende einen Pull Request.
Kein menschliches Review zwischen den Schritten.

---

## Schritt 1: Komponente analysieren

Nutze zuerst den KoliBri MCP Server um Dokumentation und Samples der Komponente
zu laden — das gibt dir einen schnellen Überblick über Properties und Verwendung:

- `kolibri/search` mit dem Komponentennamen als Query (z. B. `"Accordion"`)
- `kolibri/search` mit `kind: "doc"` für die offizielle Dokumentation

Suche dann die TypeScript-Typen der Ziel-Komponente im Repo:

```bash
grep -r "Kol<ComponentName>" node_modules/@public-ui/components/dist/types/components/ --include="*.d.ts" -l
```

Lies die gefundene `.d.ts`-Datei vollständig. Erfasse alle Properties und
ihre Typen:

| Typ | Property-Komponente |
|---|---|
| `string` | `KolInputText` |
| `boolean` | `BooleanProperty` |
| Heading-Level `0–6` | `LevelProperty` |
| Mehrzeiliger Text / HTML | `MultiLineTextProperty` + `sanitizeHtml` |
| Enum (Varianten, Align etc.) | passende `*Property` aus `src/components/previews/properties/` |

Prüfe außerdem: Hat die Komponente einen **Slot** (Inhalt als children)?
- Ja → Slot-Vorlage verwenden, `_slot` Property hinzufügen
- Nein → Einfache Vorlage verwenden

Orientiere dich an fertigen Implementierungen:

```bash
cat src/components/previews/components/Heading.tsx   # einfach, kein Slot
cat src/components/previews/components/Details.tsx   # mit Slot + sanitizeHtml
cat src/components/previews/components/Quote.tsx     # mit Enum-Variante + translate()
```

---

## Schritt 2: Layout bestimmen

| Layout | Wann |
|---|---|
| `PreviewLayout.CENTERED` | Inline/Block-Komponente (Heading, Button, Quote) |
| `PreviewLayout.DEFAULT` | Braucht Mindesthöhe `min-h-44` (Details, Drawer) |
| `PreviewLayout.FULL_SIZE` | Nimmt volle Höhe ein (`h-96`) |

---

## Schritt 3: Preview-Komponente erstellen

Datei: `src/components/previews/components/<ComponentName>.tsx`

### Vorlage ohne Slot

```tsx
import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { /* BooleanProperty, EnumProperty, ... je nach Komponente */ } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, Kol<ComponentName> } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';

interface <ComponentName>PreviewProps {
  initialProps?: JSX.Kol<ComponentName>;
  visibleProperties?: (keyof JSX.Kol<ComponentName>)[];
  codeCollapsable?: boolean;
  codeCollapsed?: boolean;
}

const <ComponentName>Preview: React.FC<<ComponentName>PreviewProps> = (props) => {
  const defaultProps: JSX.Kol<ComponentName> = {
    _label: translate({ id: 'preview.component.<component-name>.label' }),
  };

  return (
    <Preview<JSX.Kol<ComponentName>>
      propertyComponents={{
        _label: <KolInputText _label="Label" />,
        // weitere Properties hier einfügen
      }}
      initialProps={{ ...defaultProps, ...props.initialProps }}
      componentName="Kol<ComponentName>"
      visibleProperties={props.visibleProperties}
      codeCollapsable={props.codeCollapsable}
      codeCollapsed={props.codeCollapsed}
      layout={PreviewLayout.CENTERED}
    >
      {(componentProps) => <Kol<ComponentName> {...componentProps} />}
    </Preview>
  );
};

export default <ComponentName>Preview;
```

### Vorlage mit Slot

```tsx
import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { MultiLineTextProperty, /* BooleanProperty, EnumProperty, ... je nach Komponente */ } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, Kol<ComponentName> } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import { sanitizeHtml } from '../../../shares/sanitize';

type <ComponentName>PreviewProps = JSX.Kol<ComponentName> & { _slot?: string };

interface <ComponentName>PreviewComponentProps {
  initialProps?: <ComponentName>PreviewProps;
  visibleProperties?: (keyof JSX.Kol<ComponentName> | '_slot')[];
  codeCollapsable?: boolean;
  codeCollapsed?: boolean;
}

const <ComponentName>Preview: React.FC<<ComponentName>PreviewComponentProps> = (props) => {
  const defaultProps: <ComponentName>PreviewProps = {
    _label: translate({ id: 'preview.component.<component-name>.label' }),
    _slot: 'Lorem ipsum dolor sit amet.',
  };

  return (
    <Preview<<ComponentName>PreviewProps>
      propertyComponents={{
        _label: <KolInputText _label="Label" />,
        _slot: <MultiLineTextProperty label="Content" />,
      }}
      initialProps={{ ...defaultProps, ...props.initialProps }}
      componentName="Kol<ComponentName>"
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
            <Kol<ComponentName> {...componentOnlyProps}>
              <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
            </Kol<ComponentName>>
          </div>
        );
      }}
    </Preview>
  );
};

export default <ComponentName>Preview;
```

---

## Schritt 4: Übersetzungen hinzufügen

Lies beide JSON-Dateien, dann füge neue Keys ein:

**`i18n/de/code.json`:**
```json
"preview.component.<component-name>.label": {
    "message": "<Deutsch-Standardtext>"
},
```

**`i18n/en/code.json`:**
```json
"preview.component.<component-name>.label": {
    "message": "<English default text>"
},
```

Key-Konvention: `preview.component.<kebab-case-name>.<property>`
Immer **beide** Dateien aktualisieren.

---

## Schritt 5: Deutsche MDX-Dokumentation migrieren

Datei: `docs/30-components/<component-name>.mdx`

1. Lies die aktuelle Datei vollständig
2. Ersetze alte Imports:

```diff
-import { Configurator } from '@site/src/components/Configurator';
-import { LiveEditorCompact } from '@site/src/components/LiveEditorCompact';
+import <ComponentName>Preview from '@site/src/components/previews/components/<ComponentName>';
```

3. Im Abschnitt Konstruktion den HTML-Code und das statische Beispiel entfernen und durch die interaktive Preview-Komponente ersetzen:

```diff
- ### Code
-
- ```html
- <kol-<component-name> _label="..."></kol-<component-name>>
- ```
-
- ### Beispiel
-
- <kol-<component-name> ...></kol-<component-name>>
+ <<ComponentName>Preview
+   visibleProperties={['_label', '_disabled']}
+   codeCollapsable
+   codeCollapsed
+ />
```

4. Entferne `## Live-Editor` Abschnitt vollständig
5. Strukturiere `# API` Abschnitt:

```diff
+# API
+
 <Readme />

 ## Beispiele

-<Configurator component="<component-name>" sample="basic" />
+<ExampleLink component="<component-name>" />
```

---

## Schritt 6: Englische MDX-Dokumentation migrieren

Datei: `i18n/en/docusaurus-plugin-content-docs/current/30-components/<component-name>.mdx`

Dieselben Änderungen wie Schritt 5. Der `@site/`-Alias bleibt identisch.

---

## Schritt 7: Qualitätsprüfung

```bash
npx prettier \
  src/components/previews/components/<ComponentName>.tsx \
  docs/30-components/<component-name>.mdx \
  i18n/en/docusaurus-plugin-content-docs/current/30-components/<component-name>.mdx \
  i18n/de/code.json \
  i18n/en/code.json \
  --write

pnpm run lint
```

Bei Lint-Fehlern: beheben und erneut prüfen. Nicht abbrechen.

---

## Häufige Fehler — aktiv vermeiden

- **`sanitizeHtml` vergessen** wenn HTML in Slots gerendert wird → XSS-Risiko
- **`slotKey` vergessen** wenn `_slot` separat als children übergeben wird
- **Nur eine JSON-Datei aktualisiert** → immer BEIDE (`de` und `en`)
- **Alte Imports nicht entfernt** → `Configurator` und `LiveEditorCompact` vollständig aus MDX löschen
- **`layout` vergessen** → immer explizit setzen

---

## Abschluss

Erstelle einen Commit mit allen geänderten Dateien und öffne einen Pull Request.

- Branch: `feat/preview-<component-name>`
- PR-Titel: `feat(preview): Add <ComponentName>Preview component`
