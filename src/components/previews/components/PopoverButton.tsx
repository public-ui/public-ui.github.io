import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { AlignProperty, BooleanProperty, ButtonVariantProperty, IconsProperty, MultiLineTextProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolPopoverButton } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import { sanitizeHtml } from '../../../shares/sanitize';

type PopoverButtonPreviewProps = JSX.KolPopoverButton & { _slot?: string };

interface PopoverButtonPreviewComponentProps {
	initialProps?: PopoverButtonPreviewProps;
	visibleProperties?: (keyof JSX.KolPopoverButton | '_slot')[];
	codeCollapsable?: boolean;
	codeCollapsed?: boolean;
}

const PopoverButtonPreview: React.FC<PopoverButtonPreviewComponentProps> = (props) => {
	const defaultProps = React.useMemo<PopoverButtonPreviewProps>(
		() => ({
			_label: translate({ id: 'preview.component.popover-button.label' }),
			_slot: translate({ id: 'preview.component.popover-button.slot' }),
		}),
		[],
	);

	return (
		<Preview<PopoverButtonPreviewProps>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_popoverAlign: <AlignProperty label="Popover Align" defaultValue="bottom" />, _tooltipAlign: <AlignProperty label="Tooltip Align" defaultValue="top" />, _variant: <ButtonVariantProperty label="Variant" defaultValue="normal" />,
				_icons: <IconsProperty label="Icons" />,
				_slot: <MultiLineTextProperty label="Content" />,
				_disabled: <BooleanProperty label="Disabled" />,
				_hideLabel: <BooleanProperty label="Hide Label" />,
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolPopoverButton"
			visibleProperties={props.visibleProperties}
			codeCollapsable={props.codeCollapsable}
			codeCollapsed={props.codeCollapsed}
			layout={PreviewLayout.CENTERED}
			slotKey="_slot"
		>
			{(componentProps) => {
				const { _slot, ...popoverButtonProps } = componentProps;
				const sanitizedHtml = sanitizeHtml(_slot ?? '');
				return (
					<div className="min-h-44">
						<KolPopoverButton {...popoverButtonProps}>
							<div style={{ border: '1px solid #d1d5db', borderRadius: '8px', background: '#fff', padding: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.12)' }} dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
						</KolPopoverButton>
					</div>
				);
			}}
		</Preview>
	);
};

export default PopoverButtonPreview;
