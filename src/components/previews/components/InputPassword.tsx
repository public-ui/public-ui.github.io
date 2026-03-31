import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, IconsProperty, MsgProperty, SmartButtonProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputNumber, KolInputPassword, KolInputText, KolSelect } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';

interface InputPasswordPreviewComponentProps {
	initialProps?: JSX.KolInputPassword;
	visibleProperties?: (keyof JSX.KolInputPassword)[];
	codeCollapsable?: boolean;
	codeCollapsed?: boolean;
}

const InputPasswordPreview = (props: InputPasswordPreviewComponentProps) => {
	const defaultProps: JSX.KolInputPassword = {
		_label: translate({ id: 'preview.component.input-password.label' }),
	};

	return (
		<Preview<JSX.KolInputPassword>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_placeholder: <KolInputText _label="Placeholder" />,
				_icons: <IconsProperty label="Icons" directions={['right', 'left']} />,
				_accessKey: <KolInputText _label="Access Key" />,
				_name: <KolInputText _label="Name" />,
				_hint: <KolInputText _label="Hint" />,
				_msg: <MsgProperty label="Message" />,
				_maxLength: <KolInputNumber _label="Max Length" _min={0} />,
				_maxLengthBehavior: (
					<KolSelect
						_label="Max Length Behavior"
						_options={[
							{ label: 'None', value: '' },
							{ label: 'Soft', value: 'soft' },
							{ label: 'Hard', value: 'hard' },
						]}
					/>
				),
				_disabled: <BooleanProperty label="Disabled" />,
				_readOnly: <BooleanProperty label="Read Only" />,
				_required: <BooleanProperty label="Required" />,
				_hasCounter: <BooleanProperty label="Has Counter" />,
				_hideLabel: <BooleanProperty label="Hide Label" />,
				_smartButton: (
					<SmartButtonProperty label="Smart Button" buttonLabel="Passwort anzeigen" buttonIcon="kolicon-eye" />
				),
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolInputPassword"
			visibleProperties={props.visibleProperties}
			codeCollapsable={props.codeCollapsable}
			codeCollapsed={props.codeCollapsed}
			layout={PreviewLayout.CENTERED}
		>
			{(componentProps) => <KolInputPassword _touched {...componentProps} />}
		</Preview>
	);
};

export default InputPasswordPreview;
