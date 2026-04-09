import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import type { JSX } from '@public-ui/components';
import { KolInputNumber, KolInputText, KolMeter, KolSelect } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';

interface MeterPreviewComponentProps {
	initialProps?: JSX.KolMeter;
	visibleProperties?: (keyof JSX.KolMeter)[];
	codeCollapsable?: boolean;
	codeCollapsed?: boolean;
}

const MeterPreview = (props: MeterPreviewComponentProps) => {
	const defaultProps: JSX.KolMeter = {
		_label: translate({
			id: 'preview.component.meter.label',
			message: 'Auslastung',
		}),
		_value: 50,
		_max: 100,
		_min: 0,
	};

	return (
		<Preview<JSX.KolMeter>
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
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolMeter"
			visibleProperties={props.visibleProperties}
			codeCollapsable={props.codeCollapsable}
			codeCollapsed={props.codeCollapsed}
			layout={PreviewLayout.CENTERED}
		>
			{(componentProps) => <KolMeter {...componentProps} />}
		</Preview>
	);
};

export default MeterPreview;
