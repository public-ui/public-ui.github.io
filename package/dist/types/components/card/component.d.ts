import { JSX } from '../../stencil-public-runtime';
import { Generic } from '@public-ui/core';
import { HeadingLevel } from '../../types/heading-level';
declare type RequiredProps = {
  heading: string;
};
declare type OptionalProps = {
  hasFooter: boolean;
  headline: string;
  level: HeadingLevel;
};
export declare type Props = Generic.Element.Members<RequiredProps, OptionalProps>;
declare type RequiredStates = RequiredProps;
declare type OptionalStates = OptionalProps;
declare type States = Generic.Element.Members<RequiredStates, OptionalStates>;
export declare class KolCard implements Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates> {
  render(): JSX.Element;
  _hasFooter?: boolean;
  _heading: string;
  _headline?: string;
  _level?: HeadingLevel;
  state: States;
  validateHasFooter(value?: boolean): void;
  validateHeading(value?: string): void;
  validateHeadline(value?: string): void;
  validateLevel(value?: HeadingLevel): void;
  componentWillLoad(): void;
}
export {};
