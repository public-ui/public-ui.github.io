import React from 'react';
import { KolLinkGroup } from '@public-ui/react';

const links = [
	{ _label: 'Link 1', _href: '#' },
	{ _label: 'Link 2', _href: '#' },
	{ _label: 'Link 3', _href: '#' },
];

const LinkGroup = () => <KolLinkGroup _links={links} _label="" />;

export default LinkGroup;
