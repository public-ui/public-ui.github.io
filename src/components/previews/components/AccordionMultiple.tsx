import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { AccordionMultipleProperty, GenerateAccordionMultiple } from '../properties';
import type { AccordionPreviewProps } from './Accordion';
import { AccordionMultipleDefault } from '../properties/ComponentDefaults';

export type AccordionMultiplePreviewProps = { _accordions: AccordionPreviewProps[] };

interface AccordionMultiplePreviewComponentProps {
	initialProps?: AccordionMultiplePreviewProps;
	visibleProperties?: '_accordions'[];
	codeCollapsable?: boolean;
}

const AccordionMultiplePreview = (props: AccordionMultiplePreviewComponentProps) => {
	const defaultProps = React.useMemo<AccordionMultiplePreviewProps>(() => AccordionMultipleDefault, []);

	const formatSource = (currentProps: AccordionMultiplePreviewProps): string => {
		const { _accordions } = currentProps;
		const accordions = _accordions ?? [];

		const formatAccordion = (accordions: AccordionPreviewProps, indent: number): string => {
			const pad = '\n  '.repeat(indent);
			const { ...accordion } = accordions;
			const accordionProps = Object.entries(accordion as Record<string, unknown>)
				.map(([key, value]) => {
					if (key === '_slot') return '';
					if (value === undefined && value === null && value === '') return '';
					if (typeof value === 'string') return `${pad}${key}="${value}"`;
					if (typeof value === 'boolean') return value ? `${pad}${key}={${value}}` : '';
					if (typeof value === 'number') return `${pad}${key}={${value}}`;
					return `${pad}${key}={${JSON.stringify(value)}}`;
				})
				.join('');
			return `<KolAccordion${accordionProps}\n>${JSON.stringify(accordion._slot).replace(
				/^"|"$/g,
				''
			)}\n</KolAccordion>\n<br/>`;
		};

		const accordionsString = accordions.map((accordion) => formatAccordion(accordion, 1)).join('\n');

		return `${accordionsString}`.replace(/(<br\/>)$/, '');
	};

	return (
		<Preview<AccordionMultiplePreviewProps>
			propertyComponents={{
				_accordions: <AccordionMultipleProperty label="Accordions" />,
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			visibleProperties={props.visibleProperties}
			componentName="KolAccordion"
			codeCollapsable={props.codeCollapsable}
			layout={PreviewLayout.FULL_SIZE}
			sourceFormatter={formatSource}
		>
			{(componentProps) => {
				const { _accordions } = componentProps;
				return GenerateAccordionMultiple(_accordions);
			}}
		</Preview>
	);
};

export default AccordionMultiplePreview;
