import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, IconsProperty, MsgProperty, SelectOptionsProperty } from '../properties';
import { getPreviewDefaults, SelectOptionsDefault } from '../utils';
import type { JSX } from '@public-ui/components';
import { KolInputRange, KolInputText, KolSingleSelect } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import { PreviewDefaults } from '../utils';

interface SingleSelectPreviewComponentProps extends PreviewDefaults<JSX.KolSingleSelect> {}

const SingleSelectPreview = (props: SingleSelectPreviewComponentProps) => {
	const defaultProps = React.useMemo<JSX.KolSingleSelect>(
		() => ({
			_label: translate({ id: 'preview.component.single-select.label' }),
			_options: SelectOptionsDefault,
		}),
		[]
	);

	const [value, setValue] = React.useState<string | undefined>(undefined);

	return (
		<Preview<JSX.KolSingleSelect>
			{...getPreviewDefaults(props, defaultProps)}
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_options: <SelectOptionsProperty label="Options" />,
				_placeholder: <KolInputText _label="Placeholder" />,
				_icons: <IconsProperty label="Icons" directions={['right', 'left']} />,
				_accessKey: <KolInputText _label="Access Key" />,
				_name: <KolInputText _label="Name" />,
				_hint: <KolInputText _label="Hint" />,
				_msg: <MsgProperty label="Message" />,
				_disabled: <BooleanProperty label="Disabled" />,
				_required: <BooleanProperty label="Required" />,
				_hasClearButton: <BooleanProperty label="Has Clear Button" />,
				_hideLabel: <BooleanProperty label="Hide Label" />,
				_hideMsg: <BooleanProperty label="Hide Message" />,
				_touched: <BooleanProperty label="Touched" />,
				_rows: <KolInputRange _label="Rows" _max="3"></KolInputRange>,
			}}
			componentName="KolSingleSelect"
			layout={PreviewLayout.CENTERED}
		>
			{(componentProps) => (
				<KolSingleSelect
					_touched
					{...componentProps}
					_on={{ onInput: (_: Event, v: unknown) => setValue(v as string) }}
					_value={value}
				/>
			)}
		</Preview>
	);
};

export default SingleSelectPreview;
