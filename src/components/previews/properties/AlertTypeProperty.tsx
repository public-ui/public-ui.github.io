import { KolInputCheckbox } from '@public-ui/react-v19';
import React from 'react';

const AlertTypeProperty = (props: {
	label: string;
	defaultValue: string;
	_value?: string;
	_on?: {
		onInput?: (event: Event, value: unknown) => void;
	};
}) => {
	const typeOptions = ['default', 'success', 'info', 'warning', 'error'] as const;

	return (
		<fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
			<legend>{props.label}</legend>
			<div className="grid grid-cols-2 gap-1">
				{typeOptions.map((type) => (
					<KolInputCheckbox
						key={type}
						_label={type.charAt(0).toUpperCase() + type.slice(1)}
						_variant="button"
						_checked={(props._value ?? props.defaultValue) === type}
						_on={{
							onInput: (event: Event, value: unknown) => {
								if (value) {
									props._on?.onInput?.(event, type);
								}
							},
						}}
					/>
				))}
			</div>
		</fieldset>
	);
};

export default AlertTypeProperty;
