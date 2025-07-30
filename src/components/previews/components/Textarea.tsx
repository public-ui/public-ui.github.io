import React from 'react';
import Preview from '../Preview';
import { BooleanProperty } from '../properties';
import { JSX } from '@public-ui/components';
import { KolInputText, KolInputNumber, KolTextarea, KolSelect } from '@public-ui/react';

const TextAreaPreview: React.FC = (props: {
	initialProps?: JSX.KolTextarea;
	visibleProperties?: (keyof JSX.KolTextarea)[];
}) => {
	const defaultProps: JSX.KolTextarea = {
		_label: 'Textarea Label',
		_placeholder: 'Enter your text here...',
		_rows: 4,
		_value: 'Initial textarea content',
	};

	return (
		<Preview<JSX.KolTextarea>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_placeholder: <KolInputText _label="Placeholder" />,
				_value: <KolInputText _label="Value" />,
				_rows: <KolInputNumber _label="Rows" _min={1} _max={20} />,
				_maxLength: <KolInputNumber _label="Max Length" _min={1} _max={1000} />,
				_disabled: <BooleanProperty label="Disabled" />,
				_readOnly: <BooleanProperty label="Read Only" />,
				_required: <BooleanProperty label="Required" />,
				_hideLabel: <BooleanProperty label="Hide Label" />,
				_hasCounter: <BooleanProperty label="Has Counter" />,
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
			}}
			initialProps={props.initialProps || defaultProps}
			componentName="KolTextarea"
			visibleProperties={props.visibleProperties}
		>
			{(props) => <KolTextarea {...props} />}
		</Preview>
	);
};

export default TextAreaPreview;
