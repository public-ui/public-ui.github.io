import { KolInputCheckbox } from '@public-ui/react-v19';
import React from 'react';

const VariantProperty = (props: {
	label: string;
	defaultValue: string;
	_value?: string;
	_on?: {
		onInput?: (event: Event, value: unknown) => void;
	};
}) => {
	const variantOptions = ['normal', 'primary', 'secondary', 'tertiary', 'danger', 'ghost'] as const;

	return (
		<fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
			<legend>{props.label}</legend>
			<div className="grid grid-cols-2 gap-1">
				{variantOptions.map((variant) => (
					<KolInputCheckbox
						key={variant}
						_label={variant.charAt(0).toUpperCase() + variant.slice(1)}
						_variant="button"
						_checked={(props._value ?? props.defaultValue) === variant}
						_on={{
							onInput: (event: Event, value: unknown) => {
								if (value) {
									props._on?.onInput?.(event, variant);
								}
							},
						}}
					/>
				))}
			</div>
		</fieldset>
	);
};

export default VariantProperty;
