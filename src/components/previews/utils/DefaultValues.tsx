import { JSX, Option, TabButtonProps, ToolbarItemsPropType, W3CInputValue } from '@public-ui/components';
import { TreeItemData } from '../properties';
import { AccordionMultiplePreviewProps } from '../components/AccordionMultiple';

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

export const NavLinksDefault: JSX.KolNav['_links'] = [
	{
		_href: '#/',
		_icons: 'kolicon-kolibri',
		_label: '1. Menüpunkt',
		_active: true,
	},
	{
		_icons: 'kolicon-house',
		_label: '2. Menüpunkt',
		_children: [
			{ _href: '#/1', _icons: 'kolicon-house', _label: '2.1. Untermenüpunkt' },
			{ _href: '#/2', _icons: 'kolicon-house', _label: '2.2. Untermenüpunkt' },
		],
	},
	{
		_icons: 'kolicon-house',
		_label: '3. Menüpunkt',
		_href: '#/',
	},
	{
		_icons: 'kolicon-cogwheel',
		_label: '4. Menüpunkt',
		_children: [
			{ _href: '#/1', _icons: 'kolicon-house', _label: '4.1. Untermenüpunkt' },
			{ _href: '#/2', _icons: 'kolicon-house', _label: '4.2. Untermenüpunkt' },
		],
	},
];

export const TreeItemsDefault: TreeItemData[] = [
	{
		_label: 'Home',
		_href: '#/',
		_active: true,
	},
	{
		_label: 'Page 1',
		_href: '#/page-1',
		_open: true,
		_children: [
			{ _label: 'Page 1.1', _href: '#/page-1/1' },
			{ _label: 'Page 1.2', _href: '#/page-1/2' },
		],
	},
	{
		_label: 'Page 2',
		_href: '#/page-2',
	},
];

export const ToolbarItemsDefault: ToolbarItemsPropType = [
	{
		type: 'button',
		_label: 'Back',
		_hideLabel: true,
		_icons: {
			left: {
				icon: 'kolicon-chevron-left',
			},
		},
	},
	{
		type: 'button',
		_label: 'Next',
		_hideLabel: true,
		_icons: {
			right: {
				icon: 'kolicon-chevron-right',
			},
		},
	},
	{
		type: 'link',
		_href: '#',
		_label: 'Link',
	},
	{
		type: 'button',
		_label: 'Button',
	},
];

export const TabDefault: TabButtonProps[] = [
	{ _label: 'Tab 1', _icons: 'kolicon-house' },
	{ _label: 'Tab 2', _disabled: true },
	{ _label: 'Tab 3' },
	{ _label: 'Tab 4' },
	{ _label: 'Tab 5' },
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
