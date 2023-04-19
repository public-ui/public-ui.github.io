/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
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
import {
	ButtonOrLinkOrTextWithChildrenProps,
	KoliBriDataType,
	KoliBriTableHeaders,
	LinkProps,
	Option,
	PaginationHasButton,
	SelectOption,
	Stringified,
	TabButtonProps,
	W3CInputValue,
} from '@public-ui/components';

type Props = {
	tag: TagName;
	params: Record<string, string | number | boolean>;
};

export function ComponentDisplay(props: Props) {
	const p = props.params;

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
		progress: KolProgress,
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
	return <Tag {...p}></Tag>;
}
