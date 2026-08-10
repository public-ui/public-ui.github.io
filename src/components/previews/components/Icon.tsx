import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolSelect, KolIcon } from '@public-ui/react-v19';
import { PREDEFINED_ICONS } from '../properties/IconsProperty';
import { translate } from '@docusaurus/Translate';
import type { PreviewDefaults } from '../utils';
import { getPreviewDefaults } from '../utils';

const IconPreview = (props: PreviewDefaults<JSX.KolIcon>) => {
	const defaultProps = React.useMemo<JSX.KolIcon>(
		() => ({
			_label: translate({ id: 'preview.component.icon.label' }),
			_icons: 'kolicon-house',
		}),
		[]
	);

	return (
		<Preview<JSX.KolIcon>
			{...getPreviewDefaults(props, defaultProps)}
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_icons: <KolSelect _label="Icon" _options={PREDEFINED_ICONS.filter((icon) => icon.value !== '')} />,
			}}
			componentName="KolIcon"
			layout={PreviewLayout.CENTERED}
		>
			{(componentProps) => <KolIcon {...componentProps} />}
		</Preview>
	);
};

export default IconPreview;
