import { KolButton, KolCard, KolDrawer, KolInputText } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import React, { useEffect, useState } from 'react';
import type { W3CInputValue } from '@public-ui/components';
import { ComboboxSuggestionsDefault } from './ComponentDefaults';

type SuggestionsPropertyProps = {
	label: string;
	_value?: W3CInputValue[];
	_on?: {
		onInput?: (event: Event, value: unknown) => void;
	};
};

const toW3CInputValue = (input: string): W3CInputValue => {
	const trimmed = input.trim();
	if (trimmed.length === 0) {
		return '';
	}

	if (/^-?(?:\d+|\d*\.\d+)$/.test(trimmed)) {
		return Number(trimmed);
	}

	return input;
};

const createDefaultSuggestion = (label: string): W3CInputValue => label;

const INITIAL_SUGGESTIONS: W3CInputValue[] = ComboboxSuggestionsDefault;

type UpdateFn = (updater: (suggestion: W3CInputValue) => W3CInputValue) => void;
type RemoveFn = () => void;

const ComboboxSuggestionsEditor: React.FC<{
	suggestion: W3CInputValue;
	index: number;
	onUpdate: UpdateFn;
	onRemove: RemoveFn;
}> = ({ suggestion, index, onUpdate, onRemove }) => {
	const label = `Suggestion ${index + 1}`;

	const handleFieldChange = (value: unknown) => {
		onUpdate(() => toW3CInputValue(value as string));
	};

	return (
		<div style={{ marginLeft: undefined, borderLeft: undefined, paddingLeft: undefined }}>
			<KolCard _label={label}>
				<div className="flex flex-col gap-2">
					<KolInputText
						_label="Label"
						_value={suggestion as string}
						_on={{
							onInput: (e: Event) => {
								handleFieldChange((e.target as HTMLInputElement).value);
							},
						}}
					/>
					<div className="flex gap-2">
						<KolButton
							_label={translate({ id: 'preview.component.combobox.suggestions.remove' })}
							_variant="danger"
							_on={{ onClick: onRemove }}
						/>
					</div>
				</div>
			</KolCard>
		</div>
	);
};

const SuggestionsProperty = (props: SuggestionsPropertyProps) => {
	const [isEditing, setIsEditing] = useState(false);
	const [suggestions, setSuggestions] = useState<W3CInputValue[]>(INITIAL_SUGGESTIONS);

	useEffect(() => {
		props._on?.onInput?.(new Event('input'), suggestions);
	});

	const addSuggestion = () => {
		setSuggestions((prev) => [...prev, createDefaultSuggestion(`Suggestion ${suggestions.length + 1}`)]);
	};

	const updateSuggestion = (index: number, updater: (suggestion: W3CInputValue) => W3CInputValue) => {
		setSuggestions((prev) => {
			const next = [...prev];
			next[index] = updater(next[index]);
			return next;
		});
	};

	const removeSuggestion = (index: number) => {
		setSuggestions((prev) => prev.filter((_, i) => i !== index));
	};

	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
			<KolButton _label={props.label} _variant="secondary" _on={{ onClick: () => setIsEditing(!isEditing) }} />

			<KolDrawer
				_label={translate({ id: 'preview.component.combobox.suggestions.edit' })}
				_open={isEditing}
				_align="right"
				_hasCloser
				_on={{ onClose: () => setIsEditing(false) }}
			>
				<div className="flex flex-col gap-4 py-4">
					{suggestions.map((suggestion, index) => (
						<ComboboxSuggestionsEditor
							key={index}
							suggestion={suggestion}
							index={index}
							onUpdate={(updater) => updateSuggestion(index, updater)}
							onRemove={() => removeSuggestion(index)}
						/>
					))}

					<KolButton _label="+ Suggestion" _variant="secondary" _on={{ onClick: addSuggestion }} />

					<KolButton
						_label={translate({ id: 'preview.component.combobox.suggestions.closeedit' })}
						_variant="primary"
						_on={{ onClick: () => setIsEditing(false) }}
					/>
				</div>
			</KolDrawer>
		</div>
	);
};

export default SuggestionsProperty;
