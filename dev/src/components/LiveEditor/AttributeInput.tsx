import React, { useEffect, useMemo } from 'react';
import { Attribute } from './types';
import { KolInputCheckbox, KolInputColor, KolInputNumber, KolInputText } from '@public-ui/react';

type Props = {
	attribute: Attribute;
	update: (key: string, value: string | number | boolean) => void;
};
export function AttributeInput(props: Props) {
	const { attribute, update } = props;

	const calculatedType = useMemo(() => {
		let calculatedTypes = attribute.type.split(' | ');
		calculatedTypes = calculatedTypes.filter((t) => t !== 'undefined');
		if (calculatedTypes.length === 1) return calculatedTypes[0];
		else {
			if (calculatedTypes.includes('string')) return 'string';
			else if (calculatedTypes.includes('number')) return 'number';
			else if (calculatedTypes.includes('boolean')) return 'boolean';
			else {
				console.log('no type found', calculatedTypes);
				return '';
			}
		}
	}, [attribute]);

	const input = useMemo(() => {
		if (attribute.name === '_color') {
			return (
				<KolInputColor _on={{ onChange: (e: Event, v: unknown) => update(attribute.name, v as string) }}>
					{attribute.name}: {attribute.description}
				</KolInputColor>
			);
		}
		switch (calculatedType) {
			case 'string':
				return (
					<KolInputText _on={{ onChange: (e: Event, v: unknown) => update(attribute.name, v as string) }}>
						{attribute.name}: {attribute.description}
					</KolInputText>
				);
			case 'number':
				return (
					<KolInputNumber _on={{ onChange: (e: Event, v: unknown) => update(attribute.name, v as number) }}>
						{attribute.name}: {attribute.description}
					</KolInputNumber>
				);
			case 'boolean':
				return (
					<KolInputCheckbox _on={{ onChange: (e: Event, v: unknown) => update(attribute.name, v as boolean) }}>
						{attribute.name}: {attribute.description}
					</KolInputCheckbox>
				);
			default:
				return <p>Keine Eingabe</p>;
		}
	}, [attribute]);

	return <div key={attribute.name}>{input}</div>;
}
