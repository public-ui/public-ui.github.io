import React from 'react';
import type { SelectOption } from '@public-ui/components';
import { KolSelect } from '@public-ui/react-v19';

const OPTIONS: SelectOption<string>[] = [
	{
		label: 'Choose',
		value: '',
		disabled: true,
	},
];

const Select = () => <KolSelect _options={OPTIONS} _label="Select field" _hideLabel />;

export default Select;
