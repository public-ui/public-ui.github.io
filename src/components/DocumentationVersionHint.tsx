import { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { KolLink } from '@public-ui/react';
import React, { type ReactNode } from 'react';

export default function DocumentationVersionHint(): ReactNode {
	const { i18n } = useDocusaurusContext();
	const versionHint = translate(
		{
			id: 'custom.docs-version-hint',
			message: 'Wir haben KoliBri - Public UI {version} veröffentlicht. Für die LTS Version, siehe {link}.',
		},
		{ version: 'VERSION', link: 'LINK' }
	);
	const [beforeVersion, afterVersion] = versionHint.split('VERSION');
	const [beforeLink, afterLink] = afterVersion.split('LINK');
	return (
		<p className="version-hint">
			{beforeVersion}
			<b>v3</b>
			{beforeLink}
			<KolLink
				style={{
					padding: '0 .25rem',
				}}
				_href={`https://public-ui.github.io/v2${i18n.currentLocale === 'en' ? '/en' : ''}`}
				_label={'https://public-ui.github.io/v2'}
			></KolLink>
			{afterLink}
		</p>
	);
}
