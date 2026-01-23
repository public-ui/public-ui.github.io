<!-- Auto Generated Below -->


## Properties

| Property              | Attribute           | Description                                                                                                                                                                                                                              | Type                                                                                                                                                   | Default     |
| --------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| `_accessKey`          | `_access-key`       | Defines the key combination that can be used to trigger or focus the component’s interactive element.                                                                                                                                    | `string \| undefined`                                                                                                                                  | `undefined` |
| `_ariaControls`       | `_aria-controls`    | Defines which elements are controlled by this component. (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls)                                                                                      | `string \| undefined`                                                                                                                                  | `undefined` |
| `_ariaDescription`    | `_aria-description` | Defines the value for the aria-description attribute.                                                                                                                                                                                    | `string \| undefined`                                                                                                                                  | `undefined` |
| `_ariaExpanded`       | `_aria-expanded`    | Defines whether the interactive element of the component expanded something. (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)                                                                  | `boolean \| undefined`                                                                                                                                 | `undefined` |
| `_ariaSelected`       | `_aria-selected`    | Defines whether the interactive element of the component is selected (e.g. role=tab). (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected)                                                         | `boolean \| undefined`                                                                                                                                 | `undefined` |
| `_customClass`        | `_custom-class`     | Defines the custom class attribute if _variant="custom" is set.                                                                                                                                                                          | `string \| undefined`                                                                                                                                  | `undefined` |
| `_disabled`           | `_disabled`         | Makes the element not focusable and ignore all events.                                                                                                                                                                                   | `boolean \| undefined`                                                                                                                                 | `false`     |
| `_hideLabel`          | `_hide-label`       | Hides the caption by default and displays the caption text with a tooltip when the interactive element is focused or the mouse is over it.                                                                                               | `boolean \| undefined`                                                                                                                                 | `false`     |
| `_icons`              | `_icons`            | Defines the icon classnames (e.g. `_icons="fa-solid fa-user"`).                                                                                                                                                                          | `KoliBriHorizontalIcons & KoliBriVerticalIcons \| string \| undefined`                                                                                 | `undefined` |
| `_id`                 | `_id`               | <span className="text-red-500">**[DEPRECATED]**</span> Will be removed in the next major version.<br/><br/>Defines the internal ID of the primary component element.                                                                            | `string \| undefined`                                                                                                                                  | `undefined` |
| `_label` _(required)_ | `_label`            | Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.).                                                                                                                       | `string`                                                                                                                                               | `undefined` |
| `_name`               | `_name`             | Defines the technical name of an input field.                                                                                                                                                                                            | `string \| undefined`                                                                                                                                  | `undefined` |
| `_on`                 | --                  | Defines the callback functions for button events.                                                                                                                                                                                        | `undefined \| { onClick?: EventValueOrEventCallback<MouseEvent, StencilUnknown> \| undefined; onMouseDown?: EventCallback<MouseEvent> \| undefined; }` | `undefined` |
| `_role`               | `_role`             | <span className="text-red-500">**[DEPRECATED]**</span> We prefer the semantic role of the HTML element and do not allow for customization. We will remove this prop in the future.<br/><br/>Defines the role of the components primary element. | `"tab" \| "treeitem" \| undefined`                                                                                                                     | `undefined` |
| `_shortKey`           | `_short-key`        | Adds a visual shortcut hint after the label and instructs the screen reader to read the shortcut aloud.                                                                                                                                  | `string \| undefined`                                                                                                                                  | `undefined` |
| `_tooltipAlign`       | `_tooltip-align`    | Defines where to show the Tooltip preferably: top, right, bottom or left.                                                                                                                                                                | `"bottom" \| "left" \| "right" \| "top" \| undefined`                                                                                                  | `'top'`     |
| `_type`               | `_type`             | Defines either the type of the component or of the components interactive element.                                                                                                                                                       | `"button" \| "reset" \| "submit" \| undefined`                                                                                                         | `'button'`  |
| `_value`              | `_value`            | Defines the value of the element.                                                                                                                                                                                                        | `boolean \| null \| number \| object \| string \| undefined`                                                                                           | `undefined` |
| `_variant`            | `_variant`          | Defines which variant should be used for presentation.                                                                                                                                                                                   | `"custom" \| "danger" \| "ghost" \| "normal" \| "primary" \| "secondary" \| "tertiary" \| undefined`                                                   | `'normal'`  |


## Methods

### closePopup

`closePopup() => Promise<void>`

Closes the dropdown.

#### Returns

Type: `Promise<void>`



### `focus() => Promise<void | undefined>`

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

| Slot | Description                                               |
| ---- | --------------------------------------------------------- |
|      | Ermöglicht das Einfügen beliebigen HTMLs in das dropdown. |


----------------------------------------------


