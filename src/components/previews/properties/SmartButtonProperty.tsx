import { translate } from '@docusaurus/Translate';
import { KolInputCheckbox } from '@public-ui/react-v19';
import React from 'react';

const SmartButtonProperty = (props: {
    label: string;
    buttonLabel?: string;
    buttonIcon?: string;
    _value?: { _label: string } | string;
    _on?: {
        onInput?: (event: Event, value: unknown) => void;
    };
}) => {
    const isEnabled = !!props._value;

    return (
        <KolInputCheckbox
            _label={props.label}
            _variant="switch"
            _labelAlign="left"
            _on={{
                onInput: (event: Event, value: unknown) => {
                    // Return an object with button configuration when enabled, undefined when disabled
                    const newValue = !!value ? { _label: props.buttonLabel ?? translate({ id: 'preview.property.remove' }), _icons: props.buttonIcon ?? 'kolicon-cross' } : undefined;
                    props._on?.onInput?.(event, newValue);
                },
            }}
            _checked={isEnabled}
        />
    );
};

export default SmartButtonProperty;
