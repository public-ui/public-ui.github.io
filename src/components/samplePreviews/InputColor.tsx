import React from 'react';
import { KolInputColor } from '@public-ui/react-v19';

const InputColor = () => (
	<KolInputColor
		_icons={{
			left: 'fa-solid fa-palette',
		}}
		_hideLabel
		_label="Color"
		_value="#f08080"
	/>
);

export default InputColor;
