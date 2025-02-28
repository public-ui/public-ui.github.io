import React from 'react';
import { KolLink } from '@public-ui/react';
import type { FC } from 'react';
import { useDocsPreferredVersion } from '../shares/useDocsPreferredVersion';
import { translate } from '@docusaurus/Translate';
import { determinateVersionId } from '../shares/version';
import Heading from '@theme/Heading';

interface ComponentProps {
	component: string;
}
export const ExampleLink: FC<ComponentProps> = ({ component }) => {
	const docVersion = useDocsPreferredVersion();
	const versionId = determinateVersionId(docVersion);

	return (
		<div>
			<Heading as="h2">
				{translate({
					id: 'custom.view-example',
					message: 'Beispiel ansehen',
				})}
			</Heading>
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
