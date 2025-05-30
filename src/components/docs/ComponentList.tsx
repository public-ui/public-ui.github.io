import type { FC } from 'react';
import React, { Suspense, useCallback, useEffect, useRef, useState } from 'react';
import Link from '@docusaurus/Link';
import { KolBadge, KolCard } from '@public-ui/react';

import type { Language, Locale } from '../../shares/language';
import { COMPONENT_SYNONYMS } from '../../shares/synonyms';
import type { Component } from '../samplePreviews';
import { COMPONENT_VERSIONS } from '../samplePreviews/version';

const LazyLoadComponent: FC<
	Component &
		Language & {
			path?: string;
			observer: (cb: () => void) => IntersectionObserver;
		}
> = ({ name, lang, path, loadComponent, observer }) => {
	const ref = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState<boolean>(false);

	useEffect(() => {
		observer(() => setIsVisible(true)).observe(ref.current as Element);
	}, [observer]);

	const formattedComponentName = name.charAt(0).toUpperCase() + name.slice(1);

	interface SampleComponentProps {
		lang: Locale;
	}

	const SampleComponent: React.FC<SampleComponentProps> = loadComponent();
	if (!loadComponent) {
		throw new Error(`Example component for ${name} not found`);
	}
	const badges = COMPONENT_SYNONYMS?.[name];
	return (
		<div ref={ref} className="components-overview-item">
			{isVisible && (
				<Suspense fallback={<div className="skeleton"></div>}>
					<Link
						className="components-overview-item__link"
						tabIndex={0}
						to={`${path}/components/${formattedComponentName}`}
					/>
					<KolCard
						tabIndex={-1}
						aria-label={formattedComponentName}
						role="img"
						_level={2}
						_label={formattedComponentName}
					>
						<div className="components-overview-item__card-content">
							<SampleComponent lang={lang} />
							{badges && badges?.length > 0 && (
								<div className="mt-4 p-1">
									<div className="flex flex-wrap gap-2">
										{badges?.map((label) => (
											<KolBadge key={label} _color="#dadde1" _label={label}></KolBadge>
										))}
									</div>
								</div>
							)}
						</div>
					</KolCard>
				</Suspense>
			)}
		</div>
	);
};

export const ComponentList: FC<Language> = ({ lang }) => {
	const components = COMPONENT_VERSIONS.current;
	const observer = useCallback(
		(cb: () => void) =>
			new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						cb();
					}
				});
			}),
		[]
	);

	return (
		<div className="components-overview">
			{components?.map(({ name, loadComponent }) => (
				<LazyLoadComponent
					key={name}
					name={name}
					lang={lang}
					path="/docs"
					loadComponent={loadComponent}
					observer={observer}
				/>
			))}
		</div>
	);
};
