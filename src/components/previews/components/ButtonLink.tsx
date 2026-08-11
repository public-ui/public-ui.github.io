import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, AlignProperty, IconsProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolButtonLink } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import type { PreviewDefaults } from '../utils';
import { getPreviewDefaults } from '../utils';

const ButtonLinkPreview = (props: PreviewDefaults<JSX.KolButtonLink>) => {
	const defaultProps = React.useMemo<JSX.KolButtonLink>(
		() => ({
			_label: translate({ id: 'preview.component.button-link.label' }),
		}),
		[]
	);

	return (
		<Preview<JSX.KolButtonLink>
			{...getPreviewDefaults(props, defaultProps)}
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_tooltipAlign: <AlignProperty label="Tooltip Align" defaultValue="top" />,
				_icons: <IconsProperty label="Icons" />,
				_accessKey: <KolInputText _label="Access Key" />,
				_ariaControls: <KolInputText _label="ARIA Controls" />,
				_ariaDescription: <KolInputText _label="ARIA Description" />,
				_name: <KolInputText _label="Name" />,
				_shortKey: <KolInputText _label="Short Key" _maxLength={1} />,
				_value: <KolInputText _label="Value" />,
				_disabled: <BooleanProperty label="Disabled" />,
				_hideLabel: <BooleanProperty label="Hide Label" />,
				_inline: <BooleanProperty label="Inline" />,
				_ariaExpanded: <BooleanProperty label="ARIA Expanded" />,
				_ariaSelected: <BooleanProperty label="ARIA Selected" />,
			}}
			componentName="KolButtonLink"
			layout={PreviewLayout.CENTERED}
		>
			{(props) => <KolButtonLink {...props} />}
		</Preview>
	);
};

export default ButtonLinkPreview;
