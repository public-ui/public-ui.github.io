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
import { Params, TagName } from './types';
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
	params: Params;
};

export function ComponentDisplay(props: Props) {
	const p = props.params;
	switch (props.tag) {
		case 'abbr':
			return <KolAbbr _title={p._title || ''} _tooltipAlign={p['_tooltip-align']}></KolAbbr>;
		case 'accordion':
			return <KolAccordion _heading={p._heading || ''} _level={p._level} _on={p._on} _open={p._open}></KolAccordion>;
		case 'alert':
			return (
				<KolAlert
					_alert={p._alert}
					_hasCloser={p['_has-closer']}
					_heading={p._heading}
					_level={p._level}
					_on={p._on}
					_type={p._type}
					_variant={p._variant}
				></KolAlert>
			);
		case 'badge':
			return <KolBadge _label={p._label || ''} _color={p._color} _icon={p._icon} _iconOnly={p['_icon-only']} _smartButton={p['_smart-button']}></KolBadge>;
		case 'breadcrumb':
			return <KolBreadcrumb _ariaLabel={p['_aria-label'] || ''} _links={p._links as LinkProps[]}></KolBreadcrumb>;
		case 'button':
			return (
				<KolButton
					_accessKey={p['_access-key']}
					_ariaControls={p['_aria-controls']}
					_ariaCurrent={p['_aria-current']}
					_ariaExpanded={p['_aria-expanded']}
					_ariaLabel={p['_aria-label']}
					_ariaSelected={p['_aria-selected']}
					_customClass={p['_custom-class']}
					_disabled={p['_disabled']}
					_icon={p._icon}
					_iconOnly={p['_icon-only']}
					_id={p._id}
					_label={p._label || ''}
					_on={p._on}
					_role={p._role}
					_tabIndex={p['_tab-index']}
					_tooltipAlign={p['_tooltip-align']}
					_type={p._type}
					_variant={p._variant}
				></KolButton>
			);
		case 'button-group':
			return <KolButtonGroup></KolButtonGroup>;
		case 'button-link':
			return (
				<KolButtonLink
					_accessKey={p['_access-key']}
					_ariaControls={p['_aria-controls']}
					_ariaCurrent={p['_aria-current']}
					_ariaExpanded={p['_aria-expanded']}
					_ariaLabel={p['_aria-label']}
					_ariaSelected={p['_aria-selected']}
					_disabled={p['_disabled']}
					_icon={p._icon}
					_iconOnly={p['_icon-only']}
					_id={p._id}
					_label={p._label || ''}
					_on={p._on}
					_role={p._role}
					_tabIndex={p['_tab-index']}
					_tooltipAlign={p['_tooltip-align']}
					_type={p._type}
					_value={p._value}
				></KolButtonLink>
			);
		case 'card':
			return <KolCard _hasFooter={p['_has-footer']} _heading={p._heading || ''} _level={p._level}></KolCard>;
		case 'details':
			return <KolDetails _summary={p._summary || ''} _open={p._open}></KolDetails>;
		case 'form':
			return <KolForm _on={p._on} _requiredText={p['_required-text']}></KolForm>;
		case 'heading':
			return <KolHeading _headline={p._headline || ''} _level={p._level} _secondaryHeadline={p['_secondary-headline']}></KolHeading>;
		case 'icon':
			return <KolIcon _ariaLabel={p['_aria-label'] || ''} _icon={p._icon}></KolIcon>;
		case 'indented-text':
			return <KolIndentedText>{p._label}</KolIndentedText>;
		case 'input-checkbox':
			return (
				<KolInputCheckbox
					_accessKey={p['_access-key']}
					_alert={p['_alert']}
					_checked={p._checked}
					_disabled={p['_disabled']}
					_error={p['_error']}
					_hideLabel={p['_hide-label']}
					_hint={p['_hint']}
					_icon={p._icon}
					_id={p._id}
					_indeterminate={p['_indeterminate']}
					_name={p._name}
					_on={p._on}
					_required={p['_required']}
					_tabIndex={p['_tab-index']}
					_touched={p['_touched']}
					_value={p._value?.toString()}
					_variant={p._variant}
				></KolInputCheckbox>
			);
		case 'input-color':
			return (
				<KolInputColor
					_accessKey={p['_access-key']}
					_alert={p['_alert']}
					_autoComplete={p['_auto-complete']}
					_disabled={p['_disabled']}
					_error={p['_error']}
					_hideLabel={p['_hide-label']}
					_hint={p['_hint']}
					_icon={p._icon}
					_id={p._id}
					_list={p['_list']}
					_name={p._name}
					_on={p._on}
					_smartButton={p['_smart-button']}
					_tabIndex={p['_tab-index']}
					_touched={p['_touched']}
					_value={p._value?.toString()}
				></KolInputColor>
			);
		case 'input-date':
			return (
				<KolInputDate
					_accessKey={p['_access-key']}
					_alert={p['_alert']}
					_autoComplete={p['_auto-complete']}
					_disabled={p['_disabled']}
					_error={p['_error']}
					_hideLabel={p['_hide-label']}
					_hint={p['_hint']}
					_icon={p._icon}
					_id={p._id}
					_list={p['_list']}
					_max={new Date(p['_max'] as string)}
					_min={new Date(p['_min'] as string)}
					_name={p._name}
					_on={p._on}
					_readOnly={p['_read-only']}
					_required={p['_required']}
					_smartButton={p['_smart-button']}
					_step={p['_step']}
					_tabIndex={p['_tab-index']}
					_touched={p['_touched']}
					_type={p['_type']}
					_value={new Date(p._value as string)}
				></KolInputDate>
			);
		case 'input-email':
			return (
				<KolInputEmail
					_accessKey={p['_access-key']}
					_alert={p['_alert']}
					_autoComplete={p['_auto-complete']}
					_disabled={p['_disabled']}
					_error={p['_error']}
					_hideLabel={p['_hide-label']}
					_hint={p['_hint']}
					_icon={p._icon}
					_id={p._id}
					_list={p['_list']}
					_maxLength={p['_max-length']}
					_multiple={p['_multiple']}
					_name={p._name}
					_on={p._on}
					_pattern={p['_pattern']}
					_placeholder={p['_placeholder']}
					_readOnly={p['_read-only']}
					_required={p['_required']}
					_size={p['_size']}
					_smartButton={p['_smart-button']}
					_tabIndex={p['_tab-index']}
					_touched={p['_touched']}
					_value={p._value?.toString()}
				></KolInputEmail>
			);
		case 'input-file':
			return (
				<KolInputFile
					_accept={p['_accept']}
					_accessKey={p['_access-key']}
					_alert={p['_alert']}
					_disabled={p['_disabled']}
					_error={p['_error']}
					_hideLabel={p['_hide-label']}
					_hint={p['_hint']}
					_icon={p._icon}
					_id={p._id}
					_multiple={p['_multiple']}
					_name={p._name}
					_on={p._on}
					_required={p['_required']}
					_smartButton={p['_smart-button']}
					_tabIndex={p['_tab-index']}
					_touched={p['_touched']}
					_value={p._value?.toString()}
				></KolInputFile>
			);
		case 'input-number':
			return (
				<KolInputNumber
					_accessKey={p['_access-key']}
					_alert={p['_alert']}
					_autoComplete={p['_auto-complete']}
					_disabled={p['_disabled']}
					_error={p['_error']}
					_hideLabel={p['_hide-label']}
					_hint={p['_hint']}
					_icon={p._icon}
					_id={p._id}
					_list={p['_list']}
					_name={p._name}
					_on={p._on}
					_placeholder={p['_placeholder']}
					_readOnly={p['_read-only']}
					_required={p['_required']}
					_smartButton={p['_smart-button']}
					_tabIndex={p['_tab-index']}
					_touched={p['_touched']}
					_max={p['_max'] ? parseFloat(p['_max']) : undefined}
					_min={p['_min'] ? parseFloat(p['_min']) : undefined}
					_step={p['_step']}
				></KolInputNumber>
			);
		case 'input-password':
			return (
				<KolInputPassword
					_accessKey={p['_access-key']}
					_alert={p['_alert']}
					_autoComplete={p['_auto-complete']}
					_disabled={p['_disabled']}
					_error={p['_error']}
					_hideLabel={p['_hide-label']}
					_hint={p['_hint']}
					_icon={p._icon}
					_id={p._id}
					_maxLength={p['_max-length']}
					_name={p._name}
					_on={p._on}
					_pattern={p['_pattern']}
					_placeholder={p['_placeholder']}
					_readOnly={p['_read-only']}
					_required={p['_required']}
					_size={p['_size']}
					_smartButton={p['_smart-button']}
					_tabIndex={p['_tab-index']}
					_touched={p['_touched']}
				></KolInputPassword>
			);
		case 'input-radio':
			return (
				<KolInputRadio
					_accessKey={p['_access-key']}
					_alert={p['_alert']}
					_disabled={p['_disabled']}
					_error={p['_error']}
					_hideLabel={p['_hide-label']}
					_hint={p['_hint']}
					_id={p._id}
					_list={p['_list'] as Stringified<Option<W3CInputValue>[]>}
					_name={p._name}
					_on={p._on}
					_orientation={p['_orientation']}
					_required={p['_required']}
					_tabIndex={p['_tab-index']}
					_touched={p['_touched']}
				></KolInputRadio>
			);
		case 'input-range':
			return (
				<KolInputRange
					_accessKey={p['_access-key']}
					_alert={p['_alert']}
					_autoComplete={p['_auto-complete']}
					_disabled={p['_disabled']}
					_error={p['_error']}
					_hideLabel={p['_hide-label']}
					_hint={p['_hint']}
					_icon={p._icon}
					_id={p._id}
					_max={p['_max'] ? parseFloat(p['_max']) : undefined}
					_min={p['_min'] ? parseFloat(p['_min']) : undefined}
					_name={p._name}
					_on={p._on}
					_step={p['_step']}
					_tabIndex={p['_tab-index']}
					_touched={p['_touched']}
					_list={p['_list'] as Stringified<Option<number>[]>}
				></KolInputRange>
			);
		case 'input-text':
			return (
				<KolInputText
					_accessKey={p['_access-key']}
					_alert={p['_alert']}
					_autoComplete={p['_auto-complete']}
					_disabled={p['_disabled']}
					_error={p['_error']}
					_hideLabel={p['_hide-label']}
					_hint={p['_hint']}
					_icon={p._icon}
					_id={p._id}
					_list={p['_list']}
					_maxLength={p['_max-length']}
					_name={p._name}
					_on={p._on}
					_pattern={p['_pattern']}
					_placeholder={p['_placeholder']}
					_readOnly={p['_read-only']}
					_required={p['_required']}
					_size={p['_size']}
					_smartButton={p['_smart-button']}
					_tabIndex={p['_tab-index']}
					_touched={p['_touched']}
					_type={p['_type']}
				></KolInputText>
			);
		case 'kolibri':
			return <KolKolibri _animate={p['_animate']} _color={p['_color'] as string} _labeled={p['_labeled']}></KolKolibri>;
		case 'link':
			return (
				<KolLink
					_ariaControls={p['_aria-controls']}
					_ariaCurrent={p['_aria-current']}
					_ariaExpanded={p['_aria-expanded']}
					_ariaLabel={p['_aria-label']}
					_ariaSelected={p['_aria-selected']}
					_disabled={p['_disabled']}
					_href={p['_href'] || ''}
					_icon={p._icon}
					_iconOnly={p['_icon-only']}
					_label={p['_label'] || ''}
					_role={p._role}
					_tabIndex={p['_tab-index']}
					_target={p['_target']}
					_targetDescription={p['_target-description']}
					_tooltipAlign={p['_tooltip-align']}
				></KolLink>
			);
		case 'link-button':
			return (
				<KolLinkButton
					_ariaControls={p['_aria-controls']}
					_ariaCurrent={p['_aria-current']}
					_ariaExpanded={p['_aria-expanded']}
					_ariaLabel={p['_aria-label']}
					_ariaSelected={p['_aria-selected']}
					_customClass={p['_custom-class']}
					_disabled={p['_disabled']}
					_href={p['_href'] || ''}
					_icon={p._icon}
					_iconOnly={p['_icon-only']}
					_label={p._label || ''}
					_role={p._role}
					_tabIndex={p['_tab-index']}
					_tooltipAlign={p['_tooltip-align']}
					_target={p['_target']}
					_targetDescription={p['_target-description']}
					_variant={p._variant}
				></KolLinkButton>
			);
		case 'link-group':
			return (
				<KolLinkGroup
					_ariaLabel={p['_aria-label'] || ''}
					_links={p['_links'] as Stringified<LinkProps[]>}
					_heading={p['_heading'] || ''}
					_level={p['_level']}
					_listStyleType={p['_list-style-type']}
					_orientation={p['_orientation']}
				></KolLinkGroup>
			);
		case 'logo':
			return <KolLogo _org={p['_org']}></KolLogo>;
		case 'modal':
			return <KolModal _on={p._on} _ariaLabel={p['_aria-label'] || ''} _activeElement={p['_active-element']} _width={p['_width']}></KolModal>;
		case 'nav':
			return (
				<KolNav
					_ariaLabel={p['_aria-label'] || ''}
					_links={p['_links'] as Stringified<ButtonOrLinkOrTextWithChildrenProps[]>}
					_ariaCurrentValue={p['_aria-current-value']}
					_collapsible={p._collapsible}
					_compact={p._compact}
					_orientation={p['_orientation']}
				></KolNav>
			);
		case 'pagination': {
			let on = p._on;
			if (!on) {
				on = {
					onChangePage: console.log,
					onChangePageSize: console.log,
				};
			}
			return (
				<KolPagination
					_boundaryCount={p['_boundary-count']}
					_customClass={p['_custom-class']}
					_hasButtons={p['_has-buttons'] as Stringified<PaginationHasButton>}
					_on={on}
					_page={p._page || 0}
					_pageSize={p['_page-size']}
					_pageSizeOptions={p['_page-size-options']}
					_siblingCount={p['_sibling-count']}
					_tooltipAlign={p['_tooltip-align']}
					_total={p._total || 0}
					_variant={p._variant}
				></KolPagination>
			);
		}
		case 'progress':
			return <KolProgress _max={p['_max'] ? parseFloat(p['_max']) : 100} _type={p['_type']} _unit={p['_unit']} _value={50}></KolProgress>;
		case 'select':
			return (
				<KolSelect
					_accessKey={p['_access-key']}
					_alert={p['_alert']}
					_disabled={p['_disabled']}
					_error={p['_error']}
					_hideLabel={p['_hide-label']}
					_hint={p['_hint']}
					_icon={p._icon}
					_id={p._id}
					_list={p['_list'] as Stringified<SelectOption<W3CInputValue>[]>}
					_multiple={p['_multiple']}
					_name={p._name}
					_on={p._on}
					_required={p['_required']}
					_size={p['_size']}
					_tabIndex={p['_tab-index']}
					_touched={p['_touched']}
				></KolSelect>
			);
		case 'skip-nav':
			return <KolSkipNav _ariaLabel={p['_aria-label'] || ''} _links={p['_links'] as Stringified<LinkProps[]>}></KolSkipNav>;
		case 'spin':
			return <KolSpin _show={p['_show']}></KolSpin>;
		case 'symbol':
			return <KolSymbol _ariaLabel={p['_aria-label'] || ''} _symbol={p['_symbol'] || ''}></KolSymbol>;
		case 'table':
			return (
				<KolTable
					_caption={p['_caption'] || ''}
					_data={p['_data'] as Stringified<KoliBriDataType[]>}
					_headers={p['_headers'] as Stringified<KoliBriTableHeaders>}
					_minWidth={p['_min-width']}
					_pagination={p['_pagination']}
				></KolTable>
			);
		case 'tabs':
			return (
				<KolTabs
					_ariaLabel={p['_aria-label'] || ''}
					_tabs={p['_tabs'] as Stringified<TabButtonProps[]>}
					_on={p._on}
					_selected={p._selected}
					_tabsAlign={p['_tabs-align']}
				></KolTabs>
			);
		case 'textarea':
			return (
				<KolTextarea
					_accessKey={p['_access-key']}
					_alert={p['_alert']}
					_disabled={p['_disabled']}
					_error={p['_error']}
					_hideLabel={p['_hide-label']}
					_hint={p['_hint']}
					_id={p._id}
					_maxLength={p['_max-length']}
					_name={p._name}
					_on={p._on}
					_placeholder={p['_placeholder']}
					_readOnly={p['_read-only']}
					_required={p['_required']}
					_tabIndex={p['_tab-index']}
					_touched={p['_touched']}
					_adjustHeight={p['_adjust-height']}
					_hasCounter={p['_has-counter']}
					_resize={p['_resize']}
					_rows={p['_rows']}
				></KolTextarea>
			);
		case 'toast':
			return (
				<KolToast
					_alert={p['_alert']}
					_hasCloser={p['_has-closer']}
					_heading={p['_heading']}
					_level={p['_level']}
					_on={p._on}
					_show={p['_show']}
					_showDuration={p['_show-duration']}
					_type={p['_type']}
				></KolToast>
			);
		case 'tooltip':
			return <KolTooltip _id={p['_id'] || ''} _label={p['_label'] || ''} _align={p['_align']}></KolTooltip>;
		case 'version':
			return <KolVersion _version={p['_version'] || ''}></KolVersion>;
		default:
			return null;
	}
}
