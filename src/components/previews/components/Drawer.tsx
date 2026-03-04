import React, { useRef } from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { AlignProperty, BooleanProperty, MultiLineTextProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolButton, KolDrawer, KolInputText } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import { sanitizeHtml } from '../../../shares/sanitize';

type DrawerPreviewProps = JSX.KolDrawer & { _slot?: string };

interface DrawerPreviewComponentProps {
    initialProps?: DrawerPreviewProps;
    visibleProperties?: (keyof JSX.KolDrawer | '_slot')[];
    codeCollapsable?: boolean;
    codeCollapsed?: boolean;
}

const DrawerPreview = (props: DrawerPreviewComponentProps) => {
    const drawerRef = useRef<HTMLKolDrawerElement>(null);

    const defaultProps: DrawerPreviewProps = {
        _label: translate({ id: 'preview.component.drawer.label' }),
        _align: 'left',
        _hasCloser: true,
        _slot: `<p>${translate({ id: 'preview.component.drawer.content' })}</p>`,
    };

    return (
        <Preview<DrawerPreviewProps>
            propertyComponents={{
                _label: <KolInputText _label="Label" />,
                _align: <AlignProperty label="Align" defaultValue="left" />,
                _hasCloser: <BooleanProperty label="Has Closer" />,
                _slot: <MultiLineTextProperty label="Content" />,
            }}
            initialProps={{ ...defaultProps, ...props.initialProps }}
            componentName="KolDrawer"
            visibleProperties={props.visibleProperties}
            codeCollapsable={props.codeCollapsable}
            codeCollapsed={props.codeCollapsed}
            layout={PreviewLayout.CENTERED}
            slotKey="_slot"
        >
            {(componentProps) => {
                const { _slot, ...drawerProps } = componentProps;
                const sanitizedHtml = sanitizeHtml(_slot ?? '');
                return (
                    <>
                        <KolButton
                            _label={translate({ id: 'preview.component.drawer.openButton' })}
                            _on={{
                                onClick: () => {
                                    void drawerRef.current?.open();
                                },
                            }}
                        />
                        <KolDrawer
                            {...drawerProps}
                            ref={drawerRef}
                        >
                            <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
                        </KolDrawer>
                    </>
                );
            }}
        </Preview>
    );
};

export default DrawerPreview;
