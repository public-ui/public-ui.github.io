import { KolInputCheckbox } from '@public-ui/react-v19';
import React from 'react';

const PasswordVariantProperty = (props: {
    label: string;
    defaultValue: string;
    _value?: string;
    _on?: {
        onInput?: (event: Event, value: unknown) => void;
    };
}) => {
    return (
        <KolInputCheckbox
            _label={props.label}
            _variant="switch"
            _labelAlign="left"
            _value="visibility-toggle"
            _on={{
                onInput: (event: Event, value: unknown) => {
                    props._on?.onInput?.(event, value ? 'visibility-toggle' : 'default');
                },
            }}
            _checked={(props._value ?? props.defaultValue) === 'visibility-toggle'}
        />
    );
};

export default PasswordVariantProperty;
