import { JSX } from '../../stencil-public-runtime';
import { Generic } from '@public-ui/core';
import { AriaLabel } from '../../types/aria-label';
import { KoliBriModalEventCallbacks } from '../../types/modal';
declare type RequiredProps = AriaLabel;
declare type OptionalProps = {
  activeElement: HTMLElement | null;
  on: KoliBriModalEventCallbacks;
  width: string;
  show: boolean;
};
declare type RequiredStates = AriaLabel & {
  activeElement: HTMLElement | null;
  width: string;
};
declare type OptionalStates = {
  on: KoliBriModalEventCallbacks;
  show: boolean;
};
declare type States = Generic.Element.Members<RequiredStates, OptionalStates>;
export declare class KolModal implements Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates> {
  private hostElement?;
  componentDidRender(): void;
  disconnectedCallback(): void;
  private readonly onKeyDown;
  render(): JSX.Element;
  _activeElement?: HTMLElement | null;
  _ariaLabel: string;
  _width?: string;
  _on?: KoliBriModalEventCallbacks;
  _show?: boolean;
  state: States;
  validateActiveElement(value?: HTMLElement | null): void;
  validateAriaLabel(value?: string): void;
  validateOn(value?: KoliBriModalEventCallbacks): void;
  validateShow(value?: boolean): void;
  validateWidth(value?: string): void;
  componentWillLoad(): void;
}
export {};
