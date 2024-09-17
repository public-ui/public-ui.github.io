import React from 'react';
import { KolLink } from '@public-ui/react';
import type { FC } from 'react';
import { useDocsPreferredVersion } from '@docusaurus/theme-common';
import type { Version } from '../../shares/version';
import VERSIONS from '../../versions.json';
import { translate } from '@docusaurus/Translate';

export const ExampleLink: FC = ({ component }) => {
	const docVersion = useDocsPreferredVersion();
	let version = docVersion?.preferredVersion?.name as Version;

	if (version === 'current') {
		const highestVersion = VERSIONS.reduce((max, ver) => {
			const major = parseInt(ver.split('.')[0], 10);
			return major > max ? major : max;
		}, 0);
		version = `v${highestVersion}`;
	} else if (version) {
		version = `v${version.split('.')[0]}`;
	}

	return (
		<div>
			<h2>
				{translate({
					id: 'custom.view-example',
					message: 'Beispiel ansehen',
				})}
			</h2>
			<KolLink
				_href={`https://public-ui.github.io/${version}/sample-react/#/${component}`}
				_label={translate({
					id: 'custom.view-component-example',
					message: 'Beispiel der Komponente ansehen',
				})}
			/>
		</div>
	);
};
