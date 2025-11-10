import { translate } from '@docusaurus/Translate';
import { KolKolibri, KolLink, KolLinkButton } from '@public-ui/react-v19';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import type { FunctionComponent, ReactElement } from 'react';
import React from 'react';
import { KoliBriAbbr } from '../components/KoliBriAbbr';
import { ITZLogo } from '@site/src/components/ITZLogo';

const HomepageHeader: FunctionComponent = () => (
	<header className="p-8 grid justify-center">
		<Heading as="h1" className="text-white text-center">
			{translate({
				id: 'custom.title',
			})}
		</Heading>
		<p className="text-white text-center text-xl">
			{translate({
				id: 'custom.subtitle',
			})}
		</p>
	</header>
);
const HomepageButtons: FunctionComponent = () => {
	return (
		<div className="grid sm:flex gap-4 justify-center mt-4">
			<KolLinkButton
				className="w-72"
				_icons={{
					right: 'codicon codicon-dashboard',
				}}
				_href="/docs/get-started/first-steps"
				_label={translate({
					id: 'custom.get-started-button',
				})}
				_variant="primary"
			></KolLinkButton>
			<KolLinkButton
				className="w-72"
				_href="/docs"
				_label={translate({
					id: 'custom.documentation-button',
				})}
			></KolLinkButton>
			<KolLinkButton
				className="w-72"
				_href="https://release-3--kolibri-public-ui.netlify.app"
				_label={translate({
					id: 'custom.sample-app-button',
				})}
			></KolLinkButton>
		</div>
	);
};

export default function Homepage(): ReactElement {
	return (
		<Layout
			title={translate({
				id: 'custom.subtitle',
			})}
			description={translate(
				{
					message: 'custom.meta.description',
				},
				{
					name: {
						id: 'KoliBri (Public-UI) ist eine barrierefreie Web Component-Bibliothek für webbasierten Projekte und Design Systeme.',
					},
				}
			)}
		>
			<HomepageHeader />
			<HomepageButtons />

			<main>
				<div className="grid gap-2 md:w-6/12 m-auto mt-4 p-4">
					<div className="flex gap-4 justify-center">
						<ITZLogo
							style={{
								display: 'block',
								width: '175px',
								marginTop: '1em',
							}}
						/>
						<KolKolibri
							_labeled={false}
							style={{
								display: 'block',
								width: '100px',
								marginBottom: '1em',
							}}
						/>
					</div>
					<Heading as="h2" className="text-center">
						{translate({
							id: 'custom.accessible-standard',
							message: 'Barrierefreier Standard',
						})}
					</Heading>
					<p className="text-center">
						<KoliBriAbbr />{' '}
						{translate({
							id: 'custom.homepage-message-part-1',
							message: 'und wurde vom',
						})}{' '}
						<strong>
							<KolLink _href="https://itzbund.de" _label="Informationstechnikzentrum Bund" _target="itzbund"></KolLink>
						</strong>{' '}
						{translate({
							id: 'custom.homepage-message-part-2',
							message: 'Open Source zur Wiederverwendung und Weiterentwicklung freigegeben.',
						})}
					</p>
				</div>
				<HomepageFeatures />
				{/* <section className="used-by-gallery m-8 gap-8 text-center">
					<Heading as="h2">Referenzen</Heading>
					<p className="text-center">KoliBri/Public UI wird als Basis für eigene Design Systeme oder direkt bei der Umsetzung von Webprojekten verwendet.</p>
					<ul>
						{Array.from(USED_BY).map((item) => {
							const used = item[1];
							return (
								<li key={item[0]}>
									<KolLink _label="" _target={item[0]}>
										<KolImage slot="expert" className="block w-30" _alt={`Logo von ${used.label}`} _src={`https://${used.logoSrc}`} />
									</KolLink>
								</li>
							);
						})}
					</ul>
				</section> */}
			</main>
		</Layout>
	);
}
