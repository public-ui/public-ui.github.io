/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { KolBadge } from '@public-ui/react';
import { Params, TagNames } from './types';

type Props = {
	tag: TagNames;
	params?: Params;
};

export function ComponentDisplay(props: Props) {
	const tagList = {
		badge: KolBadge,
	};

	const Tag = tagList[props.tag];
	return (
		<>
			<Tag {...props.params} />
		</>
	);
}
