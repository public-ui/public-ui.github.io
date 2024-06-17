import React from 'react';
import { KolForm, KolInputText } from '@public-ui/react';

const Form = () => (
	<KolForm _requiredText={false}>
		<div className="grid gap-2">
			<KolInputText id="input1" _label="Label" />
			<KolInputText id="input1" _label="Label 2" />
		</div>
	</KolForm>
);

export default Form;
