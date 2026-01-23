<!-- Auto Generated Below -->


## Methods

### closeAll

`closeAll(immediate?: boolean) => Promise<void>`

Closes all toasts.

#### Parameters

| Name        | Type      | Description |
| ----------- | --------- | ----------- |
| `immediate` | `boolean` |             |

#### Returns

Type: `Promise<void>`



### `enqueue(toast: Toast) => Promise<() => void>`

Adds a toast to the queue.

#### Parameters

| Name    | Type                                                                                                                                                                                                                                   | Description |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `toast` | `{ description?: string \| undefined; render?: ToastRenderFunction \| undefined; label: string; type: "default" \| "info" \| "success" \| "warning" \| "error"; variant?: "card" \| undefined; onClose?: (() => void) \| undefined; }` |             |

#### Returns

Type: `Promise<() => void>`




----------------------------------------------


