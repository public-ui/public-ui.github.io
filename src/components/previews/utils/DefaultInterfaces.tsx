import type { PreviewContext } from '../Preview';

interface PreviewDefaults<TProps> {
	/**
	 * Der Dokumentationsabschnitt, in dem die Preview steht. Leitet die Darstellung
	 * (Eigenschaften-Auswahl und Zustand des Quellcode-Bereichs) aus einer zentralen
	 * Regel ab, siehe `PREVIEW_CONTEXT_CONFIG` in `Preview.tsx`.
	 */
	context: PreviewContext;
	initialProps?: TProps;
	/**
	 * Auswahl der angebotenen Eigenschaften. Wird ausschliesslich im Kontext `feature`
	 * ausgewertet, da dort jeder Unterabschnitt gezielt einzelne Eigenschaften zeigt.
	 * Ohne Angabe werden alle zum Ausprobieren sinnvollen Eigenschaften angeboten,
	 * `[]` blendet die Eigenschaften aus.
	 */
	visibleProperties?: (keyof TProps)[];
}

export default PreviewDefaults;
