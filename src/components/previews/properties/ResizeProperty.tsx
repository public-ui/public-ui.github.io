import { KolInputCheckbox } from '@public-ui/react-v19';
import React from 'react';

const ResizeProperty = (props: {
	label: string;
	_value?: 'vertical' | 'none';
	_on?: {
		onInput?: (event: Event, value: unknown) => void;
	};
}) => {
	return (
		<KolInputCheckbox
			_label={props.label}
			_variant="switch"
			_labelAlign="left"
			_value="vertical"
			_on={{
				onInput: (event: Event, value: unknown) => {
					props._on?.onInput?.(event, value ? 'vertical' : 'none');
				},
			}}
			_checked={props._value === 'vertical'}
		/>
	);
};

export default ResizeProperty;
