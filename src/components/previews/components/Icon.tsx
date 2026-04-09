import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolSelect, KolIcon } from '@public-ui/react-v19';
import { PREDEFINED_ICONS } from '../properties/IconsProperty';
import { translate } from '@docusaurus/Translate';

interface IconPreviewProps {
	initialProps?: JSX.KolIcon;
	visibleProperties?: (keyof JSX.KolIcon)[];
	codeCollapsable?: boolean;
	codeCollapsed?: boolean;
}

const IconPreview = (props: IconPreviewProps) => {
	const defaultProps = React.useMemo<JSX.KolIcon>(
		() => ({
			_label: translate({ id: 'preview.component.icon.label' }),
			_icons: 'kolicon-house',
		}),
		[],
	);

	return (
		<Preview<JSX.KolIcon>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_icons: <KolSelect _label="Icon" _options={PREDEFINED_ICONS.filter((icon) => icon.value !== '')} />,
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolIcon"
			visibleProperties={props.visibleProperties}
			codeCollapsable={props.codeCollapsable}
			codeCollapsed={props.codeCollapsed}
			layout={PreviewLayout.CENTERED}
		>
			{(componentProps) => <KolIcon {...componentProps} />}
		</Preview>
	);
};

export default IconPreview;
