import React from 'react';
import type { ButtonOrLinkOrTextWithChildrenProps } from '@public-ui/components';
import { KolNav } from '@public-ui/react-v19';

export const LINKS: ButtonOrLinkOrTextWithChildrenProps[] = [
	{
		_label: 'Home',
		_icons: 'kolicon-house',
	},
	{
		_label: '1 Nav',
		_href: '#',
		_icons: 'kolicon-house',
		_children: [
			{
				_label: '3.1 Nav',
				_href: '#',
			},
		],
	},
	{
		_label: '2 Nav',
		_icons: 'kolicon-house',
		_children: [
			{
				_label: 'Link',
				_href: '#',
			},
		],
	},
	{
		_label: '3 Nav',
		_icons: 'kolicon-house',
		_active: true,
		_children: [
			{
				_label: 'Link',
				_href: '#',
			},
		],
	},
];

const Nav = () => <KolNav class="block w-fit" _label="Main navigation" _links={LINKS} _hasIconsWhenExpanded />;

export default Nav;
