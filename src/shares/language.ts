export type Locale = 'de' | 'en';

export type Language = {
	lang: Locale;
};

export const MESSAGES = {
	en: {
		components: {
			playgroundCards: {
				button: 'Try it out now!',
			},
			propertiesTable: {
				meta: 'Only applies to types who actually mean variants.',
			},
			noPreview:
				'No preview available. For detailed information about this component, please visit the detail page of the component.',
		},
	},
	de: {
		components: {
			playgroundCards: {
				button: 'Jetzt ausprobieren!',
			},
			propertiesTable: {
				meta: 'Betrifft nur Typen, die eigentlich Varianten meinen.',
			},
			noPreview:
				'Keine Preview verfügbar. Um detaillierte Informationen zu dieser Komponenten zu erhalten, besuchen Sie bitte die Detailseite der Komponenten.',
		},
	},
};
