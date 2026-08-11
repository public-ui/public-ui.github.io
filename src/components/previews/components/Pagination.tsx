import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BoundedNumberProperty, ClampedNumberProperty, PaginationHasButtonsProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolPagination } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import type { PreviewDefaults } from '../utils';
import { getPreviewDefaults } from '../utils';

const PaginationPreview = (props: PreviewDefaults<JSX.KolPagination>) => {
	const defaultProps = React.useMemo<JSX.KolPagination>(
		() => ({
			_label: translate({ id: 'preview.component.pagination.label' }),
			_max: 100,
			_pageSize: 5,
			_siblingCount: 1,
			_boundaryCount: 1,
			_page: 6,
			_on: {},
		}),
		[]
	);

	const [maxValue, setMaxValue] = React.useState<number>(props.initialProps?._max ?? defaultProps._max);

	const handleMaxChange = (newMax: number) => {
		setMaxValue(newMax);
	};

	return (
		<Preview<JSX.KolPagination>
			{...getPreviewDefaults(props, defaultProps)}
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_max: (
					<BoundedNumberProperty label="Max" min={1} max={1000} _value={maxValue} onBoundaryChange={handleMaxChange} />
				),
				_page: (
					<ClampedNumberProperty
						label="Page"
						min={1}
						max={maxValue}
						_value={props.initialProps?._page ?? defaultProps._page}
					/>
				),
				_pageSize: <BoundedNumberProperty label="Page Size" min={1} max={100} />,
				_siblingCount: <BoundedNumberProperty label="Sibling Count" min={0} max={10} />,
				_boundaryCount: <BoundedNumberProperty label="Boundary Count" min={0} max={10} />,
				_hasButtons: <PaginationHasButtonsProperty label="Has Buttons" />,
			}}
			componentName="KolPagination"
			layout={PreviewLayout.DEFAULT}
		>
			{(componentProps) => <KolPagination {...componentProps} />}
		</Preview>
	);
};

export default PaginationPreview;
