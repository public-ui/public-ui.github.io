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
	KolSplitButton,
	KolSymbol,
	KolTable,
	KolTabs,
	KolTextarea,
	KolToast,
	KolVersion,
} from '@public-ui/react';
import React, {NamedExoticComponent} from 'react';
import {TagName} from '../LiveEditorCompact/types';
import {AttributesAndDefaultValues} from '../LiveEditorCompact';

type Props = {
	tag: TagName;
	params: AttributesAndDefaultValues;
};

export function ComponentDisplay(props: Props) {
	const paramsWithoutSlots = Object.fromEntries(Object.entries(props.params).filter(([attributeName]) => !attributeName.startsWith('slot-')));
	const slots = Object.entries(props.params).filter(([attributeName]) => attributeName.startsWith('slot-'));

	const list: Record<Exclude<TagName, 'tag' | 'tooltip'>, NamedExoticComponent<any>> = {
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
		'split-button': KolSplitButton,
		symbol: KolSymbol,
		table: KolTable,
		tabs: KolTabs,
		textarea: KolTextarea,
		toast: KolToast,
		version: KolVersion,
	};
	const Tag = list[props.tag];
	return Tag ? (
		// @ts-ignore
		<Tag {...paramsWithoutSlots}>
			{slots.map((s) => (
				<div key={s[0]} slot={s[0].replace('slot-', '')} dangerouslySetInnerHTML={{ __html: s[1] as string }}></div>
			))}
		</Tag>
	) : (
		<div>Tag not implemented</div>
	);
}
