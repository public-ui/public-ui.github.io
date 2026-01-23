<!-- Auto Generated Below -->


## Properties

| Property              | Attribute   | Description                                                                                                        | Type                                                                                       | Default     |
| --------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ----------- |
| `_disabled`           | `_disabled` | Makes the element not focusable and ignore all events.                                                             | `boolean \| undefined`                                                                     | `false`     |
| `_label` _(required)_ | `_label`    | Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.). | `string`                                                                                   | `undefined` |
| `_level`              | `_level`    | Defines which H-level from 1-6 the heading has. 0 specifies no heading and is shown as bold text.                  | `0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| undefined`                                             | `0`         |
| `_on`                 | --          | Defines the callback functions for details.                                                                        | `undefined \| { onToggle?: EventValueOrEventCallback<MouseEvent, boolean> \| undefined; }` | `undefined` |
| `_open`               | `_open`     | Opens/expands the element when truthy, closes/collapses when falsy.                                                | `boolean \| undefined`                                                                     | `false`     |


## Methods

### focus

`focus() => Promise<void | undefined>`

Sets focus on the internal element.

#### Returns

Type: `Promise<void | undefined>`



### `kolFocus() => Promise<void | undefined>`

<span className="text-red-500">**[DEPRECATED]**</span> Use {@link focus} instead.<br/><br/>

#### Returns

Type: `Promise<void | undefined>`




## Slots

| Slot | Description                                               |
| ---- | --------------------------------------------------------- |
|      | Der Inhalt, der in der Detailbeschreibung angezeigt wird. |


----------------------------------------------


