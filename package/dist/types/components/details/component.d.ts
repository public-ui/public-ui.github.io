import { JSX } from '../../stencil-public-runtime';
import { Generic } from '@public-ui/core';
declare type RequiredProps = {
  summary: string;
};
declare type OptionalProps = {
  open: boolean;
};
export declare type Props = Generic.Element.Members<RequiredProps, OptionalProps>;
declare type RequiredStates = RequiredProps;
declare type OptionalStates = OptionalProps;
declare type States = Generic.Element.Members<RequiredStates, OptionalStates>;
export declare class KolDetails implements Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates> {
  private htmlDetailsElement?;
  render(): JSX.Element;
  _open?: boolean;
  _summary: string;
  state: States;
  validateOpen(value?: boolean): void;
  validateSummary(value?: string): void;
  componentWillLoad(): void;
  private onClick;
}
export {};
