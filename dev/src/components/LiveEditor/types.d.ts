export type Attribute = {
	defaultValue?: string;
	description: string;
	name: string;
	required: boolean;
	type: string;
};

export type TagNames = 'badge';

export type Params = {
	_color?: string | { backgroundColor: string; color: string };
	_icon?: string | KoliBriAllIcon;
	_iconOnly?: boolean;
	_label?: string;
	_smartButton?: ButtonProps;
};
