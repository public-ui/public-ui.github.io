import React from 'react';
import { Attribute, Slot, TagName } from './types';
import allElements from '@public-ui/components/custom-elements.json';
import { KolHeading } from '@public-ui/react';
import { AttributeInput } from './AttributeInput';
import { AttributeBlackList } from './lists';
import { SlotInput } from './attributeInputs/SlotInput';

type Props = {
	config: Record<string, string | number | boolean>;
	tag: TagName;
	update: (key: string, value: string | number | boolean) => void;
};
export function Configuration(props: Props) {
	const { config, tag, update } = props;
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
					<div className="grid grid-cols-2 gap-2 my-2">
						{element.attributes.map((attribute: Attribute) =>
							AttributeBlackList.includes(attribute.name) ? (
								''
							) : (
								<AttributeInput key={attribute.name} attribute={attribute} update={update} value={config[attribute.name]}></AttributeInput>
							)
						)}
						{element.slots.map((slot: Slot) => (
							<SlotInput key={slot.name} description={slot.description} name={slot.name} update={update} />
						))}
					</div>
				</>
			) : (
				<KolHeading _level={2} _headline={`Der Übergebene Tag '${tag}' ist inkorrekt.`}></KolHeading>
			)}
		</div>
	);
}
