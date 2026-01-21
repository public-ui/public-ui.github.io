import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolSelect, KolSpin } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';

const SpinPreview: React.FC = (props: {
    initialProps?: JSX.KolSpin;
    visibleProperties?: (keyof JSX.KolSpin)[];
    codeCollapsable?: boolean;
}) => {
    const defaultProps: JSX.KolSpin = {
        _label: translate({
            id: 'preview.component.spin.label',
            message: 'Ladevorgang',
        }),
        _show: true,
        _variant: 'dot',
    };

    return (
        <Preview<JSX.KolSpin>
            propertyComponents={{
                _label: <KolInputText _label="Label" />,
                _variant: (
                    <KolSelect
                        _label="Variant"
                        _options={[
                            { label: 'Dot', value: 'dot' },
                            { label: 'Cycle', value: 'cycle' },
                            { label: 'None', value: 'none' },
                        ]}
                    />
                ),
                _show: <BooleanProperty label="Show" />,
            }}
            initialProps={{ ...defaultProps, ...props.initialProps }}
            componentName="KolSpin"
            visibleProperties={props.visibleProperties}
            codeCollapsable={props.codeCollapsable}
            layout={PreviewLayout.CENTERED}
        >
            {(componentProps) => <KolSpin {...componentProps} />}
        </Preview>
    );
};

export default SpinPreview;
