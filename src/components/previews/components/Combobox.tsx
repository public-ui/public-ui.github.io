import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, IconsProperty, MsgProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolCombobox, KolInputText, KolTextarea } from '@public-ui/react-v19';

const ComboboxPreview: React.FC = (props: {
    initialProps?: JSX.KolCombobox;
    visibleProperties?: (keyof JSX.KolCombobox)[];
    codeCollapsable?: boolean;
    codeCollapsed?: boolean;
}) => {
    const defaultProps: JSX.KolCombobox = {
        _label: 'Anrede',
        _suggestions: ['Herr', 'Frau', 'Firma'],
    };

    const [value, setValue] = React.useState<string>('');

    return (
        <Preview<JSX.KolCombobox>
            propertyComponents={{
                _label: <KolInputText _label="Label" />,
                _placeholder: <KolInputText _label="Placeholder" />,
                _suggestions: <KolTextarea _label="Suggestions (JSON Array)" _rows={5} />,
                _icons: <IconsProperty label="Icons" directions={['right', 'left']} />,
                _accessKey: <KolInputText _label="Access Key" />,
                _name: <KolInputText _label="Name" />,
                _hint: <KolInputText _label="Hint" />,
                _msg: <MsgProperty label="Message" />,
                _disabled: <BooleanProperty label="Disabled" />,
                _required: <BooleanProperty label="Required" />,
                _hasClearButton: <BooleanProperty label="Has Clear Button" />,
                _hideLabel: <BooleanProperty label="Hide Label" />,
                _hideMsg: <BooleanProperty label="Hide Message" />,
                _touched: <BooleanProperty label="Touched" />,
            }}
            initialProps={{ ...defaultProps, ...props.initialProps }}
            componentName="KolCombobox"
            visibleProperties={props.visibleProperties}
            codeCollapsable={props.codeCollapsable}
            codeCollapsed={props.codeCollapsed}
            layout={PreviewLayout.CENTERED}
        >
            {(props) => (
                <KolCombobox _touched {...props} _on={{ onInput: (_: Event, v: unknown) => setValue(v as string) }} _value={value} />
            )}
        </Preview>
    );
};

export default ComboboxPreview;
