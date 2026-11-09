import { KolInputText } from '@public-ui/react-v19';
import React, { useState } from 'react';

type PageSizeOptionsPropertyProps = {
	label: string;
	_value?: number[];
	_on?: {
		onInput?: (event: Event, value: unknown) => void;
	};
};

/** Kommagetrennte Eingabe ("10, 25, 50") → Liste positiver Ganzzahlen. */
const parsePageSizeOptions = (text: string): number[] =>
	text
		.split(',')
		.map((part) => Number(part.trim()))
		.filter((size) => Number.isInteger(size) && size > 0);

const PageSizeOptionsProperty = (props: PageSizeOptionsPropertyProps) => {
	// Der Text wird lokal gehalten, damit beim Tippen (z. B. "10,") nichts umformatiert wird.
	const [text, setText] = useState<string>((props._value ?? []).join(', '));

	return (
		<KolInputText
			_label={props.label}
			_value={text}
			_on={{
				onInput: (event: Event, value: unknown) => {
					const next = typeof value === 'string' ? value : '';
					setText(next);
					props._on?.onInput?.(event, parsePageSizeOptions(next));
				},
			}}
		/>
	);
};

export default PageSizeOptionsProperty;
