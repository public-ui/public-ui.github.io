import { KolSelect } from '@public-ui/react-v19';
import React, { useState } from 'react';

type IconValues = {
	checked?: string;
	indeterminate?: string;
	unchecked?: string;
};

export const PREDEFINED_ICONS = [
	{ label: 'None', value: '' },
	{ label: 'KoliBri', value: 'kolicon-kolibri' },
	{ label: 'Check', value: 'kolicon-check' },
	{ label: 'House', value: 'kolicon-house' },
	{ label: 'Wheel', value: 'kolicon-cogwheel' },
	{ label: 'Eye', value: 'kolicon-eye' },
];

const IconsCheckboxProperty = (props: {
	label: string;
	icons?: ('checked' | 'indeterminate' | 'unchecked')[];
	_value?: IconValues | string;
	_on?: {
		onInput?: (event: Event, value: unknown) => void;
	};
}) => {
	const isObjectValue = typeof props._value === 'object' && props._value !== null;
	const [icons, setIcons] = useState<IconValues>({
		checked: isObjectValue ? (props._value as IconValues).checked : '',
		indeterminate: isObjectValue ? (props._value as IconValues).indeterminate : '',
		unchecked: isObjectValue ? (props._value as IconValues).unchecked : '',
	});

	const handleIconChange = (position: 'checked' | 'indeterminate' | 'unchecked', value: string) => {
		const newIcons = { ...icons, [position]: value };
		setIcons(newIcons);
		// Filter out empty values before emitting
		const filteredIcons = Object.fromEntries(Object.entries(newIcons).filter(([, v]) => v !== '' && v !== undefined));
		props._on?.onInput?.(new Event('input'), Object.keys(filteredIcons).length > 0 ? filteredIcons : undefined);
	};

	return (
		<fieldset>
			<legend>{props.label}</legend>
			<div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
				{props.icons?.includes('indeterminate') !== false && (
					<KolSelect
						_label="indeterminate"
						_options={PREDEFINED_ICONS}
						_value={icons.indeterminate}
						_on={{
							onInput: (_: Event, value: unknown) => {
								handleIconChange('indeterminate', value as string);
							},
						}}
					/>
				)}
				{props.icons?.includes('checked') !== false && (
					<KolSelect
						_label="checked"
						_options={PREDEFINED_ICONS}
						_value={icons.checked}
						_on={{
							onInput: (_: Event, value: unknown) => {
								handleIconChange('checked', value as string);
							},
						}}
					/>
				)}
				{props.icons?.includes('unchecked') !== false && (
					<KolSelect
						_label="unchecked"
						_options={PREDEFINED_ICONS}
						_value={icons.unchecked}
						_on={{
							onInput: (_: Event, value: unknown) => {
								handleIconChange('unchecked', value as string);
							},
						}}
					/>
				)}
			</div>
		</fieldset>
	);
};

export default IconsCheckboxProperty;
