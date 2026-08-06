import type { Option, W3CInputValue } from '@public-ui/components';
import type { AccordionMultiplePreviewProps } from '../components/AccordionMultiple';

export const ComboboxSuggestionsDefault: W3CInputValue[] = [
	'JavaScript',
	'Python',
	'SQL',
	'TypeScript',
	'Java',
	'C#',
	'C++',
	'C',
	'PHP',
	'Go',
];

export const SelectOptionsDefault: Option<string>[] = [
	{ label: 'Baden-Württemberg', value: 'BW' },
	{ label: 'Bayern', value: 'BY' },
	{ label: 'Berlin', value: 'BE' },
	{ label: 'Brandenburg', value: 'BB' },
	{ label: 'Bremen', value: 'HB' },
	{ label: 'Hamburg', value: 'HH' },
	{ label: 'Hessen', value: 'HE' },
	{ label: 'Mecklenburg-Vorpommern', value: 'MV' },
	{ label: 'Niedersachsen', value: 'NI' },
	{ label: 'Nordrhein-Westfalen', value: 'NW' },
	{ label: 'Rheinland-Pfalz', value: 'RP' },
	{ label: 'Saarland', value: 'SL' },
	{ label: 'Sachsen', value: 'SN' },
	{ label: 'Sachsen-Anhalt', value: 'ST' },
	{ label: 'Schleswig-Holstein', value: 'SH' },
	{ label: 'Thüringen', value: 'TH' },
];

export const AccordionMultipleDefault: AccordionMultiplePreviewProps = {
	_accordions: [
		{
			_label: 'Der Frühling',
			_open: true,
			_slot:
				'Das Frühjahr bringt den Übergang vom Winter zum Sommer. Die Temperaturen steigen langsam, die Tage werden länger, und die Natur erwacht aus dem Winterschlaf: Pflanzen beginnen zu blühen, Bäume treiben neue Knospen, und viele Tierarten aktivieren ihre Fortpflanzungszyklen. Typisch sind wechselhaftes Wetter mit warmen sonnigen Phasen und kühleren Regentagen.',
		},
		{
			_label: 'Der Sommer',
			_open: false,
			_slot:
				'Der Sommer ist die wärmste Jahreszeit mit längsten Tagen und kürzesten Nächten. Die Sonne steht höher am Himmel, was zu intensiverer Einstrahlung führt. Temperaturen erreichen ihre Höchstwerte, Niederschläge treten oft als kurze Gewitter statt als langanhaltender Regen auf. Es ist die Hauptsaison für Vegetation und landwirtschaftliches Wachstum.',
		},
		{
			_label: 'Der Herbst',
			_open: false,
			_slot:
				'Im Herbst nimmt die Tageslänge deutlich ab, die Temperaturen fallen allmählich. Laubbäume verlieren ihr grünes Blattwerk durch die verkürzte Photosyntheseperiode, was zu charakteristischen Braun- und Gelbtönen führt. Die Erntezeit für viele Kulturpflanzen liegt in dieser Jahreszeit. Nebel und spätere Sonnenaufgänge werden häufiger.',
		},
		{
			_label: 'Der Winter',
			_open: false,
			_slot:
				'Die kalte Jahreszeit mit den kürzesten Tagen und längsten Nächten. Die niedrige Sonnenposition sorgt für geringe Einstrahlungsintensität. Temperaturen fallen unter den Gefrierpunkt, was in vielen Regionen Schnee und Eis ermöglicht. Pflanzen ruhen, viele Tiere halten Winterruhe oder migrieren. Die natürliche Lichtverfügbarkeit ist am geringsten.',
		},
	],
};
