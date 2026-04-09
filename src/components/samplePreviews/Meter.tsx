import React from 'react';
import { KolMeter } from '@public-ui/react-v19';

const Meter = () => <KolMeter _label="Auslastung" _max={100} _value={65} _unit="%" />;

export default Meter;
