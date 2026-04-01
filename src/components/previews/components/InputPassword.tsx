import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { AlignProperty, BooleanProperty, IconsProperty, MsgProperty, PasswordVariantProperty, SmartButtonProperty } from '../properties';
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
		_variant: 'visibility-toggle',
	};

	return (
		<Preview<JSX.KolInputPassword>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_placeholder: <KolInputText _label="Placeholder" />,
				_icons: <IconsProperty label="Icons" directions={['right', 'left']} />,
				_accessKey: <KolInputText _label="Access Key" _maxLength={1} />,
				_name: <KolInputText _label="Name" />,
				_hideMsg: <BooleanProperty label="Hide Message" />,
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
				_pattern: <KolInputText _label="Pattern" />,
				_readOnly: <BooleanProperty label="Read Only" />,
				_required: <BooleanProperty label="Required" />,
				_hasCounter: <BooleanProperty label="Has Counter" />,
				_hideLabel: <BooleanProperty label="Hide Label" />,
				_shortKey: <KolInputText _label="Short Key" _maxLength={1} />,
				_smartButton: (
					<SmartButtonProperty label="Smart Button" buttonLabel="Smart button label" buttonIcon="kolicon-kolibri" />
				),
				_tooltipAlign: <AlignProperty label="Tooltip Align" defaultValue='top' />,
				_variant: <PasswordVariantProperty label="Variant: Visibility toggle" defaultValue='' />,
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
