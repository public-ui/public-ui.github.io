import { KolInputCheckbox } from '@public-ui/react-v19';
import React from 'react';

const orientationOptions = ['vertical', 'horizontal'] as const;
type Orientation = (typeof orientationOptions)[number];

const OrientationProperty = (props: {
	label: string;
	defaultValue?: Orientation;
	_value?: Orientation;
	_on?: {
		onInput?: (event: Event, value: unknown) => void;
	};
}) => {
	return (
		<fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
			<legend>{props.label}</legend>
			<div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
				{orientationOptions.map((orientation) => (
					<KolInputCheckbox
						key={orientation}
						_label={orientation.charAt(0).toUpperCase() + orientation.slice(1)}
						_variant="button"
						_checked={(props._value ?? props.defaultValue) === orientation}
						_on={{
							onInput: (event: Event, value: unknown) => {
								if (value) {
									props._on?.onInput?.(event, orientation);
								}
							},
						}}
					/>
				))}
			</div>
		</fieldset>
	);
};

export default OrientationProperty;
