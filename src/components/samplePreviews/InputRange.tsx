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
				icon: 'codicon codicon-arrow-left',
			},
			right: {
				icon: 'codicon codicon-arrow-right',
			},
		}}
		_touched
	/>
);

export default InputRange;
