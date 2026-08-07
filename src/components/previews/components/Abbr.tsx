import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolAbbr } from '@public-ui/react-v19';
import { MultiLineTextProperty } from '../properties';
import { translate } from '@docusaurus/Translate';
import { sanitizeHtml } from '../../../shares/sanitize';
import { getPreviewDefaults, PreviewDefaults } from '../utils';

interface AbbrPreviewProps extends JSX.KolAbbr {
	_slot?: string;
}

interface AbbrPreviewComponentProps extends PreviewDefaults<AbbrPreviewProps> {}

const AbbrPreview = (props: AbbrPreviewComponentProps) => {
	const defaultProps = React.useMemo<AbbrPreviewProps>(
		() => ({
			_label: translate({ id: 'preview.component.abbr.label' }),
			_slot: translate({ id: 'preview.component.abbr.slot' }),
		}),
		[]
	);

	return (
		<Preview<AbbrPreviewProps>
			{...getPreviewDefaults(props, defaultProps)}
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_slot: <MultiLineTextProperty label="Abbreviation" />,
			}}
			componentName="KolAbbr"
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
