import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import type { JSX, ToolbarItemsPropType } from '@public-ui/components';
import { KolInputText, KolSelect, KolToolbar } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import type { PreviewDefaults } from '../utils';
import { getPreviewDefaults, ToolbarItemsDefault } from '../utils';
import { ToolbarItemsProperty } from '../properties';

const ToolbarPreview = (props: PreviewDefaults<JSX.KolToolbar>) => {
	const defaultProps = React.useMemo<JSX.KolToolbar>(
		() => ({
			_label: translate({ id: 'preview.component.toolbar.label' }),
			_items: ToolbarItemsDefault,
		}),
		[]
	);

	const parseItems = (json: ToolbarItemsPropType) => {
		try {
			const parsed = JSON.parse(JSON.stringify(json, null, 2)) as JSX.KolToolbar['_items'];
			return parsed;
		} catch {
			return defaultProps._items;
		}
	};

	return (
		<Preview<JSX.KolToolbar>
			{...getPreviewDefaults(props, defaultProps)}
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
				_items: <ToolbarItemsProperty label="Items" />,
			}}
			componentName="KolToolbar"
			layout={PreviewLayout.CENTERED}
		>
			{(props) => <KolToolbar {...props} _items={parseItems(props._items)} />}
		</Preview>
	);
};

export default ToolbarPreview;
