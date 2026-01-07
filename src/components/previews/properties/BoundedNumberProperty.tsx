import { KolInputNumber } from '@public-ui/react-v19';
import React from 'react';

const BoundedNumberProperty = (props: {
    label: string;
    min: number;
    max: number;
    _value?: number;
    _on?: {
        onInput?: (event: Event, value: unknown) => void;
    };
    onBoundaryChange?: (newBoundary: number) => void;
}) => {
    const handleInput = (event: Event, value: unknown) => {
        const numValue = typeof value === 'number' ? value : parseFloat(value as string);
        if (!isNaN(numValue) && numValue >= props.min && numValue <= props.max) {
            props._on?.onInput?.(event, numValue);
            props.onBoundaryChange?.(numValue);
        }
    };

    return (
        <KolInputNumber
            _label={props.label}
            _min={props.min}
            _max={props.max}
            _value={props._value}
            _on={{
                onInput: handleInput,
            }}
        />
    );
};

export default BoundedNumberProperty;
