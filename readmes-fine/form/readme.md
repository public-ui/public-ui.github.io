<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                                                                                                                                                             | Type                                                                                                          | Default     |
| --------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ----------- |
| `_errorList`    | --               | A list of error objects that each describe an issue encountered in the form. Each error object contains a message and a selector for identifying the form element related to the error. | `ErrorListPropType[] \| undefined`                                                                            | `undefined` |
| `_on`           | --               | Gibt die EventCallback-Funktionen für die Form-Events an.                                                                                                                               | `undefined \| { onSubmit?: EventCallback<Event> \| undefined; onReset?: EventCallback<Event> \| undefined; }` | `undefined` |
| `_requiredText` | `_required-text` | Defines whether the mandatory-fields-hint should be shown. A string overrides the default text.                                                                                         | `boolean \| string \| undefined`                                                                              | `true`      |


## Methods

### focusErrorList

`focusErrorList() => Promise<void>`

Scrolls to the error list and focuses the first link.

#### Returns

Type: `Promise<void>`




## Slots

| Slot | Description      |
| ---- | ---------------- |
|      | Inhalt der Form. |


----------------------------------------------


