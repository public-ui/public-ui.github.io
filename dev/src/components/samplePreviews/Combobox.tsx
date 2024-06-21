import React from 'react';
import { KolCombobox } from '@public-ui/react';

const COUNTRY_SUGGESTIONS = [
    "Dänemark",
    "Deutschland",
    "Dominica",
]

const Combobox = () => <KolCombobox _touched _label="Label" _placeholder="Placeholder" _required _suggestions={COUNTRY_SUGGESTIONS} _value={'Deutschland'} />;

export default Combobox;
