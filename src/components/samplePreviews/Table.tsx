import React from 'react';
import { KolTableStateful } from '@public-ui/react';

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
		_minWidth="100px"
		style={{ maxWidth: '600px' }}
	/>
);

export default Table;
