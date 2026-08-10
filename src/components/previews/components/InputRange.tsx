import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, IconsProperty, MsgProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputNumber, KolInputRange, KolInputText } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import type { PreviewDefaults } from '../utils';
import { getPreviewDefaults } from '../utils';

const InputRangePreview = (props: PreviewDefaults<JSX.KolInputRange>) => {
	const defaultProps = React.useMemo<JSX.KolInputRange>(
		() => ({
			_label: translate({ id: 'preview.component.input-range.label' }),
			_min: 0,
			_max: 100,
			_step: 1,
			_value: 50,
		}),
		[]
	);

	return (
		<Preview<JSX.KolInputRange>
			{...getPreviewDefaults(props, defaultProps)}
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_min: <KolInputNumber _label="Min" />,
				_max: <KolInputNumber _label="Max" />,
				_value: <KolInputNumber _label="Value" />,
				_step: <KolInputNumber _label="Step" _min={1} />,
				_icons: <IconsProperty label="Icons" directions={['right', 'left']} />,
				_hint: <KolInputText _label="Hint" />,
				_accessKey: <KolInputText _label="Access Key" />,
				_name: <KolInputText _label="Name" />,
				_msg: <MsgProperty label="Message" />,
				_disabled: <BooleanProperty label="Disabled" />,
				_hideLabel: <BooleanProperty label="Hide Label" />,
			}}
			componentName="KolInputRange"
			layout={PreviewLayout.DEFAULT}
		>
			{(componentProps) => <KolInputRange _touched {...componentProps} />}
		</Preview>
	);
};

export default InputRangePreview;
