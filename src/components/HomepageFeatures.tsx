import type { ReactElement, ReactNode } from 'react';
import React from 'react';
import { KolIcon, KolLink, KolLinkButton } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
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
	const designerUrl = useBaseUrl(`/${VERSION_ID}/designer`);
	const themingUrl = useBaseUrl('/docs/concepts/styling/theming');
	const frameworksUrl = useBaseUrl('/docs/get-started/frameworks');
	const componentsUrl = useBaseUrl('/docs/components');

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
						<KolLink _href={designerUrl} _label="Designers" _target="designer" />{' '}
						{translate({
							id: 'custom.designer-short-description-part-2',
							message: 'können die Komponenten an beliebige Styleguides oder Designs angepasst werden.',
						})}
					</p>
				</>
			),
			button: <KolLinkButton className="w-72" _href={themingUrl} _label="Styling & Design"></KolLinkButton>,
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
			button: <KolLinkButton className="w-72" _href={frameworksUrl} _label="Frameworks"></KolLinkButton>,
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
					_href={componentsUrl}
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
