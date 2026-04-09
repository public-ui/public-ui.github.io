import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, LevelProperty, MultiLineTextProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolDetails } from '@public-ui/react-v19';
import { sanitizeHtml } from '../../../shares/sanitize';

type DetailsPreviewProps = JSX.KolDetails & { _slot?: string };

interface DetailsPreviewComponentProps {
	initialProps?: DetailsPreviewProps;
	visibleProperties?: (keyof JSX.KolDetails | '_slot')[];
	codeCollapsable?: boolean;
	codeCollapsed?: boolean;
}

const DetailsPreview: React.FC<DetailsPreviewComponentProps> = (props) => {
	const defaultProps = React.useMemo<DetailsPreviewProps>(
		() => ({
			_label: 'Details Element',
			_slot:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
		}),
		[],
	);

	return (
		<Preview<DetailsPreviewProps>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_level: <LevelProperty label="Heading Level" defaultValue={0} />,
				_disabled: <BooleanProperty label="Disabled" />,
				_open: <BooleanProperty label="Open" />,
				_slot: <MultiLineTextProperty label="Content" />,
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolDetails"
			visibleProperties={props.visibleProperties}
			codeCollapsable={props.codeCollapsable}
			codeCollapsed={props.codeCollapsed}
			layout={PreviewLayout.DEFAULT}
			slotKey="_slot"
		>
			{(componentProps) => {
				const { _slot, ...detailsProps } = componentProps;
				const sanitizedHtml = sanitizeHtml(_slot ?? '');
				return (
					<div className="min-h-44">
						<KolDetails {...detailsProps}>
							<div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
						</KolDetails>
					</div>
				);
			}}
		</Preview>
	);
};

export default DetailsPreview;
