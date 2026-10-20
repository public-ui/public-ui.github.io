# Imagefilm (statisch ausgeliefert)

Diese Dateien sind eine kopierte Fassung der Marp-Präsentation aus dem
Open-Source-Wettbewerb-2026-Projekt (`slides.html`) und werden nicht gebaut,
sondern direkt ausgeliefert (URL: `/imagefilm`).

Quelle: `~/Workspace/Obsidian/Projekte/open-source-wettbewerb-2026/imagevideo/slides.html`
(Stand: Oktober 2026, 4:15 Auto-Advance-Fassung mit Wettbewerbs-Badge).

Änderungen gegenüber dem Original:

- Die beiden Verweise auf `assets/logo-weiss.png` wurden auf
  `/imagefilm/assets/logo-weiss.png` absolut gesetzt, damit das Logo auch unter
  `/imagefilm` (ohne abschließenden Slash, siehe `trailingSlash: false`) geladen wird.
- Das Auto-Advance-Skript (`<script data-imv-player>`) wurde entfernt. Die
  Präsentation ist eine reine Durchklick-Fassung: Prev/Next-Buttons der
  Marp-Leiste, Pfeiltasten/Leertaste sowie Wheel/Swipe blättern manuell weiter.
- Der Wettbewerbs-Badge ist dreizeilig: Eyebrow „//Open Source Wettbewerb 2026“,
  fett „Sieger“, darunter „in der Kategorie Transformation“ (statt „Votet und
  teilt #KoliBri“). Er ist höher und schmaler als das zweizeilige Original
  (größere Textzeilen, kompaktere Polster, engere Buchstabenabstände); die
  Position oben rechts bleibt unverändert. Die Schlussfolie sagt entsprechend
  „Sieger in der Kategorie Transformation beim Open Source Wettbewerb 2026.“
  statt „Votet für KoliBri.“
- Die Titel-Folie trägt den Untertitel „Die Elemente, die HTML fehlen.“ als
  gesperrten Kicker (`<h3>`, Akzentfarbe, 0,42em Sperrung) statt als Fließtext,
  das Logo ist 96px statt 120px.
- Titel und Meta-Beschreibung beschreiben die Präsentation statt des Videos.

Bei einer Aktualisierung: neues `slides.html` kopieren, die Logo-Pfade erneut
anpassen, das Auto-Advance-Skript entfernen, den Badge (dreizeilig, höher,
schmaler) und den Titel-Folien-Kicker erneut setzen und `assets/logo-weiss.png`
ersetzen.
