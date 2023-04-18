import React, { useEffect, useState } from 'react';
import { ComponentDisplay } from './LiveEditor/ComponentDisplay';
import { Params, TagNames } from './LiveEditor/types';
import { Configuration } from './LiveEditor/Configuration';

type Props = {
	component: TagNames;
};

export function LiveEditor(props: Props) {
	const [config, setConfig] = useState({} as Params);
	useEffect(() => {
		console.log(config);
	}, [config]);

	function updateConfig(key: string, value: string) {
		setConfig({ ...config, [key]: value });
	}

	return (
		<div>
			Hallo Welt, diese Komponente soll gerendert werden: kol-{props.component}
			<ComponentDisplay tag={props.component} params={config} />
			<Configuration config={config} update={updateConfig} tag={props.component} />
		</div>
	);
}
