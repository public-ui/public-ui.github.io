export type ComponentSynonyms = {
	[key: string]: string[];
};

export const COMPONENT_SYNONYMS: ComponentSynonyms = {
	accordion: ['Collapse'],
	alert: ['Message'],
	avatar: ['Persona'],
	combobox: ['Autocomplete', 'Select', 'Dropdown'],
	details: ['Disclosure', 'Collapse', 'Summary Detail'],
	dialog: ['Modal', 'Modal dialog', 'Corner Dialog', 'Prompt'],
	image: ['Img', 'Thumbnail'],
	'input-date': ['Date Picker', 'Datetime Picker', 'Week Picker Month Picker', 'Time Picker', 'Calendar'],
	'input-file': ['Upload', 'File Uploader', 'File Picker', 'File Selector'],
	'input-radio': ['Choice Group', 'Radio Buttons'],
	'input-range': ['Slider'],
	'input-text': ['Text Field'],
	modal: ['Dialog', 'Prompt'],
	nav: ['Navigation', 'Menu', 'Sidebar', 'Dropdowns (menu)'],
	select: ['Datalist', 'Dropdown'],
	spin: ['Placeholder', 'Skeleton', 'Shimmer'],
	table: ['Data Table', 'Details List', 'Data Grid'],
	tabs: ['Navigation', 'Nav'],
	toaster: ['Notification', 'Snackbar'],
	tooltip: ['Inline Dialog', 'Popover'],
	tree: ['List', 'Navigation'],
};
