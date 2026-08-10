import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, LevelProperty, MultiLineTextProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolCard } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import { sanitizeHtml } from '../../../shares/sanitize';
import type { PreviewDefaults } from '../utils';
import { getPreviewDefaults } from '../utils';

interface CardPreviewProps extends JSX.KolCard {
	_slot?: string;
}

const CardPreview = (props: PreviewDefaults<CardPreviewProps>) => {
	const defaultProps = React.useMemo<CardPreviewProps>(
		() => ({
			_label: translate({ id: 'preview.component.card.label' }),
			_slot: translate({ id: 'preview.component.card.content' }),
		}),
		[]
	);

	return (
		<Preview<CardPreviewProps>
			{...getPreviewDefaults(props, defaultProps)}
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_hasCloser: <BooleanProperty label="Closable" />,
				_level: <LevelProperty label="Level" defaultValue={0} />,
				_slot: <MultiLineTextProperty label="Content" />,
			}}
			componentName="KolCard"
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
