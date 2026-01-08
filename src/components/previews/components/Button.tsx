import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, AlignProperty, IconProperty, VariantProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolButton, KolSelect } from '@public-ui/react-v19';

const ButtonPreview: React.FC = (props: {
	initialProps?: JSX.KolButton;
	visibleProperties?: (keyof JSX.KolButton)[];
	codeCollapsable?: boolean;
}) => {
	const defaultProps: JSX.KolButton = {
		_label: 'Button',
	};

	return (
		<Preview<JSX.KolButton>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_variant: <VariantProperty label="Variant" defaultValue="normal" />,
				_type: (
					<KolSelect
						_label="Type"
						_options={[
							{ label: 'Button', value: 'button' },
							{ label: 'Submit', value: 'submit' },
							{ label: 'Reset', value: 'reset' },
						]}
					/>
				),
				_tooltipAlign: <AlignProperty label="Tooltip Align" defaultValue="top" />,
				_icons: <IconProperty label="Icons" />,
				_accessKey: <KolInputText _label="Access Key" />,
				_ariaControls: <KolInputText _label="ARIA Controls" />,
				_ariaDescription: <KolInputText _label="ARIA Description" />,
				_customClass: <KolInputText _label="Custom Class" />,
				_name: <KolInputText _label="Name" />,
				_shortKey: <KolInputText _label="Short Key" _maxLength={1} />,
				_value: <KolInputText _label="Value" />,
				_disabled: <BooleanProperty label="Disabled" />,
				_hideLabel: <BooleanProperty label="Hide Label" />,
				_inline: <BooleanProperty label="Inline" />,
				_ariaExpanded: <BooleanProperty label="ARIA Expanded" />,
				_ariaSelected: <BooleanProperty label="ARIA Selected" />,
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolButton"
			visibleProperties={props.visibleProperties}
			codeCollapsable={props.codeCollapsable}
			layout={PreviewLayout.CENTERED}
		>
			{(props) => <KolButton {...props} />}
		</Preview>
	);
};

export default ButtonPreview;
