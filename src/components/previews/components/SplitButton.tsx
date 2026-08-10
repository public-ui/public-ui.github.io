import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, AlignProperty, IconsProperty, ButtonVariantProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolSplitButton, KolToolbar } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import type { PreviewDefaults } from '../utils';
import { getPreviewDefaults } from '../utils';

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

const SplitButtonPreview: React.FC<PreviewDefaults<JSX.KolSplitButton>> = (props) => {
	const defaultProps = React.useMemo<JSX.KolSplitButton>(
		() => ({
			_label: translate({ id: 'preview.component.split-button.label' }),
		}),
		[]
	);

	return (
		<Preview<JSX.KolSplitButton>
			{...getPreviewDefaults(props, defaultProps)}
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_variant: <ButtonVariantProperty label="Variant" defaultValue="normal" />,
				_tooltipAlign: <AlignProperty label="Tooltip Align" defaultValue="top" />,
				_icons: <IconsProperty label="Icons" />,
				_disabled: <BooleanProperty label="Disabled" />,
				_hideLabel: <BooleanProperty label="Hide Label" />,
			}}
			componentName="KolSplitButton"
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
