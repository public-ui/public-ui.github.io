import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, MsgProperty, SelectOptionsProperty } from '../properties';
import type { JSX, SelectOption } from '@public-ui/components';
import { KolInputNumber, KolInputText, KolSelect } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';

interface SelectPreviewComponentProps {
	initialProps?: JSX.KolSelect;
	visibleProperties?: (keyof JSX.KolSelect)[];
	codeCollapsable?: boolean;
	codeCollapsed?: boolean;
}

const SelectPreview = (props: SelectPreviewComponentProps) => {
	const defaultProps = React.useMemo<JSX.KolSelect>(
		() => ({
			_label: translate({ id: 'preview.component.select.label' }),
			_options: [
				{ label: 'Herr', value: 'Mr.' },
				{ label: 'Frau', value: 'Mrs.' },
				{ label: 'Firma', value: 'Company' },
			] satisfies SelectOption<string>[],
		}),
		[],
	);

	return (
		<Preview<JSX.KolSelect>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_options: <SelectOptionsProperty label="Options" />,
				_multiple: <BooleanProperty label="Multiple" />,
				_rows: <KolInputNumber _label="Rows" _min={1} _max={20} />,
				_hint: <KolInputText _label="Hint" />,
				_accessKey: <KolInputText _label="Access Key" />,
				_name: <KolInputText _label="Name" />,
				_msg: <MsgProperty label="Message" />,
				_disabled: <BooleanProperty label="Disabled" />,
				_required: <BooleanProperty label="Required" />,
				_hideLabel: <BooleanProperty label="Hide Label" />,
				_shortKey: <KolInputText _label="Short Key" />,
				_touched: <BooleanProperty label="Touched" />,
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolSelect"
			visibleProperties={props.visibleProperties}
			codeCollapsable={props.codeCollapsable}
			codeCollapsed={props.codeCollapsed}
			layout={PreviewLayout.CENTERED}
		>
			{(componentProps) => <KolSelect _touched {...componentProps} />}
		</Preview>
	);
};

export default SelectPreview;
