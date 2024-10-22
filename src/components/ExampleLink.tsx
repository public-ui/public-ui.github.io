import React from 'react';
import { KolLink } from '@public-ui/react';
import type { FC } from 'react';
import { useDocsPreferredVersion } from '@docusaurus/theme-common';
import { translate } from '@docusaurus/Translate';
import { determinateVersionId } from '../shares/version';

interface ComponentProps {
	component: React.ComponentType<string>;
}
export const ExampleLink: FC<ComponentProps> = ({ component }) => {
	const docVersion = useDocsPreferredVersion();
	const versionId = determinateVersionId(docVersion);

	return (
		<div>
			<h2>
				{translate({
					id: 'custom.view-example',
					message: 'Beispiel ansehen',
				})}
			</h2>
			<KolLink
				_href={`/${versionId}/sample-react/#/${component}`}
				_label={translate({
					id: 'custom.view-component-example',
					message: 'Beispiel der Komponente ansehen',
				})}
			/>
		</div>
	);
};
