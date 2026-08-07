import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, AlignProperty, IconsProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolLink } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import { getPreviewDefaults, PreviewDefaults } from '../utils';

interface LinkPreviewComponentProps extends PreviewDefaults<JSX.KolLink> {}

const LinkPreview = (props: LinkPreviewComponentProps) => {
	const defaultProps = React.useMemo<JSX.KolLink>(
		() => ({
			_label: translate({ id: 'preview.component.link.label' }),
			_href: translate({ id: 'preview.component.link.href' }),
			_target: '_blank',
		}),
		[]
	);

	return (
		<Preview<JSX.KolLink>
			{...getPreviewDefaults(props, defaultProps)}
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_href: <KolInputText _label="Href" />,
				_target: <KolInputText _label="Target" />,
				_icons: <IconsProperty label="Icons" />,
				_tooltipAlign: <AlignProperty label="Tooltip Align" defaultValue="top" />,
				_disabled: <BooleanProperty label="Disabled" />,
				_hideLabel: <BooleanProperty label="Hide Label" />,
				_inline: <BooleanProperty label="Inline" />,
				_download: <KolInputText _label="Download" />,
				_accessKey: <KolInputText _label="Access Key" />,
				_ariaControls: <KolInputText _label="ARIA Controls" />,
				_ariaDescription: <KolInputText _label="ARIA Description" />,
				_shortKey: <KolInputText _label="Short Key" _maxLength={1} />,
			}}
			componentName="KolLink"
			layout={PreviewLayout.CENTERED}
		>
			{(componentProps) => <KolLink {...componentProps} />}
		</Preview>
	);
};

export default LinkPreview;
