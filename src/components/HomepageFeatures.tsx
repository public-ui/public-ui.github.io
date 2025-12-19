import type { ReactElement, ReactNode } from 'react';
import React from 'react';
import { KolIcon, KolLink, KolLinkButton } from '@public-ui/react';
import { translate } from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import { VERSION_ID } from '@site/src/shares/version';

type FeatureItem = {
	icon: string;
	title: string;
	description: ReactNode;
	button: ReactNode;
};

function Feature({ title, icon, description, button }: FeatureItem) {
	return (
		<div className="grid gap-4 content-baseline text-center justify-items-center">
			<KolIcon className="text-8xl text-gray-700" _label="" _icons={icon}></KolIcon>
			<Heading as="h3" className="m-0">
				{title}
			</Heading>
			<div className="grid gap-2">{description}</div>
			<div className="grid sm:inline">{button}</div>
		</div>
	);
}

export default function HomepageFeatures(): ReactElement {
	const FeatureList: FeatureItem[] = [
		{
			icon: 'codicon codicon-symbol-color',
			title: 'Theming',
			description: (
				<>
					<p>
						{translate({
							id: 'custom.theme-template-short-description-part-1',
							message: 'Vorgegebene Styleguides lassen sich mit KoliBri leicht umsetzen. Das',
						})}{' '}
						<KolLink
							_href="https://github.com/public-ui/template-theme"
							_label="Template Repository"
							_target="template-theme"
						/>{' '}
						{translate({
							id: 'custom.theme-template-short-description-part-2',
							message:
								'liefert die technische Grundlage und ein SCSS-basiertes Setup, um schnell ein eigenes Theme zu implementieren.',
						})}
					</p>
				</>
			),
			button: (
				<KolLinkButton
					className="w-72"
					_href={`/${VERSION_ID}/docs/concepts/styling/theming`}
					_label="Styling & Design"
				></KolLinkButton>
			),
		},
		{
			icon: 'codicon codicon-code',
			title: 'Developer',
			description: (
				<>
					<p>
						{translate({
							id: 'custom.developer-short-description',
							message:
								'Die robusten Web Components (Shadow-Root) lassen sich in allen webbasierten Projekten wiederverwenden. Neben der direkten Verwendung der Web Components bieten wir auch Framework-Adapter für Angular, React, Preact und Solid an.',
						})}
					</p>
				</>
			),
			button: (
				<KolLinkButton
					className="w-72"
					_href={`/${VERSION_ID}/docs/get-started/frameworks`}
					_label="Frameworks"
				></KolLinkButton>
			),
		},
		{
			icon: 'codicon codicon-layers',
			title: translate({
				id: 'custom.components',
				message: 'Komponenten',
			}),
			description: (
				<>
					<p>
						{translate({
							id: 'custom.components-short-description',
							message:
								'Heute umfasst die Komponentenvielfalt mehr als 40 Komponenten mit einem hohen Funktionsumfang zur Umsetzung verschiedenster Fachanwendungen und Darstellung von webbasierten Inhalten.',
						})}
					</p>
				</>
			),
			button: (
				<KolLinkButton
					className="w-72"
					_href={`/${VERSION_ID}/docs/components`}
					_label={translate({
						id: 'custom.components',
						message: 'Components',
					})}
				></KolLinkButton>
			),
		},
	];

	return (
		<section className="m-8 grid gap-8 lg:grid-cols-3">
			{FeatureList.map((props, idx) => (
				<Feature key={idx} {...props} />
			))}
		</section>
	);
}
