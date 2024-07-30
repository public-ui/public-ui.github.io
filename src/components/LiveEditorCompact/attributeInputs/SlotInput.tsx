import { Editor } from '@monaco-editor/react';
import React from 'react';

type Props = {
	description: string;
	name: string;
	update: (key: string, value: string | number | boolean) => void;
	value: string;
};
export function SlotInput(props: Props) {
	const { description, name, update, value } = props;

	return (
		<div className="bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid">
			<b>{name || 'default'}</b>: {description}
			<br></br>
			<Editor
				defaultLanguage="html"
				height="5em"
				onChange={(value) => update(`slot-${name}`, value || '')}
				options={{
					automaticLayout: true,
					fontSize: 16,
					lineNumbers: 'off',
				}}
				value={value}
			/>
		</div>
	);
}
