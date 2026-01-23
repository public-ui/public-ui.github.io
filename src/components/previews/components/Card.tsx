import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, LevelProperty, MultiLineTextProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolCard } from '@public-ui/react-v19';

type CardPreviewProps = JSX.KolCard & { _slot?: string };

const CardPreview: React.FC = (props: {
    initialProps?: CardPreviewProps;
    visibleProperties?: (keyof JSX.KolCard | '_slot')[];
    codeCollapsable?: boolean;
    codeCollapsed?: boolean;
}) => {
    const defaultProps: CardPreviewProps = {
        _label: 'Card Title',
        _slot: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
    };

    return (
        <Preview<CardPreviewProps>
            propertyComponents={{
                _label: <KolInputText _label="Label" />,
                _hasCloser: <BooleanProperty label="Closable" />,
                _level: <LevelProperty label="Level" defaultValue={0} />,
                _slot: <MultiLineTextProperty label="Content" />,
            }}
            initialProps={{ ...defaultProps, ...props.initialProps }}
            componentName="KolCard"
            visibleProperties={props.visibleProperties}
            codeCollapsable={props.codeCollapsable}
            codeCollapsed={props.codeCollapsed}
            layout={PreviewLayout.CENTERED}
            slotKey="_slot"
        >
            {(componentProps) => {
                const { _slot, ...cardProps } = componentProps;
                return (
                    <KolCard {...cardProps}>
                        <div dangerouslySetInnerHTML={{ __html: _slot ?? '' }} />
                    </KolCard>
                );
            }}
        </Preview>
    );
};

export default CardPreview;
