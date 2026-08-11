import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, AlignProperty, IconsProperty, VariantProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolSplitButton, KolToolbar } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import { variantButtonOptions } from '../properties/VariantProperty';

interface SplitButtonPreviewComponentProps {
	initialProps?: JSX.KolSplitButton;
	visibleProperties?: (keyof JSX.KolSplitButton)[];
	codeCollapsable?: boolean;
	codeCollapsed?: boolean;
}

const toolbarItems: JSX.KolToolbar['_items'] = [
	{
		type: 'button',
		_label: translate({ id: 'preview.component.split-button.menu.edit' }),
		_icons: { left: { icon: 'codicon-edit' } },
	},
	{
		type: 'button',
		_label: translate({ id: 'preview.component.split-button.menu.copy' }),
		_icons: { left: { icon: 'codicon-copy' } },
	},
	{
		type: 'button',
		_label: translate({ id: 'preview.component.split-button.menu.archive' }),
		_icons: { left: { icon: 'codicon-archive' } },
	},
	{
		type: 'button',
		_label: translate({ id: 'preview.component.split-button.menu.delete' }),
		_icons: { left: { icon: 'codicon-trash' } },
	},
];

const SplitButtonPreview: React.FC<SplitButtonPreviewComponentProps> = (props) => {
	const defaultProps = React.useMemo<JSX.KolSplitButton>(
		() => ({
			_label: translate({ id: 'preview.component.split-button.label' }),
		}),
		[]
	);

	return (
		<Preview<JSX.KolSplitButton>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_variant: <VariantProperty label="Variant" defaultValue="normal" variantOptions={variantButtonOptions} />,
				_tooltipAlign: <AlignProperty label="Tooltip Align" defaultValue="top" />,
				_icons: <IconsProperty label="Icons" />,
				_disabled: <BooleanProperty label="Disabled" />,
				_hideLabel: <BooleanProperty label="Hide Label" />,
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolSplitButton"
			visibleProperties={props.visibleProperties}
			codeCollapsable={props.codeCollapsable}
			codeCollapsed={props.codeCollapsed}
			layout={PreviewLayout.CENTERED}
		>
			{(componentProps) => (
				<KolSplitButton {...componentProps}>
					<KolToolbar _label="" _items={toolbarItems} _orientation="vertical" />
				</KolSplitButton>
			)}
		</Preview>
	);
};

export default SplitButtonPreview;
