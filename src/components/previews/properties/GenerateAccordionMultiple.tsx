import { KolAccordion } from '@public-ui/react-v19';
import React from 'react';
import type { AccordionPreviewProps } from '../components/Accordion';
import { sanitizeHtml } from '../../../shares/sanitize';

function GenerateAccordionMultiple(_accordions: AccordionPreviewProps[]) {
	return (
		<>
			{_accordions.map(({ _slot, ...accordion }) => (
				<>
					<KolAccordion {...accordion}>
						<div dangerouslySetInnerHTML={{ __html: sanitizeHtml(_slot ?? '') }} />
					</KolAccordion>
					<br />
				</>
			))}
		</>
	);
}

export default GenerateAccordionMultiple;
