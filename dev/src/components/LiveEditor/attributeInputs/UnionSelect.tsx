import React from 'react';
import { KolSelect } from '@public-ui/react';

type Props = {
	label: JSX.Element;
	name: string;
	types: string[];
	update: (key: string, value: string | number | boolean) => void;
	value?: string;
};

export function UnionSelect(props: Props) {
	const { name, label, types, update, value } = props;

	const list = [];
	if (types.includes('undefined')) {
		list.push({ label: '-', value: undefined });
		list.push(...types.filter((t) => t !== 'undefined').map(transformType));
	} else list.push(...types.filter((t) => t !== 'undefined').map(transformType));

	function transformType(t: string) {
		return { label: t, value: t };
	}

	return (
		<KolSelect
			_list={JSON.stringify(list)}
			_on={{ onChange: (e: Event, v: unknown) => update(name, (v as string[])[0]) }}
			_value={value as string}
		>
			{label}
		</KolSelect>
	);
}
