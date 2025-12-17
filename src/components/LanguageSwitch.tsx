import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { KolLinkButton } from '@public-ui/react-v19';
import type { FC } from 'react';
import React from 'react';

export const LanguageSwitch: FC = () => {
	const { i18n } = useDocusaurusContext();
	const location = useLocation();
	const englishUrl = useBaseUrl(`/en${location.pathname}`);
	const germanUrl = useBaseUrl(location.pathname.replace(/^\/en/, ''));

	return (
		<div>
			{i18n.currentLocale === 'de' ? (
				<KolLinkButton
					_href={englishUrl}
					_label="Switch to English"
					_hideLabel
					_icons="codicon codicon-globe"
					_tooltipAlign="left"
					_variant="ghost"
				/>
			) : (
				<KolLinkButton
					_href={germanUrl}
					_label="Zu Deutsch wechseln"
					_hideLabel
					_icons="codicon codicon-globe"
					_tooltipAlign="left"
					_variant="ghost"
				/>
			)}
		</div>
	);
};
