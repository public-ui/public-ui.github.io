import React from 'react';
import { KolButton, KolButtonGroup } from '@public-ui/react';

const ButtonGroup = () => (
	<KolButtonGroup>
		<KolButton _label="Active" _variant="primary" />
		<KolButton _label="Not active" _disabled />
		<KolButton _label="Active" _icons="codicon codicon-home" _variant="danger" />
	</KolButtonGroup>
);

export default ButtonGroup;
