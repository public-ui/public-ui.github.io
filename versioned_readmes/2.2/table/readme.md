Synonyme: Data Table, Details List, Data Grid

<kol-alert _type="warning" _variant="card">
  <kol-badge _color="#fb4509" _label="Deprecated"></kol-badge>KolTable ist veraltet, bitte stattdessen <kol-link _label="KolTableStateful" _href="https://github.com/public-ui/kolibri/blob/develop/packages/components/src/components/table-stateful/readme.md"></kol-link> verwenden, die API und Funktionalität sind identisch.
</kol-alert>

Die **Table**-Komponente dient primär der übersichtlichen Darstellung von Datenmengen. Dabei ist sie so ausgelegt, dass sie alle von den Daten abhängige Werte automatisch ermittelt und die Tabelle entsprechend darstellt. Hierzu gehören beispielsweise die optionalen Funktionalitäten Spaltensortierung oder Pagination.

<kol-indented-text _summary="Backend-seitige Pagination">
	Bei sehr großen Datenmengen ist auch eine manuelle Nutzung der Table-Komponente möglich. Das bedeutet, dass die Tabelle seitenweise "manuell" befüllt wird. Hierzu kann einfach anstatt der Table-Pagination eine "eigene" Pagination unter der Tabelle mittels der Pagination-Komponente verwendet werden.
</kol-indented-text>

## Konstruktion

Die Table-Komponente ist so konstruiert, dass nicht der gesamte Tabellenaufbau im Markup selbst beschrieben werden muss. Wie genau die Tabelle Markup-spezifisch aufgebaut werden muss, um barrierefrei zu sein, übernimmt die Komponente selbst.

Dadurch, dass die Table-Komponente das valide und barrierefreie Markup dynamisch zusammenbaut, kann die komplexe Auszeichnung für die assistive Systeme dem/der Entwickler:in abgenommen werden.

### Funktionalitäten

Die Table-Komponente unterstützt folgende Funktionalitäten:

- Tabellenbeschreibung durch ein **`label`**-Attribut.
- Mehrzeilige Spaltenüberschriften in horizontaler oder vertikaler Richtung.
- Sortierfunktion für entweder horizontale und vertikale Ausrichtung.
- Unterschiedliche Render-Funktion für die Zellen.
- Pagination für die Tabelle.

Die Table-Komponente unterstützt folgende Funktionalitäten **nicht**:

- Das Filtern der Tabelle ist aktuell nicht innerhalb der Tabelle vorgesehen.
- Das Auswählen von Zeilen ist aktuell in der Tabelle nicht vorgesehen.

> Beides könnte jedoch mittels der Render-Funktion umgesetzt werden.

### Pagination

Über das Attribut **`_pagination`** kann optional eine Vielzahl zusätzlicher Properties zur Steuerung der Pagination übergeben werden. Die genaue Beschreibung der Optionen ist auf der Seite <kol-link _href="/docs/components/pagination" _label="/docs/components/pagination" _label="Pagination"></kol-link> zu finden.

#### KoliBriTableHeaders

```ts
{
  horizontal: [
    [
      {
        label: string,
        key?: string,
        colsSpan?: number,
        rowSpan?: number,
        useTdInsteadOfTh?: boolean,
        render?: (data) => string,
        sort?: (data) => data,
      },
      …
    ],
    …
  ],
  vertical: [
    [
      {
        label: string,
        key?: string,
        colsSpan?: number,
        rowSpan?: number,
        useTdInsteadOfTh?: boolean,
        render?: (data) => string,
        sort?: (data) => data,
      },
      …
    ],
    …
  ],
};
```

### Code

```html
<kol-table _label="Tabellenbeschreibung" _headers='{"horizontal": [[{"label":"Montag","key":"montag"}]]}' _pagination='[{"page":2}]'></kol-table>
```

### Beispiel

<kol-table _label="Nur Vertikal Header, Daten Vertikal, Pagination" _headers='{"horizontal":[[{"label":"Montag","key":"montag"}]]}' _data='[{"montag":"Zelle1"},{"montag":"Zelle2"}]' _pagination='{"page":2}'></kol-table>

