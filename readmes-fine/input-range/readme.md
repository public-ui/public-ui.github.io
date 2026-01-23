<!-- Auto Generated Below -->


## Properties

| Property              | Attribute        | Description                                                                                                                                                   | Type                                                                                                                             | Default     |
| --------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `_accessKey`          | `_access-key`    | Defines the key combination that can be used to trigger or focus the component’s interactive element.                                                         | `string \| undefined`                                                                                                            | `undefined` |
| `_autoComplete`       | `_auto-complete` | Defines whether the input can be auto-completed.                                                                                                              | `string \| undefined`                                                                                                            | `'off'`     |
| `_disabled`           | `_disabled`      | Makes the element not focusable and ignore all events.                                                                                                        | `boolean \| undefined`                                                                                                           | `false`     |
| `_hideLabel`          | `_hide-label`    | Hides the caption by default and displays the caption text with a tooltip when the interactive element is focused or the mouse is over it.                    | `boolean \| undefined`                                                                                                           | `false`     |
| `_hideMsg`            | `_hide-msg`      | Hides the error message but leaves it in the DOM for the input's aria-describedby.                                                                            | `boolean \| undefined`                                                                                                           | `false`     |
| `_hint`               | `_hint`          | Defines the hint text.                                                                                                                                        | `string \| undefined`                                                                                                            | `''`        |
| `_icons`              | `_icons`         | Defines the icon classnames (e.g. `_icons="fa-solid fa-user"`).                                                                                               | `string \| undefined \| { right?: IconOrIconClass \| undefined; left?: IconOrIconClass \| undefined; }`                          | `undefined` |
| `_id`                 | `_id`            | <span className="text-red-500">**[DEPRECATED]**</span> Will be removed in the next major version.<br/><br/>Defines the internal ID of the primary component element. | `string \| undefined`                                                                                                            | `undefined` |
| `_label` _(required)_ | `_label`         | Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.). Set to `false` to enable the expert slot.  | `string`                                                                                                                         | `undefined` |
| `_max`                | `_max`           | Defines the maximum value of the element.                                                                                                                     | `` `${number}.${number}` \| `${number}` \| number \| undefined ``                                                                | `100`       |
| `_min`                | `_min`           | Defines the smallest possible input value.                                                                                                                    | `` `${number}.${number}` \| `${number}` \| number \| undefined ``                                                                | `0`         |
| `_msg`                | `_msg`           | Defines the properties for a message rendered as Alert component.                                                                                             | `Omit<AlertProps, "_label" \| "_variant"> & { _description: string; } \| string \| undefined`                                    | `undefined` |
| `_name`               | `_name`          | Defines the technical name of an input field.                                                                                                                 | `string \| undefined`                                                                                                            | `undefined` |
| `_on`                 | --               | Gibt die EventCallback-Funktionen für das Input-Event an.                                                                                                     | `InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus & InputTypeOnInput & InputTypeOnKeyDown \| undefined` | `undefined` |
| `_shortKey`           | `_short-key`     | Adds a visual shortcut hint after the label and instructs the screen reader to read the shortcut aloud.                                                       | `string \| undefined`                                                                                                            | `undefined` |
| `_step`               | `_step`          | Defines the step size for value changes.                                                                                                                      | `` `${number}.${number}` \| `${number}` \| number \| undefined ``                                                                | `undefined` |
| `_suggestions`        | `_suggestions`   | Suggestions to provide for the input.                                                                                                                         | `W3CInputValue[] \| string \| undefined`                                                                                         | `undefined` |
| `_tooltipAlign`       | `_tooltip-align` | Defines where to show the Tooltip preferably: top, right, bottom or left.                                                                                     | `"bottom" \| "left" \| "right" \| "top" \| undefined`                                                                            | `'top'`     |
| `_touched`            | `_touched`       | Shows if the input was touched by a user.                                                                                                                     | `boolean \| undefined`                                                                                                           | `false`     |
| `_value`              | `_value`         | Defines the value of the element.                                                                                                                             | `` `${number}.${number}` \| `${number}` \| number \| undefined ``                                                                | `undefined` |


## Methods

### getValue

`getValue() => Promise<number | NumberString | undefined>`

Returns the current value.

#### Returns

Type: `Promise<number | NumberString | undefined>`



### `kolFocus() => Promise<void>`

Sets focus on the internal element.

#### Returns

Type: `Promise<void>`




## Slots

| Slot | Description                           |
| ---- | ------------------------------------- |
|      | Die Beschriftung des Eingabeelements. |


----------------------------------------------


