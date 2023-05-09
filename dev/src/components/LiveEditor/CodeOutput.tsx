/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react';
import { TagName } from './types';
import Editor from '@monaco-editor/react';
import { format } from 'prettier';
import html from 'prettier/parser-html';

type Props = {
	tag: TagName;
	params: Record<string, string | number | boolean>;
};

export function CodeOutput(props: Props) {
	const { tag, params } = props;
	let paramList = '';
	const slots = useMemo(() => {
		let result = '';
		Object.entries(params)
			.filter((tuple) => tuple[0].startsWith('slot-'))
			.forEach((tuple) => {
				const content = tuple[1] as string;
				const name = tuple[0].split('-')[1];
				if (content) {
					if (content.match(/^<.*?>/)?.length) {
						const index = content.indexOf('>');
						result += content.substring(0, index) + ` slot="${name}"` + content.substring(index);
					} else result += `<div slot="${name}">${content}</div>`;
				}
			});
		return result;
	}, [params]);

	for (const [key, value] of Object.entries(params).filter((tuple) => !tuple[0].startsWith('slot-'))) {
		if (value) {
			let paramString = '';
			switch (typeof value) {
				case 'string':
					paramString = ` ${key}="${value.replace(/"/g, "'")}"`;
					break;
				case 'number':
					paramString = ` ${key}="${value.toString()}"`;
					break;
				case 'boolean':
					paramString = value ? ` ${key}` : '';
					break;
				default:
					paramString = `Never give up hope, one day everything will be fixed.`;
			}
			paramList += paramString;
		}
	}

	const formatted = format(`<kol-${tag}${paramList}>${slots}</kol-${tag}>`, { parser: 'html', plugins: [html], printWidth: 80 });

	return (
		<div className="h-48 rounded-md overflow-hidden">
			<Editor
				language="html"
				height="500px"
				options={{
					automaticLayout: true,
					fontSize: 16,
					lineNumbers: 'on',
					readOnly: true,
				}}
				theme="vs-dark"
				value={formatted}
			></Editor>
		</div>
	);
}
