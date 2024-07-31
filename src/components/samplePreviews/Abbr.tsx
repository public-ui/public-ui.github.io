import React from 'react';
import { KolAbbr } from '@public-ui/react';

const Abbr = () => (
	<p>
		Lorem ipsum{' '}
		<KolAbbr _label="Abkürzung" _tooltipAlign="right">
			z.B.
		</KolAbbr>{' '}
		dolor sit amet.
	</p>
);

export default Abbr;
