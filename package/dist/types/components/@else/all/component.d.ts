import { JSX } from '../../../stencil-public-runtime';
import { Generic } from '@public-ui/core';
declare type RequiredProps = unknown;
declare type OptionalProps = unknown;
declare type RequiredStates = RequiredProps & OptionalProps;
declare type OptionalStates = OptionalProps;
declare type States = Generic.Element.Members<RequiredStates, OptionalStates>;
export declare class KolAll implements Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates> {
  state: States;
  render(): JSX.Element;
}
export {};
