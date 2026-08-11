import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, AlignProperty, IconsProperty, VariantProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolLinkButton, KolSelect } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import type { PreviewDefaults } from '../utils';
import { getPreviewDefaults } from '../utils';
import { variantButtonOptions } from '../properties/VariantProperty';
        
const LinkButtonPreview = (props: PreviewDefaults<JSX.KolLinkButton>) => {
	const defaultProps = React.useMemo<JSX.KolLinkButton>(
		() => ({
			_label: translate({ id: 'preview.component.link-button.label' }),
			_href: translate({ id: 'preview.component.link-button.href' }),
			_variant: 'primary',
		}),
		[]
	);

	return (
		<Preview<JSX.KolLinkButton>
			{...getPreviewDefaults(props, defaultProps)}
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_href: <KolInputText _label="Href" />,
				_variant: <VariantProperty label="Variant" defaultValue="normal" variantOptions={variantButtonOptions} />,
				_target: (
					<KolSelect
						_label="Target"
						_options={[
							{ label: '_self', value: '_self' },
							{ label: '_blank', value: '_blank' },
						]}
					/>
				),
				_icons: <IconsProperty label="Icons" />,
				_tooltipAlign: <AlignProperty label="Tooltip Align" defaultValue="top" />,
				_disabled: <BooleanProperty label="Disabled" />,
				_hideLabel: <BooleanProperty label="Hide Label" />,
				_download: <KolInputText _label="Download" />,
				_accessKey: <KolInputText _label="Access Key" _maxLength={1} />,
				_ariaControls: <KolInputText _label="ARIA Controls" />,
				_ariaCurrentValue: <KolInputText _label="ARIA Current Value" />,
				_ariaDescription: <KolInputText _label="ARIA Description" />,
				_customClass: <KolInputText _label="Custom Class" />,
				_shortKey: <KolInputText _label="Short Key" _maxLength={1} />,
			}}
			componentName="KolLinkButton"
			layout={PreviewLayout.CENTERED}
		>
			{(componentProps) => <KolLinkButton {...componentProps} />}
		</Preview>
	);
};

export default LinkButtonPreview;
