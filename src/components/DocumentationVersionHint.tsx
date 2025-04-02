import React, { type ReactNode } from 'react';
import { KolAlert, KolLink } from '@public-ui/react';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function DocumentationVersionHint(): ReactNode {
	const { i18n } = useDocusaurusContext();
	return (
		<KolAlert _label="Heading" _variant="card" _type="warning" className="margin-bottom--md">
			<p>
				<Translate
					id="custom.docs-version-hint"
					values={{
						version: <b>2.2</b>,
					}}
				>
					{'Das ist die Dokumentation für KoliBri - Public UI {version} und wird nicht weiter gewartet.'}
				</Translate>
			</p>
			<p>
				<Translate
					id="custom.docs-version-hint-link"
					values={{
						link: (
							<KolLink
								_href={i18n.currentLocale === 'en' ? '/en/docs/' : '/docs/'}
								_label={translate({ id: 'custom.docs-version-hint-latest-version', message: 'letzte Version' })}
							></KolLink>
						),
					}}
				>
					{'Für die aktuellste Dokumentation bitte auf {link} gehen.'}
				</Translate>
			</p>
		</KolAlert>
	);
}
