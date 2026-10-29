import { KolButton, KolCard, KolDrawer, KolInputCheckbox, KolInputText, KolSelect } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import React, { useEffect, useState } from 'react';
import type { InternalButtonProps, LinkProps } from '@public-ui/components';
import type { ToolbarItemPropType } from '@public-ui/components/dist/types/schema';

type ToolbarItemsPropertyProps = {
	label: string;
	_value?: ToolbarItemPropType[];
	_on?: {
		onInput?: (event: Event, value: unknown) => void;
	};
};

const ToolbarItemTypes = [
	{ label: 'Button', value: 'button' },
	{ label: 'Link', value: 'link' },
	{ label: 'hr', value: 'hr' },
];

const ToolbarItemIcons = [
	{ label: 'None', value: '' },
	{ label: 'KoliBri', value: 'kolicon-kolibri' },
	{ label: 'Info', value: 'kolicon-alert-info' },
	{ label: 'Check', value: 'kolicon-check' },
	{ label: 'House', value: 'kolicon-house' },
	{ label: 'Wheel', value: 'kolicon-cogwheel' },
	{ label: 'Eye', value: 'kolicon-eye' },
	{ label: 'Chevron Left', value: 'kolicon-chevron-left' },
	{ label: 'Chevron Right', value: 'kolicon-chevron-right' },
];

const itemDefaults: Record<string, ToolbarItemPropType> = {
	button: { type: 'button', _label: 'Button' },
	link: { type: 'link', _label: 'Link', _href: '#' },
	hr: { type: 'hr' },
};

const createDefaultItem = (): ToolbarItemPropType => itemDefaults['button'];

type UpdateFn = (updater: (item: ToolbarItemPropType) => ToolbarItemPropType) => void;
type RemoveFn = () => void;

const ToolbarItemsEditor: React.FC<{
	item: ToolbarItemPropType;
	index: number;
	onUpdate: UpdateFn;
	onRemove: RemoveFn;
}> = ({ item, index, onUpdate, onRemove }) => {
	const label = `Item ${index + 1}`;

	const handleTypeChange = (value: string) => {
		onUpdate(() => itemDefaults[value]);
	};

	const handleFieldChange = (
		field: keyof ToolbarItemPropType | keyof InternalButtonProps | keyof LinkProps,
		value: unknown
	) => {
		onUpdate((prev) => ({ ...prev, [field]: value }));
	};

	return (
		<KolCard _label={label}>
			<div className="flex flex-col gap-2">
				<KolSelect
					_label="Type"
					_options={ToolbarItemTypes}
					_value={item.type}
					_on={{
						onInput: (e: Event) => {
							handleTypeChange((e.target as HTMLSelectElement).value);
						},
					}}
				/>
				{item.type !== 'hr' ? (
					<>
						<KolInputText
							_label="Label"
							_value={item._label ?? item.type}
							_on={{
								onInput: (e: Event) => {
									handleFieldChange('_label', (e.target as HTMLInputElement).value);
								},
							}}
						/>
						{item.type === 'link' ? (
							<KolInputText
								_label="Link"
								_value={item._href ?? '#'}
								_on={{
									onInput: (e: Event) => {
										handleFieldChange('_href', (e.target as HTMLInputElement).value);
									},
								}}
							/>
						) : (
							''
						)}
						<KolInputCheckbox
							_label="Hide Label"
							_checked={item._hideLabel ?? false}
							_variant="switch"
							_on={{
								onInput: (_e: Event, checked: unknown) => {
									handleFieldChange('_hideLabel', !!checked);
								},
							}}
						/>
						<KolInputCheckbox
							_label="Disabled"
							_checked={item._disabled ?? false}
							_variant="switch"
							_on={{
								onInput: (_e: Event, checked: unknown) => {
									handleFieldChange('_disabled', !!checked);
								},
							}}
						/>
						<KolSelect
							_label="Icon"
							_options={ToolbarItemIcons}
							_value={item._icons ?? ''}
							_on={{
								onInput: (_e: Event, value: unknown) => {
									handleFieldChange('_icons', value);
								},
							}}
						/>
					</>
				) : (
					''
				)}

				<div className="flex gap-2">
					<KolButton
						_label={translate({ id: 'preview.component.select.options.remove' })}
						_variant="danger"
						_on={{ onClick: onRemove }}
					/>
				</div>
			</div>
		</KolCard>
	);
};

const ToolbarItemsProperty = (props: ToolbarItemsPropertyProps) => {
	const [isEditing, setIsEditing] = useState(false);
	const [items, setItems] = useState<ToolbarItemPropType[]>(props._value ?? []);

	useEffect(() => {
		props._on?.onInput?.(new Event('input'), items);
	}, [items]);

	const addItem = () => {
		setItems((prev) => [...prev, createDefaultItem()]);
	};

	const updateItem = (index: number, updater: (item: ToolbarItemPropType) => ToolbarItemPropType) => {
		setItems((prev) => {
			const next = [...prev];
			next[index] = updater(next[index]);
			return next;
		});
	};

	const removeItem = (index: number) => {
		setItems((prev) => prev.filter((_, i) => i !== index));
	};

	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
			<KolButton _label={props.label} _variant="secondary" _on={{ onClick: () => setIsEditing(!isEditing) }} />

			<KolDrawer
				_label="Items Bearbeiten"
				_open={isEditing}
				_align="right"
				_hasCloser
				_on={{ onClose: () => setIsEditing(false) }}
			>
				<div className="flex flex-col gap-4 py-4">
					{items.map((item, index) => (
						<ToolbarItemsEditor
							key={index}
							item={item}
							index={index}
							onUpdate={(updater) => updateItem(index, updater)}
							onRemove={() => removeItem(index)}
						/>
					))}

					<KolButton _label="+ Item" _variant="secondary" _on={{ onClick: addItem }} />

					<KolButton _label="Schließen" _variant="primary" _on={{ onClick: () => setIsEditing(false) }} />
				</div>
			</KolDrawer>
		</div>
	);
};

export default ToolbarItemsProperty;
