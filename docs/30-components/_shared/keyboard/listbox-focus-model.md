**Hinweis:** `Pos1` und `Ende` werden von der Komponente abgefangen und bewegen daher auch im Eingabefeld nicht den Textcursor.

**Fokusmodell**

Die Komponente orientiert sich am WAI-ARIA Authoring Practices Pattern **„Editable Combobox with List Autocomplete“**, verwendet jedoch ein bewusst abweichendes Fokusmodell: Während der Navigation innerhalb der Liste (Pfeiltasten, Pos1/Ende, Bild-Tasten) wird der Tastaturfokus auf den jeweils aktiven Eintrag verschoben. Im WAI-ARIA APG Pattern verbleibt der Fokus dagegen während der gesamten Interaktion im Eingabefeld.

Dieses Fokusmodell hat folgende Auswirkungen:

- Während der Navigation innerhalb der Liste kann kein weiterer Suchtext eingegeben werden.
- Buchstaben- und Zifferneingaben bei Fokus auf einem Eintrag setzen den Fokus auf den ersten Eintrag, dessen Beschriftung mit dem eingegebenen Zeichen beginnt.
- Nach dem Schließen der Liste bzw. nach einer Auswahl wird der Fokus in das Eingabefeld gesetzt.
- Verlässt der Fokus die Komponente, wird die Liste geschlossen.
