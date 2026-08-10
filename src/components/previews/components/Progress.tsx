import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BoundedNumberProperty, ClampedNumberProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolProgress, KolSelect } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import type { PreviewDefaults } from '../utils';
import { getPreviewDefaults } from '../utils';

const ProgressPreview = (props: PreviewDefaults<JSX.KolProgress>) => {
	const defaultProps = React.useMemo<JSX.KolProgress>(
		() => ({
			_label: translate({
				id: 'preview.component.progress.label',
				message: 'Progress',
			}),
			_value: 20,
			_max: 100,
		}),
		[]
	);

	const [maxValue, setMaxValue] = React.useState<number>(props.initialProps?._max ?? defaultProps._max);

	const handleMaxChange = (newMax: number) => {
		setMaxValue(newMax);
	};

	return (
		<Preview<JSX.KolProgress>
			{...getPreviewDefaults(props, defaultProps)}
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_value: (
					<ClampedNumberProperty
						label="Value"
						min={0}
						max={maxValue}
						_value={props.initialProps?._value ?? defaultProps._value}
					/>
				),
				_max: (
					<BoundedNumberProperty label="Max" min={1} max={1000} _value={maxValue} onBoundaryChange={handleMaxChange} />
				),
				_unit: <KolInputText _label="Unit" />,
				_variant: (
					<KolSelect
						_label="Variant"
						_options={[
							{ label: 'Bar', value: 'bar' },
							{ label: 'Cycle', value: 'cycle' },
						]}
					/>
				),
			}}
			componentName="KolProgress"
			layout={PreviewLayout.CENTERED}
		>
			{(componentProps) => <KolProgress {...componentProps} />}
		</Preview>
	);
};

export default ProgressPreview;
