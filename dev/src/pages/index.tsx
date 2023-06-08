import { translate } from '@docusaurus/Translate';
import { Bundesanstalt } from '@public-ui/components';
import { KolKolibri, KolLink, KolLinkButton, KolLogo } from '@public-ui/react';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import React, { FunctionComponent } from 'react';
import { KoliBriAbbr } from '../components/KoliBriAbbr';
import { USED_BY } from '../used-by';

const HomepageHeader: FunctionComponent = () => (
	<header className="p-8 grid justify-center">
		<h1 className="text-white text-center">
			{translate({
				id: 'custom.title',
			})}
		</h1>
		<p className="text-white text-center text-xl">
			{translate({
				id: 'custom.subtitle',
			})}
		</p>
	</header>
);

console.warn(Array.from(USED_BY));

export default function Homepage(): JSX.Element {
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
			<main>
				<div className="grid sm:flex gap-4 justify-center mt-4">
					<KolLinkButton
						className="w-72"
						_icon={{
							right: 'codicon codicon-dashboard',
						}}
						_href="docs/get-started/erste-schritte"
						_label={translate({
							id: 'custom.get-started-button',
						})}
						_variant="primary"
					></KolLinkButton>
					<KolLinkButton
						className="w-72"
						_href="docs"
						_label={translate({
							id: 'custom.documentation-button',
						})}
					></KolLinkButton>
				</div>
				<div className="grid gap-2 md:w-6/12 m-auto mt-4 p-4">
					<div className="flex gap-4 justify-center">
						<KolLogo
							_org={Bundesanstalt['Informationstechnikzentrum Bund']}
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
					<h2 className="text-center">
						{translate({
							id: 'custom.accessible-standard',
							message: 'Barrierefreier Standard',
						})}
					</h2>
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
					<h2>Referenzen</h2>
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
