import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolAvatar, KolInputColor } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import { getPreviewDefaults, PreviewDefaults } from '../utils';

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
			{...getPreviewDefaults(props, defaultProps)}
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_src: <KolInputText _label="Image Source (URL)" />,
				_color: <KolInputColor _label="Color" />,
			}}
			componentName="KolAvatar"
			layout={PreviewLayout.CENTERED}
		>
			{(props) => <KolAvatar {...props} />}
		</Preview>
	);
};

export default AvatarPreview;
