import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, MsgProperty, OptionsProperty, OrientationProperty } from '../properties';
import type { JSX, SelectOption } from '@public-ui/components';
import { KolInputRadio, KolInputText } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';

interface InputRadioPreviewComponentProps {
	initialProps?: JSX.KolInputRadio;
	visibleProperties?: (keyof JSX.KolInputRadio)[];
	codeCollapsable?: boolean;
	codeCollapsed?: boolean;
}

const InputRadioPreview = (props: InputRadioPreviewComponentProps) => {
	const defaultProps: JSX.KolInputRadio = {
		_label: translate({ id: 'preview.component.input-radio.label' }),
		_options: [
			{ label: 'Herr', value: 'Herr' },
			{ label: 'Frau', value: 'Frau' },
			{ label: 'Firma', value: 'Firma' },
		] satisfies SelectOption<string>[],
	};

	return (
		<Preview<JSX.KolInputRadio>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_options: <OptionsProperty label="Options" />,
				_orientation: <OrientationProperty label="Orientation" defaultValue="vertical" />,
				_hint: <KolInputText _label="Hint" />,
				_name: <KolInputText _label="Name" />,
				_msg: <MsgProperty label="Message" />,
				_disabled: <BooleanProperty label="Disabled" />,
				_required: <BooleanProperty label="Required" />,
				_hideLabel: <BooleanProperty label="Hide Label" />,
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolInputRadio"
			visibleProperties={props.visibleProperties}
			codeCollapsable={props.codeCollapsable}
			codeCollapsed={props.codeCollapsed}
			layout={PreviewLayout.CENTERED}
		>
			{(componentProps) => <KolInputRadio _touched {...componentProps} />}
		</Preview>
	);
};

export default InputRadioPreview;
