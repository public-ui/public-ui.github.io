import React from 'react';
import { KolTabs } from '@public-ui/react-v19';

const tabs = [
	{
		_label: 'Label 1',
	},
	{
		_icons: 'codicon codicon-calendar',
		_label: 'Label 2',
	},
	{
		_disabled: true,
		_icons: 'codicon codicon-briefcase',
		_label: 'Label 3',
	},
];

const Tabs = () => (
	<KolTabs _tabs={tabs} className="mt-4" _label="Tabs with icons">
		<div slot="tab-0">Tab 1</div>
		<div slot="tab-1">Tab 2</div>
		<div slot="tab-2">Tab 3</div>
		<div slot="tab-3">Tab 4</div>
	</KolTabs>
);

export default Tabs;
