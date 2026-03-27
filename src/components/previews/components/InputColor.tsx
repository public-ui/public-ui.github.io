import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, IconsProperty, MsgProperty, SmartButtonProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputColor, KolInputText } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';

interface InputColorPreviewComponentProps {
	initialProps?: JSX.KolInputColor;
	visibleProperties?: (keyof JSX.KolInputColor)[];
	codeCollapsable?: boolean;
	codeCollapsed?: boolean;
}

const InputColorPreview = (props: InputColorPreviewComponentProps) => {
	const defaultProps: JSX.KolInputColor = {
		_label: translate({ id: 'preview.component.input-color.label' }),
		_value: '#d4fcf4',
	};

	return (
		<Preview<JSX.KolInputColor>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_hint: <KolInputText _label="Hint" />,
				_icons: <IconsProperty label="Icons" directions={['right', 'left']} />,
				_accessKey: <KolInputText _label="Access Key" />,
				_name: <KolInputText _label="Name" />,
				_msg: <MsgProperty label="Message" />,
				_disabled: <BooleanProperty label="Disabled" />,
				_hideLabel: <BooleanProperty label="Hide Label" />,
				_touched: <BooleanProperty label="Touched" />,
				_smartButton: (
					<SmartButtonProperty label="Smart Button" buttonLabel="Smart button label" buttonIcon="kolicon-kolibri" />
				),
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolInputColor"
			visibleProperties={props.visibleProperties}
			codeCollapsable={props.codeCollapsable}
			codeCollapsed={props.codeCollapsed}
			layout={PreviewLayout.CENTERED}
		>
			{(componentProps) => <KolInputColor _touched {...componentProps} />}
		</Preview>
	);
};

export default InputColorPreview;
