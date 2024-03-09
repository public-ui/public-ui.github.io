import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { KolLinkButton } from '@public-ui/react';
import type { FC } from 'react';
import React from 'react';

export const LanguageSwitch: FC = () => {
	const { i18n } = useDocusaurusContext();

	const location = useLocation();

	return (
		<div>
			{i18n.currentLocale === 'de' ? (
				<KolLinkButton
					_href={`/en${location.pathname}`}
					_label="Switch to English"
					_hideLabel
					_icons="codicon codicon-globe"
					_tooltipAlign="left"
					_variant="ghost"
				/>
			) : (
				<KolLinkButton
					_href={`${location.pathname.replace(/^\/en/, '')}`}
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
