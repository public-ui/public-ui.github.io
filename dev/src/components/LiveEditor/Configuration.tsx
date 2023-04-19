import React, { useEffect } from 'react';
import { Attribute, TagName } from './types';
import allElements from '@public-ui/components/custom-elements.json';
import { KolHeading } from '@public-ui/react';
import { AttributeInput } from './AttributeInput';

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

	useEffect(() => console.log('Configuration: config', config), [config]);

	return (
		<div>
			{element ? (
				<>
					<h2>Konfiguration von {element.name}</h2>
					<p>{element.description}</p>
					<div className="grid grid-cols-2 gap-2 my-2">
						{element.attributes.map((attribute: Attribute) => (
							<div className="bg-gray-100 rounded-lg p-2 border border-gray-300 border-solid" key={attribute.name}>
								<AttributeInput attribute={attribute} update={update} value={config[attribute.name]}></AttributeInput>
							</div>
						))}
					</div>
				</>
			) : (
				<KolHeading _level={2} _headline={`Der Übergebene Tag '${tag}' ist inkorrekt.`}></KolHeading>
			)}
		</div>
	);
}
