<!-- Auto Generated Below -->


## Properties

| Property             | Attribute             | Description                                                                                                                                                                                                                              | Type                                                                                                 | Default     |
| -------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ----------- |
| `_accessKey`         | `_access-key`         | Defines the key combination that can be used to trigger or focus the component’s interactive element.                                                                                                                                    | `string \| undefined`                                                                                | `undefined` |
| `_ariaControls`      | `_aria-controls`      | Defines which elements are controlled by this component. (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls)                                                                                      | `string \| undefined`                                                                                | `undefined` |
| `_ariaCurrentValue`  | `_aria-current-value` | Defines the value for the aria-current attribute.                                                                                                                                                                                        | `"date" \| "false" \| "location" \| "page" \| "step" \| "time" \| "true" \| undefined`               | `undefined` |
| `_ariaDescription`   | `_aria-description`   | Defines the value for the aria-description attribute.                                                                                                                                                                                    | `string \| undefined`                                                                                | `undefined` |
| `_customClass`       | `_custom-class`       | Defines the custom class attribute if _variant="custom" is set.                                                                                                                                                                          | `string \| undefined`                                                                                | `undefined` |
| `_disabled`          | `_disabled`           | Makes the element not focusable and ignore all events.                                                                                                                                                                                   | `boolean \| undefined`                                                                               | `false`     |
| `_download`          | `_download`           | Tells the browser that the link contains a file. Optionally sets the filename.                                                                                                                                                           | `string \| undefined`                                                                                | `undefined` |
| `_hideLabel`         | `_hide-label`         | Hides the caption by default and displays the caption text with a tooltip when the interactive element is focused or the mouse is over it.                                                                                               | `boolean \| undefined`                                                                               | `false`     |
| `_href` _(required)_ | `_href`               | Defines the target URI of the link.                                                                                                                                                                                                      | `string`                                                                                             | `undefined` |
| `_icons`             | `_icons`              | Defines the icon classnames (e.g. `_icons="fa-solid fa-user"`).                                                                                                                                                                          | `KoliBriHorizontalIcons & KoliBriVerticalIcons \| string \| undefined`                               | `undefined` |
| `_label`             | `_label`              | Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.). Set to `false` to enable the expert slot.                                                                             | `string \| undefined`                                                                                | `undefined` |
| `_on`                | --                    | Defines the callback functions for links.                                                                                                                                                                                                | `undefined \| { onClick?: EventValueOrEventCallback<Event, string> \| undefined; }`                  | `undefined` |
| `_role`              | `_role`               | <span className="text-red-500">**[DEPRECATED]**</span> We prefer the semantic role of the HTML element and do not allow for customization. We will remove this prop in the future.<br/><br/>Defines the role of the components primary element. | `"tab" \| "treeitem" \| undefined`                                                                   | `undefined` |
| `_shortKey`          | `_short-key`          | Adds a visual shortcut hint after the label and instructs the screen reader to read the shortcut aloud.                                                                                                                                  | `string \| undefined`                                                                                | `undefined` |
| `_target`            | `_target`             | Defines where to open the link.                                                                                                                                                                                                          | `string \| undefined`                                                                                | `undefined` |
| `_tooltipAlign`      | `_tooltip-align`      | Defines where to show the Tooltip preferably: top, right, bottom or left.                                                                                                                                                                | `"bottom" \| "left" \| "right" \| "top" \| undefined`                                                | `'right'`   |
| `_variant`           | `_variant`            | Defines which variant should be used for presentation.                                                                                                                                                                                   | `"custom" \| "danger" \| "ghost" \| "normal" \| "primary" \| "secondary" \| "tertiary" \| undefined` | `'normal'`  |


## Methods

### kolFocus

`kolFocus() => Promise<void>`

Sets focus on the internal element.

#### Returns

Type: `Promise<void>`




----------------------------------------------


