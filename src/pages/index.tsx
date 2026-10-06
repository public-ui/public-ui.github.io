import { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { KolKolibri, KolLink, KolLinkButton } from '@public-ui/react-v19';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import type { FunctionComponent, ReactElement } from 'react';
import React, { useState } from 'react';
import { KoliBriAbbr } from '../components/KoliBriAbbr';
import { ITZLogo } from '@site/src/components/ITZLogo';

const YOUTUBE_URL = 'https://www.youtube.com/watch?v=Fsv_aUTM4ls';

/*
 * Bauplan-Motiv „Linien für Raum und Zeit": rein dekorativ, daher aria-hidden.
 * Choreografie und Reduced-Motion-Verhalten liegen in src/css/homepage-lines.css.
 */
const HeroLines: FunctionComponent = () => (
	<div className="hero-lines" aria-hidden="true">
		<svg viewBox="0 0 1440 640" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
			{/* Konstruktionslinien (Raum) */}
			<line className="hero-line hero-line--draw" x1="80" y1="128" x2="1360" y2="128" pathLength="1440" />
			<line
				className="hero-line hero-line--draw hero-line--d2"
				x1="160"
				y1="512"
				x2="1360"
				y2="512"
				pathLength="1440"
			/>
			<line
				className="hero-line hero-line--draw hero-line--d3"
				x1="1120"
				y1="80"
				x2="1120"
				y2="560"
				pathLength="1440"
			/>
			{/* Fadenkreuze an Schnittpunkten */}
			<path className="hero-line hero-line--cross" d="M1120 120v16M1112 128h16" />
			<path className="hero-line hero-line--cross" d="M280 432v16M272 440h16" />
			{/* Signallinien (Zeit): Raumfahrtrouten in mehreren Ebenen */}
			<line className="hero-line hero-line--signal" x1="80" y1="320" x2="1360" y2="320" pathLength="1440" />
			<line
				className="hero-line hero-line--signal hero-line--s2"
				x1="40"
				y1="216"
				x2="1400"
				y2="216"
				pathLength="1440"
			/>
			<line
				className="hero-line hero-line--signal hero-line--s3"
				x1="120"
				y1="432"
				x2="1320"
				y2="432"
				pathLength="1440"
			/>
			<line
				className="hero-line hero-line--signal hero-line--s4"
				x1="200"
				y1="560"
				x2="1240"
				y2="560"
				pathLength="1440"
			/>
		</svg>
	</div>
);

const HomepageHeader: FunctionComponent = () => (
	<header className="hero-lines-wrap bg-gradient-to-b from-[#003a5c] to-[#02243c] text-white">
		<HeroLines />
		<div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-28 grid gap-6 justify-items-center text-center">
			<p className="m-0 text-sm font-semibold uppercase tracking-[0.2em] text-[#8fb9e8]">
				{translate({
					id: 'custom.hero-kicker',
					message: 'Open Source aus dem ITZBund',
				})}
			</p>
			<Heading as="h1" className="m-0 text-4xl font-bold text-white md:text-6xl">
				{translate({
					id: 'custom.title',
				})}
			</Heading>
			<p className="m-0 max-w-3xl text-lg text-[#cfe2f3] md:text-xl">
				{translate({
					id: 'custom.subtitle',
				})}
			</p>
			<HomepageButtons />
		</div>
	</header>
);

const HomepageButtons: FunctionComponent = () => {
	const docsHref = useBaseUrl('/docs');
	const firstStepsHref = useBaseUrl('/docs/get-started/first-steps');

	return (
		<div className="mt-4 grid gap-4 justify-center sm:flex">
			<KolLinkButton
				className="w-72"
				_icons={{
					right: 'kolicon-chevron-right',
				}}
				_href={firstStepsHref}
				_label={translate({
					id: 'custom.get-started-button',
				})}
				_variant="primary"
			></KolLinkButton>
			<KolLinkButton
				className="w-72"
				_icons={{
					right: 'kolicon-version',
				}}
				_href={docsHref}
				_label={translate({
					id: 'custom.documentation-button',
				})}
			></KolLinkButton>
			<KolLinkButton
				className="w-72"
				_href="https://develop--kolibri-public-ui.netlify.app"
				_label={translate({
					id: 'custom.sample-app-button',
				})}
			></KolLinkButton>
		</div>
	);
};

const ImagefilmSection: FunctionComponent = () => {
	const [playing, setPlaying] = useState(false);
	const posterUrl = useBaseUrl('/img/imagefilm-poster.png');
	const filmUrl = useBaseUrl('/imagefilm');

	return (
		<section className="bg-white text-[#1f2937]" aria-labelledby="imagefilm-heading">
			<div className="mx-auto max-w-6xl px-6 py-16 grid justify-items-center gap-8 md:py-24">
				<div className="grid max-w-3xl justify-items-center gap-4 text-center">
					<Heading as="h2" id="imagefilm-heading" className="m-0 text-3xl font-bold text-[#003a5c] md:text-4xl">
						{translate({
							id: 'custom.imagefilm-title',
							message: 'Der Imagefilm',
						})}
					</Heading>
					<p className="m-0 text-[#374151]">
						{translate({
							id: 'custom.imagefilm-description',
							message:
								'4:15 Minuten über KoliBri, Barrierefreiheit und Open Source – beim Open Source Wettbewerb 2026 eingereicht. Die Präsentation läuft automatisch ab, ohne Ton.',
						})}
					</p>
				</div>
				<div className="imagefilm-frame relative aspect-video w-full max-w-4xl overflow-visible rounded-2xl bg-[#05244a] shadow-xl">
					{playing ? (
						<iframe
							src={filmUrl}
							title={translate({
								id: 'custom.imagefilm-frame-title',
								message: 'KoliBri Imagefilm – animierte Folienshow (4:15 Minuten, ohne Ton)',
							})}
							className="absolute inset-0 h-full w-full rounded-2xl border-0"
							loading="lazy"
						></iframe>
					) : (
						<button
							type="button"
							onClick={() => setPlaying(true)}
							className="group absolute inset-0 h-full w-full cursor-pointer p-0"
						>
							<img
								src={posterUrl}
								alt={translate({
									id: 'custom.imagefilm-poster-alt',
									message: 'Vorschaubild des Imagefilms: KoliBri – Die Elemente, die HTML fehlen.',
								})}
								className="absolute inset-0 h-full w-full rounded-2xl object-cover transition group-hover:scale-[1.02] group-focus-visible:scale-[1.02]"
							/>
							<span
								aria-hidden="true"
								className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white/80 bg-[#02243c]/60 transition group-hover:bg-[#003a5c]/80 group-focus-visible:bg-[#003a5c]/80"
							>
								<span className="ml-1 border-y-[14px] border-l-[22px] border-y-transparent border-l-white"></span>
							</span>
							<span className="sr-only">
								{translate({
									id: 'custom.imagefilm-play',
									message: 'Imagefilm abspielen',
								})}
							</span>
						</button>
					)}
				</div>
				<KolLinkButton
					className="w-72"
					_icons={{
						right: 'fa-solid fa-external-link',
					}}
					_href={YOUTUBE_URL}
					_label={translate({
						id: 'custom.imagefilm-youtube',
						message: 'Auf YouTube ansehen',
					})}
					_variant="secondary"
				></KolLinkButton>
			</div>
		</section>
	);
};

const StandardSection: FunctionComponent = () => (
	<section className="bg-[#eef5fa] text-[#1f2937]" aria-labelledby="standard-heading">
		<div className="mx-auto max-w-6xl px-6 py-16 grid justify-items-center gap-6 text-center md:py-24">
			<div className="flex items-center gap-6">
				<ITZLogo
					style={{
						display: 'block',
						width: '150px',
					}}
				/>
				<KolKolibri
					_labeled={false}
					style={{
						display: 'block',
						width: '80px',
					}}
				/>
			</div>
			<Heading as="h2" id="standard-heading" className="m-0 text-3xl font-bold text-[#003a5c] md:text-4xl">
				{translate({
					id: 'custom.accessible-standard',
					message: 'Barrierefreier Standard',
				})}
			</Heading>
			<p className="m-0 max-w-3xl text-lg">
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
	</section>
);

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

			<main>
				<ImagefilmSection />
				<StandardSection />
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
