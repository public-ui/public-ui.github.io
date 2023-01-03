import { JSX } from '../../stencil-public-runtime';
import { Generic } from '@public-ui/core';
import { KoliBriProgressType } from '../../types/progress';
declare type RequiredProps = {
  max: number;
  value: number;
};
declare type OptionalProps = {
  type: KoliBriProgressType;
  unit: string;
};
declare type RequiredStates = RequiredProps & {
  liveValue: number;
};
declare type OptionalStates = OptionalProps;
declare type States = Generic.Element.Members<RequiredStates, OptionalStates>;
export declare class KolProcess implements Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates> {
  private interval?;
  render(): JSX.Element;
  _max: number;
  _type?: KoliBriProgressType;
  _unit?: string;
  _value: number;
  state: States;
  validateMax(value?: number): void;
  validateType(value?: KoliBriProgressType): void;
  validateUnit(value?: string): void;
  validateValue(value?: number): void;
  componentWillLoad(): void;
  disconnectedCallback(): void;
}
export {};
