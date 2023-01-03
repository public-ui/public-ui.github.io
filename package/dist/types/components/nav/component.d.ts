import { JSX } from '../../stencil-public-runtime';
import { Generic } from '@public-ui/core';
import { Orientation } from '../../types/orientation';
import { NavLinkProps } from '../link/component';
import { Stringified } from '../../types/common';
import { AriaCurrent } from '../../types/button-link';
export declare type NavLinkWithChildrenProps = NavLinkProps & {
  _children?: NavLinkWithChildrenProps[];
};
export declare type KoliBriNavVariant = 'primary' | 'secondary';
declare type RequiredProps = {
  ariaLabel: string;
  links: Stringified<NavLinkWithChildrenProps[]>;
};
declare type OptionalProps = {
  ariaCurrentValue: AriaCurrent;
  collapsible: boolean;
  compact: boolean;
  hasCompactButton: boolean;
  orientation: Orientation;
  variant: KoliBriNavVariant;
};
declare type RequiredStates = {
  ariaCurrentValue: AriaCurrent;
  ariaLabel: string;
  collapsible: boolean;
  hasCompactButton: boolean;
  links: NavLinkWithChildrenProps[];
  orientation: Orientation;
  variant: KoliBriNavVariant;
};
declare type OptionalStates = {
  compact: boolean;
};
declare type States = Generic.Element.Members<RequiredStates, OptionalStates>;
export declare class KolNav implements Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates> {
  private readonly onClick;
  private readonly hasActiveChild;
  private linkList;
  render(): JSX.Element;
  _ariaCurrentValue: AriaCurrent;
  _ariaLabel: string;
  _collapsible?: boolean;
  _compact?: boolean;
  _hasCompactButton?: boolean;
  _orientation?: Orientation;
  _links: Stringified<NavLinkWithChildrenProps[]>;
  _variant?: KoliBriNavVariant;
  state: States;
  validateAriaCurrentValue(value?: AriaCurrent): void;
  validateAriaLabel(value?: string): void;
  validateCollapsible(value?: boolean): void;
  validateCompact(value?: boolean): void;
  validateHasCompactButton(value?: boolean): void;
  validateLinks(value?: Stringified<NavLinkWithChildrenProps[]>): void;
  validateOrientation(value?: Orientation): void;
  validateVariant(value?: KoliBriNavVariant): void;
  componentWillLoad(): void;
  disconnectedCallback(): void;
}
export {};
