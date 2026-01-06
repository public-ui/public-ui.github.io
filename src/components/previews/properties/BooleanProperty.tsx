import { KolInputCheckbox } from '@public-ui/react-v19';
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
			_variant="switch"
			_labelAlign="left"
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
