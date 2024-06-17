import { register } from '@public-ui/components';
import { defineCustomElements } from '@public-ui/components/dist/loader';
import { BMF, DEFAULT, ECL_EC, ECL_EU, ITZBund } from '@public-ui/themes';
import type { FunctionComponent, PropsWithChildren } from 'react';
import React, { useEffect, useState } from 'react';
import type { Theme } from '../shares/theme';

export const Root: FunctionComponent<PropsWithChildren> = (props) => {
	const [theme] = useState<Theme>('bmf');

	useEffect(() => {
		register([BMF, DEFAULT, ECL_EC, ECL_EU, ITZBund], [defineCustomElements], {
			theme: {
				detect: 'auto',
			},
		}).catch(console.warn);
	}, []);

	return (
		<div id="doc-app" className={theme} data-theme={theme}>
			{props.children}
		</div>
	);
};

export default Root;
