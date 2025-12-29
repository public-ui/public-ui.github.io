import React from 'react';
import Preview from '../Preview';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolAbbr } from '@public-ui/react-v19';
import { MultiLineTextProperty } from '../properties';

type AbbrPreviewProps = JSX.KolAbbr & { _slot?: string };

const AbbrPreview: React.FC = (props: {
	initialProps?: AbbrPreviewProps;
	visibleProperties?: (keyof JSX.KolAbbr | '_slot')[];
	codeCollapsable?: boolean;
}) => {
	const defaultProps: AbbrPreviewProps = {
		_label: 'zum Beispiel',
		_slot: 'z. B.',
	};

	return (
		<Preview<AbbrPreviewProps>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_slot: <MultiLineTextProperty label="Abbreviation" />,
			}}
			initialProps={{ ...props.initialProps, ...defaultProps }}
			componentName="KolAbbr"
			visibleProperties={props.visibleProperties}
			codeCollapsable={props.codeCollapsable}
			centerComponent
			slotKey="_slot"
		>
			{(props) => {
				const { _slot, ...abbrProps } = props;
				return (
					<KolAbbr {...abbrProps} className="">
						<span dangerouslySetInnerHTML={{ __html: (_slot as string) ?? '' }} />
					</KolAbbr>
				);
			}}
		</Preview>
	);
};

export default AbbrPreview;
