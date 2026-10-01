import { KolInputText, KolSelect } from '@public-ui/react-v19';
import React from 'react';
import { PREDEFINED_ICONS } from './IconsProperty';

const InfoPopoverProperty = (props: {
	label: string;
	buttonLabel?: string;
	buttonIcon?: string;
	_value?: { _label: string; _content: string; _icons: string };
	_on?: {
		onInput?: (event: Event, value: unknown) => void;
	};
}) => {
	const [label, setLabel] = React.useState<string>(
		typeof props._value === 'object' && props._value?._label ? props._value._label : ''
	);

	const [content, setContent] = React.useState<string>(
		typeof props._value === 'object' && props._value?._content ? props._value._content : ''
	);

	const [icons, setIcons] = React.useState<string>(
		typeof props._value === 'object' && props._value?._icons ? props._value._icons : ''
	);

	const handleLabelChange = (_event: Event, value: unknown) => {
		const newLabel = value as string;
		setLabel(newLabel);
		const newValue = newLabel ? { _label: newLabel, _content: content, _icons: icons } : undefined;
		props._on?.onInput?.(_event, newValue);
	};

	const handleContentChange = (_event: Event, value: unknown) => {
		const newContent = value as string;
		setContent(newContent);
		const newValue = newContent ? { _label: label, _content: newContent, _icons: icons } : undefined;
		props._on?.onInput?.(_event, newValue);
	};

	const handleIconsChange = (_event: Event, value: unknown) => {
		const newIcon = value as string;
		setIcons(newIcon);
		const newValue = newIcon ? { _label: label, _content: content, _icons: newIcon } : undefined;
		props._on?.onInput?.(_event, newValue);
	};

	return (
		<fieldset>
			<legend>{props.label}</legend>
			<div className="flex flex-col gap-2">
				<KolInputText
					_label="Label"
					_value={label}
					_placeholder="Enter hidden popover label"
					_on={{ onInput: handleLabelChange }}
				/>
				<KolInputText
					_label="Content"
					_value={content}
					_placeholder="Enter content text of popover"
					_on={{ onInput: handleContentChange }}
				/>
				<KolSelect _label="Icon" _options={PREDEFINED_ICONS} _value={icons} _on={{ onInput: handleIconsChange }} />
			</div>
		</fieldset>
	);
};

export default InfoPopoverProperty;
