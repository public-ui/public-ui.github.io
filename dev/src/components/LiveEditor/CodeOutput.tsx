import React from 'react';
import { TagName } from './types';

type Props = {
	tag: TagName;
	params: Record<string, string | number | boolean>;
};

export function CodeOutput(props: Props) {
	const { tag, params } = props;
	let paramList = '';

	for (const [key, value] of Object.entries(params)) {
		if (value) {
			let paramString = '';
			switch (typeof value) {
				case 'string':
					paramString = ` ${key}="${value}"`;
					break;
				case 'number':
					paramString = ` ${key}="${value.toString()}"`;
					break;
				case 'boolean':
					paramString = value ? ` ${key}` : '';
					break;
				case 'object':
					paramString = ` ${key}="${JSON.stringify(value)}"`;
					break;
				default:
					paramString = `Never give up hope, one day everything will be fixed.`;
			}

			paramList += paramString;
		}
	}

	return <pre>{`<kol-${tag}${paramList}></kol-${tag}>`}</pre>;
}
