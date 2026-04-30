import { KolButton, KolInputText } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import React, { useEffect, useState } from 'react';
import type { W3CInputValue } from '@public-ui/components';

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

const SuggestionsProperty = (props: SuggestionsPropertyProps) => {
    const [suggestions, setSuggestions] = useState<W3CInputValue[]>(() => props._value ?? []);

    useEffect(() => {
        setSuggestions(props._value ?? []);
    }, [props._value]);

    const emit = (nextSuggestions: W3CInputValue[]) => {
        setSuggestions(nextSuggestions);
        props._on?.onInput?.(new Event('input'), nextSuggestions);
    };

    const handleAdd = () => {
        emit([...suggestions, '']);
    };

    const handleRemove = (index: number) => {
        emit(suggestions.filter((_, i) => i !== index));
    };

    const handleChange = (index: number, value: string) => {
        const updated = [...suggestions];
        updated[index] = toW3CInputValue(value);
        emit(updated);
    };

    return (
        <fieldset className="border-0 m-0 p-0">
            <legend className="text-sm font-medium mb-2">{`${props.label}`}</legend>
            <div className="flex flex-col gap-2">
                {suggestions.map((suggestion, index) => (
                    <div key={index} className="flex flex-row items-end gap-2">
                        <KolInputText
                            _label={`Suggestion ${index + 1}`}
                            _hideLabel
                            _value={String(suggestion)}
                            _on={{
                                onInput: (_event: Event, value: unknown) => {
                                    handleChange(index, String(value));
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

export default SuggestionsProperty;