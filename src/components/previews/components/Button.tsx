import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, AlignProperty, IconsProperty, VariantProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolButton, KolSelect } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import type { PreviewDefaults } from '../utils';
import { getPreviewDefaults } from '../utils';
import { variantButtonOptions } from '../properties/VariantProperty';

const ButtonPreview = (props: PreviewDefaults<JSX.KolButton>) => {
	const defaultProps = React.useMemo<JSX.KolButton>(
		() => ({
			_label: translate({ id: 'preview.component.button.label' }),
		}),
		[]
	);

	return (
		<Preview<JSX.KolButton>
			{...getPreviewDefaults(props, defaultProps)}
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_variant: <VariantProperty label="Variant" defaultValue="normal" variantOptions={variantButtonOptions} />,
				_type: (
					<KolSelect
						_label="Type"
						_options={[
							{ label: 'Button', value: 'button' },
							{ label: 'Submit', value: 'submit' },
							{ label: 'Reset', value: 'reset' },
						]}
					/>
				),
				_tooltipAlign: <AlignProperty label="Tooltip Align" defaultValue="top" />,
				_icons: <IconsProperty label="Icons" />,
				_accessKey: <KolInputText _label="Access Key" />,
				_ariaControls: <KolInputText _label="ARIA Controls" />,
				_ariaDescription: <KolInputText _label="ARIA Description" />,
				_customClass: <KolInputText _label="Custom Class" />,
				_name: <KolInputText _label="Name" />,
				_shortKey: <KolInputText _label="Short Key" _maxLength={1} />,
				_value: <KolInputText _label="Value" />,
				_disabled: <BooleanProperty label="Disabled" />,
				_hideLabel: <BooleanProperty label="Hide Label" />,
				_inline: <BooleanProperty label="Inline" />,
				_ariaExpanded: <BooleanProperty label="ARIA Expanded" />,
				_ariaSelected: <BooleanProperty label="ARIA Selected" />,
			}}
			componentName="KolButton"
			layout={PreviewLayout.CENTERED}
		>
			{(props) => <KolButton {...props} />}
		</Preview>
	);
};

export default ButtonPreview;
