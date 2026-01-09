import { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { KolLink } from '@public-ui/react-v19';
import React, { type ReactNode } from 'react';

export default function DocumentationVersionHint(): ReactNode {
	const { i18n } = useDocusaurusContext();
	const versionHint = translate(
		{
			id: 'custom.docs-version-hint',
			message: 'Diese Dokumentation behandelt KoliBri - Public UI {version}. Für die aktuellste Version, siehe {link}.',
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
				_href={`https://public-ui.github.io/${i18n.currentLocale === 'en' ? 'en' : ''}`}
				_label={'https://public-ui.github.io/'}
			></KolLink>
			{afterLink}
		</p>
	);
}
