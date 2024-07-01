import React from 'react';
import { KolToolbar } from '@public-ui/react';

const Toolbar = () => (
	<KolToolbar
		_label="Toolbar"
		_items={[
			{
				_label: 'Back',
				_hideLabel: true,
				_icons: {
					left: {
						icon: 'codicon codicon-arrow-left',
					},
				},
			},
			{
				_label: 'Next',
				_hideLabel: true,
				_icons: {
					right: {
						icon: 'codicon codicon-arrow-right',
					},
				},
			},
			{
				_href: '#',
				_label: 'Link',
			},
			{
				_label: 'Button',
			},
		]}
	/>
);

export default Toolbar;
