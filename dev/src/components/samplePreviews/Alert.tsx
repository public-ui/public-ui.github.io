import React from 'react';
import { KolAlert } from '@public-ui/react';

const Alert = () => (
	<KolAlert _label="Title" _level={5} _type="warning" _variant="card">
		Content
	</KolAlert>
);

export default Alert;
