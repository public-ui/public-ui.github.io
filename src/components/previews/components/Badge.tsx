import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { IconsProperty, SmartButtonProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolBadge, KolInputColor } from '@public-ui/react-v19';

const BadgePreview: React.FC = (props: {
    initialProps?: JSX.KolBadge;
    visibleProperties?: (keyof JSX.KolBadge)[];
    codeCollapsable?: boolean;
    codeCollapsed?: boolean;
}) => {
    const defaultProps: JSX.KolBadge = {
        _label: 'Badge',
        _color: '#0c8703',
    };

    return (
        <Preview<JSX.KolBadge>
            propertyComponents={{
                _label: <KolInputText _label="Label" />,
                _color: <KolInputColor _label="Color" />,
                _icons: <IconsProperty label="Icons" />,
                _smartButton: <SmartButtonProperty label="Smart Button" />,
            }}
            initialProps={{ ...defaultProps, ...props.initialProps }}
            componentName="KolBadge"
            visibleProperties={props.visibleProperties}
            codeCollapsable={props.codeCollapsable}
            codeCollapsed={props.codeCollapsed}
            layout={PreviewLayout.CENTERED}
        >
            {(props) => <KolBadge {...props} />}
        </Preview>
    );
};

export default BadgePreview;
