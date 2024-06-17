import React from 'react';
import { KolBreadcrumb } from '@public-ui/react';

const Breadcrumb = () => (
	<KolBreadcrumb
		_label="Breadcrumb aus Text-Links"
		_links={[
			{ _label: 'Home', _href: '#/back-page' },
			{ _label: 'Page', _href: '#/back-page' },
			{
				_label: 'Subpage',
				_href: '#/back-page',
			},
		]}
	></KolBreadcrumb>
);

export default Breadcrumb;
