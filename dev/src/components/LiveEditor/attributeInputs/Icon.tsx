import React from 'react';
import { Attribute } from '../types';

type Props = {
	attribute: Attribute;
	update: (key: string, value: string | number | boolean) => void;
	value?: string;
};
export function Icon(props: Props) {
	return <div>Kommt noch (Icon)</div>;
}
