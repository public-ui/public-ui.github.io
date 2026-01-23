<!-- Auto Generated Below -->


## Properties

| Property              | Attribute        | Description                                                                                                                                                   | Type                                                                                                                             | Default      |
| --------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `_disabled`           | `_disabled`      | Makes the element not focusable and ignore all events.                                                                                                        | `boolean \| undefined`                                                                                                           | `false`      |
| `_hideLabel`          | `_hide-label`    | Hides the caption by default and displays the caption text with a tooltip when the interactive element is focused or the mouse is over it.                    | `boolean \| undefined`                                                                                                           | `false`      |
| `_hideMsg`            | `_hide-msg`      | Hides the error message but leaves it in the DOM for the input's aria-describedby.                                                                            | `boolean \| undefined`                                                                                                           | `false`      |
| `_hint`               | `_hint`          | Defines the hint text.                                                                                                                                        | `string \| undefined`                                                                                                            | `''`         |
| `_id`                 | `_id`            | <span className="text-red-500">**[DEPRECATED]**</span> Will be removed in the next major version.<br/><br/>Defines the internal ID of the primary component element. | `string \| undefined`                                                                                                            | `undefined`  |
| `_label` _(required)_ | `_label`         | Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.). Set to `false` to enable the expert slot.  | `string`                                                                                                                         | `undefined`  |
| `_msg`                | `_msg`           | Defines the properties for a message rendered as Alert component.                                                                                             | `Omit<AlertProps, "_label" \| "_variant"> & { _description: string; } \| string \| undefined`                                    | `undefined`  |
| `_name`               | `_name`          | Defines the technical name of an input field.                                                                                                                 | `string \| undefined`                                                                                                            | `undefined`  |
| `_on`                 | --               | Gibt die EventCallback-Funktionen für das Input-Event an.                                                                                                     | `InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus & InputTypeOnInput & InputTypeOnKeyDown \| undefined` | `undefined`  |
| `_options`            | `_options`       | Options the user can choose from.                                                                                                                             | `RadioOption<StencilUnknown>[] \| string \| undefined`                                                                           | `undefined`  |
| `_orientation`        | `_orientation`   | Defines whether the orientation of the component is horizontal or vertical.                                                                                   | `"horizontal" \| "vertical" \| undefined`                                                                                        | `'vertical'` |
| `_required`           | `_required`      | Makes the input element required.                                                                                                                             | `boolean \| undefined`                                                                                                           | `false`      |
| `_tooltipAlign`       | `_tooltip-align` | Defines where to show the Tooltip preferably: top, right, bottom or left.                                                                                     | `"bottom" \| "left" \| "right" \| "top" \| undefined`                                                                            | `'top'`      |
| `_touched`            | `_touched`       | Shows if the input was touched by a user.                                                                                                                     | `boolean \| undefined`                                                                                                           | `false`      |
| `_value`              | `_value`         | Defines the value of the element.                                                                                                                             | `boolean \| null \| number \| object \| string \| undefined`                                                                     | `null`       |


## Methods

### focus

`focus() => Promise<void | undefined>`

Sets focus on the internal element.

#### Returns

Type: `Promise<void | undefined>`



### `getValue() => Promise<StencilUnknown>`

Returns the current value.

#### Returns

Type: `Promise<StencilUnknown>`



### `kolFocus() => Promise<void | undefined>`

<span className="text-red-500">**[DEPRECATED]**</span> Use {@link focus} instead.<br/><br/>

#### Returns

Type: `Promise<void | undefined>`




## Slots

| Slot | Description                               |
| ---- | ----------------------------------------- |
|      | Die Legende/Überschrift der Radiobuttons. |


----------------------------------------------


