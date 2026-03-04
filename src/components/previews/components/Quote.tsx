import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { MultiLineTextProperty, QuoteVariantProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolQuote } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';

interface QuotePreviewProps {
	initialProps?: JSX.KolQuote;
	visibleProperties?: (keyof JSX.KolQuote)[];
	codeCollapsable?: boolean;
	codeCollapsed?: boolean;
}

const QuotePreview: React.FC<QuotePreviewProps> = (props) => {
	const defaultProps: JSX.KolQuote = {
		_label: translate({ id: 'preview.component.quote.label' }),
		_href: translate({ id: 'preview.component.quote.href' }),
		_quote: translate({ id: 'preview.component.quote.quote' }),
		_variant: 'block',
	};

	return (
		<Preview<JSX.KolQuote>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_href: <KolInputText _label="Source URL" />,
				_quote: <MultiLineTextProperty label="Quote" />,
				_variant: <QuoteVariantProperty label="Variant" defaultValue="block" />,
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolQuote"
			visibleProperties={props.visibleProperties}
			codeCollapsable={props.codeCollapsable}
			codeCollapsed={props.codeCollapsed}
			layout={PreviewLayout.CENTERED}
		>
			{(componentProps) => <KolQuote {...componentProps} />}
		</Preview>
	);
};

export default QuotePreview;
