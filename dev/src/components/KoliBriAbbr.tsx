import React, { FC } from 'react';
import KoliBri from './KoliBri';
import { translate } from '@docusaurus/Translate';

export const KoliBriAbbr: FC = () => (
	<>
		<strong>
			<KoliBri />
		</strong>{' '}
		{translate({
			id: 'custom.component-stands-for',
			description: 'steht für',
		})}
		{' "'}
		{translate({
			id: 'custom.component-library-for-the-accessibility',
			message: 'Komponentenbibliothek für die Barrierefreiheit',
		})}
		{'"'}
	</>
);
