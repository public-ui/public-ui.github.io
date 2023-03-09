import { KolSelect } from '@public-ui/react';
import { SelectOption } from '@public-ui/components';
import { InputTypeOnDefault } from '@public-ui/components/dist/types/types/input/types';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { getDarkMode, setDarkMode, setTheme, getTheme, STORE_IDENTIFIER } from '../../shares/store';
import { Store, Theme } from '../../shares/theme';

const OPTIONS: SelectOption<Theme>[] = [
	// {
	// 	disabled: true,
	// 	label: 'Bayrische Staatskanzlei (PoC)',
	// 	value: 'by',
	// },
	{
		disabled: true,
		label: 'Bundes-Styleguide (WIP)',
		value: 'bpa',
	},
	{
		disabled: true,
		label: 'BMF-Styleguide (not public)',
		value: 'bpa',
	},
	{
		label: 'Europa Component Library (EC, WIP)',
		value: 'ecl-ec',
	},
	{
		disabled: true,
		label: 'Europa Component Library (EU, WIP)',
		value: 'ecl-eu',
	},
	{
		disabled: true,
		label: 'Zoll Design System (DESY, not public)',
		value: 'desy-v2',
	},
	// {
	// 	disabled: true,
	// 	label: 'Hansestadt Hamburg (PoC)',
	// 	value: 'hh',
	// },
	{
		label: 'ITZBund-Styleguide',
		value: 'itzbund',
	},
	// {
	// 	disabled: true,
	// 	label: 'MAPZoll-Styleguide (not public)',
	// 	value: 'mapz',
	// },
	// {
	// 	label: 'Freistaat Thüringen (PoC)',
	// 	value: 'th',
	// },
	{
		disabled: true,
		label: 'Zoll-Designsystem (not public)',
		value: 'zoll-v2',
	},
];

type ActivateButton = {
	_disabled: boolean;
	_on?: InputTypeOnDefault;
};

export const ThemeSelect: FunctionComponent = () => {
	const [activate, setActivate] = useState<ActivateButton>({
		_disabled: true,
	});

	const store = () => {
		console.log({
			darkMode: getDarkMode(),
			theme: getTheme(),
		});
		localStorage.setItem(
			STORE_IDENTIFIER,
			JSON.stringify({
				darkMode: getDarkMode(),
				theme: getTheme(),
			})
		);
	};

	useEffect(() => {
		const RESTORE = localStorage.getItem(STORE_IDENTIFIER);
		try {
			const store = JSON.parse(RESTORE) as Store;
			if (typeof store === 'object' && store !== null) {
				setDarkMode(store.darkMode);
				setTheme(store.theme);
			}
		} catch (e) {
			/* empty */
			setDarkMode(false);
			setTheme('itzbund');
			store();
		}

		const div = document.querySelector('div[data-theme]');
		if (div instanceof HTMLElement) {
			div.setAttribute('class', getTheme());
			div.dataset.theme = getTheme();
		}
		console.log({
			darkMode: getDarkMode(),
			theme: getTheme(),
		});

		const timeout = setTimeout(() => {
			clearTimeout(timeout);
			setActivate({
				_disabled: false,
				_on: {
					onChange: (_event, value) => {
						if (Array.isArray(value)) {
							setTheme(value[0] as Theme);
							store();
							location.reload();
						}
					},
				},
			});
		}, 1000);
	}, []);

	return (
		<KolSelect className="col-span-2 sm:col-auto" {...activate} _hideLabel _id="theme-toggle" _list={OPTIONS} _value={[getTheme()]}>
			Theme auswählen
		</KolSelect>
	);
};

export default ThemeSelect;
