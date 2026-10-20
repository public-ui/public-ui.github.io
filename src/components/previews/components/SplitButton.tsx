import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, AlignProperty, IconsProperty, VariantProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolSplitButton, KolToolbar } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import type { PreviewDefaults } from '../utils';
import { getPreviewDefaults } from '../utils';
import { variantButtonOptions } from '../properties/VariantProperty';

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

	const formatSource = (currentProps: JSX.KolSplitButton): string => {
		const propsString = Object.entries(currentProps as unknown as Record<string, unknown>)
			.filter(([, value]) => value !== undefined && value !== null && value !== '')
			.map(([key, value]) => {
				if (typeof value === 'string') return `\n  ${key}="${value}"`;
				if (typeof value === 'boolean') return value ? `\n  ${key}` : '';
				if (typeof value === 'number') return `\n  ${key}={${value}}`;
				return `\n  ${key}={${JSON.stringify(value, null, 2).replace(/\n/g, '\n  ')}}`;
			})
			.filter(Boolean)
			.sort()
			.join('');
		const items = JSON.stringify(toolbarItems, null, 2).replace(/\n/g, '\n    ');

		return `<KolSplitButton${propsString}\n>\n  <KolToolbar\n    _label=""\n    _orientation="vertical"\n    _items={${items}}\n  />\n</KolSplitButton>`;
	};

	return (
		<Preview<JSX.KolSplitButton>
			{...getPreviewDefaults(props, defaultProps)}
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_variant: <VariantProperty label="Variant" defaultValue="normal" variantOptions={variantButtonOptions} />,
				_tooltipAlign: <AlignProperty label="Tooltip Align" defaultValue="top" />,
				_icons: <IconsProperty label="Icons" />,
				_disabled: <BooleanProperty label="Disabled" />,
				_hideLabel: <BooleanProperty label="Hide Label" />,
			}}
			componentName="KolSplitButton"
			layout={PreviewLayout.CENTERED}
			sourceFormatter={formatSource}
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
