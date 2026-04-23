import { KolButton, KolInputCheckbox, KolInputText } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import React, { useState } from 'react';
import type { Option } from '@public-ui/components';

const SelectOptionsProperty = (props: {
	label: string;
	_value?: Option<string>[];
	_on?: {
		onInput?: (event: Event, value: unknown) => void;
	};
}) => {
	const [options, setOptions] = useState<Option<string>[]>(() => props._value ?? []);

	const emit = (newOptions: Option<string>[]) => {
		setOptions(newOptions);
		props._on?.onInput?.(new Event('input'), newOptions);
	};

	const handleAdd = () => {
		emit([...options, { label: '', value: '' }]);
	};

	const handleRemove = (index: number) => {
		emit(options.filter((_, i) => i !== index));
	};

	const handleChange = (index: number, field: keyof Option<string>, value: string | boolean) => {
		const updated = [...options];
		updated[index] = { ...updated[index], [field]: value };
		emit(updated);
	};

	return (
		<fieldset className="border-0 m-0 p-0">
			<legend className="text-sm font-medium mb-2">{`${props.label} (Label/Value/Disabled)`}</legend>
			<div className="flex flex-col gap-2">
				{options.map((option, index) => (
					<div key={index} className="flex flex-row items-end gap-2">
						<KolInputText
							_label="Label"
							_hideLabel
							_value={String(option.label)}
							_on={{
								onInput: (_event: Event, value: unknown) => {
									handleChange(index, 'label', value as string);
								},
							}}
						/>
						<KolInputText
							_label="Value"
							_hideLabel
							_value={option.value}
							_on={{
								onInput: (_event: Event, value: unknown) => {
									handleChange(index, 'value', value as string);
								},
							}}
						/>
						<KolInputCheckbox
							_label="Disabled"
							_checked={option.disabled ?? false}
							_on={{
								onChange: (_event: Event, value: unknown) => {
									handleChange(index, 'disabled', value as boolean);
								},
							}}
							_hideLabel
						/>
						<KolButton
							_label={translate({ id: 'preview.property.remove' })}
							_variant="danger"
							_icons="fa-solid fa-trash"
							_hideLabel
							_on={{ onClick: () => handleRemove(index) }}
						/>
					</div>
				))}
				<KolButton
					_label={translate({ id: 'preview.property.options.add' })}
					_variant="secondary"
					_icons="fa-solid fa-plus"
					_on={{ onClick: handleAdd }}
				/>
			</div>
		</fieldset>
	);
};

export default SelectOptionsProperty;
