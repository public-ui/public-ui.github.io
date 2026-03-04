import React, { useRef } from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { AlignProperty, BooleanProperty, MultiLineTextProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolButton, KolDrawer, KolInputText } from '@public-ui/react-v19';

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
        _slot: '<p>Dies ist der Inhalt des Drawers.</p>',
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
                return (
                    <>
                        <KolButton
                            _label="Drawer öffnen"
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
                            <div dangerouslySetInnerHTML={{ __html: _slot ?? '' }} />
                        </KolDrawer>
                    </>
                );
            }}
        </Preview>
    );
};

export default DrawerPreview;
