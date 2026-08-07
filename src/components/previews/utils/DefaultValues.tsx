import { JSX, Option, TabButtonProps, ToolbarItemsPropType, W3CInputValue } from '@public-ui/components';
import { TreeItemData } from '../properties';

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
