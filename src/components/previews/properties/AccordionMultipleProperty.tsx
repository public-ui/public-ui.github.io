import { KolButton, KolCard, KolDrawer, KolInputCheckbox, KolInputText } from '@public-ui/react-v19';
import React, { useEffect, useState } from 'react';
import { AccordionPreviewProps } from '../components/Accordion';
import { AccordionMultipleDefault } from './ComponentDefaults';
import { translate } from '@docusaurus/Translate';

type AccordionMultiplePropertyProps = {
	label: string;
	_value?: AccordionPreviewProps[];
	_on?: {
		onInput?: (event: Event, value: unknown) => void;
	};
};

const createDefaultAccordion = (label: string): AccordionPreviewProps => ({
	_label: `Label ${label}`,
	_slot: `Value ${label}`,
});

const INITIAL_ACCORDION: AccordionPreviewProps[] = AccordionMultipleDefault._accordions.map((accordion) => accordion);

type UpdateFn = (updater: (accordion: AccordionPreviewProps) => AccordionPreviewProps) => void;
type RemoveFn = () => void;

const AccordionMultipleEditor: React.FC<{
	accordion: AccordionPreviewProps;
	index: number;
	onUpdate: UpdateFn;
	onRemove: RemoveFn;
}> = ({ accordion, index, onUpdate, onRemove }) => {
	const label = `Accordion ${index + 1}`;

	const handleFieldChange = (field: keyof AccordionPreviewProps, value: unknown) => {
		onUpdate((prev) => ({ ...prev, [field]: value }));
	};

	return (
		<div style={{ marginLeft: undefined, borderLeft: undefined, paddingLeft: undefined }}>
			<KolCard _label={label}>
				<div className="flex flex-col gap-2">
					<KolInputText
						_label="Label"
						_value={accordion._label as string}
						_on={{
							onInput: (e: Event) => {
								handleFieldChange('_label', (e.target as HTMLInputElement).value);
							},
						}}
					/>
					<KolInputText
						_label="Value"
						_value={accordion._slot}
						_on={{
							onInput: (e: Event) => {
								handleFieldChange('_slot', (e.target as HTMLInputElement).value);
							},
						}}
					/>
					<KolInputCheckbox
						_label="Disabled"
						_checked={accordion._disabled ?? false}
						_variant="switch"
						_on={{
							onInput: (_e: Event, checked: unknown) => {
								handleFieldChange('_disabled', !!checked);
							},
						}}
					/>
					<KolInputCheckbox
						_label="Opened"
						_checked={accordion._open ?? true}
						_variant="switch"
						_on={{
							onInput: (_e: Event, checked: unknown) => {
								handleFieldChange('_open', !!checked);
							},
						}}
					/>
					<div className="flex gap-2">
						<KolButton
							_label={translate({ id: 'preview.component.select.options.remove' })}
							_variant="danger"
							_on={{ onClick: onRemove }}
						/>
					</div>
				</div>
			</KolCard>
		</div>
	);
};

const AccordionMultipleProperty = (props: AccordionMultiplePropertyProps) => {
	const [isEditing, setIsEditing] = useState(false);
	const [accordions, setAccordions] = useState<AccordionPreviewProps[]>(props._value ?? INITIAL_ACCORDION);

	useEffect(() => {
		props._on?.onInput?.(new Event('input'), accordions);
	}, [accordions]);

	const addAccordion = () => {
		setAccordions((prev) => [...prev, createDefaultAccordion(`Accordion ${accordions.length + 1}`)]);
	};

	const updateAccordion = (index: number, updater: (accordion: AccordionPreviewProps) => AccordionPreviewProps) => {
		setAccordions((prev) => {
			const next = [...prev];
			next[index] = updater(next[index]);
			return next;
		});
	};

	const removeAccordion = (index: number) => {
		setAccordions((prev) => prev.filter((_, i) => i !== index));
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
					{accordions.map((accordion, index) => (
						<AccordionMultipleEditor
							key={index}
							accordion={accordion}
							index={index}
							onUpdate={(updater) => updateAccordion(index, updater)}
							onRemove={() => removeAccordion(index)}
						/>
					))}

					<KolButton _label="+ Accordion" _variant="secondary" _on={{ onClick: addAccordion }} />

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

export default AccordionMultipleProperty;
