import { Generic } from '@public-ui/core';
import { JSX } from '../../stencil-public-runtime';
import { TooltipAlignment } from '../tooltip/component';
declare type RequiredProps = {
  title: string;
};
declare type OptionalProps = {
  tooltipAlign: TooltipAlignment;
};
export declare type Props = Generic.Element.Members<RequiredProps, OptionalProps>;
declare type RequiredStates = RequiredProps & OptionalProps;
declare type OptionalStates = unknown;
declare type States = Generic.Element.Members<RequiredStates, OptionalStates>;
export declare class KolAbbr implements Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates> {
  private readonly nonce;
  render(): JSX.Element;
  _tooltipAlign?: TooltipAlignment;
  _title: string;
  state: States;
  validateTitle(value?: string): void;
  validateTooltipAlign(value?: TooltipAlignment): void;
  componentWillLoad(): void;
}
export {};
