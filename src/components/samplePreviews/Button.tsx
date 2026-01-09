import React from 'react';
import { KolButton } from '@public-ui/react-v19';

const Button = () => (
	<KolButton
		_label="Button"
		_variant="primary"
		_icons={{
			left: {
				icon: 'kolicon-chevron-left',
			},
			right: 'kolicon-chevron-right',
		}}
	/>
);

export default Button;
