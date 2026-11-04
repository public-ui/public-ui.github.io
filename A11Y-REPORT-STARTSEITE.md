# Barrierefreiheit-Report: Startseite

**Stand:** 4. November 2026 (KoliBri-Abhängigkeiten laut `package.json`: `@public-ui/components` 4.5.0)
**Umfang:** Semantische Barrierefreiheit der Startseite (`src/pages/index.tsx`, `src/components/HomepageFeatures.tsx` und die auf ihr eingebetteten Inhalte). Visuelle Aufbereitung (Kontraste, Fokusringe, Größen) war ausdrücklich nicht Teil des Auftrags und blieb unangetastet.

## Ergebnis

Die Startseite trägt nach den Korrekturen keine offenen Verstöße mehr gegen WCAG 2.1 A/AA: axe-core meldet 0 Violations (49 geprüfte Regeln bestanden) für die deutsche und die englische Startseite sowie für den eingebetteten Imagefilm. Struktur (Landmarks, Überschriften, Fokusführung, benannte Bilder, Sprachangaben) ist vollständig semantisch korrekt.

## Gefundene Mängel und ihre Behebung

### 1. Meta-Beschreibung enthielt einen Platzhalter (Fehler, kein reines A11y-Problem)

Sowohl `i18n/de/code.json` als auch `i18n/en/code.json` lösten `custom.meta.description` wörtlich zum Text „custom.meta.description" auf; der `translate()`-Aufruf in `index.tsx` nutzte zudem ein unpassendes zweites Argument. Die Startseite hatte damit keine brauchbare Meta-Beschreibung.

**Behoben:** Sauberer `translate()`-Aufruf mit deutschem Fallback-Text in `src/pages/index.tsx`, echte Texte in beiden `code.json`-Dateien („KoliBri (Public UI) ist eine barrierefreie Web Component-Bibliothek für webbasierte Projekte und Design Systeme." bzw. englisch).

### 2. Zwei Sektionen ohne Überschrift und ohne Regionsnamen

Die Imagefilm-Sektion und die Feature-Sektion waren nackte `<section>`-Elemente ohne zugänglichen Namen (damit im Accessibility-Baum nur generische Container). Die drei Karten-Überschriften sprangen außerdem von der einen vorhandenen `h2` direkt auf `h3`, ohne dass die Sektion selbst in der Gliederung steht.

**Behoben:** Sichtbar ausgeblendete `h2`-Überschriften („Imagefilm", „KoliBri im Überblick", beide per `translate()` mit `custom.imagefilm-heading`/`custom.features-heading` in de und en) plus `aria-labelledby` auf den Sektionen. Überschriften-Folge ist jetzt: `h1` → `h2` (Imagefilm) → `h2` (Barrierefreier Standard) → `h2` (KoliBri im Überblick) → `h3` (Theming, Developer, Komponenten). Weil die Überschriften `sr-only` sind, ändert sich am sichtbaren Layout nichts.

### 3. Fokusverlust beim Starten des Imagefilms

Der Poster-Button wird beim Klick aus dem DOM entfernt (ersetzt durch das `iframe`). Tastatur- und Screenreader-Nutzende fielen danach auf `document.body` zurück und wussten nicht, dass die Präsentation begonnen hat.

**Behoben:** Nach dem Start bekommt das `iframe` den Fokus (`useRef` + `useEffect` in `ImagefilmSection`). Verifiziert im echten Browser: nach dem Klick ist `document.activeElement` das Iframe mit seinem `title` „KoliBri Imagefilm – Präsentation (manuell durchklickbar, ohne Ton)".

### 4. Doppelte Textalternative am Poster-Button

Das Poster-`img` innerhalb des Buttons trug ein ausführliches `alt`; zusammen mit dem `sr-only`-Span „Imagefilm abspielen" ergab das einen unnötig langen zugänglichen Buttontext („Vorschaubild des Imagefilms: … . Imagefilm abspielen"). Das Bild ist innerhalb des beschrifteten Buttons dekorativ.

**Behoben:** `alt=""` am Poster; der zugängliche Buttonname ist jetzt prägnant „Imagefilm abspielen" (im Browser nachgeprüft). Der dadurch ungenutzte Übersetzungsschlüssel `custom.imagefilm-poster-alt` wurde aus beiden `code.json`-Dateien entfernt.

### 5. Eingebetteter Imagefilm mit ungültigem Sprachattribut

`static/imagefilm/index.html` (die Marp-Präsentation, die die Startseite im Iframe lädt) hatte `lang="C"` auf `<html>` und allen 23 Folien-`<section>`-Elementen — kein gültiger BCP-47-Code, ein klarer Verstoß gegen WCAG 3.1.1/3.1.2 im eingebetteten Dokument.

**Behoben:** Überall auf `lang="de"` gesetzt (24 Stellen). Die Abweichung ist im `README.md` neben der Datei dokumentiert, damit sie bei der nächsten Aktualisierung aus dem Marp-Export nicht verloren geht.

### 6. Dekoratives Hero-SVG nur indirekt versteckt

Das Bauplan-SVG hing `aria-hidden` nur über sein Eltern-`div`. Das Element trägt jetzt selbst `aria-hidden="true"` und `focusable="false"`, falls das Markup später mal ohne den Wrapper verwendet wird. Gleiches gilt für die schwebenden Tag-Chips, die weiterhin korrekt über das Wrapper-`div` versteckt sind.

## Geprüft und ohne Befund

Diese Punkte wurden gegen die installierte KoliBri-Version 4.5.0 und im gerenderten Dokument geprüft und waren bereits korrekt:

