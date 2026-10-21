# Imagefilm (statisch ausgeliefert)

Diese Dateien sind eine kopierte Fassung der Marp-Präsentation aus dem
Open-Source-Wettbewerb-2026-Projekt (`slides.html`) und werden nicht gebaut,
sondern direkt ausgeliefert (URL: `/imagefilm`).

Quelle: `~/Workspace/Obsidian/Projekte/open-source-wettbewerb-2026/imagevideo/slides.html`
(Stand: Oktober 2026, Fassung mit Sieger-Status: Badge im Kopf, Sieger-Karte auf
der Titelfolie, Auszeichnung im Abbinder). Neu sind drei Verweise: Der Badge im
Kopf führt auf den Gewinnertext bei egovernment.de, die Zeile „Das Imagevideo ·
4:15“ auf der Titelfolie auf YouTube und der Song im Footer aufs Suno-Album
„KoliBri – Wings for Everyone“ (alle in neuem Tab).

Änderungen gegenüber dem Original:

- Die Verweise auf `assets/logo-weiss.png` und `assets/osw-mark.png` wurden auf
  `/imagefilm/assets/…` absolut gesetzt, damit die Bilder auch unter `/imagefilm`
  (ohne abschließenden Slash, siehe `trailingSlash: false`) geladen werden.
- Das Auto-Advance-Skript (`<script data-imv-player>`) wurde entfernt. Es baut
  auch den Fortschrittsbalken, deshalb ist der mit entfernt. Die Präsentation
  ist eine reine Durchklick-Fassung: Prev/Next-Buttons der Marp-Leiste,
  Pfeiltasten/Leertaste sowie Wheel/Swipe blättern manuell weiter.
- Titel und Meta-Beschreibung (auch `og:title`/`og:description`) beschreiben die
  Durchklick-Präsentation statt des Videos.

Badge, Sieger-Karte auf der Titelfolie und Abbinder kommen unverändert aus dem
Original und brauchen hier keine Nachbearbeitung mehr.

Bei einer Aktualisierung: neues `slides.html` kopieren, die Bildpfade erneut
absolut setzen, das Auto-Advance-Skript entfernen, Titel/Meta-Beschreibung
erneut setzen und fehlende Dateien aus `assets/` nach `assets/` kopieren
(zurzeit `logo-weiss.png` und `osw-mark.png`).
