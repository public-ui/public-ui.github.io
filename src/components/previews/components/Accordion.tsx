import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, LevelProperty, MultiLineTextProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolAccordion } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import { sanitizeHtml } from '../../../shares/sanitize';
import { getPreviewDefaults, PreviewDefaults } from '../utils';

interface AccordionPreviewProps extends JSX.KolAccordion {
	_slot?: string;
}

interface AccordionPreviewComponentProps extends PreviewDefaults<AccordionPreviewProps> {}

const AccordionPreview = (props: AccordionPreviewComponentProps) => {
	const defaultProps = React.useMemo<AccordionPreviewProps>(
		() => ({
			_label: translate({ id: 'preview.component.accordion.label' }),
			_slot: translate({ id: 'preview.component.accordion.content' }),
		}),
		[]
	);

	return (
		<Preview<AccordionPreviewProps>
			{...getPreviewDefaults(props, defaultProps)}
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_level: <LevelProperty label="Heading Level" defaultValue={1} />,
				_disabled: <BooleanProperty label="Disabled" />,
				_open: <BooleanProperty label="Open" />,
				_slot: <MultiLineTextProperty label="Content" />,
			}}
			componentName="KolAccordion"
			layout={PreviewLayout.FULL_SIZE}
			slotKey="_slot"
		>
			{(componentProps) => {
				const { _slot, ...accordionProps } = componentProps;
				const sanitizedHtml = sanitizeHtml(_slot ?? '');
				return (
					<KolAccordion {...accordionProps}>
						<div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
					</KolAccordion>
				);
			}}
		</Preview>
	);
};

export default AccordionPreview;
