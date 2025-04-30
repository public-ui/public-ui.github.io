import { KoliBriDevHelper, register } from '@public-ui/components';
import { defineCustomElements } from '@public-ui/components/dist/loader';
import { DEFAULT } from '@public-ui/theme-default';
import type { FunctionComponent, PropsWithChildren } from 'react';
import React, { useEffect } from 'react';

export const Root: FunctionComponent<PropsWithChildren> = (props) => {
	useEffect(() => {
		register([DEFAULT], [defineCustomElements], {
			theme: {
				detect: 'fixed',
			},
		})
			.then(() => {
				KoliBriDevHelper.patchTheme(
					'default',
					{
						'KOL-BUTTON-LINK': `
							:host,
							button {
								font-size: inherit;
							}
						`,
						'KOL-ICON': `
							:host {
								color: inherit;
								font-size: inherit;
							}
						`,
						'KOL-LINK': `
							:host,
							a {
								font-size: inherit;
							}
						`,
					},
					{
						append: true,
					}
				);
			})
			.catch(console.warn);
	}, []);

	return <div id="doc-app">{props.children}</div>;
};

export default Root;
