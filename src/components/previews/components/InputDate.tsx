import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, IconsProperty, MsgProperty, SmartButtonProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputDate, KolInputText, KolSelect } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';

interface InputDatePreviewComponentProps {
	initialProps?: JSX.KolInputDate;
	visibleProperties?: (keyof JSX.KolInputDate)[];
	codeCollapsable?: boolean;
	codeCollapsed?: boolean;
}

const InputDatePreview = (props: InputDatePreviewComponentProps) => {
	const defaultProps: JSX.KolInputDate = {
		_label: translate({ id: 'preview.component.input-date.label' }),
		_type: 'date',
	};

	return (
		<Preview<JSX.KolInputDate>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_type: (
					<KolSelect
						_label="Type"
						_options={[
							{ label: 'date', value: 'date' },
							{ label: 'datetime-local', value: 'datetime-local' },
							{ label: 'month', value: 'month' },
							{ label: 'time', value: 'time' },
							{ label: 'week', value: 'week' },
						]}
					/>
				),
				_hint: <KolInputText _label="Hint" />,
				_accessKey: <KolInputText _label="Access Key" />,
				_name: <KolInputText _label="Name" />,
				_icons: <IconsProperty label="Icons" directions={['right', 'left']} />,
				_msg: <MsgProperty label="Message" />,
				_disabled: <BooleanProperty label="Disabled" />,
				_readOnly: <BooleanProperty label="Read Only" />,
				_required: <BooleanProperty label="Required" />,
				_hideLabel: <BooleanProperty label="Hide Label" />,
				_smartButton: (
					<SmartButtonProperty label="Smart Button" buttonLabel="Smart button label" buttonIcon="kolicon-kolibri" />
				),
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolInputDate"
			visibleProperties={props.visibleProperties}
			codeCollapsable={props.codeCollapsable}
			codeCollapsed={props.codeCollapsed}
			layout={PreviewLayout.CENTERED}
		>
			{(componentProps) => <KolInputDate _touched {...componentProps} />}
		</Preview>
	);
};

export default InputDatePreview;
