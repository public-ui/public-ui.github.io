import { PaginationHasButton } from '@public-ui/components';
import { KolInputCheckbox } from '@public-ui/react-v19';
import React, { useState } from 'react';


const FALLBACK_VALUE: PaginationHasButton = {
	first: true,
	last: true,
	next: true,
	previous: true,
};

const PaginationHasButtonsProperty = (props: {
	label: string;
	_value?: PaginationHasButton;
	_on?: {
		onInput?: (event: Event, value: unknown) => void;
	};
}) => {
	const [enabled, setEnabled] = useState<boolean>(props._value !== undefined);
	const [value, setValue] = useState<PaginationHasButton>(props._value ?? FALLBACK_VALUE);

	const handleEnabledChange = (checked: boolean) => {
		setEnabled(checked);
		props._on?.onInput?.(new Event('input'), checked ? value : undefined);
	};

	const handleChange = (key: keyof PaginationHasButton, checked: boolean) => {
		const newValue = { ...value, [key]: checked };
		setValue(newValue);
		props._on?.onInput?.(new Event('input'), newValue);
	};

	return (
		<fieldset>
			<legend>{props.label}</legend>
			<KolInputCheckbox
				_label="Enabled"
				_variant="switch"
				_labelAlign="left"
				_checked={enabled}
				_on={{
					onInput: (_: Event, checked: unknown) => {
						handleEnabledChange(!!checked);
					},
				}}
			/>
			{enabled && (
				<div className="grid grid-cols-2 gap-2 mt-2">
					{(['first', 'last', 'next', 'previous'] as (keyof PaginationHasButton)[]).map((key) => (
						<KolInputCheckbox
							key={key}
							_label={key.charAt(0).toUpperCase() + key.slice(1)}
							_variant="switch"
							_labelAlign="left"
							_checked={value[key]}
							_on={{
								onInput: (_: Event, checked: unknown) => {
									handleChange(key, !!checked);
								},
							}}
						/>
					))}
				</div>
			)}
		</fieldset>
	);
};

export default PaginationHasButtonsProperty;
