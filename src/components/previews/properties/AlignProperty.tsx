import { KolInputCheckbox } from '@public-ui/react-v19';
import React from 'react';

const AlignProperty = (props: {
	label: string;
	defaultValue: string;
	_value?: string;
	_on?: {
		onInput?: (event: Event, value: unknown) => void;
	};
}) => {
	const alignOptions = ['top', 'right', 'bottom', 'left'] as const;

	return (
		<fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
			<legend>{props.label}</legend>
			<div className="grid grid-cols-2 gap-1">
				{alignOptions.map((align) => (
					<KolInputCheckbox
						key={align}
						_label={align.charAt(0).toUpperCase() + align.slice(1)}
						_variant="button"
						_checked={(props._value ?? props.defaultValue) === align}
						_on={{
							onInput: (event: Event, value: unknown) => {
								if (value) {
									props._on?.onInput?.(event, align);
								}
							},
						}}
					/>
				))}
			</div>
		</fieldset>
	);
};

export default AlignProperty;
