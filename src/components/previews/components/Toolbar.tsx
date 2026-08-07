import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolSelect, KolTextarea, KolToolbar } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import { PreviewDefaults, ToolbarItemsDefault } from '../utils';

interface ToolbarPreviewComponentProps extends PreviewDefaults<JSX.KolToolbar> {}

const ToolbarPreview = (props: ToolbarPreviewComponentProps) => {
	const defaultProps = React.useMemo<JSX.KolToolbar>(
		() => ({
			_label: translate({ id: 'preview.component.toolbar.label' }),
			_items: ToolbarItemsDefault,
		}),
		[]
	);

	const [itemsJson, setItemsJson] = React.useState<string>(JSON.stringify(defaultProps._items, null, 2));
	const [itemsError, setItemsError] = React.useState<string>('');

	const parseItems = (json: string) => {
		try {
			const parsed = JSON.parse(json) as JSX.KolToolbar['_items'];
			setItemsError('');
			return parsed;
		} catch {
			setItemsError('Invalid JSON');
			return defaultProps._items;
		}
	};

	return (
		<Preview<JSX.KolToolbar>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_orientation: (
					<KolSelect
						_label="Orientation"
						_options={[
							{ label: 'Default', value: '' },
							{ label: 'Horizontal', value: 'horizontal' },
							{ label: 'Vertical', value: 'vertical' },
						]}
					/>
				),
				_items: (
					<KolTextarea
						_label="Items (JSON)"
						_rows={15}
						_msg={itemsError ? { _type: 'error', _description: itemsError } : undefined}
						_on={{
							onInput: (_: Event, v: unknown) => {
								setItemsJson(v as string);
							},
						}}
						_value={itemsJson}
					/>
				),
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolToolbar"
			visibleProperties={props.visibleProperties}
			hideSourceCodeDetails={props.hideSourceCodeDetails}
			sourceCodeDetailsCollapsed={props.sourceCodeDetailsCollapsed}
			layout={PreviewLayout.CENTERED}
		>
			{(props) => <KolToolbar {...props} _items={parseItems(itemsJson)} />}
		</Preview>
	);
};

export default ToolbarPreview;
