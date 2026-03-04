import React, { useRef } from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { AlignProperty, BooleanProperty, MultiLineTextProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolButton, KolDrawer, KolInputText } from '@public-ui/react-v19';
import DOMPurify from 'dompurify';
import { translate } from '@docusaurus/Translate';

type DrawerPreviewProps = JSX.KolDrawer & { _slot?: string };

const DrawerPreview: React.FC = (props: {
    initialProps?: DrawerPreviewProps;
    visibleProperties?: (keyof JSX.KolDrawer | '_slot')[];
    codeCollapsable?: boolean;
    codeCollapsed?: boolean;
}) => {
    const drawerRef = useRef<HTMLKolDrawerElement>(null);

    const defaultProps: DrawerPreviewProps = {
        _label: 'Drawer',
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
                const sanitizedHtml = DOMPurify.sanitize(_slot ?? '');  
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
