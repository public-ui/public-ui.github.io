import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { AlertTypeProperty, AlertVariantProperty, BooleanProperty, MultiLineTextProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolAlert, KolInputText, KolSelect } from '@public-ui/react-v19';

type AlertPreviewProps = JSX.KolAlert & { _slot?: string };

const AlertPreview: React.FC = (props: {
    initialProps?: AlertPreviewProps;
    visibleProperties?: (keyof JSX.KolAlert | '_slot')[];
    codeCollapsable?: boolean;
}) => {
    const defaultProps: AlertPreviewProps = {
        _label: 'Hinweis',
        _level: 3,
        _type: 'info',
        _variant: 'msg',
        _alert: false,
        _hasCloser: false,
        _slot: 'Dies ist eine <strong>Beispielmeldung</strong> mit weiteren Details.',
    };

    return (
        <Preview<AlertPreviewProps>
            propertyComponents={{
                _label: <KolInputText _label="Label" />,
                _type: <AlertTypeProperty label="Type" defaultValue="info" />,
                _variant: <AlertVariantProperty label="Variant" defaultValue="msg" />,
                _level: (
                    <KolSelect
                        _label="Heading Level"
                        _options={[
                            { label: 'No Heading (Bold Text)', value: '0' },
                            { label: 'H1', value: '1' },
                            { label: 'H2', value: '2' },
                            { label: 'H3', value: '3' },
                            { label: 'H4', value: '4' },
                            { label: 'H5', value: '5' },
                            { label: 'H6', value: '6' },
                        ]}
                    />
                ),
                _alert: <BooleanProperty label="Screenreader Alert" />,
                _hasCloser: <BooleanProperty label="Closable" />,
                _slot: <MultiLineTextProperty label="Content" />,
            }}
            initialProps={{ ...defaultProps, ...props.initialProps }}
            componentName="KolAlert"
            visibleProperties={props.visibleProperties}
            codeCollapsable={props.codeCollapsable}
            layout={PreviewLayout.DEFAULT}
            slotKey="_slot"
        >
            {(componentProps) => {
                const { _slot, ...alertProps } = componentProps;
                return (
                    <KolAlert {...alertProps}>
                        <span dangerouslySetInnerHTML={{ __html: _slot ?? '' }} />
                    </KolAlert>
                );
            }}
        </Preview>
    );
};

export default AlertPreview;
