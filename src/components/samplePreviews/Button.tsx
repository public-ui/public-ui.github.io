import React from 'react';
import { KolButton } from '@public-ui/react-v19';

const Button = () => (
	<KolButton
		_label="Button"
		_variant="primary"
		_icons={{
			left: {
				icon: 'codicon codicon-arrow-left',
			},
			right: 'codicon codicon-arrow-right',
		}}
	/>
);

export default Button;
