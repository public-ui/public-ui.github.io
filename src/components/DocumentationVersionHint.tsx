import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { KolLink } from '@public-ui/react';
import React, { type ReactNode } from 'react';

export default function DocumentationVersionHint(): ReactNode {
	const { i18n } = useDocusaurusContext();
	return (
		<p className="version-hint">
			<Translate
				id="custom.docs-version-hint"
				values={{
					link: (
						<KolLink
							style={{
								padding: '0 .25rem',
							}}
							_href={`https://public-ui.github.io/v2${i18n.currentLocale === 'en' ? '/en' : ''}`}
							_label={'https://public-ui.github.io/v2'}
						></KolLink>
					),
					version: <b>v3</b>,
				}}
			/>
		</p>
	);
}
