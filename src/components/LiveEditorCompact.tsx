import allElements from '@public-ui/components/custom-elements.json';
import { KolBadge, KolHeading, KolTabs } from '@public-ui/react';
import React, { useEffect, useMemo, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

import { AttributeInput } from './LiveEditorCompact/AttributeInput';
import { CodeOutput } from './LiveEditorCompact/CodeOutput';
import { ComponentDisplay } from './LiveEditorCompact/ComponentDisplay';
import { SlotInput } from './LiveEditorCompact/attributeInputs/SlotInput';
import { AttributeBlackList } from './LiveEditorCompact/lists';
import type { Attribute, ImplementedTagName, Slot } from './LiveEditorCompact/types';
import demoValues from '@site/src/components/LiveEditorCompact/demoValues';

type Props = {
	component?: string;
	showComponentSwitch?: boolean;
};
export type AttributeDescription = {
	description: string;
	name: string;
	required: boolean;
	type: string;
	defaultValue?: string;
};
export type AttributesAndDefaultValues = {
	defaultValues: string[];
	[attributeName: string]: string[] | string | boolean | number;
};
export type TagNameToAttributes = {
	[tagName: string]: AttributesAndDefaultValues;
};
export type Tag = {
	name: string;
	description: string;
	attributes: AttributeDescription[];
	slots: {
		name: string;
	}[];
};

function fillDefaultValues(): TagNameToAttributes {
	const result: TagNameToAttributes = {};

	Object.values(allElements.tags as Tag[]).forEach((tag: Tag) => {
		const tagName = tag.name.replace('kol-', '') as ImplementedTagName;

		result[tagName] = { defaultValues: [] };

		tag.attributes.forEach((attribute: AttributeDescription) => {
			// fill with default values defined by component
			if (typeof attribute.defaultValue !== 'undefined') {
				result[tagName][attribute.name] = attribute.defaultValue.replace(/'/g, '');
				result[tagName].defaultValues.push(attribute.name);
			}

			// apply certain provided demo values
			if (typeof demoValues[tagName]?.[attribute.name] !== 'undefined') {
				result[tagName][attribute.name] = demoValues[tagName]![attribute.name];
			}
		});

		tag.slots.forEach((slot) => {
			const slotPropertyName = `slot-${slot.name || 'default'}`;
			const slotValue = demoValues[tagName]?.[slotPropertyName];
			if (slotValue) {
				result[tagName][slotPropertyName] = slotValue;
			}
		});
	});

	return result;
}

export function LiveEditorCompact(props: Props) {
	const [allConfig, setAllConfig] = useState<TagNameToAttributes>(fillDefaultValues());
	const [tag, setTag] = useState('badge' as ImplementedTagName);
	useEffect(() => {
		if (props.component) setTag(props.component.replace('kol-', '') as ImplementedTagName);
	}, [props.component]);

	useEffect(() => {
		const hasLabel = !!allElements.tags
			.find((t) => t.name === `kol-${tag}`)
			?.attributes.find((a) => a.name === '_label');
		if (hasLabel && !allConfig[tag]?._label) updateConfig('_label', 'Label-Text');
		const hasHeading = !!allElements.tags
			.find((t) => t.name === `kol-${tag}`)
			?.attributes.find((a) => a.name === '_heading');
		if (hasHeading && !allConfig[tag]?._heading) updateConfig('_heading', 'Heading-Text');
	}, [tag]);

	const config = useMemo(() => {
		return allConfig[tag] || {};
	}, [allConfig, tag]);

	function updateConfig(key: string, value: string | number | boolean) {
		setAllConfig((old: TagNameToAttributes) => {
			const newConfigPart = {
				...old[tag],
				[key]: value,
				defaultValues: old[tag].defaultValues.filter((k) => k !== key),
			};
			return { ...old, [tag]: newConfigPart };
		});
	}

	const element = Object.values(allElements.tags).find((e) => {
		if (e.name === `kol-${tag}`) return true;
		else return false;
	});

	return (
		<BrowserOnly>
			{() => (
				<>
					<KolBadge class="mb-2" _label="Beta" _color="#b00"></KolBadge>
					<div className="grid lg:grid-cols-3 gap-2">
						<KolTabs
							className="col-span-2"
							_label="Wechselnavigation zwischen Viewer und Code"
							_tabs={[
								{
									_label: 'Viewer',
								},
								{
									_label: 'Code',
								},
							]}
						>
							<div className="p-2">
								<ComponentDisplay tag={tag} params={config} />
							</div>
							<div className="lg:col-span-2">
								<CodeOutput params={config} tag={tag} />
							</div>
						</KolTabs>
						<div className="grid gap-4 p-2 border-0 border-l border-solid">
							<KolHeading _level={3} _label="Konfigurator" />
							<div>
								<KolHeading _level={4} _label="Properties" />
								<div className="max-h-96 p-2 overflow-auto mb-4">
									{element &&
										element.attributes.map((attribute: Attribute) => (
											<>
												{!AttributeBlackList.includes(attribute.name) &&
													!attribute.description.startsWith('Deprecated:') && (
														<AttributeInput
															key={attribute.name}
															attribute={attribute}
															update={updateConfig}
															value={config[attribute.name]}
														></AttributeInput>
													)}
											</>
										))}
									{element && element.attributes.length === 0 && (
										<span className="text-gray-500">Keine Properties vorhanden</span>
									)}
								</div>
								<KolHeading _level={4} _label="Slots" />
								<div className="max-h-56 p-2 overflow-auto">
									{element &&
										element.slots.map((slot: Slot) => (
											<SlotInput
												key={slot.name}
												description={slot.description}
												name={slot.name || 'default'}
												update={updateConfig}
												value={config['slot-' + (slot.name || 'default')] as string}
											/>
										))}
									{element && element.slots.length === 0 && (
										<span className="text-gray-500">Keine Slots vorhanden</span>
									)}
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</BrowserOnly>
	);
}
