import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { AlignProperty, BooleanProperty } from '../properties';
import TabsProperty from '../properties/TabsProperty';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolTabs } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';

interface TabsPreviewComponentProps {
    initialProps?: JSX.KolTabs;
    visibleProperties?: (keyof JSX.KolTabs)[];
    codeCollapsable?: boolean;
    codeCollapsed?: boolean;
}

const TabsPreview: React.FC<TabsPreviewComponentProps> = (props) => {
    const defaultProps: JSX.KolTabs = React.useMemo(() => ({
        _label: translate({ id: 'preview.component.tabs.label' }),
        _tabs: [],
        _align: 'top',
    }), []);

    return (
        <Preview<JSX.KolTabs>
            propertyComponents={{
                _label: <KolInputText _label="Label" />,
                _tabs: <TabsProperty label="Tabs" />,
                _align: <AlignProperty label="Alignment" defaultValue="top" />,
                _hasCreateButton: <BooleanProperty label="Create Button" />,
            }}
            initialProps={{ ...defaultProps, ...props.initialProps }}
            componentName="KolTabs"
            visibleProperties={props.visibleProperties}
            codeCollapsable={props.codeCollapsable}
            codeCollapsed={props.codeCollapsed}
            layout={PreviewLayout.DEFAULT}
        >
            {(componentProps) => {
                const tabs = Array.isArray(componentProps._tabs) ? (componentProps._tabs) : [];
                return (
                    <div className="min-h-72">
                        <KolTabs {...componentProps}>
                            {tabs.map((_, index) => (
                                <div key={index} slot={`tab-${index}`}>
                                    {`${translate({ id: 'preview.component.tabs.tab-content' })} ${index + 1}`}
                                </div>
                            ))}
                        </KolTabs>
                    </div>
                );
            }}
        </Preview>
    );
};

export default TabsPreview;
