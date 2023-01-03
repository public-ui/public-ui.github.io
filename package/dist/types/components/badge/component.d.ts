import { JSX } from '../../stencil-public-runtime';
import { Generic } from '@public-ui/core';
import { Alignment, KoliBriIconProp } from '../../types/icon';
import { Stringified } from '../../types/common';
import { ButtonProps } from '../../types/button-link';
export declare type KoliBriColor = {
  backgroundColor: string;
  color: string;
};
declare type RequiredProps = {
  label: string;
};
declare type OptionalProps = {
  color: Stringified<KoliBriColor>;
  icon: Stringified<KoliBriIconProp>;
  iconOnly: boolean;
  smarButton: Stringified<ButtonProps>;
};
export declare type Props = Generic.Element.Members<RequiredProps, OptionalProps>;
declare type RequiredStates = {
  color: Stringified<KoliBriColor>;
};
declare type OptionalStates = {
  smartButton: ButtonProps;
};
export declare type States = Generic.Element.Members<RequiredStates, OptionalStates>;
export declare class KolBadge implements Props {
  private bgColorStr;
  private colorStr;
  render(): JSX.Element;
  _color?: string | KoliBriColor;
  _icon?: Stringified<KoliBriIconProp>;
  _iconAlign?: Alignment;
  _iconOnly?: boolean;
  _label: string;
  _smartButton?: Stringified<ButtonProps>;
  state: States;
  private handleColorChange;
  validateColor(value?: string | KoliBriColor): void;
  validateSmartButton(value?: ButtonProps | string): void;
  componentWillLoad(): void;
}
export {};
