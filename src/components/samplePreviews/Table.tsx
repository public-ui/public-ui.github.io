import React from 'react';
import { KolTableStateful } from '@public-ui/react-v19';

const DATA = [
	{ left: 'Left', center: 'Center', right: 'Right' },
	{ left: 'Left', center: 'Center', right: 'Right' },
];

const Table = () => (
	<KolTableStateful
		_label="Label"
		_headers={{
			horizontal: [
				[
					{ label: 'left', key: 'left', textAlign: 'left' },
					{ label: 'center', key: 'center', textAlign: 'center' },
					{ label: 'right', key: 'right', textAlign: 'right' },
				],
			],
		}}
		_data={DATA}
		className="block"
		style={{ maxWidth: '600px' }}
	/>
);

export default Table;
