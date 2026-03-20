import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolAbbr } from '@public-ui/react-v19';
import { MultiLineTextProperty } from '../properties';
import { translate } from '@docusaurus/Translate';
import { sanitizeHtml } from '../../../shares/sanitize';

type AbbrPreviewProps = JSX.KolAbbr & { _slot?: string };

interface AbbrPreviewComponentProps {
	initialProps?: AbbrPreviewProps;
	visibleProperties?: (keyof JSX.KolAbbr | '_slot')[];
	codeCollapsable?: boolean;
}

const AbbrPreview = (props: AbbrPreviewComponentProps) => {
	const defaultProps: AbbrPreviewProps = {
		_label: translate({ id: 'preview.component.abbr.label' }),
		_slot: translate({ id: 'preview.component.abbr.slot' }),
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
			layout={PreviewLayout.CENTERED}
			slotKey="_slot"
		>
			{(props) => {
				// eslint-disable-next-line react/prop-types
				const { _slot, ...abbrProps } = props;
				const sanitizedHtml = sanitizeHtml(_slot ?? '');
				return (
					<KolAbbr {...abbrProps} className="">
						<span dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
					</KolAbbr>
				);
			}}
		</Preview>
	);
};

export default AbbrPreview;
