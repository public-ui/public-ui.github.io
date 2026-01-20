import { KolTextarea } from '@public-ui/react-v19';
import React from 'react';

const MultiLineTextProperty = (props: {
	label: string;
	_value?: string;
	_on?: {
		onInput?: (event: Event, value: unknown) => void;
	};
}) => {
	return (
		<KolTextarea
			_adjustHeight
			_label={props.label}
			_on={{
				onInput: (event: Event, value: unknown) => {
					props._on?.onInput?.(event, value);
				},
			}}
			_value={props._value}
		/>
	);
};

export default MultiLineTextProperty;
