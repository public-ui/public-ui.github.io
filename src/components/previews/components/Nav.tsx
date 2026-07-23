import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolNav } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import NavItemsProperty from '../properties/NavtemsProperty';

interface NavPreviewProps {
	initialProps?: JSX.KolNav;
	visibleProperties?: (keyof JSX.KolNav)[];
	codeCollapsable?: boolean;
	codeCollapsed?: boolean;
}

export const defaultLinks: JSX.KolNav['_links'] = [
	{
		_href: '#/',
		_icons: 'kolicon-kolibri',
		_label: '1. Menüpunkt',
		_active: true,
	},
	{
		_icons: 'kolicon-house',
		_label: '2. Menüpunkt',
		_children: [
			{ _href: '#/1', _icons: 'kolicon-house', _label: '2.1. Untermenüpunkt' },
			{ _href: '#/2', _icons: 'kolicon-house', _label: '2.2. Untermenüpunkt' },
		],
	},
	{
		_icons: 'kolicon-house',
		_label: '3. Menüpunkt',
		_href: '#/',
	},
	{
		_icons: 'kolicon-cogwheel',
		_label: '4. Menüpunkt',
		_children: [
			{ _href: '#/1', _icons: 'kolicon-house', _label: '4.1. Untermenüpunkt' },
			{ _href: '#/2', _icons: 'kolicon-house', _label: '4.2. Untermenüpunkt' },
		],
	},
];

const NavPreview: React.FC<NavPreviewProps> = (props) => {
	const defaultProps = React.useMemo<JSX.KolNav>(
		() => ({
			_label: translate({ id: 'preview.component.nav.label' }),
			_links: defaultLinks,
		}),
		[]
	);

	return (
		<Preview<JSX.KolNav>
			propertyComponents={{
				_label: <KolInputText _label="_label" />,
				_links: <NavItemsProperty label="_links" />,
				_hasCompactButton: <BooleanProperty label="_hasCompactButton" />,
				_hasIconsWhenExpanded: <BooleanProperty label="_hasIconsWhenExpanded" />,
				_hideLabel: <BooleanProperty label="_hideLabel" />,
				_collapsible: <BooleanProperty label="_collapsible" />,
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolNav"
			visibleProperties={props.visibleProperties}
			codeCollapsable={props.codeCollapsable}
			codeCollapsed={props.codeCollapsed}
			layout={PreviewLayout.DEFAULT}
		>
			{(componentProps) => (
				<div className="min-h-44">
					<KolNav {...componentProps} />
				</div>
			)}
		</Preview>
	);
};

export default NavPreview;
