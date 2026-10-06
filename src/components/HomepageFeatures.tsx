import type { ReactElement, ReactNode } from 'react';
import React from 'react';
import { KolIcon, KolLink, KolLinkButton } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import Heading from '@theme/Heading';

type FeatureItem = {
	icon: string;
	title: string;
	description: ReactNode;
	button: ReactNode;
};

function Feature({ title, icon, description, button }: FeatureItem) {
	return (
		<div className="grid content-between justify-items-center gap-4 rounded-2xl border border-[#d7e3ec] bg-white p-8 text-center shadow-sm text-[#1f2937]">
			<KolIcon className="text-7xl text-[#003a5c]" _label="" _icons={icon}></KolIcon>
			<Heading as="h3" className="m-0 text-xl font-bold text-[#003a5c]">
				{title}
			</Heading>
			<div className="grid gap-2 justify-items-center">{description}</div>
			<div className="grid sm:inline">{button}</div>
		</div>
	);
}

export default function HomepageFeatures(): ReactElement {
	const FeatureList: FeatureItem[] = [
		{
			icon: 'fa-solid fa-palette',
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
					_href="/docs/concepts/styling/theming"
					_label="Styling & Design"
				></KolLinkButton>
			),
		},
		{
			icon: 'fa-solid fa-code',
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
			button: <KolLinkButton className="w-72" _href="/docs/get-started/frameworks" _label="Frameworks"></KolLinkButton>,
		},
		{
			icon: 'fa-solid fa-layer-group',
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
					_href="/docs/components"
					_label={translate({
						id: 'custom.components',
						message: 'Components',
					})}
				></KolLinkButton>
			),
		},
	];

	return (
		<section className="bg-white px-6 pb-16 pt-2 md:pb-24">
			<div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
				{FeatureList.map((props, idx) => (
					<Feature key={idx} {...props} />
				))}
			</div>
		</section>
	);
}
