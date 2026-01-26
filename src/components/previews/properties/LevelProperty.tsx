import { KolSelect } from '@public-ui/react-v19';
import React from 'react';

const LevelProperty = (props: {
    label: string;
    defaultValue: number;
    _value?: number;
    _on?: {
        onInput?: (event: Event, value: unknown) => void;
    };
}) => {
    return (
        <KolSelect
            _label={props.label}
            _options={[
                { label: 'No Heading (Bold Text)', value: '0' },
                { label: 'H1', value: '1' },
                { label: 'H2', value: '2' },
                { label: 'H3', value: '3' },
                { label: 'H4', value: '4' },
                { label: 'H5', value: '5' },
                { label: 'H6', value: '6' },
            ]}
            _value={props._value?.toString() ?? props.defaultValue.toString()}
            _on={{
                onInput: (event: Event, value: unknown) => {
                    if (typeof value === 'string') {
                        const numericValue = parseInt(value, 10);
                        if (!isNaN(numericValue)) {
                            props._on?.onInput?.(event, numericValue);
                        }
                    }
                },
            }}
        />
    );
};

export default LevelProperty;
