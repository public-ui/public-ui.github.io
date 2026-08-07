import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolAvatar, KolInputColor } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import { PreviewDefaults } from '../utils';

interface AvatarPreviewComponentProps extends PreviewDefaults<JSX.KolAvatar> {}

const AvatarPreview = (props: AvatarPreviewComponentProps) => {
	const defaultProps = React.useMemo<JSX.KolAvatar>(
		() => ({
			_label: translate({ id: 'preview.component.avatar.label' }),
			_color: '#5A5FEE',
		}),
		[]
	);

	return (
		<Preview<JSX.KolAvatar>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_src: <KolInputText _label="Image Source (URL)" />,
				_color: <KolInputColor _label="Color" />,
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolAvatar"
			visibleProperties={props.visibleProperties}
			hideSourceCodeDetails={props.hideSourceCodeDetails}
			sourceCodeDetailsCollapsed={props.sourceCodeDetailsCollapsed}
			layout={PreviewLayout.CENTERED}
		>
			{(props) => <KolAvatar {...props} />}
		</Preview>
	);
};

export default AvatarPreview;
