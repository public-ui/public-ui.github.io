# Interne Komponenten

In KoliBri gibt es eine Reihe von Komponenten, die innerhalb von anderen Komponenten wiederverwendet werden und nicht für die direkte Verwendung vorgesehen sind. Sie unterstützen die Wartbarkeit und Funktionalität des Systems.

Damit Sie optimal wiederverwendet werden können, haben Sie meistens auch keinen aktiven Shadow-Root und sind nicht explizit stylebar. Sie werden häufig über das Styling der umgebenden Komponente gestaltet.

Zudem sind sie alleinstehend nicht barrierefrei, weil Sie ja als Teil einer Gesamtkomponente konzipiert sind. Sie sind also nicht für die direkte Verwendung gedacht.
