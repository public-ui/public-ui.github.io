import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, AlignProperty, IconsProperty, ButtonVariantProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolLinkButton } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';

interface LinkButtonPreviewProps {
    initialProps?: JSX.KolLinkButton;
    visibleProperties?: (keyof JSX.KolLinkButton)[];
    codeCollapsable?: boolean;
    codeCollapsed?: boolean;
}

const LinkButtonPreview = (props: LinkButtonPreviewProps) => {
    const defaultProps = React.useMemo<JSX.KolLinkButton>(
        () => ({
            _label: translate({ id: 'preview.component.link-button.label' }),
            _href: translate({ id: 'preview.component.link-button.href' }),
            _variant: 'primary',
        }),
        [],
    );

    return (
        <Preview<JSX.KolLinkButton>
            propertyComponents={{
                _label: <KolInputText _label="Label" />,
                _href: <KolInputText _label="Href" />,
                _variant: <ButtonVariantProperty label="Variant" defaultValue="primary" />,
                _target: <KolInputText _label="Target" />,
                _icons: <IconsProperty label="Icons" />,
                _tooltipAlign: <AlignProperty label="Tooltip Align" defaultValue="top" />,
                _disabled: <BooleanProperty label="Disabled" />,
                _hideLabel: <BooleanProperty label="Hide Label" />,
                _download: <KolInputText _label="Download" />,
                _accessKey: <KolInputText _label="Access Key" />,
                _ariaControls: <KolInputText _label="ARIA Controls" />,
                _ariaDescription: <KolInputText _label="ARIA Description" />,
                _customClass: <KolInputText _label="Custom Class" />,
                _shortKey: <KolInputText _label="Short Key" _maxLength={1} />,
            }}
            initialProps={{ ...defaultProps, ...props.initialProps }}
            componentName="KolLinkButton"
            visibleProperties={props.visibleProperties}
            codeCollapsable={props.codeCollapsable}
            codeCollapsed={props.codeCollapsed}
            layout={PreviewLayout.CENTERED}
        >
            {(componentProps) => <KolLinkButton {...componentProps} />}
        </Preview>
    );
};

export default LinkButtonPreview;
