import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolVersion } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import { getPreviewDefaults, PreviewDefaults } from '../utils';

interface VersionPreviewProps extends PreviewDefaults<JSX.KolVersion> {}

const VersionPreview: React.FC<VersionPreviewProps> = (props) => {
	const defaultProps = React.useMemo<JSX.KolVersion>(
		() => ({
			_label: translate({ id: 'preview.component.version.label' }),
		}),
		[]
	);

	return (
		<Preview<JSX.KolVersion>
			{...getPreviewDefaults(props, defaultProps)}
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
			}}
			componentName="KolVersion"
			layout={PreviewLayout.CENTERED}
		>
			{(componentProps) => <KolVersion {...componentProps} />}
		</Preview>
	);
};

export default VersionPreview;
