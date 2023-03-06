import { applyPolyfills, defineCustomElements } from '@public-ui/components/dist/loader';
import { register } from '@public-ui/components';
import { BPA, ECL_EC, ECL_EU, ITZBund } from '@public-ui/themes';
import { TH } from '@public-oss/kolibri-themes';
import React, { FunctionComponent, PropsWithChildren, useEffect, useState } from 'react';
import { Theme } from '../shares/theme';

export const Root: FunctionComponent<PropsWithChildren> = (props) => {
	const [theme] = useState<Theme>('bmf');

	useEffect(() => {
		Promise.all([
			applyPolyfills(),
			register([BPA, ECL_EC, ECL_EU, ITZBund, TH], [defineCustomElements], {
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
