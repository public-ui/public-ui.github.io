export type Locale = 'de' | 'en';

export type Language = {
	lang: Locale;
};

export const MESSAGES = {
	en: {
		components: {
			noPreview:
				'No preview available. For detailed information about this component, please visit the detail page of the component.',
		},
	},
	de: {
		components: {
			noPreview:
				'Keine Preview verfügbar. Um detaillierte Informationen zu dieser Komponenten zu erhalten, besuchen Sie bitte die Detailseite der Komponenten.',
		},
	},
};
