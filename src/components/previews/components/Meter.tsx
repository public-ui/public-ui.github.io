import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import type { JSX } from '@public-ui/components';
import { KolInputNumber, KolInputText, KolMeter, KolSelect } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import { getPreviewDefaults, PreviewDefaults } from '../utils';

interface MeterPreviewComponentProps extends PreviewDefaults<JSX.KolMeter> {}

const MeterPreview = (props: MeterPreviewComponentProps) => {
	const defaultProps = React.useMemo<JSX.KolMeter>(
		() => ({
			_label: translate({
				id: 'preview.component.meter.label',
				message: 'Auslastung',
			}),
			_value: 50,
			_max: 100,
			_min: 0,
		}),
		[]
	);

	return (
		<Preview<JSX.KolMeter>
			{...getPreviewDefaults(props, defaultProps)}
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_value: <KolInputNumber _label="Value" />,
				_min: <KolInputNumber _label="Min" />,
				_max: <KolInputNumber _label="Max" />,
				_low: <KolInputNumber _label="Low" />,
				_high: <KolInputNumber _label="High" />,
				_optimum: <KolInputNumber _label="Optimum" />,
				_unit: <KolInputText _label="Unit" />,
				_orientation: (
					<KolSelect
						_label="Orientation"
						_options={[
							{ label: 'Horizontal', value: 'horizontal' },
							{ label: 'Vertical', value: 'vertical' },
						]}
					/>
				),
			}}
			componentName="KolMeter"
			layout={PreviewLayout.CENTERED}
		>
			{(componentProps) => <KolMeter {...componentProps} />}
		</Preview>
	);
};

export default MeterPreview;
