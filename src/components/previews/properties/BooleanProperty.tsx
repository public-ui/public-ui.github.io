import { KolInputCheckbox } from '@public-ui/react';
import React from 'react';

const CheckProperty = (props: {
	label: string;
	_value?: boolean;
	_on?: {
		onInput?: (event: Event, value: unknown) => void;
	};
}) => {
	return (
		<KolInputCheckbox
			_label={props.label}
			_on={{
				onInput: (event: Event, value: unknown) => {
					props._on?.onInput?.(event, !!value);
				},
			}}
			_checked={props._value}
		/>
	);
};

export default CheckProperty;
