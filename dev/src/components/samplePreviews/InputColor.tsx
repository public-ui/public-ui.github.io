import React from 'react';
import { KolInputColor } from '@public-ui/react';

const InputColor = () => (
	<KolInputColor
		_icons={{
			left: 'codicon codicon-symbol-color',
		}}
		_hideLabel
		_label="Color"
		_value="#f08080"
	/>
);

export default InputColor;
