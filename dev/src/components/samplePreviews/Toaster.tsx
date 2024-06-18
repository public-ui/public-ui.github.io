import React from 'react';
import { KolAlert } from '@public-ui/react';

const Toaster = () => (
    <KolAlert _label="Title" _level={5} _type="error" _variant="card">
		Content
	</KolAlert>
);

export default Toaster;
