import { Generic } from '@public-ui/core';
import { JSX } from '../../stencil-public-runtime';
import { Stringified } from '../../types/common';
import { KoliBriCustomIcon, KoliBriIconProp } from '../../types/icon';
declare type RequiredProps = {
  label: string;
};
declare type OptionalProps = {
  icon: Stringified<KoliBriIconProp>;
  iconOnly: boolean;
};
export declare type Props = Generic.Element.Members<RequiredProps, OptionalProps>;
declare type RequiredStates = {
  icon: {
    top?: KoliBriCustomIcon;
    right?: KoliBriCustomIcon;
    bottom?: KoliBriCustomIcon;
    left?: KoliBriCustomIcon;
  };
  iconOnly: boolean;
  label: string;
};
declare type OptionalStates = unknown;
export declare type States = Generic.Element.Members<RequiredStates, OptionalStates>;
export declare class KolSpanWc implements Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates> {
  render(): JSX.Element;
  _icon?: Stringified<KoliBriIconProp>;
  _iconOnly?: boolean;
  _label: string;
  state: States;
  validateIcon(value?: KoliBriIconProp): void;
  validateIconOnly(value?: boolean): void;
  validateLabel(value?: string): void;
  componentWillLoad(): void;
}
export {};
