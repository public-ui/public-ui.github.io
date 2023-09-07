> <kol-badge _label="untested"></kol-badge> Diese neue Komponente wird als ungetestet markiert, da der vollständige Barrierefreiheitstest noch aussteht. Der vollständige Test kann bei neuen Komponenten und Funktionalitäten auch erst nach einem abgeschlossenen Release erfolgen.

## Konstruktion

### Code

```html
<kol-split-button _label="Split-Button">Split-Button Popover</kol-split-button>
```

Geöffnet:

```html
<kol-split-button _label="Split-Button" _show-dropdown>Split-Button Popover</kol-split-button>
```

### Beispiel

<kol-split-button _label="Split-Button">
  Split-Button Popover
</kol-split-button>
<kol-split-button _label="Split-Button" _show-dropdown>
  Split-Button Popover
</kol-split-button>

## Verwendung

### Best practices

### Tastatursteuerung

| Taste   | Funktion |
| ------- | -------- |
| `Tab`   | ??       |
| `Enter` | ??       |

## Links und Referenzen

- <kol-link _href="https://www.w3.org/TR/wai-aria-practices/#accordion" _label="https://www.w3.org/TR/wai-aria-practices/#accordion" _target="_blank"></kol-link>

<!-- Auto Generated Below -->

## Properties

| Property              | Attribute        | Description                                                                                                                                                                      | Type                                                                                                                                                         | Default     |
| --------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| `_accessKey`          | `_access-key`    | Defines which key combination can be used to trigger or focus the interactive element of the component.                                                                          | `string` \| `undefined`                                                                                                                                      | `undefined` |
| `_ariaControls`       | `_aria-controls` | Defines which elements are controlled by this component. (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls)                              | `string` \| `undefined`                                                                                                                                      | `undefined` |
| `_ariaExpanded`       | `_aria-expanded` | Defines whether the interactive element of the component expanded something. (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)          | `boolean` \| `undefined`                                                                                                                                     | `undefined` |
| `_ariaLabel`          | `_aria-label`    | <span className="text-red-500">**[DEPRECATED]**</span> use \_label instead<br/><br/>Deprecated: Setzt die semantische Beschriftung der Komponente.                               | `string` \| `undefined`                                                                                                                                      | `undefined` |
| `_ariaSelected`       | `_aria-selected` | Defines whether the interactive element of the component is selected (e.g. role=tab). (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected) | `boolean` \| `undefined`                                                                                                                                     | `undefined` |
| `_customClass`        | `_custom-class`  | Defines the custom class attribute if \_variant="custom" is set.                                                                                                                 | `string` \| `undefined`                                                                                                                                      | `undefined` |
| `_disabled`           | `_disabled`      | Makes the element not focusable and ignore all events.                                                                                                                           | `boolean` \| `undefined`                                                                                                                                     | `false`     |
| `_hideLabel`          | `_hide-label`    | Hides the label and shows the description in a Tooltip instead.                                                                                                                  | `boolean` \| `undefined`                                                                                                                                     | `false`     |
| `_icon`               | `_icon`          | Defines the icon classnames (e.g. `_icon="fa-solid fa-user"`).                                                                                                                   | `KoliBriHorizontalIcon & KoliBriVerticalIcon` \| `string` \| `undefined`                                                                                     | `undefined` |
| `_id`                 | `_id`            | Defines the internal ID of the primary component element.                                                                                                                        | `string` \| `undefined`                                                                                                                                      | `undefined` |
| `_label` _(required)_ | `_label`         | Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.).                                                               | `string`                                                                                                                                                     | `undefined` |
| `_name`               | `_name`          | Defines the technical name of an input field.                                                                                                                                    | `string` \| `undefined`                                                                                                                                      | `undefined` |
| `_on`                 | --               | Defines the callback functions for button events.                                                                                                                                | `undefined` \| `{ onClick?: EventValueOrEventCallback<MouseEvent, StencilUnknown>` \| `undefined; onMouseDown?: EventCallback<MouseEvent>` \| `undefined; }` | `undefined` |
| `_role`               | `_role`          | Defines the role of the components primary element.                                                                                                                              | `"button"` \| `"link"` \| `"tab"` \| `undefined`                                                                                                             | `undefined` |
| `_showDropdown`       | `_show-dropdown` | Defines whether to show the dropdown menu.                                                                                                                                       | `boolean` \| `undefined`                                                                                                                                     | `false`     |
| `_tabIndex`           | `_tab-index`     | Defines which tab-index the primary element of the component has. (https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)                                 | `number` \| `undefined`                                                                                                                                      | `undefined` |
| `_tooltipAlign`       | `_tooltip-align` | Defines where to show the Tooltip preferably: top, right, bottom or left.                                                                                                        | `"bottom"` \| `"left"` \| `"right"` \| `"top"` \| `undefined`                                                                                                | `'top'`     |
| `_type`               | `_type`          | Defines either the type of the component or of the components interactive element.                                                                                               | `"button"` \| `"reset"` \| `"submit"` \| `undefined`                                                                                                         | `'button'`  |
| `_value`              | `_value`         | Defines the value that the button emits on click.                                                                                                                                | `boolean` \| `null` \| `number` \| `object` \| `string` \| `undefined`                                                                                       | `undefined` |
| `_variant`            | `_variant`       | Defines which variant should be used for presentation.                                                                                                                           | `"custom"` \| `"danger"` \| `"ghost"` \| `"normal"` \| `"primary"` \| `"secondary"` \| `"tertiary"` \| `undefined`                                           | `'normal'`  |

## Slots

| Slot | Description                                               |
| ---- | --------------------------------------------------------- |
|      | Ermöglicht das Einfügen beliebigen HTMLs in das dropdown. |

## Dependencies

### Depends on

- kol-button-wc

### Graph

```mermaid
graph TD;
  kol-split-button --> kol-button-wc
  kol-button-wc --> kol-span-wc
  kol-button-wc --> kol-tooltip-wc
  kol-span-wc --> kol-icon
  kol-tooltip-wc --> kol-span-wc
  style kol-split-button fill:#f9f,stroke:#333,stroke-width:4px
```

---
