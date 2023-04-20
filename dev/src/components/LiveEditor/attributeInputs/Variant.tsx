import React from 'react';
import { KolSelect } from '@public-ui/react';

type Props = {
	label: JSX.Element;
	name: string;
	update: (key: string, value: string | number | boolean) => void;
	value?: string;
};

const list = [
	{ label: 'none', value: '' },
	{ label: 'custom', value: 'custom' },
	{ label: 'danger', value: 'danger' },
	{ label: 'ghost', value: 'ghost' },
	{ label: 'normal', value: 'normal' },
	{ label: 'primary', value: 'primary' },
	{ label: 'secondary', value: 'secondary' },
];

export function Variant(props: Props) {
	const { label, name, update, value } = props;

	return (
		<KolSelect _list={list} _on={{ onChange: (e: Event, v: unknown) => update(name, (v as string[])[0]) }} _value={value as string}>
			{label}
		</KolSelect>
	);
}
