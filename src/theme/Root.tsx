import { register } from '@public-ui/components';
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
		}).catch(console.warn);
	}, []);

	return <div id="doc-app">{props.children}</div>;
};

export default Root;
