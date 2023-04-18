import React from 'react';
import { Attribute, TagNames } from './types';
import allElements from '@public-ui/components/custom-elements.json';
import { KolInputText } from '@public-ui/react';

type Props = {
	tag: TagNames;
	update: (key: string, value: string) => void;
};
export function Configuration(props: Props) {
	const element = Object.values(allElements.tags).find((e) => {
		if (typeof e === 'object' && e.name === `kol-${props.tag}`) return true;
		else return false;
	});

	function getInput(attribute: Attribute): JSX.Element {
		const calculatedType = calculateType(attribute.type);
		if (attribute.name === '_color') return <input type="color" onChange={(e) => props.update(attribute.name, e.target.value)} />;
		switch (calculatedType) {
			case 'string':
				return (
					<KolInputText _on={{ onChange: (e: Event, value: unknown) => props.update(attribute.name, value as string) }}>
						{attribute.name}: {attribute.description}
					</KolInputText>
				);
			case 'number':
				return <input type="number" onChange={(e) => props.update(attribute.name, e.target.value)} />;
			case 'boolean':
				return <input type="checkbox" onChange={(e) => props.update(attribute.name, e.target.checked.toString())} />;
			default:
				return <p>Keine Eingabe</p>;
		}
	}

	function calculateType(type: string): string {
		let calculatedTypes = type.split(' | ');
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
	}

	return (
		<div>
			<h2>Konfiguration von {element.name}</h2>
			<p>{element.description}</p>
			<div className="grid grid-cols-2 gap-4 my-2">
				{element.attributes.map((attribute: Attribute) => (
					<div key={attribute.name}>{getInput(attribute)}</div>
				))}
			</div>
		</div>
	);
}
