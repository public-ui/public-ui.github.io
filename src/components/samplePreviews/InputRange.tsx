import React from 'react';
import { KolInputRange } from '@public-ui/react-v19';

const InputRange = () => (
	<KolInputRange
		_min={0}
		_max={50}
		_hideLabel
		_label="Label"
		_icons={{
			left: {
				icon: 'kolicon-chevron-left',
			},
			right: {
				icon: 'kolicon-chevron-right',
			},
		}}
		_touched
	/>
);

export default InputRange;
