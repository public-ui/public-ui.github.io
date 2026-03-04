import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, LevelProperty, MultiLineTextProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolAccordion } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';

type AccordionPreviewProps = JSX.KolAccordion & { _slot?: string };

const AccordionPreview: React.FC = (props: {
	initialProps?: AccordionPreviewProps;
	visibleProperties?: (keyof JSX.KolAccordion | '_slot')[];
	codeCollapsable?: boolean;
}) => {
	const defaultProps: AccordionPreviewProps = {
		_label: translate({ id: 'preview.component.accordion.label' }),
		_slot: translate({ id: 'preview.component.accordion.content' }),
	};

	return (
		<Preview<AccordionPreviewProps>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_level: <LevelProperty label="Heading Level" defaultValue={1} />,
				_disabled: <BooleanProperty label="Disabled" />,
				_open: <BooleanProperty label="Open" />,
				_slot: <MultiLineTextProperty label="Content" />,
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolAccordion"
			visibleProperties={props.visibleProperties}
			codeCollapsable={props.codeCollapsable}
			layout={PreviewLayout.FULL_SIZE}
			slotKey="_slot"
		>
			{(componentProps) => {
				const { _slot, ...accordionProps } = componentProps;
				return (
					<KolAccordion {...accordionProps}>
						<div dangerouslySetInnerHTML={{ __html: _slot ?? '' }} />
					</KolAccordion>
				);
			}}
		</Preview>
	);
};

export default AccordionPreview;
