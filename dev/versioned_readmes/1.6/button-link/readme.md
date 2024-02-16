Der ButtonLink ist semantisch ein Button und hat das Design eines Links. Hierzu werden alle relevanten Properties der Button-Komponente übernommen und um die Design-bestimmenden Properties des Links erweitert.

Einen Button kann man deaktivieren und daher gibt es bei einem ButtonLink das Property `_disabled`. Wie das optisch ausgestaltet wird, entscheidet die UX-Designer:in.

Statt, wie bei einem Link, `_href` zu verwenden, wird bei einem ButtonLink das Property über den `Click-Callback` gesteuert. Hierzu wird das `_on`-Property verwendet.

Bei einem Link gibt es das Property `target`, welches ggf. den Link in einem neuen Fenster/Tab öffnet. Das Verhalten ist aktuell noch nicht umgesetzt.

Da der Link, nicht wie der Button, in mehrere Varianten (`primary` oder `secondary` usw.) angeboten wird, stehen die Properties `_customClass` und `_variant` nicht zur Verfügung.

## Konstruktion

### Code

```html
<kol-button-link _on="" _label="Schalter sieht wie ein Link aus"></kol-button-link>
```

### Beispiel

<div className="flex gap-2">
  <kol-button-link _on="" _label="Schalter sieht wie ein Link aus"></kol-button-link>
</div>

<!-- Auto Generated Below -->


## Properties

| Property              | Attribute        | Description                                                                                                                                                                                                                                                                                                                                                                                          | Type                                                                                                                                                   | Default     |
| --------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| `_accessKey`          | `_access-key`    | Defines which key combination can be used to trigger or focus the interactive element of the component.                                                                                                                                                                                                                                                                                              | `string` \| `undefined`                                                                                                                                  | `undefined` |
| `_ariaControls`       | `_aria-controls` | Defines which elements are controlled by this component. (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls)                                                                                                                                                                                                                                                  | `string` \| `undefined`                                                                                                                                  | `undefined` |
| `_ariaCurrent`        | `_aria-current`  | <span className="text-red-500">**[DEPRECATED]**</span> aria-current is not necessary for buttons. will be removed in version 2.<br/><br/>Deprecated: Marks the element as the selected in a group of related elements. Can be one of the following: `date`` \| ``location`` \| ``page`` \| ``step`` \| ``time`` \| ``true`. (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current) | `"date"` \| `"location"` \| `"page"` \| `"step"` \| `"time"` \| `boolean` \| `undefined`                                                                           | `undefined` |
| `_ariaExpanded`       | `_aria-expanded` | Defines whether the interactive element of the component expanded something. (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)                                                                                                                                                                                                                              | `boolean` \| `undefined`                                                                                                                                 | `undefined` |
| `_ariaLabel`          | `_aria-label`    | <span className="text-red-500">**[DEPRECATED]**</span> use _label instead<br/><br/>Deprecated: Setzt die semantische Beschriftung der Komponente.                                                                                                                                                                                                                                                           | `string` \| `undefined`                                                                                                                                  | `undefined` |
| `_ariaSelected`       | `_aria-selected` | Defines whether the interactive element of the component is selected (e.g. role=tab). (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected)                                                                                                                                                                                                                     | `boolean` \| `undefined`                                                                                                                                 | `undefined` |
| `_disabled`           | `_disabled`      | Makes the element not focusable and ignore all events.                                                                                                                                                                                                                                                                                                                                               | `boolean` \| `undefined`                                                                                                                                 | `false`     |
| `_hideLabel`          | `_hide-label`    | Hides the label and shows the description in a Tooltip instead.                                                                                                                                                                                                                                                                                                                                      | `boolean` \| `undefined`                                                                                                                                 | `false`     |
| `_icon`               | `_icon`          | Defines the icon classnames (e.g. `_icon="fa-solid fa-user"`).                                                                                                                                                                                                                                                                                                                                       | `KoliBriHorizontalIcon & KoliBriVerticalIcon` \| `string` \| `undefined`                                                                                   | `undefined` |
| `_iconOnly`           | `_icon-only`     | <span className="text-red-500">**[DEPRECATED]**</span> use _hide-label<br/><br/>Deprecated: Hides the label and shows the description in a Tooltip instead.                                                                                                                                                                                                                                                 | `boolean` \| `undefined`                                                                                                                                 | `undefined` |
| `_id`                 | `_id`            | Defines the internal ID of the primary component element.                                                                                                                                                                                                                                                                                                                                            | `string` \| `undefined`                                                                                                                                  | `undefined` |
| `_label` _(required)_ | `_label`         | Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.). Set to `false` to enable the expert slot.                                                                                                                                                                                                                                         | `boolean` \| `string`                                                                                                                                    | `undefined` |
| `_name`               | `_name`          | Defines the technical name of an input field.                                                                                                                                                                                                                                                                                                                                                        | `string` \| `undefined`                                                                                                                                  | `undefined` |
| `_on`                 | --               | Gibt die EventCallback-Funktionen für die Button-Events an.                                                                                                                                                                                                                                                                                                                                          | `undefined` \| `{ onClick?: EventValueOrEventCallback<MouseEvent, StencilUnknown>` \| `undefined; onMouseDown?: EventCallback<MouseEvent>` \| `undefined; }` | `undefined` |
| `_role`               | `_role`          | Defines the role of the components primary element.                                                                                                                                                                                                                                                                                                                                                  | `"button"` \| `"link"` \| `"tab"` \| `undefined`                                                                                                             | `undefined` |
| `_tabIndex`           | `_tab-index`     | Defines which tab-index the primary element of the component has. (https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)                                                                                                                                                                                                                                                     | `number` \| `undefined`                                                                                                                                  | `undefined` |
| `_tooltipAlign`       | `_tooltip-align` | Defines where to show the Tooltip preferably: top, right, bottom or left.                                                                                                                                                                                                                                                                                                                            | `"bottom"` \| `"left"` \| `"right"` \| `"top"` \| `undefined`                                                                                                  | `'top'`     |
| `_type`               | `_type`          | Defines either the type of the component or of the components interactive element.                                                                                                                                                                                                                                                                                                                   | `"button"` \| `"reset"` \| `"submit"` \| `undefined`                                                                                                         | `'button'`  |
| `_value`              | `_value`         | Defines the value that the button emits on click.                                                                                                                                                                                                                                                                                                                                                    | `boolean` \| `null` \| `number` \| `object` \| `string` \| `undefined`                                                                                           | `undefined` |


## Dependencies

### Depends on

- kol-button-wc

### Graph
```mermaid
graph TD;
  kol-button-link --> kol-button-wc
  kol-button-wc --> kol-span-wc
  kol-button-wc --> kol-tooltip-wc
  kol-span-wc --> kol-icon
  kol-tooltip-wc --> kol-span-wc
  style kol-button-link fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


