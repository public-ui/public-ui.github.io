import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { AlignProperty, BooleanProperty, VariantProperty, IconsProperty, MultiLineTextProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolPopoverButton } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import { sanitizeHtml } from '../../../shares/sanitize';
import type { PreviewDefaults } from '../utils';
import { getPreviewDefaults } from '../utils';
import { variantButtonOptions } from '../properties/VariantProperty';

interface PopoverButtonPreviewProps extends JSX.KolPopoverButton {
	_slot?: string;
}

const PopoverButtonPreview: React.FC<PreviewDefaults<PopoverButtonPreviewProps>> = (props) => {
	const defaultProps = React.useMemo<PopoverButtonPreviewProps>(
		() => ({
			_label: translate({ id: 'preview.component.popover-button.label' }),
			_slot: translate({ id: 'preview.component.popover-button.slot' }),
		}),
		[]
	);

	return (
		<Preview<PopoverButtonPreviewProps>
			{...getPreviewDefaults(props, defaultProps)}
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_popoverAlign: <AlignProperty label="Popover Align" defaultValue="bottom" />,
				_tooltipAlign: <AlignProperty label="Tooltip Align" defaultValue="top" />,
				_variant: <VariantProperty label="Variant" defaultValue="normal" variantOptions={variantButtonOptions} />,
				_icons: <IconsProperty label="Icons" />,
				_slot: <MultiLineTextProperty label="Content" />,
				_disabled: <BooleanProperty label="Disabled" />,
				_hideLabel: <BooleanProperty label="Hide Label" />,
				_accessKey: <KolInputText _label="Access Key" />,
				_shortKey: <KolInputText _label="Short Key" />,
			}}
			componentName="KolPopoverButton"
			layout={PreviewLayout.CENTERED}
			slotKey="_slot"
		>
			{(componentProps) => {
				const { _slot, ...popoverButtonProps } = componentProps;
				const sanitizedHtml = sanitizeHtml(_slot ?? '');
				return (
					<div className="min-h-44">
						<KolPopoverButton {...popoverButtonProps}>
							<div
								style={{
									border: '1px solid #d1d5db',
									borderRadius: '8px',
									background: '#fff',
									padding: '16px',
									boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
								}}
								dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
							/>
						</KolPopoverButton>
					</div>
				);
			}}
		</Preview>
	);
};

export default PopoverButtonPreview;
