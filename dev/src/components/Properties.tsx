import React, { FC } from 'react';

import ELEMENTS from '@public-ui/components/custom-elements.json';

const BLACKLIST = [
	'kol-button-group',
	'kol-color',
	'kol-counter',
	'kol-heading-wc',
	'kol-icon-font-awesome',
	'kol-icon-icofont',
	'kol-input-adapter-leanup',
	'kol-input-radio-group',
	'kol-kolibri',
	'kol-logo',
	'kol-link-group',
	'kol-span',
	'kol-span-wc',
	'kol-version',
];
type Property = 'components' | 'descriptions' | 'types';
const COMPONENTS = new Map();
const PROPS = new Map<string, Map<Property, Set<string>>>();
ELEMENTS.tags.forEach((tag) => {
	if (BLACKLIST.indexOf(tag.name) === -1) {
		const componentName = tag.name.replace('kol-', '');
		if (COMPONENTS.has(componentName) === false) {
			COMPONENTS.set(componentName, {
				desc: tag.description,
				props: new Set(),
			});
		}
		tag.attributes.forEach((attribute) => {
			if (PROPS.has(attribute.name) === false) {
				const MAP = new Map<Property, Set<string>>();
				MAP.set('components', new Set());
				MAP.set('descriptions', new Set());
				MAP.set('types', new Set());
				PROPS.set(attribute.name, MAP);
			}
			const prop = PROPS.get(attribute.name);
			if (prop) {
				prop.get('components').add(componentName);
				prop.get('descriptions').add(attribute.description);
				prop.get('types').add(attribute.type.replace(/ \| undefined/g, ''));
			}
		});
	}
});

const hideButton = new Map<Property, Set<string>>();
hideButton.set('components', new Set(['kol-pagination']));
hideButton.set('descriptions', new Set(['Versteckt entweder den Zurück- oder Weiter-Schalter, oder beide Schalter.']));
hideButton.set('types', new Set(['"previous" | "next" | "both"']));
PROPS.set('_hide-button', hideButton);

const DEPRECATED = new Map<string, Set<string>>();
DEPRECATED.set('_align', new Set(['_alignment']));
DEPRECATED.set('_hide-button', new Set(['_has-buttons']));
DEPRECATED.set('_hide-label', new Set(['_icon-only']));
DEPRECATED.set('_label', new Set(['_aria-label', '_caption', '_heading', '_headline', '_quote', '_summary', '_symbol', '_title']));
// DEPRECATED.set('_list', new Set(['_links']));
DEPRECATED.set('_variant', new Set(['_type<sup>*</sup>']));
DEPRECATED.set('', new Set(['_has-buttons', '_has-footer', '_height', '_icon-align', '_part', '_show-dropdown']));

export const Properties: FC = () => {
	return (
		<div>
			<p>
				Ziel ist, möglichst über alle Komponenten einheitliche Eigenschaften (Properties) zu verwenden, um die Erlernbarkeit zu erleichtern. Folgende
				Anforderungen sind dafür definiert:
			</p>
			<ul>
				<li>Nur ein Property-Name für gleichartige Eigenschaften</li>
				<li>Wenn möglich, einheitliche Beschreibungen bei gleichen Property-Namen</li>
				<li>Wenn möglich, einheitliche Typen bei gleichen Property-Namen</li>
				<li>Anzahl an unterschiedlichen Properties, Beschreibungen und Typen minimieren</li>
			</ul>
			<h2>Aktueller Stand</h2>
			<table>
				<thead>
					<tr>
						<th>#</th>
						<th>Property</th>
						<th>Components</th>
						<th>Descriptions</th>
						<th>Types</th>
					</tr>
				</thead>
				<tbody>
					{Array.from(PROPS.keys()).map((prop, index) => {
						const components = Array.from(PROPS.get(prop)?.get('components') || []);
						const descriptions = Array.from(PROPS.get(prop)?.get('descriptions') || []);
						const types = Array.from(PROPS.get(prop)?.get('types') || []);
						return (
							<tr key={prop}>
								<td>{index}</td>
								<td>{prop}</td>
								<td>{components.join(', ')}</td>
								<td
									style={{ backgroundColor: descriptions.length > 1 && '#fbc' }}
									dangerouslySetInnerHTML={{
										__html: descriptions.join('<hr/>'),
									}}
								/>
								<td
									style={{ backgroundColor: types.length > 1 && '#fbc' }}
									dangerouslySetInnerHTML={{
										__html: types.join('"<hr/>"'),
									}}
								/>
							</tr>
						);
					})}
				</tbody>
			</table>
			<h2>Deprecated</h2>
			<p>Die in der folgenden Tabelle aufgelisteten Eigenschaften lösen zahlreiche veraltete Eigenschaften (-{Math.round((16 / PROPS.size) * 100)}%) ab.</p>
			<table>
				<thead>
					<tr>
						<th>New Property</th>
						<th>Deprecates Properties</th>
					</tr>
				</thead>
				<tbody>
					{Array.from(DEPRECATED.keys()).map((prop) => {
						const deprecated = Array.from(DEPRECATED.get(prop) || []);
						return (
							<tr key={prop}>
								<td>{prop}</td>
								<td
									dangerouslySetInnerHTML={{
										__html: deprecated.join(', '),
									}}
								></td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<p>
				<small>
					<sup>*</sup> Betrifft nur Typen, die eigentlich Varianten meinen.
				</small>
			</p>
		</div>
	);
};
