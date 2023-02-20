import { applyPolyfills, defineCustomElements } from '@public-ui/components/dist/loader';
import { KoliBriDevHelper, register } from '@public-ui/components';
import { BPA, ITZBund } from '@public-ui/themes';
import { TH } from '@public-oss/kolibri-themes';
import React, { FunctionComponent, PropsWithChildren, useEffect, useState } from 'react';
import { Theme } from '../shares/theme';

export const Root: FunctionComponent<PropsWithChildren> = (props) => {
	const [theme] = useState<Theme>('bmf');

	useEffect(() => {
		Promise.all([
			applyPolyfills(),
			register([BPA, ITZBund, TH], [defineCustomElements], {
				theme: {
					detect: 'auto',
				},
			}),
		])
			.then(() => {
				KoliBriDevHelper.patchTheme('itzbund', {
					GLOBAL:
						'/* Properties */:host {--border-color: var(--color-anthrazit);--border-radius: 0.125rem;--color-anthrazit: #333;--color-jade: #f3f7fb;--color-weiss: #fff;--color-petrol: #007a89;--color-achat: #0b4d59;--color-teal: #056773;--color-fluorit: #66ddec;--color-rotton: rgba(188, 0, 0, 1);--color-rotton-20: rgba(188, 0, 0, 0.2);--color-gras: #138510;--color-warn: #f0541e;--color-blut: var(--color-rotton);--color-input-bg-default: #e8edf2;--gradient-petrol-achat: linear-gradient(67deg,var(--color-petrol),var(--color-achat));--color-citrin: #d4c912;--color-umber: #494500;--color-gelb: #fff443;--color-lichtgelb: #eeff6c;--gradient-gelb-citrin: linear-gradient(67deg,var(--color-gelb),var(--color-citrin));--font-family-sans: BundesSans Web;--font-family-serif: BundesSerif Web;--font-size: 16px;--spacing: 0.125em;} /* Preset */:host {font-size: var(--font-size);}:host * {box-sizing: border-box;}button {background-color: transparent;}*[tabindex]:focus,a:focus,button:focus,input:focus,select:focus,summary:focus,textarea:focus {border-radius: var(--border-radius);outline-color: var(--color-petrol);outline-offset: calc(1.25 * var(--spacing));outline-style: solid;outline-width: calc(1.25 * var(--spacing));transition: outline-offset 0.25s linear;}:host h1,:host h2,:host h3,:host h4,:host h5,:host h6 {margin: 0;}',
				});
			})
			.catch(console.warn);
	}, []);

	return (
		<div id="doc-app" className={theme} data-theme={theme}>
			{props.children}
		</div>
	);
};

export default Root;
