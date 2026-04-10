import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, IconsProperty, MsgProperty, RadioOptionsProperty } from '../properties';
import type { JSX, SelectOption } from '@public-ui/components';
import { KolInputText, KolSingleSelect } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';

interface SingleSelectPreviewComponentProps {
	initialProps?: JSX.KolSingleSelect;
	visibleProperties?: (keyof JSX.KolSingleSelect)[];
	codeCollapsable?: boolean;
	codeCollapsed?: boolean;
}

const SingleSelectPreview = (props: SingleSelectPreviewComponentProps) => {
	const defaultProps = React.useMemo<JSX.KolSingleSelect>(
		() => ({
			_label: translate({ id: 'preview.component.single-select.label' }),
			_options: [
				{ label: 'Herr', value: 0 },
				{ label: 'Frau', value: 1 },
				{ label: 'Firma', value: 2 },
			] satisfies SelectOption<number>[],
		}),
		[],
	);

	const [value, setValue] = React.useState<number | undefined>(undefined);

	return (
		<Preview<JSX.KolSingleSelect>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_options: <RadioOptionsProperty label="Options" />,
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
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolSingleSelect"
			visibleProperties={props.visibleProperties}
			codeCollapsable={props.codeCollapsable}
			codeCollapsed={props.codeCollapsed}
			layout={PreviewLayout.CENTERED}
		>
			{(componentProps) => (
				<KolSingleSelect
					_touched
					{...componentProps}
					_on={{ onInput: (_: Event, v: unknown) => setValue(v as number) }}
					_value={value}
				/>
			)}
		</Preview>
	);
};

export default SingleSelectPreview;
