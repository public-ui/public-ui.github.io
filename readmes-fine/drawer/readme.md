<!-- Auto Generated Below -->


## Properties

| Property              | Attribute     | Description                                                                                                        | Type                                                      | Default     |
| --------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------- | ----------- |
| `_align`              | `_align`      | Defines the visual orientation of the component.                                                                   | `"bottom" \| "left" \| "right" \| "top" \| undefined`     | `undefined` |
| `_hasCloser`          | `_has-closer` | Defines whether the element can be closed.                                                                         | `boolean \| undefined`                                    | `false`     |
| `_label` _(required)_ | `_label`      | Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.). | `string`                                                  | `undefined` |
| `_on`                 | --            | Specifies the EventCallback function to be called when the drawer is closing.                                      | `undefined \| ({ onClose?: (() => void) \| undefined; })` | `undefined` |
| `_open`               | `_open`       | Opens/expands the element when truthy, closes/collapses when falsy.                                                | `boolean \| undefined`                                    | `undefined` |


## Methods

### close

`close() => Promise<void>`

Closes the drawer.

#### Returns

Type: `Promise<void>`



### `open() => Promise<void>`

Opens the drawer.

#### Returns

Type: `Promise<void>`




## Slots

| Slot | Description            |
| ---- | ---------------------- |
|      | The Content of drawer. |


----------------------------------------------


