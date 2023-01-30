import { applyPolyfills, defineCustomElements } from '@public-ui/components/dist/loader';
import { register } from '@a11y-ui/core';
import { BMF, DESY, MAPZ, ZOLL } from '@public-ui/themes';
import { TH } from '@public-oss/kolibri-themes';
import React, { FunctionComponent, PropsWithChildren, useEffect, useState } from 'react';
import { Theme } from '../shares/theme';
import { ZOLL as ZOLL_NEU } from '../themes/zoll';

export const Root: FunctionComponent<PropsWithChildren> = (props) => {
	const [theme] = useState<Theme>('bmf');

	useEffect(() => {
		Promise.all([
			applyPolyfills(),
			register([BMF, DESY, MAPZ, TH, ZOLL, ZOLL_NEU], [defineCustomElements], {
				theme: {
					detect: 'auto',
				},
			}),
		]).catch(console.warn);
	}, []);

	return (
		<div id="doc-app" className={theme} data-theme={theme}>
			{props.children}
		</div>
	);
};

export default Root;