## Verwendung

### Sortierung

- Zu jedem Header kann man eine Sortierfunktion definieren.
- Es ist exakt eine oder keine Sortierfunktion aktiviert.
- **Multi-Sort-Funktionalität**: Wenn die Multi-Sort-Option (`_allowMultiSort`) aktiviert ist, kann der Benutzer mehrere Spalten gleichzeitig sortieren. Standardmäßig ist diese Funktion deaktiviert, und nur eine Spalte kann auf einmal sortiert werden. Die Sortierung wechselt zwischen aufsteigend, absteigend und ohne Sortierung. Wenn Multi-Sort deaktiviert ist, wird die Sortierung der vorherigen Spalte aufgehoben, sobald eine neue Spalte sortiert wird.
- Aktuell wird nicht unterstützt, dass bei zweidimensionalen Headern, die Header der jeweils anderen Header-Seite mit sortiert werden. Bei der Anforderung der Sortierung empfehlen wir die Verwendung nur einer Header-Dimension (entweder horizontal oder vertikal).

### Render Funktion

Render-Funktionen werden als Teil der Tabellen-Header definiert. Siehe Abschnitt "KoliBriTableHeaders". Gibt es sowohl horizontale als auch vertikale Header, muss die Render-Funktion für die _horizontalen_ Header definiert werden. Gibt es nur vertikale Header, können die Render-Funktionen dort definiert werden.

