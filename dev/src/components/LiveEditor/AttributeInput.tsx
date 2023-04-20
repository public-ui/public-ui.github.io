import React, { useMemo } from 'react';
import { Attribute } from './types';
import { KolAbbr, KolInputCheckbox, KolInputNumber, KolInputRadio, KolInputText } from '@public-ui/react';
import { AlignmentOptions } from './lists';
import { Icon } from './attributeInputs/Icon';
import { Color } from './attributeInputs/Color';

type Props = {
	attribute: Attribute;
	update: (key: string, value: string | number | boolean) => void;
	value?: string | number | boolean | unknown[] | Record<string, unknown>;
};
export function AttributeInput(props: Props) {
	const { attribute, update, value } = props;

	const calculatedType = useMemo(() => {
		let calculatedTypes = attribute.type.split(' | ').map((t) => t.replace(/\\"/g, ''));
		calculatedTypes = calculatedTypes.filter((t) => t !== 'KoliBriAllIcon ignorieren');
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
		const label = <KolAbbr _title={attribute.description}>{attribute.name}</KolAbbr>;
		switch (attribute.name) {
			case '_color':
				return <Color name={attribute.name} label={label} update={update} value={value as string}></Color>;
			case '_icon':
				return <Icon update={update} attribute={attribute} value={value as string}></Icon>;
			default:
				switch (calculatedType) {
					case 'string':
						return (
							<KolInputText _on={{ onChange: (e: Event, v: unknown) => update(attribute.name, v as string) }} _value={(value as string) || ''}>
								{label}
							</KolInputText>
						);
					case 'number':
						return (
							<KolInputNumber _on={{ onChange: (e: Event, v: unknown) => update(attribute.name, v as number) }} _value={value as number}>
								{label}
							</KolInputNumber>
						);
					case 'boolean':
						return (
							<KolInputCheckbox
								_checked={value as boolean}
								_on={{ onChange: (e: Event, v: unknown) => update(attribute.name, v as boolean) }}
								_variant="switch"
							>
								{label}
							</KolInputCheckbox>
						);
					case 'Alignment':
						return (
							<KolInputRadio
								_on={{ onChange: (e: Event, v: unknown) => update(attribute.name, v as string) }}
								_list={AlignmentOptions}
								_value={value as string | number}
							></KolInputRadio>
						);
					default:
						return <p>Keine Eingabe</p>;
				}
		}
	}, [attribute, value]);

	return <div key={attribute.name}>{input}</div>;
}
