/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useMemo } from 'react';
import {
	KolAbbr,
	KolAccordion,
	KolAlert,
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
import { TagName } from './types';

type Props = {
	tag: TagName;
	params: Record<string, string | number | boolean>;
};

export function ComponentDisplay(props: Props) {
	const p: Record<string, string | number | boolean> = {};
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
		badge: KolBadge,
		breadcrumb: KolBreadcrumb,
		button: KolButton,
		buttonGroup: KolButtonGroup,
		buttonLink: KolButtonLink,
		card: KolCard,
		details: KolDetails,
		form: KolForm,
		heading: KolHeading,
		icon: KolIcon,
		image: KolImage,
		indentedText: KolIndentedText,
		inputCheckbox: KolInputCheckbox,
		inputColor: KolInputColor,
		inputDate: KolInputDate,
		inputEmail: KolInputEmail,
		inputFile: KolInputFile,
		inputNumber: KolInputNumber,
		inputPassword: KolInputPassword,
		inputRadio: KolInputRadio,
		inputRange: KolInputRange,
		inputText: KolInputText,
		kolibri: KolKolibri,
		link: KolLink,
		linkButton: KolLinkButton,
		linkGroup: KolLinkGroup,
		logo: KolLogo,
		modal: KolModal,
		nav: KolNav,
		pagination: KolPagination,
		popover: KolPopover,
		progress: KolProgress,
		quote: KolQuote,
		select: KolSelect,
		skipNav: KolSkipNav,
		spin: KolSpin,
		symbol: KolSymbol,
		table: KolTable,
		tabs: KolTabs,
		textarea: KolTextarea,
		toast: KolToast,
		tooltip: KolTooltip,
		version: KolVersion,
	};
	// @ts-ignore
	const Tag = list[props.tag];
	return Tag ? (
		<Tag {...p}>
			{slots.map((s) => (
				<div key={s[0]} slot={s[0].replace('slot-', '')} dangerouslySetInnerHTML={{ __html: s[1] as string }}></div>
			))}
		</Tag>
	) : (
		<div>Tag not implemented</div>
	);
}
