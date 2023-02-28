export type Theme = 'bamf' | 'bmf' | 'bpa' | 'by' | 'bzst' | 'desy-v2' | 'hh' | 'itzbund' | 'mapz' | 'th' | 'zoll-v2';

export const isTheme = (value: unknown) =>
	typeof value === 'string' &&
	(value === 'bamf' ||
		value === 'bmf' ||
		value === 'bpa' ||
		value === 'by' ||
		value === 'bzst' ||
		value === 'desy-v2' ||
		value === 'hh' ||
		value === 'itzbund' ||
		value === 'mapz' ||
		value === 'th' ||
		value === 'zoll-v2');

export type Store = {
	darkMode: boolean;
	theme: Theme;
};
