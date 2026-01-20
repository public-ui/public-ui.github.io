import { register } from '@public-ui/components';
import { defineCustomElements } from '@public-ui/components/loader';
import { DEFAULT } from '@public-ui/theme-default';
import type { LoaderCallback } from 'adopted-style-sheets';
import type { FunctionComponent, PropsWithChildren } from 'react';
import React, { useEffect } from 'react';

export const Root: FunctionComponent<PropsWithChildren> = (props) => {
	useEffect(() => {
		const loader = defineCustomElements as unknown as LoaderCallback;
		register(DEFAULT, loader).catch(console.warn);
	}, []);

	return <div id="doc-app">{props.children}</div>;
};

export default Root;
