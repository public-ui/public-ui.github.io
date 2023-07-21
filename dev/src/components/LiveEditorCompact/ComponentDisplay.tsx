/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
	KolAbbr,
	KolAccordion,
	KolAlert,
	KolAvatar,
	KolBadge,
	KolBreadcrumb,
	KolButton,
	KolButtonGroup,
	KolButtonLink,
	KolCard,
	KolDetails,
	KolForm,
	KolHeading,
	KolIcon,
	KolImage,
	KolIndentedText,
	KolInputCheckbox,
	KolInputColor,
	KolInputDate,
	KolInputEmail,
	KolInputFile,
	KolInputNumber,
	KolInputPassword,
	KolInputRadio,
	KolInputRange,
	KolInputText,
	KolKolibri,
	KolLink,
	KolLinkButton,
	KolLinkGroup,
	KolLogo,
	KolModal,
	KolNav,
	KolPagination,
	KolPopover,
	KolProgress,
	KolQuote,
	KolSelect,
	KolSkipNav,
	KolSpin,
	KolSymbol,
	KolTable,
	KolTabs,
	KolTextarea,
	KolToast,
	KolTooltip,
	KolVersion,
} from '@public-ui/react';
import React from 'react';
import { TagName } from '../LiveEditor/types';
import { Config } from '../LiveEditorCompact';

type Props = {
	tag: TagName;
	params: Config;
};

export function ComponentDisplay(props: Props) {
	const p: Config = {};
	Object.entries(props.params)
		.filter((tuple) => !tuple[0].startsWith('slot-'))
		.forEach((tuple) => {
			p[tuple[0]] = tuple[1];
		});
	const slots = Object.entries(props.params).filter((tuple) => tuple[0].startsWith('slot-'));

	const list = {
		abbr: KolAbbr,
		accordion: KolAccordion,
		alert: KolAlert,
		avatar: KolAvatar,
		badge: KolBadge,
		breadcrumb: KolBreadcrumb,
		button: KolButton,
		'button-group': KolButtonGroup,
		'button-link': KolButtonLink,
		card: KolCard,
		details: KolDetails,
		form: KolForm,
		heading: KolHeading,
		icon: KolIcon,
		image: KolImage,
		'indented-text': KolIndentedText,
		'input-checkbox': KolInputCheckbox,
		'input-color': KolInputColor,
		'input-date': KolInputDate,
		'input-email': KolInputEmail,
		'input-file': KolInputFile,
		'input-number': KolInputNumber,
		'input-password': KolInputPassword,
		'input-radio': KolInputRadio,
		'input-range': KolInputRange,
		'input-text': KolInputText,
		kolibri: KolKolibri,
		link: KolLink,
		'link-button': KolLinkButton,
		'link-group': KolLinkGroup,
		logo: KolLogo,
		modal: KolModal,
		nav: KolNav,
		pagination: KolPagination,
		popover: KolPopover,
		progress: KolProgress,
		quote: KolQuote,
		select: KolSelect,
		'skip-nav': KolSkipNav,
		spin: KolSpin,
		symbol: KolSymbol,
		table: KolTable,
		tabs: KolTabs,
		textarea: KolTextarea,
		toast: KolToast,
		tooltip: KolTooltip,
		version: KolVersion,
	};
	const Tag = list[props.tag];
	return Tag ? (
		// @ts-ignore
		<Tag {...p}>
			{slots.map((s) => (
				<div key={s[0]} slot={s[0].replace('slot-', '')} dangerouslySetInnerHTML={{ __html: s[1] as string }}></div>
			))}
		</Tag>
	) : (
		<div>Tag not implemented</div>
	);
}
