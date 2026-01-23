<!-- Auto Generated Below -->


## Properties

| Property              | Attribute | Description                                                                                                        | Type                   | Default     |
| --------------------- | --------- | ------------------------------------------------------------------------------------------------------------------ | ---------------------- | ----------- |
| `_active`             | `_active` | If set (to true) the tree item is the active one.                                                                  | `boolean \| undefined` | `undefined` |
| `_href` _(required)_  | `_href`   | Defines the target URI of the link.                                                                                | `string`               | `undefined` |
| `_label` _(required)_ | `_label`  | Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.). | `string`               | `undefined` |
| `_open`               | `_open`   | Opens/expands the element when truthy, closes/collapses when falsy.                                                | `boolean \| undefined` | `undefined` |


## Methods

### collapse

`collapse() => Promise<void>`

Collapses the tree item.

#### Returns

Type: `Promise<void>`



### `expand() => Promise<void>`

Expands the tree item.

#### Returns

Type: `Promise<void>`



### `focusLink() => Promise<void>`

Focuses the link element.

#### Returns

Type: `Promise<void>`



### `isOpen() => Promise<boolean>`

Returns whether the tree item is expanded.

#### Returns

Type: `Promise<boolean>`




----------------------------------------------


