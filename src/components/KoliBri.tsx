import { translate } from '@docusaurus/Translate';
import { KolAbbr } from '@public-ui/react-v19';
import type { FunctionComponent } from 'react';
import React from 'react';

export const KoliBri: FunctionComponent = () => {
	return (
		<KolAbbr
			_label={translate({
				id: 'custom.component-library-for-the-accessibility',
				message: 'Komponentenbibliothek für die Barrierefreiheit',
			})}
		>
			KoliBri
		</KolAbbr>
	);
};

export default KoliBri;
