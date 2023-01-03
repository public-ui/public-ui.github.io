import { JSX } from '../../stencil-public-runtime';
import { Generic } from '@public-ui/core';
import { Stringified } from '../../types/common';
import { NavLinkProps } from '../link/component';
declare type RequiredProps = {
  ariaLabel: string;
  links: Stringified<NavLinkProps[]>;
};
declare type OptionalProps = unknown;
export declare type Props = Generic.Element.Members<RequiredProps, OptionalProps>;
declare type RequiredStates = {
  ariaLabel: string;
  links: NavLinkProps[];
};
declare type OptionalStates = OptionalProps;
declare type States = Generic.Element.Members<RequiredStates, OptionalStates>;
export declare class KolBreadcrumb implements Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates> {
  render(): JSX.Element;
  _ariaLabel: string;
  _links: Stringified<NavLinkProps[]>;
  state: States;
  validateAriaLabel(value?: string): void;
  validateLinks(value?: Stringified<NavLinkProps[]>): void;
  componentWillLoad(): void;
}
export {};
