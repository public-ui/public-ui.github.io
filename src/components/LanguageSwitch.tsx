import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { KolLinkButton } from '@public-ui/react';
import type { FC } from 'react';
import React from 'react';

export const LanguageSwitch: FC = () => {
	const { i18n, siteConfig } = useDocusaurusContext();
	const { pathname } = useLocation();
	const normalizedPathname = pathname.endsWith('/') ? pathname : `${pathname}/`;
	const baseUrl = siteConfig.baseUrl || '/';
	const baseUrlWithoutLanguage = baseUrl.replace(/en(\/|$)/, '');
	const relativePath = normalizedPathname.startsWith(baseUrl)
		? normalizedPathname.slice(baseUrl.length)
		: normalizedPathname;
	const relativePathWithoutTrailingSlash = relativePath.replace(/\/$/, '');
	const isGerman = i18n.currentLocale === 'de';
	const switchTo = `${baseUrlWithoutLanguage}${isGerman ? 'en/' : ''}${relativePathWithoutTrailingSlash}`;

	return (
		<div>
			<KolLinkButton
				_href={switchTo}
				_label={isGerman ? 'Switch to English' : 'Zu Deutsch wechseln'}
				_hideLabel
				_icons="codicon codicon-globe"
				_tooltipAlign="left"
				_variant="ghost"
			/>
		</div>
	);
};
