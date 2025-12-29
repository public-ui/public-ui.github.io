import React from 'react';
import { KolInputRadio } from '@public-ui/react-v19';

const InputRadio = () => (
	<KolInputRadio
		_required
		_touched
		_value="option1"
		_options="[{'label':'Option 1','value':'option1'},{'label':'Option 2','value':'option2'}]"
		_label="Label"
	/>
);

export default InputRadio;
