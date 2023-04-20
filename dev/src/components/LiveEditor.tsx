/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useMemo, useState } from 'react';
import allElements from '@public-ui/components/custom-elements.json';
import { KolSelect } from '@public-ui/react';

import { TagName } from './LiveEditor/types';
import { CodeOutput } from './LiveEditor/CodeOutput';
import { ComponentDisplay } from './LiveEditor/ComponentDisplay';
import { Configuration } from './LiveEditor/Configuration';

type Props = {
	component?: string;
};

type AllConfig = Record<string, Record<string, string | number | boolean>>;

export function LiveEditor(props: Props) {
	const [allConfig, setAllConfig] = useState<AllConfig>({});
	const [tag, setTag] = useState('badge' as TagName);
	useEffect(() => {
		if (props.component) setTag(props.component.replace('kol-', '') as TagName);
	}, [props.component]);

	const config = useMemo(() => {
		console.log('allConfig[tag]');
		console.log(allConfig[tag] || {});
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

	const tagList = allElements.tags.map((el) => {
		return { value: el.name.replace('kol-', ''), label: el.name };
	});

	return (
		<div className="grid gap-4 py-4">
			<div className="py-4 border-solid border border-gray-300 rounded-md min-h-[5rem] grid place-content-center">
				<ComponentDisplay tag={tag} params={config} />
			</div>
			<KolSelect _list={tagList} _value={[tag]} _on={{ onChange: updateTag }}></KolSelect>
			{/* @ts-ignore */}
			<Configuration config={config} update={updateConfig} tag={tag} />
			<CodeOutput params={config} tag={tag} />
		</div>
	);
}
