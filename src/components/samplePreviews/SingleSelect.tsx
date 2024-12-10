import React from 'react';
import { KolSingleSelect } from '@public-ui/react';
import type { Option, StencilUnknown } from '@public-ui/components';

const COUNTRY_OPTIONS = [
	{ label: 'Dänemark', value: 'dk' },
	{ label: 'Deutschland', value: 'de' },
	{ label: 'Dominica', value: 'dm' },
];

const SingleSelect = () => (
	<KolSingleSelect
		_touched
		_label="Label"
		_placeholder="Placeholder"
		_required
		_options={COUNTRY_OPTIONS as Option<StencilUnknown>[]}
		_value={'Deutschland'}
	/>
);

export default SingleSelect;