- **Landmarks:** genau ein `banner` (Hero-`<header>`), ein `main`, ein `contentinfo` (Theme-Footer), `nav` „Main" (Theme-Navbar), Skip-Link „Zum Hauptinhalt springen" vorhanden.
- **KoliBri-Komponenten (Shadow-DOM im Browser nachgeprüft):** `kol-kolibri` rendert `role="img"` mit `aria-label="Logo von KoliBri"`; `kol-icon` mit `_label=""` ist `aria-hidden` + `role="presentation"` (dekorativ); `kol-link-button`/`kol-link` erzeugen echte Links mit zugänglichen Namen.
- **ITZLogo:** `role="img"` mit deutschem `aria-label`.
- **Iframe:** `title` vorhanden (vor und nach dem Fokus-Test).
- `prefers-reduced-motion` ist in `src/css/homepage-lines.css` umgesetzt (statischer Endzustand, keine Bewegung, kein Informationsverlust).
- Aussprache-Problem umgangen: `kol-abbr` rendert in 4.5.0 kein `title`-Attribut mehr (im Shadow-DOM verifiziert). Auf der Startseite unproblematisch, weil die Auflösung „KoliBri steht für ‚Komponentenbibliothek für die Barrierefreiheit'" als sichtbarer Satz danebensteht (WCAG 3.1.4 über den Kontext erfüllt).

## Verifikation (alle Schritte nachvollziehbar)

1. `pnpm run lint` — tsc + ESLint + Preview-Kontextprüfung: fehlerfrei.
2. `prettier blog docs src -c` — die geänderten Dateien sind formattiert; die 12 gemeldeten Dateien sind vorbestehende Probleme außerhalb der Startseite (mit `git stash` gegen den Ausgangszustand gegengeprüft).
3. `pnpm run build` — Produktions-Build erfolgreich; statisches HTML geprüft: Meta-Beschreibung, Landmark-Struktur, Überschriftenfolge, alle `aria`-Attribute in `/` und `/en/` vorhanden; `build/imagefilm/index.html` ohne `lang="C"`.
4. axe-Core (Regelsätze wcag2a, wcag2aa, wcag21aa, best-practice) gegen den statischen Build im headless Chrome:
   - Startseite (de): **0 Violations**, 49 bestanden, 11× `color-contrast` „incomplete" (Kontraste über Farbverläufen/Bildern kann das Werkzeug nicht automatisch berechnen).
   - Startseite (en) und Imagefilm: ebenfalls **0 Violations**.
5. Fokus-Test per CDP: Klick auf den Poster-Button → Fokus liegt im Iframe, Iframe-`title` korrekt.

## Offene Punkte (bewusst nicht Teil dieses Auftrags)

Diese Punkte betreffen Styling, externe Inhalte oder das siteweite Theme und sollten separat entschieden werden:

- **Kontraste:** axe kann 11 Knoten (de) bzw. 7 Knoten (Imagefilm) nicht automatisch prüfen — Weiße Texte auf Farbverläufen und Poster. Sobald Styling in den Blick genommen wird, manuell nachmessen (z. B. die halbtransparente Play-Fläche über dem Poster).
- **Externe Links ohne Hinweis:** Template-Repository, ITZBund und Beispiel-App öffnen in neuen Tabs, ohne das anzukündigen. In WCAG 2.1 AA nicht gefordert (3.2.5 ist AAA), aber eine bewährte Praxis.
- **Marp-Steuerelemente:** Die Prev/Next/Vollbild-Buttons des Imagefilms haben englische `title`-Attribute und `tabindex="-1"` (Marp-Standard). Tastaturbedienung bleibt über Pfeiltasten/Leertaste im Iframe gegeben; wer will, localized die Titel beim nächsten Export.
- **Bildfilm als Inhalt:** WCAG 1.2 verlangt für die Präsentation Alternativen (Textfassung/Untertitel bei Sprachausgabe), soweit sie relevant ist. Die Folien sind Text-basiert; eine kurze Textfassung der Startseite beigelegt zu haben, wäre ein nächster Schritt.
- **`kol-abbr` in KoliBri 4.5.0:** Die `_label`-Property wird angenommen, aber nicht als `title` gerendert (verifiziert im Shadow-DOM). Auf der Startseite abgefedert; in Komponenten-Dokus, die `KolAbbr` ohne Kontextauflösung einsetzen, wäre das ein KoliBri-Thema (ggf. als Bug melden).
- **Siteweite Navbar:** Die Navbar-Wraper-Sektion `aria-label="Toolbar"` (in `src/theme/Navbar/index.tsx`) ist korrekt benannt, liegt aber außerhalb der Startseite und wurde deshalb nicht umgebaut.

## Geänderte Dateien

| Datei | Änderung |
| --- | --- |
| `src/pages/index.tsx` | Sektionsüberschrift + Regionsname Imagefilm, Iframe-Fokus, Poster-`alt=""`, Hero-SVG explizit versteckt, Meta-Beschreibung repariert |
| `src/components/HomepageFeatures.tsx` | Sektionsüberschrift + Regionsname „KoliBri im Überblick" |
| `i18n/de/code.json` | `custom.meta.description` mit echtem Text, neue Keys `custom.imagefilm-heading`/`custom.features-heading`, `custom.imagefilm-poster-alt` entfernt |
| `i18n/en/code.json` | dito auf Englisch |
| `static/imagefilm/index.html` | `lang="C"` → `lang="de"` (24 Stellen) |
| `static/imagefilm/README.md` | Abweichung dokumentiert, Aktualisierungs-Hinweis ergänzt |

Keine MDX-/Doku-Inhalte berührt; visuelle Darstellung unverändert (die neuen Überschriften sind `sr-only`).
