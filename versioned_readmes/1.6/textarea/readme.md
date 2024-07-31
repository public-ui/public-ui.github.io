Die Komponente **Textarea** stellt ein größeres Eingabefeld für Inhalte zur Verfügung. Im Gegensatz zum <kol-link _href="/docs/components/input-text" _label="/docs/components/input-text" _label="InputText"></kol-link> können hier auch umfangreiche Inhalte eingegeben werden, die auch mit Zeilenumbrüchen versehen sein können.

## Konstruktion

### Code

```html
<kol-textarea
	_resize="none"
	_rows="5"
	_value="
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
  magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
  gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
  elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
  et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
  sit amet."
></kol-textarea>
```

### Beispiel

<kol-textarea _resize="none" _rows="5" _value="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.">
</kol-textarea>

## Verwendung

Verwenden Sie die **Textarea**-Komponente wenn die Eingabe von größeren Textmengen erforderlich ist, z.B. bei der Erfassung eines Anliegens innerhalb eines Formulars.
Mit Hilfe des Attributs **`_rows`** kann die Höhe der Textarea in Zeilen bestimmt werden.
Über das Attribut **`_resize`** kann zusätzlich festgelegt werden ob und in welche Richtung die Textarea vergrößert werden kann. Der Wert **`none`** sperrt die Textarea gegen Größenänderungen.

<!--### Best practices

### Anwendungsfälle-->

## Barrierefreiheit

### Tastatursteuerung

| Taste          | Funktion                                                                        |
| -------------- | ------------------------------------------------------------------------------- |
| `Tab`          | Fokussiert die Textarea.                                                        |
| `Pfeil-Tasten` | Können für die Navigation im Inhalt der fokussierten Textarea verwendet werden. |

## Links und Referenzen

- <kol-link _href="https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109" _label="https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109" _target="_blank"></kol-link>

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                                                                                                                                  | Type                                                                                     | Default      |
| --------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- | ------------ |
| `_accessKey`    | `_access-key`    | Defines which key combination can be used to trigger or focus the interactive element of the component.                                                      | `string` \| `undefined`                                                                    | `undefined`  |
| `_adjustHeight` | `_adjust-height` | Adjusts the height of the element to its content.                                                                                                            | `boolean` \| `undefined`                                                                   | `false`      |
| `_alert`        | `_alert`         | Defines whether the screen-readers should read out the notification.                                                                                         | `boolean` \| `undefined`                                                                   | `true`       |
| `_disabled`     | `_disabled`      | Makes the element not focusable and ignore all events.                                                                                                       | `boolean` \| `undefined`                                                                   | `undefined`  |
| `_error`        | `_error`         | Defines the error message text.                                                                                                                              | `string` \| `undefined`                                                                    | `undefined`  |
| `_hasCounter`   | `_has-counter`   | Shows the character count on the lower border of the input.                                                                                                  | `boolean` \| `undefined`                                                                   | `undefined`  |
| `_hideLabel`    | `_hide-label`    | Hides the label.                                                                                                                                             | `boolean` \| `undefined`                                                                   | `undefined`  |
| `_hint`         | `_hint`          | Defines the hint text.                                                                                                                                       | `string` \| `undefined`                                                                    | `''`         |
| `_id`           | `_id`            | Defines the internal ID of the primary component element.                                                                                                    | `string` \| `undefined`                                                                    | `undefined`  |
| `_label`        | `_label`         | Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.). Set to `false` to enable the expert slot. | `boolean` \| `string` \| `undefined`                                                         | `undefined`  |
| `_maxLength`    | `_max-length`    | Defines the maximum number of input characters.                                                                                                              | `number` \| `undefined`                                                                    | `undefined`  |
| `_name`         | `_name`          | Defines the technical name of an input field.                                                                                                                | `string` \| `undefined`                                                                    | `undefined`  |
| `_on`           | --               | Gibt die EventCallback-Funktionen für das Input-Event an.                                                                                                    | `InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus` \| `undefined` | `undefined`  |
| `_placeholder`  | `_placeholder`   | Defines the placeholder for input field. To be shown when there's no value.                                                                                  | `string` \| `undefined`                                                                    | `undefined`  |
| `_readOnly`     | `_read-only`     | Makes the input element read only.                                                                                                                           | `boolean` \| `undefined`                                                                   | `undefined`  |
| `_required`     | `_required`      | Makes the input element required.                                                                                                                            | `boolean` \| `undefined`                                                                   | `undefined`  |
| `_resize`       | `_resize`        | Defines whether and in which direction the size of the input can be changed by the user. (https://developer.mozilla.org/de/docs/Web/CSS/resize)              | `"both"` \| `"horizontal"` \| `"none"` \| `"vertical"` \| `undefined`                            | `'vertical'` |
| `_rows`         | `_rows`          | Defines how many rows of text should be visible at the same time.                                                                                            | `number` \| `undefined`                                                                    | `undefined`  |
| `_tabIndex`     | `_tab-index`     | Defines which tab-index the primary element of the component has. (https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)             | `number` \| `undefined`                                                                    | `undefined`  |
| `_tooltipAlign` | `_tooltip-align` | Defines where to show the Tooltip preferably: top, right, bottom or left.                                                                                    | `"bottom"` \| `"left"` \| `"right"` \| `"top"` \| `undefined`                                    | `'top'`      |
| `_touched`      | `_touched`       | Shows if the input was touched by a user.                                                                                                                    | `boolean` \| `undefined`                                                                   | `false`      |
| `_value`        | `_value`         | Defines the value of the input.                                                                                                                              | `string` \| `undefined`                                                                    | `undefined`  |


## Slots

| Slot | Description                         |
| ---- | ----------------------------------- |
|      | Die Beschriftung des Eingabefeldes. |


## Dependencies

### Depends on

- kol-input
- [kol-tooltip-wc](./tooltip)

### Graph
```mermaid
graph TD;
  kol-textarea --> kol-input
  kol-textarea --> kol-tooltip-wc
  kol-input --> kol-icon
  kol-input --> kol-button-wc
  kol-input --> kol-alert
  kol-button-wc --> kol-span-wc
  kol-button-wc --> kol-tooltip-wc
  kol-span-wc --> kol-icon
  kol-tooltip-wc --> kol-span-wc
  kol-alert --> kol-alert-wc
  kol-alert-wc --> kol-heading-wc
  kol-alert-wc --> kol-button-wc
  kol-alert-wc --> kol-icon
  style kol-textarea fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


