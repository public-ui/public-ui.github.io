import { JSX } from '../../stencil-public-runtime';
import { Generic } from '@public-ui/core';
declare type RequiredProps = {
  ariaLabel: string;
  symbol: string;
};
declare type OptionalProps = unknown;
export declare type Props = Generic.Element.Members<RequiredProps, OptionalProps>;
declare type RequiredStates = RequiredProps;
declare type OptionalStates = OptionalProps;
declare type States = Generic.Element.Members<RequiredStates, OptionalStates>;
export declare class KolSymbol implements Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates> {
  render(): JSX.Element;
  _ariaLabel: string;
  _symbol: string;
  state: States;
  validateAriaLabel(value?: string): void;
  validateSymbol(value?: string): void;
  componentWillLoad(): void;
}
export {};
