import { ButtonProps, KoliBriColor, ListStyleType } from '@public-ui/components';

export type Attribute = {
	defaultValue?: string | number | boolean;
	description: string;
	name: string;
	required: boolean;
	type: string;
};

export type Params = {
	_abbr?: Bundesamt | Bundesanstalt | Bundesministerium;
	_accept?: string;
	'_access-key'?: string;
	'_active-element'?: HTMLElement | null;
	'_adjust-height'?: boolean;
	_alert?: boolean;
	_align?: bottom | left | right | top;
	_alt?: string;
	_animate?: boolean;
	'_aria-controls'?: string;
	'_aria-current'?: date | location | page | step | time | boolean;
	'_aria-current-value'?: date | location | page | step | time | boolean;
	'_aria-expanded'?: boolean;
	'_aria-label'?: string;
	'_aria-selected'?: boolean;
	'_auto-complete'?: off | on;
	'_boundary-count'?: number;
	_caption?: string;
	_checked?: boolean;
	_collapsible?: boolean;
	_color?: string | KoliBriColor;
	_compact?: boolean;
	'_custom-class'?: string;
	_data?: KoliBriDataType[] | string;
	_disabled?: boolean;
	_error?: string;
	'_has-buttons'?: boolean | string | { first?: boolean; last?: boolean; next?: boolean; previous?: boolean };
	'_has-closer'?: boolean;
	'_has-compact-button'?: boolean;
	'_has-counter'?: boolean;
	'_has-footer'?: boolean;
	_headers?: string | { horizontal?: KoliBriTableHeaderCell[][]; vertical?: KoliBriTableHeaderCell[][] };
	_heading?: string;
	_headline?: string;
	_height?: string;
	'_hide-label'?: boolean;
	_hint?: string;
	_href?: string;
	_icon?: KoliBriAllIcon | string;
	'_icon-align'?: bottom | left | right | top;
	'_icon-only'?: boolean;
	_id?: string;
	_indeterminate?: boolean;
	_label?: string;
	_labeled?: boolean;
	_level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
	_links?: LinkProps[] | string;
	_list?: string | string[];
	'_list-style-type'?: ListStyleType | undefined;
	_loading?: eager | lazy;
	_max?: string;
	'_max-length'?: number;
	_min?: string;
	'_min-width'?: string;
	_multiple?: boolean;
	_name?: string;
	_on?: {
		onBlur?: (e: Event) => void;
		onChange?: (e: Event, v: unknown) => void;
		onCreate?: EventCallback<Event> | { label: string; callback: EventCallback<Event> };
		onClick?: (e: Event) => void;
		onClose?: (e: Event) => void;
		onFocus?: (e: Event) => void;
		onChangePage?: EventValueOrEventCallback<Event, number>;
		onChangePageSize?: EventValueOrEventCallback<Event, number>;
		onReset?: (e: Event) => void;
		onSubmit?: (e: Event) => void;
	};
	_open?: boolean;
	_ordered?: boolean;
	_org?: Bundesamt | Bundesanstalt | Bundesministerium;
	_orientation?: horizontal | vertical;
	_page?: number;
	'_page-size'?: number;
	'_page-size-options'?: number[] | string;
	_pagination?: boolean | string;
	_part?: string;
	_pattern?: string;
	_placeholder?: string;
	_prefix?: fab | fas;
	_quote?: string;
	'_read-only'?: boolean;
	_required?: boolean;
	'_required-text'?: boolean | string;
	_resize?: both | horizontal | none | vertical;
	_role?: button | link | tab;
	_rows?: number;
	'_secondary-headline'?: string;
	_selected?: number;
	_selector?: string;
	_show?: boolean;
	'_show-duration'?: number;
	'_sibling-count'?: number;
	_size?: number;
	_sizes?: string;
	'_smart-button'?: ButtonProps;
	_src?: string;
	_srcset?: string;
	_stealth?: boolean;
	_step?: number;
	_summary?: string;
	_symbol?: string;
	'_tab-index'?: number;
	_tabs?: TabButtonProps[] | string;
	'_tabs-align'?: bottom | left | right | top;
	_target?: string;
	'_target-description'?: string;
	_title?: string;
	'_tooltip-align'?: bottom | left | right | top;
	_total?: number;
	_touched?: boolean;
	_type?: default | error | info | success | warning;
	_unit?: string;
	'_use-case'?: image | nav | text;
	_variant?: card | msg;
	_version?: string;
	_width?: string;
};

export type TagName =
	| 'abbr'
	| 'accordion'
	| 'alert'
	| 'badge'
	| 'breadcrumb'
	| 'button'
	| 'button-group'
	| 'button-link'
	| 'card'
	| 'details'
	| 'form'
	| 'heading'
	| 'icon'
	// | 'image'
	| 'indented-text'
	| 'input-checkbox'
	| 'input-color'
	| 'input-date'
	| 'input-email'
	| 'input-file'
	| 'input-number'
	| 'input-password'
	| 'input-radio'
	| 'input-range'
	| 'input-text'
	| 'kolibri'
	| 'link'
	| 'link-button'
	| 'link-group'
	| 'logo'
	| 'modal'
	| 'nav'
	| 'pagination'
	| 'progress'
	// | 'quote'
	| 'select'
	| 'skip-nav'
	| 'spin'
	| 'symbol'
	| 'table'
	| 'tabs'
	| 'textarea'
	| 'toast'
	| 'tooltip'
	| 'version';
