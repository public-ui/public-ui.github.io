Mit `_maxLength`, `_maxLengthBehavior` und `_hasCounter` begrenzen Sie die Eingabelänge und geben Nutzenden gleichzeitig Rückmeldung über die bereits eingegebenen bzw. noch verfügbaren Zeichen.

**Properties**

| Property             | Typ                  | Standard | Beschreibung                                                                                                                                                                                        |
| -------------------- | -------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `_hasCounter`        | `boolean`            | `false`  | Blendet den Zeichenzähler ein. Ohne dieses Property wird kein Zähler ausgegeben.                                                                                                                    |
| `_maxLength`         | `number`             | –        | Maximale Anzahl erlaubter Zeichen.                                                                                                                                                                  |
| `_maxLengthBehavior` | `'hard' \| 'soft'`   | `'hard'` | Legt fest, wie die Grenze aus `_maxLength` behandelt wird:<br />- **hard**: Setzt das native `maxlength`-Attribut und verhindert weitere Eingaben – auch ohne Zähler.<br />- **soft**: Lässt weitere Eingaben zu; der Zähler zeigt verbleibende bzw. überschrittene Zeichen an. |

**Ausgabevarianten des Zählers**

| Fall | `_hasCounter`         | `_maxLength` | `_maxLengthBehavior` | Sichtbarer Text                                                  |
| ---: | --------------------- | ------------ | -------------------- | ---------------------------------------------------------------- |
| 1    | *(leer)* oder `false` | –            | –                    | – (kein Zähler)                                                  |
| 2    | `true`                | *(leer)*     | *(leer)* oder `hard` | `n Zeichen`                                                      |
| 3    | `true`                | 50           | *(leer)* oder `hard` | `n/50 Zeichen`                                                   |
| 4    | `true`                | 50           | `soft`               | `noch 30 Zeichen verfügbar`<br />*(bzw. `5 Zeichen zu viel`)* |

**Hinweis:** Bei `_maxLengthBehavior="soft"` wird das native `maxlength`-Attribut **nicht** gesetzt. Die Einhaltung der Zeichengrenze muss dann auf Anwendungsebene validiert werden. Ohne `_maxLength` wird bei `soft` kein Zähler angezeigt.
