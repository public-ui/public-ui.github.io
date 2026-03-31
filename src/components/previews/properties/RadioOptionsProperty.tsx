import { KolButton, KolInputText } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import React, { useState } from 'react';
import type { RadioOption } from '@public-ui/components';

const RadioOptionsProperty = (props: {
	label: string;
	_value?: RadioOption<string>[];
	_on?: {
		onInput?: (event: Event, value: unknown) => void;
	};
}) => {
	const [options, setOptions] = useState<RadioOption<string>[]>(() => props._value ?? []);

	const emit = (newOptions: RadioOption<string>[]) => {
		setOptions(newOptions);
		props._on?.onInput?.(new Event('input'), newOptions);
	};

	const handleAdd = () => {
		emit([...options, { label: '', value: '' }]);
	};

	const handleRemove = (index: number) => {
		emit(options.filter((_, i) => i !== index));
	};

	const handleChange = (index: number, field: keyof RadioOption<string>, value: string) => {
		const updated = [...options];
		updated[index] = { ...updated[index], [field]: value };
		emit(updated);
	};

	return (
		<fieldset className="border-0 m-0 p-0">
			<legend className="text-sm font-medium mb-2">{`${props.label} (Label/Value)`}</legend>
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
						<KolInputText
							_label="Hint"
							_hideLabel
							_value={option.hint ?? ""}
							_on={{
								onInput: (_event: Event, value: unknown) => {
									handleChange(index, 'hint', value as string);
								},
							}}
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

export default RadioOptionsProperty;
