import { JSX } from '../../stencil-public-runtime';
import { Generic } from '@public-ui/core';
declare type RequiredProps = unknown;
declare type OptionalProps = {
  animate: boolean;
  color: string;
  labeled: boolean;
};
declare type RequiredStates = {
  animate: boolean;
  color: {
    red: number;
    green: number;
    blue: number;
  };
  labeled: boolean;
};
declare type OptionalStates = unknown;
declare type States = Generic.Element.Members<RequiredStates, OptionalStates>;
export declare class KolKolibri implements Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates> {
  render(): JSX.Element;
  private interval?;
  _animate?: boolean;
  _color?: string;
  _labeled?: boolean;
  state: States;
  validateAnimate(value?: boolean): void;
  private handleColorChange;
  validateColor(value?: string): void;
  validateLabeled(value?: boolean): void;
  componentWillLoad(): void;
  componentDidRender(): void;
  disconnectedCallback(): void;
}
export {};
