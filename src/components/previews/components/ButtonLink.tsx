import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, AlignProperty, IconsProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolButtonLink } from '@public-ui/react-v19';

const ButtonLinkPreview: React.FC = (props: {
    initialProps?: JSX.KolButtonLink;
    visibleProperties?: (keyof JSX.KolButtonLink)[];
    codeCollapsable?: boolean;
    codeCollapsed?: boolean;
}) => {
    const defaultProps: JSX.KolButtonLink = {
        _label: 'ButtonLink',
    };

    return (
        <Preview<JSX.KolButtonLink>
            propertyComponents={{
                _label: <KolInputText _label="Label" />,
                _tooltipAlign: <AlignProperty label="Tooltip Align" defaultValue="top" />,
                _icons: <IconsProperty label="Icons" />,
                _accessKey: <KolInputText _label="Access Key" />,
                _ariaControls: <KolInputText _label="ARIA Controls" />,
                _ariaDescription: <KolInputText _label="ARIA Description" />,
                _name: <KolInputText _label="Name" />,
                _shortKey: <KolInputText _label="Short Key" _maxLength={1} />,
                _value: <KolInputText _label="Value" />,
                _disabled: <BooleanProperty label="Disabled" />,
                _hideLabel: <BooleanProperty label="Hide Label" />,
                _inline: <BooleanProperty label="Inline" />,
                _ariaExpanded: <BooleanProperty label="ARIA Expanded" />,
                _ariaSelected: <BooleanProperty label="ARIA Selected" />,
            }}
            initialProps={{ ...defaultProps, ...props.initialProps }}
            componentName="KolButtonLink"
            visibleProperties={props.visibleProperties}
            codeCollapsable={props.codeCollapsable}
            codeCollapsed={props.codeCollapsed}
            layout={PreviewLayout.CENTERED}
        >
            {(props) => <KolButtonLink {...props} />}
        </Preview>
    );
};

export default ButtonLinkPreview;
