import React from 'react';
import { KolAccordion } from '@public-ui/react-v19';

const Accordion = () => (
	<>
		<KolAccordion _label="Accordion" _level={1} _open={true}>
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr
		</KolAccordion>
		<KolAccordion _label="Accordion 2" _level={1}>
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr
		</KolAccordion>
	</>
);

export default Accordion;
