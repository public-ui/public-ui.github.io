import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, MsgProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputCheckbox, KolInputText, KolSelect } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';

interface InputCheckboxPreviewComponentProps {
	initialProps?: JSX.KolInputCheckbox;
	visibleProperties?: (keyof JSX.KolInputCheckbox)[];
	codeCollapsable?: boolean;
	codeCollapsed?: boolean;
}

const InputCheckboxPreview = (props: InputCheckboxPreviewComponentProps) => {
	const defaultProps = React.useMemo<JSX.KolInputCheckbox>(
		() => ({
			_label: translate({ id: 'preview.component.input-checkbox.label' }),
		}),
		[],
	);

	return (
		<Preview<JSX.KolInputCheckbox>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_variant: (
					<KolSelect
						_label="Variant"
						_options={[
							{ label: 'Checkbox', value: 'default' },
							{ label: 'Switch', value: 'switch' },
							{ label: 'Button', value: 'button' },
						]}
					/>
				),
				_checked: <BooleanProperty label="Checked" />,
				_indeterminate: <BooleanProperty label="Indeterminate" />,
				_disabled: <BooleanProperty label="Disabled" />,
				_required: <BooleanProperty label="Required" />,
				_hideLabel: <BooleanProperty label="Hide Label" />,
				_hint: <KolInputText _label="Hint" />,
				_accessKey: <KolInputText _label="Access Key" />,
				_name: <KolInputText _label="Name" />,
				_msg: <MsgProperty label="Message" />,
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolInputCheckbox"
			visibleProperties={props.visibleProperties}
			codeCollapsable={props.codeCollapsable}
			codeCollapsed={props.codeCollapsed}
			layout={PreviewLayout.CENTERED}
		>
			{(componentProps) => <KolInputCheckbox _touched {...componentProps} />}
		</Preview>
	);
};

export default InputCheckboxPreview;
