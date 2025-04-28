// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type { PostCssOptions } from '@docusaurus/types';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const PUBLIC_BASE_URL = 'https://public-ui.github.io';

const config: Config = {
	title: 'KoliBri - Public UI',
	tagline: 'The accessible Web Component Library',
	url: PUBLIC_BASE_URL,
	baseUrl: '/v2/',
	onBrokenLinks: 'throw',
	trailingSlash: false,
	onBrokenMarkdownLinks: 'warn',
	favicon: 'assets/favicon.ico',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'Informationstechnikzentrum Bund (ITZBund)', // Usually your GitHub org/user name.
	projectName: 'KoliBri (Public-UI)', // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'de',
		locales: ['de', 'en'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			{
				docs: {
					routeBasePath: '/docs',
					sidebarCollapsible: true,
					sidebarPath: './sidebars.js',
					// Remove this to remove the "edit this page" links.
					// editUrl: 'https://github.com/public-ui/documentation/blob/main/packages/docusaurus/',
					// lastVersion: 'current',
					// versions: {
					// 	current: {
					// 		label: '1.1',
					// 		path: 'v1',
					// 	},
					// },
				},
				blog: false,
				sitemap: {
					changefreq: 'daily',
					priority: 0.5,
					ignorePatterns: ['/blog/tags/**', '/docs/tags/**'],
					filename: 'sitemap.xml',
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			},
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		{
			navbar: {
				title: 'KoliBri',
				logo: {
					alt: 'KoliBri Logo',
					src: 'assets/logo.kolibri.png',
				},
				items: [
					{
						type: 'docsVersionDropdown',
						position: 'left',
						dropdownActiveClassDisabled: true,
						dropdownItemsAfter: [
							{
								type: 'html',
								className: 'dropdown-archived-versions',
								value: '<strong class="dropdown__link">Version 2</strong>',
							},
							{
								type: 'html',
								value: '<hr class="dropdown-separator">',
							},
							{
								type: 'html',
								className: 'dropdown-archived-versions',
								value: '<span class="dropdown__link">Version 1</span>',
							},
						],
					},
					{
						label: 'Dokumentation',
						to: '/docs',
						position: 'left',
					},
					{ to: `${PUBLIC_BASE_URL}/blog`, label: 'Blog', position: 'left' },
					{ type: 'search', position: 'right' },
					// {
					// 	href: 'https://public-ui.github.io/designer',
					// 	label: 'Designer',
					// 	position: 'left',
					// },
					// {
					// 	type: 'docsVersionDropdown',
					// 	position: 'left',
					// },
					// {
					// 	type: 'localeDropdown',
					// 	position: 'right',
					// },
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Inhalte',
						items: [
							{
								label: 'Dokumentation',
								to: '/docs',
							},
							{
								label: 'Blog',
								to: `${PUBLIC_BASE_URL}/blog`,
							},
							{
								label: 'Impressum',
								to: `${PUBLIC_BASE_URL}/docs/impressum`,
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Community of Practices',
								href: 'https://github.com/public-ui/kolibri/discussions/516',
							},
							{
								label: 'FAQ',
								href: 'https://github.com/public-ui/kolibri/discussions',
							},
							{
								label: 'Mastodon',
								href: 'https://social.bund.de/@kolibri',
							},
						],
					},
					{
						title: 'Mehr',
						items: [
							{
								label: 'GitHub',
								href: 'https://github.com/public-ui',
							},
							{
								label: 'ITZBund',
								href: 'https://itzbund.de',
							},
							{
								label: 'Portal Barrierefreiheit',
								href: 'https://www.barrierefreiheit-dienstekonsolidierung.bund.de/',
							},
						],
					},
				],
				copyright: `© Informationstechnikzentrum Bund (ITZBund) 2020 - ${new Date().getFullYear()}`,
			},
			prism: {
				theme: themes.vsLight,
				darkTheme: themes.vsDark,
				additionalLanguages: ['diff'],
			},
			mermaid: {
				theme: {
					light: 'neutral',
					dark: 'forest',
				},
			},
		},
	markdown: {
		mermaid: true,
	},
	plugins: [
		async () => {
			return {
				name: 'docusaurus-tailwindcss',

				configurePostCss(postcssOptions: PostCssOptions) {
					// Appends TailwindCSS and AutoPrefixer.
					if (!Array.isArray(postcssOptions.plugins)) {
						postcssOptions.plugins = [];
					}

					postcssOptions.plugins.push(tailwindcss());
					postcssOptions.plugins.push(autoprefixer());
					return postcssOptions;
				},
			};
		},
		// [
		// 	// https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-ideal-image
		// 	'@docusaurus/plugin-ideal-image',
		// 	{
		// 		quality: 70,
		// 		max: 1030, // max resized image's size.
		// 		min: 640, // min resized image's size. if original is lower, use that size.
		// 		steps: 2, // the max number of images generated between min and max (inclusive)
		// 		disableInDev: false,
		// 	},
		// ],
		// [
		// 	// https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-pwa
		// 	'@docusaurus/plugin-pwa',
		// 	{
		// 		debug: true,
		// 		offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
		// 		pwaHead: [
		// 			{
		// 				tagName: 'link',
		// 				rel: 'icon',
		// 				href: '/img/docusaurus.png',
		// 			},
		// 			{
		// 				tagName: 'link',
		// 				rel: 'manifest',
		// 				href: '/manifest.json', // your PWA manifest
		// 			},
		// 			{
		// 				tagName: 'meta',
		// 				name: 'theme-color',
		// 				content: 'rgb(37, 194, 160)',
		// 			},
		// 		],
		// 	},
		// ],
		// 'docusaurus-plugin-sass',
		// docu/origin: https://github.com/praveenn77/docusaurus-lunr-search
		require.resolve('docusaurus-lunr-search'),
	],
	themes: ['@docusaurus/theme-mermaid'],
};

export default config;
