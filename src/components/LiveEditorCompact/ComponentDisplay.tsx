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
	KolDrawer,
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
	KolProgress,
	KolQuote,
	KolSelect,
	KolSingleSelect,
	KolSkipNav,
	KolSpin,
	KolSplitButton,
	KolSymbol,
	KolTable,
	KolTabs,
	KolTextarea,
	KolVersion,
} from '@public-ui/react';
import React from 'react';
import type { ImplementedTagName } from '../LiveEditorCompact/types';
import type { AttributesAndDefaultValues } from '../LiveEditorCompact';

type Props = {
	tag: ImplementedTagName;
	params: AttributesAndDefaultValues;
};

export function ComponentDisplay(props: Props) {
	const paramsWithoutSlots = Object.fromEntries(
		Object.entries(props.params).filter(([attributeName]) => !attributeName.startsWith('slot-'))
	);
	const slots = Object.entries(props.params).filter(([attributeName]) => attributeName.startsWith('slot-'));

	const list: Record<ImplementedTagName, unknown> = {
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
		drawer: KolDrawer,
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
		progress: KolProgress,
		quote: KolQuote,
		select: KolSelect,
		'single-select': KolSingleSelect,
		'skip-nav': KolSkipNav,
		spin: KolSpin,
		'split-button': KolSplitButton,
		symbol: KolSymbol,
		table: KolTable,
		tabs: KolTabs,
		textarea: KolTextarea,
		version: KolVersion,
	};
	const Tag = list[props.tag];
	return Tag ? (
		// @ts-ignore
		<Tag {...paramsWithoutSlots}>
			{slots.map((s) => (
				<div
					key={s[0]}
					slot={s[0].replace('slot-', '').replace('default', '')}
					dangerouslySetInnerHTML={{ __html: s[1] as string }}
				></div>
			))}
		</Tag>
	) : (
		<div>Tag not implemented</div>
	);
}
