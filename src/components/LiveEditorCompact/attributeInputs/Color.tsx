import type { ReactNode } from 'react';
import React, { useEffect } from 'react';
import { KolInputColor } from '@public-ui/react';

type Props = {
	label: ReactNode;
	name: string;
	update: (key: string, value: string | number | boolean) => void;
	value?: string;
};
export function Color(props: Props) {
	const { label, name, update, value } = props;

	useEffect(() => {
		if (!value) update(name, '#000000');
	}, []);

	return (
		<KolInputColor
			_label=""
			_on={{ onInput: (_event, value) => update(name, value as string) }}
			_value={value as string}
		>
			<span slot="expert">{label}</span>
		</KolInputColor>
	);
}
