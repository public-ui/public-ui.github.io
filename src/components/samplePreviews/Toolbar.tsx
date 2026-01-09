import React from 'react';
import { KolToolbar } from '@public-ui/react-v19';

const Toolbar = () => (
	<KolToolbar
		_label="Toolbar"
		_items={[
			{
				type: 'button',
				_label: 'Back',
				_hideLabel: true,
				_icons: {
					left: {
						icon: 'kolicon-chevron-left',
					},
				},
			},
			{
				type: 'button',
				_label: 'Next',
				_hideLabel: true,
				_icons: {
					right: {
						icon: 'kolicon-chevron-right',
					},
				},
			},
			{
				type: 'link',
				_href: '#',
				_label: 'Link',
			},
			{
				type: 'button',
				_label: 'Button',
			},
		]}
	/>
);

export default Toolbar;
