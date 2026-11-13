import { register } from '@public-ui/components';
import { defineCustomElements } from '@public-ui/components/loader';
import { DEFAULT } from '@public-ui/theme-default';
import type { LoaderCallback } from 'adopted-style-sheets';
import type { FunctionComponent, PropsWithChildren } from 'react';
import React, { useEffect } from 'react';

/**
 * BF-Web-Test: Das Such-Plugin versieht jeden Treffer-Link mit dem unsagenden
 * aria-label „Link to the result", das den sichtbaren Treffertext für Screenreader
 * komplett maskiert. Das Attribut ist per CSS nicht löschbar; dieser Layer entfernt
 * es nach dem Rendern, sodass der zugängliche Name aus dem sichtbaren Inhalt entsteht.
 */
const MASKED_SEARCH_RESULT_SELECTOR = 'a.algolia-docsearch-suggestion[aria-label]';

const unmaskSearchResults = (root: Node): void => {
	if (!(root instanceof Element)) {
		return;
	}
	if (root.matches(MASKED_SEARCH_RESULT_SELECTOR)) {
		root.removeAttribute('aria-label');
	}
	// Indizierte Schleife statt NodeList-Iteration: die npm-Toolchain von CI
	// löst Symbol.iterator auf NodeList nicht auf.
	const masked = root.querySelectorAll(MASKED_SEARCH_RESULT_SELECTOR);
	for (let index = 0; index < masked.length; index++) {
		masked.item(index)?.removeAttribute('aria-label');
	}
};

export const Root: FunctionComponent<PropsWithChildren> = (props) => {
	useEffect(() => {
		const loader = defineCustomElements as unknown as LoaderCallback;
		register(DEFAULT, loader).catch(console.warn);

		unmaskSearchResults(document.body);
		const observer = new MutationObserver((mutations) => {
			for (const mutation of mutations) {
				for (let index = 0; index < mutation.addedNodes.length; index++) {
					const added = mutation.addedNodes.item(index);
					if (added) {
						unmaskSearchResults(added);
					}
				}
			}
		});
		observer.observe(document.body, { childList: true, subtree: true });
		return () => {
			observer.disconnect();
		};
	}, []);

	return <div id="doc-app">{props.children}</div>;
};

export default Root;
