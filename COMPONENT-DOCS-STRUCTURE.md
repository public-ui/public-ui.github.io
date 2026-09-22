# Kapitelstruktur einer Komponenten-Dokumentation (`docs/30-components/`)

Verbindliches Kapitelschema für alle Seiten unter `docs/30-components/`. Blaupause: [docs/30-components/input-number.mdx](docs/30-components/input-number.mdx). Quelle: public-ui/interne-todos#124.

Die Reihenfolge ist verpflichtend. Ein Kapitel entfällt nur, wenn die Komponente nachweislich keinen Inhalt dafür hat (z. B. "Tastatursteuerung" bei nicht-interaktiven Komponenten wie Card, Heading, Badge).

1. `# <Komponentenname>`
   - **Synonyme:** 3–5 Suchbegriffe, die Nutzende verwenden würden (Deutsch und Englisch).
   - **Beschreibung:** Zweck der Komponente in 1–2 Sätzen, inkl. des zugrunde liegenden nativen HTML-Elements/Patterns.
   - **Anwendungsfälle:** Liste typischer Einsatzszenarien als Absatz mit Fettdruck-Überschrift (kein Kapitel), direkt unter der Beschreibung – Bulleted List mit 3–5 Szenarien.
2. `## Beispiel`
   - Ein einleitender Satz plus ein Preview (`context="example"`), das die Standarddarstellung ohne optionale Properties zeigt.
3. `## Barrierefreiheit`
   - 3–6 Bullets: was die Komponente über das native Element hinaus für Barrierefreiheit tut (Tastaturbedienbarkeit, Label-/Fehlermeldungs-Zuordnung, Vorschläge, Größe von Bedienelementen) – beobachtbares Verhalten, keine Implementierungsdetails.
4. `### Konkrete Designentscheidungen`
   - Tabelle *Entscheidung | Begründung* für Entscheidungen mit belegbarem Grund (z. B. Wahl des nativen Eingabetyps, zusätzliche Schaltflächen, warum diese nicht per Tastatur fokussierbar sind).
5. `### Links und Referenzen`
   - Externe Referenzen wie MDN und HTML Living Standard zum zugrunde liegenden Element.
6. `## Tastatursteuerung`
   - Einleitungssatz, ob der Browser oder KoliBri die Tastatursteuerung liefert, dann Tabelle *Taste | Funktion* (Tab, Pfeiltasten, Enter …) sowie Hinweise zu nicht fokussierbaren Zusatzelementen und Wertebereichsgrenzen.
7. `## FAQ` (optional)
   - Wiederkehrende Fragen, die die Seite nicht schon beantwortet, inkl. allgemeiner Empfehlungen/Best Practices (z. B. Wertebereiche einschränken, Schrittweite definieren, wann nicht verwenden, Browser-Unterschiede, Sichtbarkeit von Bedienelementen). Eine eigene "Best Practices"-Sektion gibt es nicht – die Empfehlungen stecken in den FAQ-Antworten.
   - Auch das ehemalige Kapitel "Verwendung" (wann einsetzen/nicht einsetzen, zentrale Konfiguration, Wertformate, implizites Verhalten, Grenzen) ist hier integriert, nicht mehr als eigenes Kapitel.
8. `## Funktionalitäten`
   - Ein `###`-Abschnitt pro Feature (z. B. einfaches Eingabefeld, Formularattribute, Hinweistexte/Fehlermeldungen, numerische Beschränkungen, Placeholder, Label ausblenden, Icons, SmartButton, Vorschlagswerte), jeweils mit kurzer Beschreibung und eigenem Preview (`context="feature"`, `visibleProperties`).
9. `## Playground`
   - Ein Preview (`context="playground"`) mit allen sinnvollen Properties, nach den Funktionalitäten.
10. `## API`
11. `### Events`
    - `<EventsIntro />` plus Tabelle *Event | Auslöser | Value*.
12. `<Readme />`
    - Generierte API-Referenz.
