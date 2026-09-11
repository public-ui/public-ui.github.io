Mit `_hint` und `_msg` geben Sie Nutzenden zusätzliche Orientierung zur Eingabe und machen Validierungsfehler unmittelbar am Feld sichtbar:

- `_hint`: Ergänzende Hinweise zur Eingabe (wird immer angezeigt und über `aria-describedby` mit dem Feld verknüpft)
- `_msg`: Fehlermeldungen oder Validierungshinweise (wird **nur in Verbindung mit `_touched`** angezeigt)
- `_touched`: Zeigt an, ob das Feld von Nutzenden bereits angefasst wurde, und steuert damit, ob `_msg` sichtbar wird
- `_hideMsg`: Unterdrückt die Fehlermeldung am Feld, wenn sie an anderer Stelle dargestellt wird

**Hinweis:** `_msg` wird erst dann eingeblendet, wenn `_touched` auf `true` gesetzt ist. So werden Validierungsfehler nicht bereits beim ersten Rendern, sondern erst nach einer Interaktion mit dem Feld angezeigt. Handelt es sich um eine Fehlermeldung, wird das Feld zusätzlich über `aria-invalid` als ungültig gekennzeichnet.

**Anwendungsfall für `_hideMsg`:** Besteht eine fachliche Einheit aus mehreren Eingabefeldern innerhalb eines Field-Sets, beispielsweise ein sechsstelliger Bestätigungscode mit einem einzelnen Feld je Stelle, kann eine gemeinsame Fehlermeldung für die gesamte Gruppe sinnvoller sein als eine Meldung je Einzelfeld. In diesem Fall unterdrücken Sie die Fehlermeldung an den einzelnen Feldern über `_hideMsg` und stellen sie stattdessen einmalig am Field-Set dar.

**Wichtig:** `_hideMsg` blendet die Fehlermeldung nicht nur visuell aus. Die Meldung wird weder gerendert noch über `aria-describedby` mit dem Feld verknüpft – lediglich die Kennzeichnung über `aria-invalid` bleibt erhalten. Stellen Sie daher sicher, dass die gemeinsame Fehlermeldung auf Anwendungsebene für alle Nutzenden, auch für Nutzende assistiver Technologien, wahrnehmbar ist.
