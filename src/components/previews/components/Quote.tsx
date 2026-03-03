import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { MultiLineTextProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolQuote, KolSelect } from '@public-ui/react-v19';

const QuotePreview: React.FC = (props: {
	initialProps?: JSX.KolQuote;
	visibleProperties?: (keyof JSX.KolQuote)[];
	codeCollapsable?: boolean;
	codeCollapsed?: boolean;
}) => {
	const defaultProps: JSX.KolQuote = {
		_label: 'KoliBri',
		_href: 'https://public-ui.github.io/en/docs',
		_quote:
			'Together, we make HTML semantically accessible using reusable Web Components to ensure usability and accessibility.',
		_variant: 'block',
	};

	return (
		<Preview<JSX.KolQuote>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_href: <KolInputText _label="Source URL" />,
				_quote: <MultiLineTextProperty label="Quote" />,
				_variant: (
					<KolSelect
						_label="Variant"
						_options={[
							{ label: 'Block', value: 'block' },
							{ label: 'Inline', value: 'inline' },
						]}
					/>
				),
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
