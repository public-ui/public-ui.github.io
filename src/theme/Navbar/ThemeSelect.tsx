import type { InputTypeOnDefault } from '@public-ui/schema';
import { KolSelect } from '@public-ui/react';
import type { FunctionComponent } from 'react';
import React, { useEffect, useState } from 'react';
import { getDarkMode, getTheme, setStorage, setTheme } from '../../shares/store';
import type { Theme } from '../../shares/theme';
import { THEME_OPTIONS } from '../../shares/theme';

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
					onInput: (_event, value) => {
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
			_label="Theme auswählen"
			_options={THEME_OPTIONS}
			_value={[getTheme()]}
		/>
	);
};

export default ThemeSelect;
