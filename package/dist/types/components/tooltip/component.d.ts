import { JSX } from '../../stencil-public-runtime';
import { Generic } from '@public-ui/core';
export declare type TooltipAlignment = 'top' | 'right' | 'bottom' | 'left';
declare type RequiredProps = {
  label: string;
};
declare type OptionalProps = {
  align: TooltipAlignment;
  id: string;
};
export declare type Props = Generic.Element.Members<RequiredProps, OptionalProps>;
declare type RequiredStates = RequiredProps & OptionalProps;
declare type OptionalStates = unknown;
export declare type States = Generic.Element.Members<RequiredStates, OptionalStates>;
export declare class KolTooltip implements Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates> {
  hydrated: boolean;
  private hostElement?;
  private readonly childElements;
  private tooltipElement?;
  private alignTooltip;
  private showTooltip;
  private hideTooltip;
  private hideTooltipByEscape;
  private catchHostElement;
  private catchTooltipElement;
  render(): JSX.Element;
  _align?: TooltipAlignment;
  _id?: string;
  _label: string;
  state: States;
  validateAlign(value?: TooltipAlignment): void;
  validateId(value?: string): void;
  validateLabel(value?: string): void;
  componentWillLoad(): void;
}
export {};
