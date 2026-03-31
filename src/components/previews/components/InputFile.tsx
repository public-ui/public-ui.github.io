import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, IconsProperty, MsgProperty, SmartButtonProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputFile, KolInputText } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';

interface InputFilePreviewComponentProps {
	initialProps?: JSX.KolInputFile;
	visibleProperties?: (keyof JSX.KolInputFile)[];
	codeCollapsable?: boolean;
	codeCollapsed?: boolean;
}

const InputFilePreview = (props: InputFilePreviewComponentProps) => {
	const defaultProps: JSX.KolInputFile = {
		_label: translate({ id: 'preview.component.input-file.label' }),
	};

	return (
		<Preview<JSX.KolInputFile>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_accept: <KolInputText _label="Accept" />,
				_icons: <IconsProperty label="Icons" directions={['right', 'left']} />,
				_accessKey: <KolInputText _label="Access Key" />,
				_name: <KolInputText _label="Name" />,
				_hint: <KolInputText _label="Hint" />,
				_msg: <MsgProperty label="Message" />,
				_multiple: <BooleanProperty label="Multiple" />,
				_disabled: <BooleanProperty label="Disabled" />,
				_required: <BooleanProperty label="Required" />,
				_hideLabel: <BooleanProperty label="Hide Label" />,
				_smartButton: (
					<SmartButtonProperty label="Smart Button" buttonLabel="Smart button label" buttonIcon="kolicon-kolibri" />
				),
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolInputFile"
			visibleProperties={props.visibleProperties}
			codeCollapsable={props.codeCollapsable}
			codeCollapsed={props.codeCollapsed}
			layout={PreviewLayout.CENTERED}
		>
			{(componentProps) => <KolInputFile _touched {...componentProps} />}
		</Preview>
	);
};

export default InputFilePreview;
