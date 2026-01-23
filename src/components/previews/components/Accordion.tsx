import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, LevelProperty, MultiLineTextProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolAccordion } from '@public-ui/react-v19';

type AccordionPreviewProps = JSX.KolAccordion & { _slot?: string };

const AccordionPreview: React.FC = (props: {
	initialProps?: AccordionPreviewProps;
	visibleProperties?: (keyof JSX.KolAccordion | '_slot')[];
	codeCollapsable?: boolean;
}) => {
	const defaultProps: AccordionPreviewProps = {
		_label: 'Accordion Element',
		_slot: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
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
