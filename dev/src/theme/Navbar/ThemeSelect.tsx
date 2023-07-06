import { InputTypeOnDefault } from '@public-ui/components/dist/types/types/input/types';
import { KolSelect } from '@public-ui/react';
import React, { FunctionComponent, useEffect, useState } from 'React';
import { getDarkMode, getTheme, setStorage, setTheme } from '../../shares/store';
import { THEME_OPTIONS, Theme } from '../../shares/theme';

type ActivateButton = {
	_disabled: boolean;
	_on?: InputTypeOnDefault;
};

export const ThemeSelect: FunctionComponent = () => {
	const [activate, setActivate] = useState<ActivateButton>({
		_disabled: true,
	});

	setStorage(localStorage);

	useEffect(() => {
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
							location.reload();
						}
					},
				},
			});
		}, 3000);
	}, []);

	return (
		<KolSelect
			className="col-span-2 sm:col-auto"
			{...activate}
			_hideLabel
			_id="theme-toggle"
			_list={THEME_OPTIONS}
			_value={[getTheme()]}
		>
			Theme auswählen
		</KolSelect>
	);
};

export default ThemeSelect;
