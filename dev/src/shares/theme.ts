export type Theme = 'bamf' | 'bmf' | 'bpa' | 'by' | 'bzst' | 'default' | 'desy' | 'hh' | 'itzbund' | 'mapz' | 'th' | 'zoll';

export const isTheme = (value: unknown) =>
	typeof value === 'string' &&
	(value === 'bamf' ||
		value === 'bmf' ||
		value === 'bpa' ||
		value === 'by' ||
		value === 'bzst' ||
		value === 'default' ||
		value === 'desy' ||
		value === 'hh' ||
		value === 'itzbund' ||
		value === 'mapz' ||
		value === 'th' ||
		value === 'zoll');

export type Store = {
	darkMode: boolean;
	theme: Theme;
};
