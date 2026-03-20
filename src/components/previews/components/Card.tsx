import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, LevelProperty, MultiLineTextProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolCard } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import { sanitizeHtml } from '../../../shares/sanitize';

type CardPreviewProps = JSX.KolCard & { _slot?: string };

interface CardPreviewComponentProps {
    initialProps?: CardPreviewProps;
    visibleProperties?: (keyof JSX.KolCard | '_slot')[];
    codeCollapsable?: boolean;
    codeCollapsed?: boolean;
}

const CardPreview = (props: CardPreviewComponentProps) => {
    const defaultProps: CardPreviewProps = {
        _label: translate({ id: 'preview.component.card.label' }),
        _slot: translate({ id: 'preview.component.card.content' }),
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
                const sanitizedHtml = sanitizeHtml(_slot ?? '');
                return (
                    <KolCard {...cardProps}>
                        <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
                    </KolCard>
                );
            }}
        </Preview>
    );
};

export default CardPreview;
