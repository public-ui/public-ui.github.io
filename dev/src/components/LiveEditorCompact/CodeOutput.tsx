import React, { useMemo } from 'React';
import { TagName } from '../LiveEditorCompact/types';
import Editor from '@monaco-editor/react';
import { format } from 'prettier';
import parser from 'prettier/parser-babel';
import { Config } from '../LiveEditorCompact';

type Props = {
	tag: TagName;
	params: Config;
};

export function CodeOutput(props: Props) {
	const { tag, params } = props;
	const paramsCleaned = Object.entries(params).filter((tuple) => tuple[0] !== 'defaultValues');
	let paramList = '';
	const slots = useMemo(() => {
		let result = '';
		paramsCleaned
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

	const filteredParams = paramsCleaned
		.filter((tuple) => !tuple[0].startsWith('slot-'))
		.filter((tuple) => !(params.defaultValues as string[]).includes(tuple[0]));
	for (const [key, value] of filteredParams) {
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
				case 'object':
					paramString = ` ${key}="${JSON.stringify(value)}"`;
					break;
				default:
					paramString = `Never give up hope, one day everything will be fixed.`;
			}

			paramList += paramString;
		}
	}

	const code = `<kol-${tag}${paramList}>${slots}</kol-${tag}>`;
	let formatted: string;
	try {
		formatted = format(code, {
			plugins: [parser],
			printWidth: 80,
		}).replace(/;\n$/, '');
	} catch (e) {
		formatted = `<!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. -->\n${code}`;
	}

	return (
		<div className="h-48 rounded-md overflow-hidden">
			<Editor
				defaultLanguage="html"
				height="100%"
				options={{
					automaticLayout: true,
					fontSize: 16,
					lineNumbers: 'off',
					readOnly: true,
				}}
				value={formatted}
			/>
		</div>
	);
}
