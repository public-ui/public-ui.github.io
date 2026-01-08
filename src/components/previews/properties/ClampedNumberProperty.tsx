import { KolInputNumber } from '@public-ui/react-v19';
import React from 'react';

const ClampedNumberProperty = (props: {
    label: string;
    min: number;
    max: number;
    _value?: number;
    _on?: {
        onInput?: (event: Event, value: unknown) => void;
    };
}) => {
    const clampedValue = React.useMemo(
        () => {
            const newValue = props._value !== undefined
                ? Math.max(props.min, Math.min(props._value, props.max))
                : undefined;
            if (newValue !== props._value) {
                props._on?.onInput?.(new Event('input'), newValue);
            }
            return newValue;
        },
        [props._value, props.min, props.max]
    );

    return (
        <KolInputNumber
            _label={props.label}
            _min={props.min}
            _max={props.max}
            _value={clampedValue}
            _on={{
                onInput: (event: Event, value: unknown) => {
                    const numValue = typeof value === 'number' ? value : parseFloat(value as string);
                    if (!isNaN(numValue)) {
                        const clamped = Math.max(props.min, Math.min(numValue, props.max));
                        props._on?.onInput?.(event, clamped);
                    }
                },
            }}

        />
    );
};

export default ClampedNumberProperty;
