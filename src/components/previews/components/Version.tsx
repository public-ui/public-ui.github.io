import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolVersion } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';

interface VersionPreviewProps {
	initialProps?: JSX.KolVersion;
	visibleProperties?: (keyof JSX.KolVersion)[];
	codeCollapsable?: boolean;
	codeCollapsed?: boolean;
}

const VersionPreview: React.FC<VersionPreviewProps> = (props) => {
	const defaultProps = React.useMemo<JSX.KolVersion>(
		() => ({
			_label: translate({ id: 'preview.component.version.label' }),
		}),
		[],
	);

	return (
		<Preview<JSX.KolVersion>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolVersion"
			visibleProperties={props.visibleProperties}
			codeCollapsable={props.codeCollapsable}
			codeCollapsed={props.codeCollapsed}
			layout={PreviewLayout.CENTERED}
		>
			{(componentProps) => <KolVersion {...componentProps} />}
		</Preview>
	);
};

export default VersionPreview;