Die `render` Funktion kann auf verschiedene Arten wie folgt verwendet werden.  
Alle Methoden sind auch in diesem Beispiel demonstriert: [render-cell.tsx](https://github.com/public-ui/kolibri/blob/23ebb42d1ce3c8d1e4c74a5c7972842d5e4203fe/packages/samples/react/src/components/table/render-cell.tsx#L34)

1. String Rückgabewert:

```tsx
{
  render: (_el, cell) => `Index: ${cell.label}`,
}
```

2. Node mit textContent füllen

```tsx
{
  render: (el, cell) => {
    el.textContent = `Index: ${cell.label}`;
  },
}
```

3. Node mit innerHTML füllen - ⚠️ Hierbei unbedingt darauf achten, Werte zu sanitizen, um XXS vermeiden.

```tsx
{
  render: (el, cell) => {
    el.innerHTML = `<strong>${cell.label}</strong>`;
  },
}
```

4. React render-function verwenden

```tsx
import { createReactRenderElement } from '@public-ui/react';
{
  render: (el) => {
    getRoot(createReactRenderElement(el)).render(
      <div>
        <KolInputText _label="Input" />
        <KolButton _label="Save" />
      </div>,
    );
  },
}
```

<!--### Best practices

### Anwendungsfälle-->

## Barrierefreiheit

Bei der Table-Komponente werden zahlreiche Attribut-Definitionen dem Tabellen-Markup hinzugefügt, um die Screenreader bestmöglich zu unterstützen.

Aktuell werden folgende Attribute von der Komponente verwaltet: `role`, `scope` und `aria-\*`.

Das heißt beispielsweise, dass bei den Spaltenüberschriften automatisch entweder die Rolle `colheader` oder `rowheader` gesetzt wird. Darüber hinaus wird der Scope entweder auf `col`/`colgroup` oder `row`/`rowgroup` gesetzt. Ähnlich dieser Automatismen werden auch die `aria-\*`-Attribute je nach Relevanz gesetzt.

Warum die Tabelle einen **Tabindex** hat, wird auf der folgenden Webseite beschrieben: <kol-link _href="" _label=""></kol-link>https://dequeuniversity.com/rules/axe/3.5/scrollable-region-focusable

## Links und Referenzen

- <kol-link _href="https://www.w3.org/WAI/tutorials/tables/" _target="_blank"></kol-link>
- <kol-link _href="https://www.barrierefreies-webdesign.de/knowhow/datentabellen/scope.html" _target="_blank"></kol-link>
- <kol-link _href="https://developer.mozilla.org/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions" _target="_blank"></kol-link>
- <kol-link _href="https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/aria-live-regionen" _target="_blank"></kol-link>
- <kol-link _href="https://www.barrierefreies-webdesign.de/knowhow/live-regions/attribute.html" _target="_blank"></kol-link>
- <kol-link _href="https://www.digitala11y.com/aria-sort-properties/" _target="_blank"></kol-link>
- <kol-link _href="https://dequeuniversity.com/library/aria/table-sortable" _target="_blank"></kol-link>
- <kol-link _href="https://www.maxability.co.in/2016/06/07/aria-sort-property/" _target="_blank"></kol-link>
- <kol-link _href="https://developer.mozilla.org/en-US/docs/Web/API/Element/ariaSort" _target="_blank"></kol-link>
- <kol-link _href="https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/aria-live-regionen" _target="_blank"></kol-link>
- <kol-link _href="https://stackoverflow.com/questions/1312236/" _target="_blank"></kol-link>
- <kol-link _href="https://dequeuniversity.com/rules/axe/3.5/scrollable-region-focusable" _target="_blank"></kol-link>

<!-- Auto Generated Below -->


> **[DEPRECATED]** Use KolTableStateful instead.

## Properties

| Property                | Attribute              | Description                                                                                                                                                      | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Default     |
| ----------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `_allowMultiSort`       | `_allow-multi-sort`    | Defines whether to allow multi sort.                                                                                                                             | `boolean` \| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `undefined` |
| `_data` _(required)_    | `_data`                | Defines the primary table data.                                                                                                                                  | `KoliBriTableDataType[]` \| `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `undefined` |
| `_dataFoot`             | `_data-foot`           | Defines the data for the table footer.                                                                                                                           | `KoliBriTableDataType[]` \| `string` \| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `undefined` |
| `_headers` _(required)_ | `_headers`             | Defines the horizontal and vertical table headers.                                                                                                               | `string` \| `{ horizontal?: KoliBriTableHeaderCellWithLogic[][]` \| `undefined; vertical?: KoliBriTableHeaderCellWithLogic[][]` \| `undefined; }`                                                                                                                                                                                                                                                                                                                                                                                         | `undefined` |
| `_label` _(required)_   | `_label`               | Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.).                                               | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `undefined` |
| `_minWidth`             | `_min-width`           | <span className="text-red-500">**[DEPRECATED]**</span> This property is deprecated and will be removed in the next major release.<br/><br/>Defines the table min-width. | `string` \| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `undefined` |
| `_on`                   | --                     | Defines the callback functions for table events.                                                                                                                 | `undefined` \| `{ onSelectionChange?: EventValueOrEventCallback<Event, StatefulSelectionChangeEventPayload>` \| `undefined; }`                                                                                                                                                                                                                                                                                                                                                                                                          | `undefined` |
| `_pagination`           | `_pagination`          | Defines whether to show the data distributed over multiple pages.                                                                                                | `boolean` \| `string` \| `undefined` \| `{ _page: number; } & { _on?: KoliBriPaginationButtonCallbacks` \| `undefined; _page?: number` \| `undefined; _max?: number` \| `undefined; _boundaryCount?: number` \| `undefined; _hasButtons?: boolean` \| `Stringified<PaginationHasButton>` \| `undefined; _pageSize?: number` \| `undefined; _pageSizeOptions?: Stringified<number[]>` \| `undefined; _siblingCount?: number` \| `undefined; _customClass?: string` \| `undefined; _label?: string` \| `undefined; _tooltipAlign?: AlignPropType` \| `undefined; }` | `undefined` |
| `_paginationPosition`   | `_pagination-position` | Controls the position of the pagination.                                                                                                                         | `"both"` \| `"bottom"` \| `"top"` \| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `'bottom'`  |
| `_selection`            | `_selection`           | Defines how rows can be selected and the current selection.                                                                                                      | `string` \| `undefined` \| `({ label: (row: KoliBriTableDataType) => string; keyPropertyName?: string` \| `undefined; multiple?: boolean` \| `undefined; selectedKeys?: string[]` \| `undefined; })`                                                                                                                                                                                                                                                                                                                                          | `undefined` |


----------------------------------------------


