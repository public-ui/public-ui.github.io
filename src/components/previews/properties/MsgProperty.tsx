import { KolInputText, KolSelect } from '@public-ui/react-v19';
import React from 'react';

const MsgProperty = (props: {
    label: string;
    _value?: { _type: string; _description: string } | string;
    _on?: {
        onInput?: (event: Event, value: unknown) => void;
    };
}) => {
    const [type, setType] = React.useState<string>(
        typeof props._value === 'object' && props._value?._type ? props._value._type : 'error'
    );
    const [description, setDescription] = React.useState<string>(
        typeof props._value === 'object' && props._value?._description ? props._value._description : ''
    );

    const handleTypeChange = (_event: Event, value: unknown) => {
        const newType = value as string;
        setType(newType);
        const newValue = description ? { _type: newType, _description: description } : undefined;
        props._on?.onInput?.(_event, newValue);
    };

    const handleDescriptionChange = (_event: Event, value: unknown) => {
        const newDescription = value as string;
        setDescription(newDescription);
        const newValue = newDescription ? { _type: type, _description: newDescription } : undefined;
        props._on?.onInput?.(_event, newValue);
    };

    return (
        <fieldset>
            <legend>{props.label}</legend>
            <div className='flex flex-row gap-2'>
                <KolSelect
                    _label="Type"
                    _value={[type]}
                    _options={[
                        { label: 'Error', value: 'error' },
                        { label: 'Warning', value: 'warning' },
                        { label: 'Info', value: 'info' },
                        { label: 'Success', value: 'success' },
                        { label: 'Default', value: 'default' },
                    ]}
                    _on={{ onChange: handleTypeChange }}
                />
                <KolInputText
                    _label="Description"
                    _value={description}
                    _placeholder="Enter message description"
                    _on={{ onInput: handleDescriptionChange }}
                />
            </div>
        </fieldset>
    );
};

export default MsgProperty;
