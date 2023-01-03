import { JSX } from '../../stencil-public-runtime';
import { Generic } from '@public-ui/core';
import { Orientation } from '../../types/orientation';
import { HeadingLevel } from '../../types/heading-level';
import { NavLinkProps } from '../link/component';
import { Stringified } from '../../types/common';
export declare type ListStyleType = 'disc' | 'circle' | 'square' | 'none' | 'decimal' | 'decimal-leading-zero' | 'lower-alpha' | 'lower-greek' | 'lower-latin' | 'lower-roman' | 'upper-alpha' | 'upper-latin' | 'upper-roman';
declare type RequiredProps = {
  ariaLabel: string;
  links: Stringified<NavLinkProps[]>;
};
declare type OptionalProps = {
  heading: string;
  level: HeadingLevel;
  listStyleType: ListStyleType;
  ordered: boolean;
  orientation: Orientation;
};
export declare type Props = Generic.Element.Members<RequiredProps, OptionalProps>;
declare type RequiredStates = {
  ariaLabel: string;
  links: NavLinkProps[];
  listStyleType: ListStyleType;
  orientation: Orientation;
};
declare type OptionalStates = {
  heading: string;
  level: HeadingLevel;
  ordered: boolean;
};
declare type States = Generic.Element.Members<RequiredStates, OptionalStates>;
export declare class KolLinkGroup implements Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates> {
  render(): JSX.Element;
  private isUl;
  _ariaLabel: string;
  _listStyleType?: ListStyleType;
  _heading?: string;
  _level?: HeadingLevel;
  _links: Stringified<NavLinkProps[]>;
  _ordered?: boolean;
  _orientation?: Orientation;
  state: States;
  validateAriaLabel(value?: string): void;
  validateListStyleType(value?: ListStyleType): void;
  validateHeading(value?: string): void;
  validateLevel(value?: HeadingLevel): void;
  validateLinks(value?: Stringified<NavLinkProps[]>): void;
  validateOrdered(value?: boolean): void;
  validateOrientation(value?: Orientation): void;
  componentWillLoad(): void;
}
export {};
