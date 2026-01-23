<!-- Auto Generated Below -->


## Properties

| Property              | Attribute  | Description                                                                                                        | Type                                                      | Default     |
| --------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------- | ----------- |
| `_label` _(required)_ | `_label`   | Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.). | `string`                                                  | `undefined` |
| `_on`                 | --         | Defines the modal callback functions.                                                                              | `undefined \| ({ onClose?: (() => void) \| undefined; })` | `undefined` |
| `_variant`            | `_variant` | Defines the variant of the modal.                                                                                  | `"blank" \| "card" \| undefined`                          | `'blank'`   |
| `_width`              | `_width`   | Defines the width of the modal. (max-width: 100%)                                                                  | `string \| undefined`                                     | `'100%'`    |


## Methods

### closeModal

`closeModal() => Promise<void>`

Closes the dialog.

#### Returns

Type: `Promise<void>`



### `openModal() => Promise<void>`

Opens the dialog.

#### Returns

Type: `Promise<void>`




## Slots

| Slot | Description            |
| ---- | ---------------------- |
|      | The dialog's contents. |


----------------------------------------------


