import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, IconsProperty, MsgProperty, SuggestionsProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolCombobox, KolInputText } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import { ComboboxSuggestionsDefault, getPreviewDefaults, PreviewDefaults } from '../utils';

interface ComboboxPreviewComponentProps extends PreviewDefaults<JSX.KolCombobox> {}

const ComboboxPreview = (props: ComboboxPreviewComponentProps) => {
	const defaultProps = React.useMemo<JSX.KolCombobox>(
		() => ({
			_label: translate({ id: 'preview.component.combobox.label' }),
			_suggestions: ComboboxSuggestionsDefault,
		}),
		[]
	);

	const [value, setValue] = React.useState<string>('');

	return (
		<Preview<JSX.KolCombobox>
			{...getPreviewDefaults(props, defaultProps)}
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_placeholder: <KolInputText _label="Placeholder" />,
				_suggestions: <SuggestionsProperty label="Suggestions" />,
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
				_shortKey: <KolInputText _label="Short Key" />,
			}}
			componentName="KolCombobox"
			layout={PreviewLayout.CENTERED}
		>
			{(props) => (
				<KolCombobox
					_touched
					{...props}
					_on={{ onInput: (_: Event, v: unknown) => setValue(v as string) }}
					_value={value}
				/>
			)}
		</Preview>
	);
};

export default ComboboxPreview;
