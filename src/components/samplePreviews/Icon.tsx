import React from 'react';
import { KolIcon } from '@public-ui/react-v19';

const Icon = () => (
	<>
		<KolIcon
			style={{
				fontSize: '2rem',
			}}
			_label="Label"
			_icons="kolicon-house"
		/>
		<KolIcon
			style={{
				color: 'red',
				fontSize: '2rem',
			}}
			_label=""
			_icons="kolicon-house"
		/>
	</>
);

export default Icon;
