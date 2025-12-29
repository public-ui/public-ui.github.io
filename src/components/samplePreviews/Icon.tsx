import React from 'react';
import { KolIcon } from '@public-ui/react-v19';

const Icon = () => (
	<>
		<KolIcon
			style={{
				fontSize: '2rem',
			}}
			_label="Label"
			_icons="codicon codicon-home"
		/>
		<KolIcon
			style={{
				color: 'red',
				fontSize: '2rem',
			}}
			_label=""
			_icons="codicon codicon-home"
		/>
	</>
);

export default Icon;
