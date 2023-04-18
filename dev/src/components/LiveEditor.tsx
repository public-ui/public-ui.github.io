/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from 'react';
import { ComponentDisplay } from './LiveEditor/ComponentDisplay';
import { Params, TagName } from './LiveEditor/types';
import { Configuration } from './LiveEditor/Configuration';
import { KolSelect } from '@public-ui/react';
import allElements from '@public-ui/components/custom-elements.json';

type Props = {
	component: string;
};

export function LiveEditor(props: Props) {
	const [config, setConfig] = useState<Params>({});
	const [tag, setTag] = useState('badge' as TagName);
	useEffect(() => {
		setTag(props.component.replace('kol-', '') as TagName);
	}, [props.component]);

	function updateConfig(key: string, value: string | number | boolean) {
		setConfig((old: Params) => {
			return { ...old, [key]: value };
		});
	}
	function updateTag(e: Event, value: unknown) {
		let tag: TagName = 'badge';
		if (Array.isArray(value)) tag = (value[0] as string).replace('kol-', '') as TagName;
		else tag = value as TagName;
		setTag(tag);
	}

	const tagList = allElements.tags.map((el) => {
		return { value: el.name, label: el.name };
	});

	return (
		<>
			<div className="my-4 border-solid border-2 border-black min-h-[5rem]">
				<ComponentDisplay tag={tag} params={config} />
			</div>
			<KolSelect _list={tagList} _value={props.component} _on={{ onChange: updateTag }}></KolSelect>
			<Configuration config={config} update={updateConfig} tag={tag} />
		</>
	);
}
