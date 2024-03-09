import React from 'react';
import type { Attribute, Slot, TagName } from '../LiveEditorCompact/types';
import allElements from '@public-ui/components/custom-elements.json';
import { KolHeading } from '@public-ui/react';
import { AttributeInput } from './AttributeInput';
import { AttributeBlackList } from './lists';
import { SlotInput } from './attributeInputs/SlotInput';

type Props = {
	config: Record<string, string | number | boolean>;
	showDescription: boolean;
	tag: TagName;
	update: (key: string, value: string | number | boolean) => void;
};
export function Configuration(props: Props) {
	const { config, showDescription, tag, update } = props;
	const element = Object.values(allElements.tags).find((e) => {
		if (e.name === `kol-${tag}`) return true;
		else return false;
	});

	return (
		<>
			{element ? (
				<>
					{showDescription ? (
						<details className="flex">
							<summary className="cursor-pointer">
								<h2 className="inline">Konfiguration von {element.name}</h2>
							</summary>
							<p>{element.description}</p>
						</details>
					) : (
						''
					)}
					{element.attributes.map((attribute: Attribute) => (
						<>
							{!AttributeBlackList.includes(attribute.name) && (
								<AttributeInput
									key={attribute.name}
									attribute={attribute}
									update={update}
									value={config[attribute.name]}
								></AttributeInput>
							)}
						</>
					))}
					{element.slots.map((slot: Slot) => (
						<SlotInput
							key={slot.name}
							description={slot.description}
							name={slot.name}
							update={update}
							value={config['slot-' + slot.name] as string}
						/>
					))}
				</>
			) : (
				<KolHeading _level={2} _label={`Der Übergebene Tag '${tag}' ist inkorrekt.`} />
			)}
		</>
	);
}
