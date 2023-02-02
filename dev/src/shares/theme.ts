export type Theme = 'bamf' | 'bmf' | 'bpa' | 'bzst' | 'default' | 'desy' | 'itzbund' | 'mapz' | 'th' | 'zoll';

export const isTheme = (value: unknown) =>
	typeof value === 'string' &&
	(value === 'bamf' ||
		value === 'bmf' ||
		value === 'bpa' ||
		value === 'bzst' ||
		value === 'default' ||
		value === 'desy' ||
		value === 'itzbund' ||
		value === 'mapz' ||
		value === 'th' ||
		value === 'zoll');

export type Store = {
	darkMode: boolean;
	theme: Theme;
};
