import { Generic } from '@public-ui/core';
import { ButtonProps } from '../../types/button-link';
import { KoliBriInputIcon } from '../input-text/types';
declare type RequiredProps = unknown;
declare type OptionalProps = {
  alert: boolean;
  disabled: boolean;
  error: string;
  hideLabel: boolean;
  hint: string;
  icon: KoliBriInputIcon;
  readOnly: boolean;
  required: boolean;
  smartButton: ButtonProps;
  touched: boolean;
};
export declare type Props = Generic.Element.Members<RequiredProps, OptionalProps>;
export {};
