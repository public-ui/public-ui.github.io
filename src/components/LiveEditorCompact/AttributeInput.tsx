/* eslint-disable react/no-unescaped-entities */
import { KolAbbr, KolInputCheckbox, KolInputNumber, KolInputText } from '@public-ui/react-v19';
import React, { useMemo } from 'react';
import type { Attribute } from '../LiveEditorCompact/types';
import { Color } from './attributeInputs/Color';
import { Icon } from './attributeInputs/Icon';
import { UnionSelect } from './attributeInputs/UnionSelect';

type Props = {
	attribute: Attribute;
	update: (key: string, value: string | number | boolean) => void;
	value?: string | number | boolean | unknown[] | Record<string, unknown>;
};
export function AttributeInput(props: Props) {
	const { attribute, update, value } = props;

	const calculatedType = useMemo(() => {
		let calculatedTypes = attribute.type.replace(/\\?"/g, '').split(' | ');
		calculatedTypes = calculatedTypes.filter((t) => t !== 'KoliBriAllIcon ignorieren');
		if (calculatedTypes.length === 1) return calculatedTypes[0];
		else {
			if (calculatedTypes.includes('string')) return 'string';
			else if (calculatedTypes.includes('number')) return 'number';
			else if (calculatedTypes.includes('boolean')) return 'boolean';
			else return '';
		}
	}, [attribute]);

	const input = useMemo(() => {
		const calculatedTypes = attribute.type.split(' | ').map((t) => t.replace(/\\?"/g, ''));
		const label = <KolAbbr _label={attribute.description}>{attribute.name}</KolAbbr>;
		switch (attribute.name) {
			case '_color':
				return <Color name={attribute.name} label={label} update={update} value={value as string}></Color>;
			case '_icons':
				return <Icon attribute={attribute} label={label} update={update} value={value as string}></Icon>;
			default:
				switch (calculatedType) {
					case 'string':
						return (
							<KolInputText
								className="my-2"
								_label=""
								_on={{ onInput: (_event, value) => update(attribute.name, value as string) }}
								_value={(value as string) || ''}
							>
								<span slot="expert">{label}</span>
							</KolInputText>
						);
					case 'number':
						return (
							<KolInputNumber
								className="my-2"
								_label=""
								_on={{ onInput: (_event, value) => update(attribute.name, value as number) }}
								_value={value as number}
							>
								<span slot="expert">{label}</span>
							</KolInputNumber>
						);
					case 'boolean':
						return (
							<KolInputCheckbox
								className="my-2"
								_checked={value === true}
								_label=""
								_on={{ onInput: (_event, value) => update(attribute.name, value as boolean) }}
								_variant="switch"
								_value={true}
							>
								<span slot="expert">{label}</span>
							</KolInputCheckbox>
						);
					default:
						if (calculatedTypes.length > 1) {
							return (
								<UnionSelect
									label={label}
									name={attribute.name}
									types={calculatedTypes}
									update={update}
									value={value as string}
								></UnionSelect>
							);
						} else {
							return (
								<p>
									Attribut: '{attribute.name}'<br />
									Typ: '{attribute.type}'
								</p>
							);
						}
				}
		}
	}, [attribute, value]);

	return <>{input}</>;
}
