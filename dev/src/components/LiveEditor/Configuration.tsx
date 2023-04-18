import React from 'react';
import { Attribute, TagName } from './types';
import allElements from '@public-ui/components/custom-elements.json';
import { KolHeading } from '@public-ui/react';
import { AttributeInput } from './AttributeInput';

type Props = {
	tag: TagName;
	update: (key: string, value: string | number | boolean) => void;
};
export function Configuration(props: Props) {
	const { tag, update } = props;
	const element = Object.values(allElements.tags).find((e) => {
		if (e.name === `kol-${tag}`) return true;
		else return false;
	});

	return (
		<div>
			{element ? (
				<>
					<h2>Konfiguration von {element.name}</h2>
					<p>{element.description}</p>
					<div className="grid grid-cols-2 gap-4 my-2">
						{element.attributes.map((attribute: Attribute) => (
							<AttributeInput key={attribute.name} attribute={attribute} update={update}></AttributeInput>
						))}
					</div>
				</>
			) : (
				<KolHeading _level={2} _headline={`Der Übergebene Tag '${tag}' ist inkorrekt.`}></KolHeading>
			)}
		</div>
	);
}
