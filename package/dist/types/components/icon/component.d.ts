import { JSX } from '../../stencil-public-runtime';
import { Generic } from '@public-ui/core';
import { AriaLabel } from '../../types/aria-label';
declare type RequiredProps = AriaLabel & {
  icon: string;
};
declare type OptionalProps = {
  part: string;
};
export declare type Props = Generic.Element.Members<RequiredProps, OptionalProps>;
declare type RequiredStates = RequiredProps;
declare type OptionalStates = OptionalProps;
declare type States = Generic.Element.Members<RequiredStates, OptionalStates>;
export declare class KolIcon implements Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates> {
  render(): JSX.Element;
  _ariaLabel: string;
  _icon: string;
  _part?: string;
  state: States;
  validateAriaLabel(value?: string): void;
  validateIcon(value?: string): void;
  validatePart(value?: string): void;
  componentWillLoad(): void;
}
export {};
