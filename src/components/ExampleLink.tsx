import type { FC } from 'react';
import React from 'react';
import { KolLink } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import { DEV_NETLIFLY_LINK } from '@site/src/shares/version';

interface ComponentProps {
	component: string;
}
export const ExampleLink: FC<ComponentProps> = ({ component }) => {
	return (
		<div>
			<Heading as="h2">
				{translate({
					id: 'custom.view-example',
					message: 'Beispiel ansehen',
				})}
			</Heading>
			<KolLink
				_href={`${DEV_NETLIFLY_LINK}/#/${component}`}
				_label={translate({
					id: 'custom.view-component-example',
					message: 'Beispiel der Komponente ansehen',
				})}
			/>
		</div>
	);
};
