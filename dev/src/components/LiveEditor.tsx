/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useMemo, useState } from 'react';
import allElements from '@public-ui/components/custom-elements.json';
import { KolBadge, KolSelect } from '@public-ui/react';

import { TagName } from './LiveEditor/types';
import { CodeOutput } from './LiveEditor/CodeOutput';
import { ComponentDisplay } from './LiveEditor/ComponentDisplay';
import { Configuration } from './LiveEditor/Configuration';
import { ElementBlackList } from './LiveEditor/lists';
import BrowserOnly from '@docusaurus/BrowserOnly';

type Props = {
	component?: string;
	isOnComponentPage?: boolean;
};

type AllConfig = Record<string, Record<string, string | number | boolean>>;

export function LiveEditor(props: Props) {
	const [allConfig, setAllConfig] = useState<AllConfig>({});
	const [tag, setTag] = useState('badge' as TagName);
	useEffect(() => {
		if (props.component) setTag(props.component.replace('kol-', '') as TagName);
	}, [props.component]);

	useEffect(() => {
		const hasLabel = !!allElements.tags.find((t) => t.name === `kol-${tag}`)?.attributes.find((a) => a.name === '_label');
		if (hasLabel && !allConfig[tag]?._label) updateConfig('_label', 'Beispieltext in _label');
		const hasHeading = !!allElements.tags.find((t) => t.name === `kol-${tag}`)?.attributes.find((a) => a.name === '_heading');
		if (hasHeading && !allConfig[tag]?._heading) updateConfig('_heading', 'Beispieltext in _heading');
	}, [tag]);

	const config = useMemo(() => {
		return allConfig[tag] || {};
	}, [allConfig, tag]);

	function updateConfig(key: string, value: string | number | boolean) {
		setAllConfig((old: AllConfig) => {
			const newConfigPart = {
				...old[tag],
				[key]: value,
			};
			return { ...old, [tag]: newConfigPart };
		});
	}
	function updateTag(e: Event, value: unknown) {
		let tag: TagName = 'badge';
		if (Array.isArray(value)) tag = value[0] as TagName;
		else tag = value as TagName;
		setTag(tag);
	}

	const tagList = allElements.tags
		.filter((t) => !ElementBlackList.includes(t.name))
		.map((el: Record<string, unknown>) => {
			return { value: (el.name as string).replace('kol-', ''), label: el.name as string };
		});

	return (
		<BrowserOnly>
			<div className="grid lg:grid-cols-2 gap-4 py-4">
				<div className={props.isOnComponentPage ? '' : 'lg:row-span-2'}>
					<KolBadge _label="Beta" _color="#b00"></KolBadge>
					<div className="py-2 px-4 border-solid border border-gray-300 rounded-md min-h-[5rem] grid place-content-center">
						<ComponentDisplay tag={tag} params={config} />
					</div>
				</div>
				{props.isOnComponentPage ? '' : <KolSelect _list={tagList} _value={[tag]} _on={{ onChange: updateTag }}></KolSelect>}
				{/* @ts-ignore */}
				<Configuration config={config} showDescription={!props.isOnComponentPage} tag={tag} update={updateConfig} />
				<div className="lg:col-span-2">
					<CodeOutput params={config} tag={tag} />
				</div>
			</div>
		</BrowserOnly>
	);
}
