import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, IconsProperty, MsgProperty, SmartButtonProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputNumber, KolInputText } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';

interface InputNumberPreviewComponentProps {
	initialProps?: JSX.KolInputNumber;
	visibleProperties?: (keyof JSX.KolInputNumber)[];
	codeCollapsable?: boolean;
	codeCollapsed?: boolean;
}

const InputNumberPreview = (props: InputNumberPreviewComponentProps) => {
	const defaultProps: JSX.KolInputNumber = {
		_label: translate({ id: 'preview.component.input-number.label' }),
	};

	return (
		<Preview<JSX.KolInputNumber>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_placeholder: <KolInputText _label="Placeholder" />,
				_hint: <KolInputText _label="Hint" />,
				_icons: <IconsProperty label="Icons" directions={['right', 'left']} />,
				_accessKey: <KolInputText _label="Access Key" />,
				_name: <KolInputText _label="Name" />,
				_msg: <MsgProperty label="Message" />,
				_min: <KolInputNumber _label="Min" />,
				_max: <KolInputNumber _label="Max" />,
				_step: <KolInputNumber _label="Step" _min={0} />,
				_disabled: <BooleanProperty label="Disabled" />,
				_readOnly: <BooleanProperty label="Read Only" />,
				_required: <BooleanProperty label="Required" />,
				_hideLabel: <BooleanProperty label="Hide Label" />,
				_smartButton: (
					<SmartButtonProperty label="Smart Button" buttonLabel="Smart button label" buttonIcon="kolicon-kolibri" />
				),
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolInputNumber"
			visibleProperties={props.visibleProperties}
			codeCollapsable={props.codeCollapsable}
			codeCollapsed={props.codeCollapsed}
			layout={PreviewLayout.CENTERED}
		>
			{(componentProps) => <KolInputNumber _touched {...componentProps} />}
		</Preview>
	);
};

export default InputNumberPreview;
