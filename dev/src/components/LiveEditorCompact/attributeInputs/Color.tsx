import React, { useEffect } from 'React';
import { KolInputColor } from '@public-ui/react';

type Props = {
	label: JSX.Element;
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
		<KolInputColor _on={{ onChange: (e: Event, v: unknown) => update(name, v as string) }} _value={value as string}>
			{label}
		</KolInputColor>
	);
}
