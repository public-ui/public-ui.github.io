import { KolButton, KolInputText } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import React, { useState } from 'react';

type SkipNavLink = { _label: string; _href: string };

const SkipNavLinksProperty = (props: {
	label: string;
	_value?: SkipNavLink[];
	_on?: {
		onInput?: (event: Event, value: unknown) => void;
	};
}) => {
	const [links, setLinks] = useState<SkipNavLink[]>(() => props._value ?? []);

	const emit = (newLinks: SkipNavLink[]) => {
		setLinks(newLinks);
		props._on?.onInput?.(new Event('input'), newLinks);
	};

	const handleAdd = () => {
		emit([...links, { _label: '', _href: '' }]);
	};

	const handleRemove = (index: number) => {
		emit(links.filter((_, i) => i !== index));
	};

	const handleChange = (index: number, field: keyof SkipNavLink, value: string) => {
		const updated = [...links];
		updated[index] = { ...updated[index], [field]: value };
		emit(updated);
	};

	return (
		<fieldset className="border-0 m-0 p-0">
			<legend className="text-sm font-medium mb-2">{`${props.label} (Label/Href)`}</legend>
			<div className="flex flex-col gap-2">
				{links.map((link, index) => (
					<div key={index} className="flex flex-row items-end gap-2">
						<KolInputText
							_label="Label"
							_hideLabel
							_value={link._label}
							_on={{
								onInput: (_event: Event, value: unknown) => {
									handleChange(index, '_label', value as string);
								},
							}}
						/>
						<KolInputText
							_label="Href"
							_hideLabel
							_value={link._href}
							_on={{
								onInput: (_event: Event, value: unknown) => {
									handleChange(index, '_href', value as string);
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

export default SkipNavLinksProperty;
