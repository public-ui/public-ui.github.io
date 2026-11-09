import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import {
	AlignProperty,
	BoundedNumberProperty,
	ClampedNumberProperty,
	PaginationHasButtonsProperty,
} from '../properties';
import PageSizeOptionsProperty from '../properties/PageSizeOptionsProperty';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolPagination } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import type { PreviewDefaults } from '../utils';
import { getPreviewDefaults } from '../utils';

/**
 * KolPagination setzt die ausgewählte Seite nicht selbst, sondern meldet sie über `onChangePage`.
 * Wie in einer Anwendung übernimmt die Preview die gemeldete Seite in `_page`, damit ein Klick
 * die Seite sichtbar wechselt.
 */
const PaginationWithPageState = (props: JSX.KolPagination) => {
	const [page, setPage] = React.useState<number>(props._page);

	React.useEffect(() => {
		setPage(props._page);
	}, [props._page]);

	const on = React.useMemo<JSX.KolPagination['_on']>(
		() => ({
			...props._on,
			onChangePage: (event: Event, value: number) => {
				setPage(value);
				const callback = props._on?.onChangePage;
				if (typeof callback === 'function') {
					callback(event, value);
				}
			},
		}),
		[props._on]
	);

	return <KolPagination {...props} _page={page} _on={on} />;
};

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
				_pageSizeOptions: <PageSizeOptionsProperty label="Page Size Options" />,
				_siblingCount: <BoundedNumberProperty label="Sibling Count" min={0} max={10} />,
				_boundaryCount: <BoundedNumberProperty label="Boundary Count" min={0} max={10} />,
				_hasButtons: <PaginationHasButtonsProperty label="Has Buttons" />,
				_tooltipAlign: <AlignProperty label="Tooltip Align" defaultValue="top" />,
			}}
			componentName="KolPagination"
			layout={PreviewLayout.DEFAULT}
		>
			{(componentProps) => <PaginationWithPageState {...componentProps} />}
		</Preview>
	);
};

export default PaginationPreview;
