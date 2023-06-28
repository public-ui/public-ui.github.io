import allElements from '@public-ui/components/custom-elements.json';
import { KolBadge, KolHeading, KolTabs } from '@public-ui/react';
import React, { useEffect, useMemo, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

import { AttributeInput } from './LiveEditorCompact/AttributeInput';
import { CodeOutput } from './LiveEditorCompact/CodeOutput';
import { ComponentDisplay } from './LiveEditorCompact/ComponentDisplay';
import { SlotInput } from './LiveEditorCompact/attributeInputs/SlotInput';
import { AttributeBlackList } from './LiveEditor/lists';
import { Attribute, Slot, TagName } from './LiveEditor/types';

type Props = {
	component?: string;
	showComponentSwitch?: boolean;
};

export type Config = Record<string, string | number | boolean | string[]>;
type AllConfig = Record<string, Config>;

function fillDefaultValues(): AllConfig {
	const result: AllConfig = {};
	Object.values(allElements.tags).forEach((tag) => {
		const name = tag.name.replace('kol-', '');
		result[name] = { defaultValues: [] as string[] };
		tag.attributes.forEach((attribute: Config) => {
			if (attribute.defaultValue) {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				result[name][attribute.name as string] = (attribute.defaultValue as string).replaceAll("'", '');
				(result[name].defaultValues as string[]).push(attribute.name as string);
			}
		});
	});
	return result;
}

export function LiveEditorCompact(props: Props) {
	const [allConfig, setAllConfig] = useState<AllConfig>(fillDefaultValues());
	const [tag, setTag] = useState('badge' as TagName);
	useEffect(() => {
		if (props.component) setTag(props.component.replace('kol-', '') as TagName);
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
		setAllConfig((old: AllConfig) => {
			const newConfigPart = {
				...old[tag],
				[key]: value,
				defaultValues: (old[tag].defaultValues as string[]).filter((k) => k !== key),
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
							_ariaLabel="Wechselnavigation zwischen Viewer und Code"
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
								<div className="max-h-96 p-2 overflow-scroll mb-4">
									{element &&
										element.attributes.map((attribute: Attribute) => (
											<>
												{!AttributeBlackList.includes(attribute.name) && (
													<AttributeInput
														key={attribute.name}
														attribute={attribute}
														update={updateConfig}
														value={config[attribute.name]}
													></AttributeInput>
												)}
											</>
										))}
									{element && element.slots.length === 0 && (
										<span className="text-gray-500">Keine Properties vorhanden</span>
									)}
								</div>
								<KolHeading _level={4} _label="Slots" />
								<div className="max-h-56 p-2 overflow-scroll">
									{element &&
										element.slots.map((slot: Slot) => (
											<SlotInput
												key={slot.name}
												description={slot.description}
												name={slot.name}
												update={updateConfig}
												value={config['slot-' + slot.name] as string}
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
