import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, IconsProperty, SmartButtonProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputNumber, KolInputText, KolSelect } from '@public-ui/react-v19';

const InputTextPreview: React.FC = (props: {
    initialProps?: JSX.KolInputText;
    visibleProperties?: (keyof JSX.KolInputText)[];
    codeCollapsable?: boolean;
    codeCollapsed?: boolean;
}) => {
    const defaultProps: JSX.KolInputText = {
        _label: 'Text Input',
    };

    return (
        <Preview<JSX.KolInputText>
            propertyComponents={{
                _label: <KolInputText _label="Label" />,
                _placeholder: <KolInputText _label="Placeholder" />,
                _value: <KolInputText _label="Value" />,
                _icons: <IconsProperty label="Icons" directions={['right', 'left']} />,
                _accessKey: <KolInputText _label="Access Key" />,
                _name: <KolInputText _label="Name" />,
                _hint: <KolInputText _label="Hint" />,
                _msg: <KolInputText _label="Message" />,
                _maxLength: <KolInputNumber _label="Max Length" _min={0} />,
                _maxLengthBehavior: (
                    <KolSelect
                        _label="Max Length Behavior"
                        _options={[
                            { label: 'None', value: '' },
                            { label: 'Soft', value: 'soft' },
                            { label: 'Hard', value: 'hard' },
                        ]}
                    />
                ),
                _disabled: <BooleanProperty label="Disabled" />,
                _readOnly: <BooleanProperty label="Read Only" />,
                _required: <BooleanProperty label="Required" />,
                _hasCounter: <BooleanProperty label="Has Counter" />,
                _hideLabel: <BooleanProperty label="Hide Label" />,
                _touched: <BooleanProperty label="Touched" />,
                _smartButton: <SmartButtonProperty label="Smart Button" buttonLabel='Smart button label' buttonIcon='kolicon-kolibri' />,
            }}
            initialProps={{ ...defaultProps, ...props.initialProps }}
            componentName="KolInputText"
            visibleProperties={props.visibleProperties}
            codeCollapsable={props.codeCollapsable}
            codeCollapsed={props.codeCollapsed}
            layout={PreviewLayout.CENTERED}
        >
            {(props) => <KolInputText _touched {...props} />}
        </Preview>
    );
};

export default InputTextPreview;
