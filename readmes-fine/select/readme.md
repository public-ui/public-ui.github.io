<!-- Auto Generated Below -->


## Properties

| Property                | Attribute        | Description                                                                                                                                                   | Type                                                                                                                             | Default     |
| ----------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `_accessKey`            | `_access-key`    | Defines the key combination that can be used to trigger or focus the component’s interactive element.                                                         | `string \| undefined`                                                                                                            | `undefined` |
| `_disabled`             | `_disabled`      | Makes the element not focusable and ignore all events.                                                                                                        | `boolean \| undefined`                                                                                                           | `false`     |
| `_hideLabel`            | `_hide-label`    | Hides the caption by default and displays the caption text with a tooltip when the interactive element is focused or the mouse is over it.                    | `boolean \| undefined`                                                                                                           | `false`     |
| `_hideMsg`              | `_hide-msg`      | Hides the error message but leaves it in the DOM for the input's aria-describedby.                                                                            | `boolean \| undefined`                                                                                                           | `false`     |
| `_hint`                 | `_hint`          | Defines the hint text.                                                                                                                                        | `string \| undefined`                                                                                                            | `''`        |
| `_icons`                | `_icons`         | Defines the icon classnames (e.g. `_icons="fa-solid fa-user"`).                                                                                               | `string \| undefined \| { right?: IconOrIconClass \| undefined; left?: IconOrIconClass \| undefined; }`                          | `undefined` |
| `_id`                   | `_id`            | <span className="text-red-500">**[DEPRECATED]**</span> Will be removed in the next major version.<br/><br/>Defines the internal ID of the primary component element. | `string \| undefined`                                                                                                            | `undefined` |
| `_label` _(required)_   | `_label`         | Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.). Set to `false` to enable the expert slot.  | `string`                                                                                                                         | `undefined` |
| `_msg`                  | `_msg`           | Defines the properties for a message rendered as Alert component.                                                                                             | `Omit<AlertProps, "_label" \| "_variant"> & { _description: string; } \| string \| undefined`                                    | `undefined` |
| `_multiple`             | `_multiple`      | Makes the input accept multiple inputs.                                                                                                                       | `boolean \| undefined`                                                                                                           | `false`     |
| `_name`                 | `_name`          | Defines the technical name of an input field.                                                                                                                 | `string \| undefined`                                                                                                            | `undefined` |
| `_on`                   | --               | Gibt die EventCallback-Funktionen für das Input-Event an.                                                                                                     | `InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus & InputTypeOnInput & InputTypeOnKeyDown \| undefined` | `undefined` |
| `_options` _(required)_ | `_options`       | Options the user can choose from, also supporting Optgroup.                                                                                                   | `(Option<StencilUnknown> \| Optgroup<StencilUnknown>)[] \| string`                                                               | `undefined` |
| `_required`             | `_required`      | Makes the input element required.                                                                                                                             | `boolean \| undefined`                                                                                                           | `false`     |
| `_rows`                 | `_rows`          | Defines how many rows of options should be visible at the same time.                                                                                          | `number \| undefined`                                                                                                            | `undefined` |
| `_shortKey`             | `_short-key`     | Adds a visual shortcut hint after the label and instructs the screen reader to read the shortcut aloud.                                                       | `string \| undefined`                                                                                                            | `undefined` |
| `_tabIndex`             | `_tab-index`     | Defines which tab-index the primary element of the component has. (https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)              | `number \| undefined`                                                                                                            | `undefined` |
| `_tooltipAlign`         | `_tooltip-align` | Defines where to show the Tooltip preferably: top, right, bottom or left.                                                                                     | `"bottom" \| "left" \| "right" \| "top" \| undefined`                                                                            | `'top'`     |
| `_touched`              | `_touched`       | Shows if the input was touched by a user.                                                                                                                     | `boolean \| undefined`                                                                                                           | `false`     |
| `_value`                | `_value`         | Defines the value of the input.                                                                                                                               | `StencilUnknown[] \| boolean \| null \| number \| object \| string \| undefined`                                                 | `undefined` |


## Methods

### getValue

`getValue() => Promise<StencilUnknown[] | StencilUnknown>`

Returns the current value.

#### Returns

Type: `Promise<StencilUnknown | StencilUnknown[]>`



### `kolFocus() => Promise<void>`

Sets focus on the internal element.

#### Returns

Type: `Promise<void>`




## Slots

| Slot | Description                         |
| ---- | ----------------------------------- |
|      | Die Beschriftung des Eingabefeldes. |


----------------------------------------------


