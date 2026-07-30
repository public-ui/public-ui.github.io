import { KolButton, KolCard, KolDrawer, KolInputCheckbox, KolInputText } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import React, { useEffect, useState } from 'react';
import type { Option } from '@public-ui/components';
import { SelectOptionsDefault } from './ComponentDefaults';

export type SelectOptionData = {
	disabled?: boolean;
	label: string;
	value: string;
};

const createDefaultOption = (label: string): SelectOptionData => ({
	label: `Label ${label}`,
	value: `Value ${label}`,
});

const INITIAL_OPTIONS: SelectOptionData[] = SelectOptionsDefault;

type UpdateFn = (updater: (option: SelectOptionData) => SelectOptionData) => void;
type RemoveFn = () => void;

const SelectOptionEditor: React.FC<{
	option: SelectOptionData;
	index: number;
	onUpdate: UpdateFn;
	onRemove: RemoveFn;
}> = ({ option, index, onUpdate, onRemove }) => {
	const label = `Option ${index + 1}`;

	const handleFieldChange = (field: keyof SelectOptionData, value: unknown) => {
		onUpdate((prev) => ({ ...prev, [field]: value }));
	};

	return (
		<div style={{ marginLeft: undefined, borderLeft: undefined, paddingLeft: undefined }}>
			<KolCard _label={label}>
				<div className="flex flex-col gap-2">
					<KolInputText
						_label="Label"
						_value={option.label}
						_on={{
							onInput: (e: Event) => {
								handleFieldChange('label', (e.target as HTMLInputElement).value);
							},
						}}
					/>
					<KolInputText
						_label="Value"
						_value={option.value}
						_on={{
							onInput: (e: Event) => {
								handleFieldChange('value', (e.target as HTMLInputElement).value);
							},
						}}
					/>
					<KolInputCheckbox
						_label="Disabled"
						_checked={option.disabled ?? false}
						_variant="switch"
						_on={{
							onInput: (_e: Event, checked: unknown) => {
								handleFieldChange('disabled', !!checked);
							},
						}}
					/>
					<div className="flex gap-2">
						<KolButton _label="Remove" _variant="danger" _on={{ onClick: onRemove }} />
					</div>
				</div>
			</KolCard>
		</div>
	);
};

const SelectOptionsProperty = (props: {
	label: string;
	_value?: Option<string>[];
	_on?: {
		onInput?: (event: Event, value: unknown) => void;
	};
}) => {
	const [isEditing, setIsEditing] = useState(false);
	const [options, setOptions] = useState<SelectOptionData[]>(INITIAL_OPTIONS);

	useEffect(() => {
		props._on?.onInput?.(new Event('input'), options);
	});

	const addOption = () => {
		setOptions((prev) => [...prev, createDefaultOption(`Option ${options.length + 1}`)]);
	};

	const updateOption = (index: number, updater: (option: SelectOptionData) => SelectOptionData) => {
		setOptions((prev) => {
			const next = [...prev];
			next[index] = updater(next[index]);
			return next;
		});
	};

	const removeOption = (index: number) => {
		setOptions((prev) => prev.filter((_, i) => i !== index));
	};

	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
			<KolButton _label={props.label} _variant="secondary" _on={{ onClick: () => setIsEditing(!isEditing) }} />

			<KolDrawer
				_label={translate({ id: 'preview.component.select.options.edit' })}
				_open={isEditing}
				_align="right"
				_hasCloser
				_on={{ onClose: () => setIsEditing(false) }}
			>
				<div className="flex flex-col gap-4 py-4">
					{options.map((option, index) => (
						<SelectOptionEditor
							key={index}
							option={option}
							index={index}
							onUpdate={(updater) => updateOption(index, updater)}
							onRemove={() => removeOption(index)}
						/>
					))}

					<KolButton _label="+ Option" _variant="secondary" _on={{ onClick: addOption }} />

					<KolButton
						_label={translate({ id: 'preview.component.select.options.closeedit' })}
						_variant="primary"
						_on={{ onClick: () => setIsEditing(false) }}
					/>
				</div>
			</KolDrawer>
		</div>
	);
};

export default SelectOptionsProperty;
