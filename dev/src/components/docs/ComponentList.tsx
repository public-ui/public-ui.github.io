import type { FC, MouseEvent, KeyboardEvent } from 'react';
import React, { Suspense, useEffect, useState, useRef, useCallback } from 'react';
import { useDocsPreferredVersion } from '@docusaurus/theme-common';
import { useHistory } from 'react-router-dom';
import { KolCard, KolHeading } from '@public-ui/react';

import type { Language } from '../../shares/language';
import type { Version } from '../../shares/version';
import type { Component } from '../samplePreviews';
import { COMPONENT_VERSIONS } from '../samplePreviews/version';

type Props = Language & {
	version?: Version;
};

const LazyLoadComponent: FC<
	Component &
		Language & {
			path?: string;
			observer: (cb: () => void) => IntersectionObserver;
		}
> = ({ name, lang, path, loadComponent, observer }) => {
	const history = useHistory();
	const ref = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState<boolean>(false);

	useEffect(() => {
		observer(() => setIsVisible(true)).observe(ref.current as Element);
	}, [observer]);

	const formattedComponentName = name.charAt(0).toUpperCase() + name.slice(1);

	const handleRedirect = useCallback(
		(event: MouseEvent<HTMLAnchorElement> | KeyboardEvent<HTMLAnchorElement>) => {
			if (event.type === 'click' || (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Enter')) {
				event.preventDefault();
				history.push(`${path ?? '/docs/next'}/components/${formattedComponentName}`);
			}
			return event;
		},
		[path, formattedComponentName]
	);

	const SampleComponent = loadComponent();
	if (!loadComponent) {
		throw new Error(`Example component for ${name} not found`);
	}
	return (
		<div ref={ref} className="components-overview-item">
			{isVisible && (
				<Suspense fallback={<div className="skeleton"></div>}>
					<a tabIndex={0} onKeyDown={handleRedirect} onClick={handleRedirect}>
						<KolCard aria-label={formattedComponentName} role="img" _level={2} _label={formattedComponentName}>
							<SampleComponent lang={lang} />
						</KolCard>
					</a>
				</Suspense>
			)}
		</div>
	);
};

export const ComponentList: FC<Props> = ({ lang }) => {
	const { preferredVersion } = useDocsPreferredVersion();
	const version = preferredVersion?.name as Version;
	const components = COMPONENT_VERSIONS?.[version ?? 'current'] as Component[];
	if (components?.length <= 0) return null;
	const componentLength = components.length;
	const headline = lang === 'de' ? `Anzahl Komponenten: ${componentLength}` : `Components sum: ${componentLength}`;
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
		<>
			<KolHeading _label={headline} _level={3}>
				{headline}
			</KolHeading>
			<div className="components-overview">
				{components.map(({ name, loadComponent }) => (
					<LazyLoadComponent
						key={name}
						name={name}
						lang={lang}
						path={preferredVersion?.path}
						loadComponent={loadComponent}
						observer={observer}
					/>
				))}
			</div>
		</>
	);
};
