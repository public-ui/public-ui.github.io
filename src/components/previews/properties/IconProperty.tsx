import { KolSingleSelect } from '@public-ui/react-v19';
import React, { useState } from 'react';

type IconValues = {
	top?: string;
	right?: string;
	bottom?: string;
	left?: string;
};

export const PREDEFINED_ICONS = [
	{ label: 'None', value: '' },
	{ label: 'House', value: 'fa-solid fa-house' },
	{ label: 'Search', value: 'fa-solid fa-search' },
	{ label: 'User', value: 'fa-solid fa-user' },
	{ label: 'Heart', value: 'fa-solid fa-heart' },
	{ label: 'Star', value: 'fa-solid fa-star' },
	{ label: 'Gear', value: 'fa-solid fa-gear' },
];

const IconsProperty = (props: {
	label: string;
	_value?: IconValues | string;
	_on?: {
		onInput?: (event: Event, value: unknown) => void;
	};
}) => {
	const isObjectValue = typeof props._value === 'object' && props._value !== null;
	const [icons, setIcons] = useState<IconValues>({
		top: isObjectValue ? (props._value as IconValues).top : '',
		right: isObjectValue ? (props._value as IconValues).right : '',
		bottom: isObjectValue ? (props._value as IconValues).bottom : '',
		left: isObjectValue ? (props._value as IconValues).left : '',
	});

	const handleIconChange = (position: 'top' | 'right' | 'bottom' | 'left', value: string) => {
		const newIcons = { ...icons, [position]: value };
		setIcons(newIcons);
		// Filter out empty values before emitting
		const filteredIcons = Object.fromEntries(Object.entries(newIcons).filter(([, v]) => v !== '' && v !== undefined));
		props._on?.onInput?.(new Event('input'), Object.keys(filteredIcons).length > 0 ? filteredIcons : undefined);
	};

	return (
		<fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
			<legend>{props.label}</legend>
			<div className="grid grid-cols-2 gap-2">
				<KolSingleSelect
					_label="Left"
					_options={PREDEFINED_ICONS}
					_value={icons.left}
					_on={{
						onInput: (_: Event, value: unknown) => {
							handleIconChange('left', value as string);
						},
					}}
				/>
				<KolSingleSelect
					_label="Right"
					_options={PREDEFINED_ICONS}
					_value={icons.right}
					_on={{
						onInput: (_: Event, value: unknown) => {
							handleIconChange('right', value as string);
						},
					}}
				/>
				<KolSingleSelect
					_label="Top"
					_options={PREDEFINED_ICONS}
					_value={icons.top}
					_on={{
						onInput: (_: Event, value: unknown) => {
							handleIconChange('top', value as string);
						},
					}}
				/>
				<KolSingleSelect
					_label="Bottom"
					_options={PREDEFINED_ICONS}
					_value={icons.bottom}
					_on={{
						onInput: (_: Event, value: unknown) => {
							handleIconChange('bottom', value as string);
						},
					}}
				/>
			</div>
		</fieldset>
	);
};

export default IconsProperty;
