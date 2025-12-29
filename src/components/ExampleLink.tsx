import type { FC } from 'react';
import React from 'react';
import { KolLink } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import { DEV_NETLIFLY_LINK } from '@site/src/shares/version';

interface ComponentProps {
	component: string;
}
export const ExampleLink: FC<ComponentProps> = ({ component }) => {
	return (
		<span>
			<KolLink
				_href={`${DEV_NETLIFLY_LINK}/#/${component}`}
				_label={translate({
					id: 'custom.view-component-example',
				})}
				_target="_blank"
			/>
		</span>
	);
};
