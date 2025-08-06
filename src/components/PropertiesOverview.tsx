import type { FC } from 'react';
import React from 'react';

import ELEMENTS from '@public-ui/components/custom-elements.json';

const BLOCKLIST = [
	'kol-alert-wc',
	'kol-avatar-wc',
	'kol-all',
	'kol-button-group',
	'kol-button-group-wc',
	'kol-button-link-text-switch',
	'kol-button-wc',
	'kol-color',
	'kol-counter',
	'kol-heading-wc',
	'kol-icon-font-awesome',
	'kol-icon-icofont',
	'kol-input',
	'kol-input-adapter-leanup',
	'kol-input-radio-group',
	'kol-kolibri',
	'kol-logo',
	'kol-link-group',
	'kol-link-wc',
	'kol-span',
	'kol-span-wc',
	'kol-symbol',
	'kol-tooltip-wc',
	'kol-version',
];
type Property = 'components' | 'descriptions' | 'types';
const COMPONENTS = new Map();
const PROPS = new Map<string, Map<Property, Set<string>>>();
ELEMENTS.tags.forEach((tag) => {
	if (BLOCKLIST.indexOf(tag.name) === -1) {
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
				prop.get('components')?.add(componentName);
				prop.get('descriptions')?.add(attribute.description);
				prop.get('types')?.add(attribute.type.replace(/ \| undefined/g, ''));
			}
		});
	}
});

const hideButton = new Map<Property, Set<string>>();
hideButton.set('components', new Set(['kol-pagination']));
hideButton.set('descriptions', new Set(['Versteckt entweder den Zurück- oder Weiter-Schalter, oder beide Schalter.']));
hideButton.set('types', new Set(['"previous" | "next" | "both"']));
PROPS.set('_hide-button', hideButton);

const PROP_BLACKLIST = [
	'_alt',
	'_aria-label',
	'_caption',
	'_compact',
	'_has-compact-button',
	'_has-footer',
	'_heading',
	'_headline',
	'_icon-align',
	'_hide-label',
	'_list',
	'_part',
	'_role',
	'_title',
	'_total',
	'_selector',
	'_show-duration',
	'_size',
	'_stealth',
	'_summary',
	'_tabs-align',
	'_use-case',
];

export const PropertiesOverview: FC = () => {
	let counter = 0;
	return (
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
				{Array.from(PROPS.keys()).map((prop) => {
					if (PROP_BLACKLIST.includes(prop)) {
						return null;
					}
					counter++;
					const components = Array.from(PROPS.get(prop)?.get('components') || []);
					const descriptions = Array.from(PROPS.get(prop)?.get('descriptions') || []);
					const types = Array.from(PROPS.get(prop)?.get('types') || []);
					return (
						<tr key={prop}>
							<td>{counter}</td>
							<td
								style={{
									backgroundColor: PROP_BLACKLIST.includes(prop) ? '#fbc' : undefined,
								}}
							>
								{prop}
							</td>
							<td>{components.join(', ')}</td>
							<td
								style={{
									backgroundColor: descriptions.length > 1 ? '#fbc' : undefined,
								}}
								dangerouslySetInnerHTML={{
									__html: descriptions.join('<hr/>'),
								}}
							/>
							<td
								style={{
									backgroundColor: types.length > 1 ? '#fbc' : undefined,
								}}
								dangerouslySetInnerHTML={{
									// This type causes invalid HTML: "undefined | { onCreate?: EventCallback<Event> | undefined; } & { onSelect?: EventValueOrEventCallback<MouseEvent | KeyboardEvent | CustomEvent<any> | PointerEvent, number> | undefined; }"
									__html: types
										.map((type) =>
											type
												.replace(/&/g, '&amp;')
												.replace(/</g, '&lt;')
												.replace(/>/g, '&gt;')
												.replace(/"/g, '&quot;')
												.replace(/'/g, '&#39;')
										)
										.join('<hr/>'),
								}}
							/>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
