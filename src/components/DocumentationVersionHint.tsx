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
							style={{ padding: '0 .5rem' }}
							_href={`https://public-ui.github.io${i18n.currentLocale === 'en' ? '/en' : ''}`}
							_label={'https://public-ui.github.io'}
						></KolLink>
					),
					version: <b>2.2</b>,
				}}
			/>
		</p>
	);
}
