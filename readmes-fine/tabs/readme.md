<!-- Auto Generated Below -->


## Properties

| Property              | Attribute            | Description                                                                                                        | Type                                                                                                                                                                                               | Default     |
| --------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `_align`              | `_align`             | Defines the visual orientation of the component.                                                                   | `"bottom" \| "left" \| "right" \| "top" \| undefined`                                                                                                                                              | `'top'`     |
| `_behavior`           | `_behavior`          | Defines which behavior is active.                                                                                  | `"select-automatic" \| "select-manual" \| undefined`                                                                                                                                               | `undefined` |
| `_hasCreateButton`    | `_has-create-button` | Defines whether the element has a create button.                                                                   | `boolean \| undefined`                                                                                                                                                                             | `false`     |
| `_label` _(required)_ | `_label`             | Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.). | `string`                                                                                                                                                                                           | `undefined` |
| `_on`                 | --                   | Gibt die Liste der Callback-Funktionen an, die auf Events aufgerufen werden sollen.                                | `undefined \| { onCreate?: EventCallback<Event> \| undefined; } & { onSelect?: EventValueOrEventCallback<MouseEvent \| KeyboardEvent \| CustomEvent<any> \| PointerEvent, number> \| undefined; }` | `undefined` |
| `_selected`           | `_selected`          | Defines which tab is active.                                                                                       | `number \| undefined`                                                                                                                                                                              | `0`         |
| `_tabs` _(required)_  | `_tabs`              | Defines the tab captions.                                                                                          | `TabButtonProps[] \| string`                                                                                                                                                                       | `undefined` |


----------------------------------------------


