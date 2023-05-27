import React from 'react';
import { KolIcon, KolLink, KolLinkButton } from '@public-ui/react';
import Translate, { translate } from '@docusaurus/Translate';

type FeatureItem = {
	icon: string;
	title: string;
	description: JSX.Element;
	button: JSX.Element;
};

const FeatureList: FeatureItem[] = [
	{
		icon: 'codicon codicon-paintcan',
		title: 'Designer',
		description: (
			<>
				<p>
					{translate({
						id: 'custom.designer-short-description-part-1',
						message:
							'Die semantisch barrierefreien Web Components können nahtlos in anderen Komponenten-Bibliotheken oder Design Systemen wiederverwendet werden. Mittels des',
					})}{' '}
					<KolLink _href="/designer" _label="Designers" _target="designer" />{' '}
					{translate({
						id: 'custom.designer-short-description-part-2',
						message: 'können die Komponenten an beliebige Styleguides oder Designs angepasst werden.',
					})}
				</p>
			</>
		),
		button: <KolLinkButton className="w-72" _href="docs/concepts/styling/theming" _label="Styling & Design"></KolLinkButton>,
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
		button: <KolLinkButton className="w-72" _href="docs/get-started/frameworks" _label="Frameworks"></KolLinkButton>,
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
				_href="docs/components/abbr"
				_label={translate({
					id: 'custom.components',
					message: 'Components',
				})}
			></KolLinkButton>
		),
	},
];

function Feature({ title, icon, description, button }: FeatureItem) {
	return (
		<div className="grid gap-4 content-baseline text-center justify-items-center">
			<KolIcon className="text-8xl text-gray-700" _ariaLabel="" _icon={icon}></KolIcon>
			<h3 className="m-0">{title}</h3>
			<div className="grid gap-2 text-justify">{description}</div>
			<div className="grid sm:inline">{button}</div>
		</div>
	);
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className="m-8 grid gap-8 lg:grid-cols-3">
			{FeatureList.map((props, idx) => (
				<Feature key={idx} {...props} />
			))}
		</section>
	);
}
