import { KolInputCheckbox } from '@public-ui/react-v19';
import React from 'react';

const behaviorOptions = ['select-automatic', 'select-manual'] as const;
type TabBehavior = (typeof behaviorOptions)[number];

const TabBehaviorProperty = (props: {
    label: string;
    defaultValue?: TabBehavior;
    _value?: TabBehavior;
    _on?: {
        onInput?: (event: Event, value: unknown) => void;
    };
}) => {
    return (
        <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
            <legend>{props.label}</legend>
            <div className="flex flex-row gap-1">
                {behaviorOptions.map((behavior) => (
                    <KolInputCheckbox
                        key={behavior}
                        _label={behavior}
                        _variant="button"
                        _checked={(props._value ?? props.defaultValue) === behavior}
                        _on={{
                            onInput: (event: Event, value: unknown) => {
                                if (value) {
                                    props._on?.onInput?.(event, behavior);
                                }
                            },
                        }}
                    />
                ))}
            </div>
        </fieldset>
    );
};

export default TabBehaviorProperty;
