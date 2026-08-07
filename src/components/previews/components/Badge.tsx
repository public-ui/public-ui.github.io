import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { IconsProperty, SmartButtonProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolBadge, KolInputColor } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import { PreviewDefaults } from '../utils';

interface BadgePreviewComponentProps extends PreviewDefaults<JSX.KolBadge> {}

const BadgePreview = (props: BadgePreviewComponentProps) => {
	const defaultProps = React.useMemo<JSX.KolBadge>(
		() => ({
			_label: translate({ id: 'preview.component.badge.label' }),
			_color: '#0c8703',
		}),
		[]
	);

	return (
		<Preview<JSX.KolBadge>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_color: <KolInputColor _label="Color" />,
				_icons: <IconsProperty label="Icons" />,
				_smartButton: <SmartButtonProperty label="Smart Button" />,
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolBadge"
			visibleProperties={props.visibleProperties}
			hideSourceCodeDetails={props.hideSourceCodeDetails}
			sourceCodeDetailsCollapsed={props.sourceCodeDetailsCollapsed}
			layout={PreviewLayout.CENTERED}
		>
			{(props) => <KolBadge {...props} />}
		</Preview>
	);
};

export default BadgePreview;
