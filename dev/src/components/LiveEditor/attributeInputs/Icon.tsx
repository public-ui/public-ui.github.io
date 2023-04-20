import React, { useState } from 'react';
import { Attribute } from '../types';
import { KolButton, KolDetails } from '@public-ui/react';
import { PropAlignment } from '@public-ui/components';

type Props = {
	attribute: Attribute;
	update: (key: string, value: string | number | boolean) => void;
	value?: string;
};

export function Icon(props: Props) {
	const { attribute, update, value } = props;

	const [left, setLeft] = useState('');

	const leftAvailable = true; // setzen von attribute.type

	const iconList = ['home', 'arrow-up', 'arrow-right', 'arrow-down', 'arrow-left'];
	return (
		<div>
			{leftAvailable ? (
				<KolDetails _summary="Links">
					<div slot="content" className="flex flex-wrap">
						{iconList.map((icon) => (
							<KolButton key={icon} _icon={`codicon codicon-${icon}`} _iconOnly _label="" _on={{ onClick: (e: Event) => setLeft(icon) }}></KolButton>
						))}
					</div>
				</KolDetails>
			) : (
				''
			)}
		</div>
	);
}
