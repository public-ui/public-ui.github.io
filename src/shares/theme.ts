import type { SelectOption } from '@public-ui/components';

export type Theme = 'unstyled' | 'default' | 'ecl-ec' | 'ecl-eu' | 'itzbund';

export const isTheme = (value: unknown) => {
	console.log('typeof value', typeof value);
	return (
		typeof value === 'string' &&
		(value === 'unstyled' || value === 'default' || value === 'ecl-ec' || value === 'ecl-eu' || value === 'itzbund')
	);
};

export type Store = {
	darkMode: boolean;
	theme: Theme;
};

export const THEME_OPTIONS: SelectOption<Theme>[] = [
	{
		label: 'Unstyled',
		value: 'unstyled',
	},
	{
		label: 'Default',
		value: 'default',
	},
	{
		label: 'European Commission (ECL)',
		value: 'ecl-ec',
	},
	{
		label: 'European Union (ECL)',
		value: 'ecl-eu',
	},
	{
		label: 'Informationstechnikzentrum Bund',
		value: 'itzbund',
	},
];
