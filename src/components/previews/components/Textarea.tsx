import React from 'react';
import Preview from '../Preview';
import { BooleanProperty, MultiLineTextProperty, ResizeProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolInputNumber, KolTextarea, KolSelect } from '@public-ui/react-v19';

const TextAreaPreview: React.FC = (props: {
	initialProps?: JSX.KolTextarea;
	visibleProperties?: (keyof JSX.KolTextarea)[];
	codeCollapsable?: boolean;
}) => {
	const defaultProps: JSX.KolTextarea = {
		_label: 'Beschreibung',
		_value: '',
	};

	const [value, setValue] = React.useState<string>(defaultProps._value || '');

	return (
		<Preview<JSX.KolTextarea>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_placeholder: <KolInputText _label="Placeholder" />,
				_hint: <KolInputText _label="Hint" />,
				_msg: <KolInputText _label="Error message" />,
				_rows: <KolInputNumber _label="Rows" _min={1} _max={20} />,
				_maxLength: <KolInputNumber _label="Max Length" _min={1} _max={1000} />,
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
				_resize: <ResizeProperty label="Resizable" />,
				_hideLabel: <BooleanProperty label="Hide Label" />,
				_hasCounter: <BooleanProperty label="Has Counter" />,
				_adjustHeight: <BooleanProperty label="Adjust Height" />,
			}}
			initialProps={{ ...props.initialProps, ...defaultProps }}
			componentName="KolTextarea"
			visibleProperties={props.visibleProperties}
			codeCollapsable={props.codeCollapsable}
		>
			{(props) => (
				<KolTextarea {...props} _on={{ onInput: (_: Event, v: unknown) => setValue(v as string) }} _value={value} />
			)}
		</Preview>
	);
};

export default TextAreaPreview;
