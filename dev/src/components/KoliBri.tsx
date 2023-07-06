import { translate } from '@docusaurus/Translate';
import { KolAbbr } from '@public-ui/react';
import React, { FunctionComponent } from 'React';

export const KoliBri: FunctionComponent = () => {
	return (
		<KolAbbr
			_title={translate({
				id: 'custom.component-library-for-the-accessibility',
				message: 'Komponentenbibliothek für die Barrierefreiheit',
			})}
		>
			KoliBri
		</KolAbbr>
	);
};

export default KoliBri;
