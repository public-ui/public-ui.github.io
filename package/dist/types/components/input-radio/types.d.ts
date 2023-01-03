import { Generic } from '@public-ui/core';
import { Stringified } from '../../types/common';
import { InputTypeOnDefault, Option } from '../../types/input/types';
import { Orientation } from '../../types/orientation';
import { InputRequiredProps } from '../input-text/types';
declare type RequiredProps = InputRequiredProps & {
  list: Stringified<Option<unknown>[]>;
};
declare type OptionalProps = {
  accessKey: string;
  alert: boolean;
  disabled: boolean;
  error: string;
  hideLabel: boolean;
  hint: string;
  name: string;
  on: InputTypeOnDefault;
  orientation: Orientation;
  required: boolean;
  tabIndex: number;
  touched: boolean;
  value: Stringified<unknown>;
};
export declare type Props = Generic.Element.Members<RequiredProps, OptionalProps>;
declare type RequiredStates = {
  id: string;
  list: Option<unknown>[];
  orientation: Orientation;
};
declare type OptionalStates = {
  accessKey: string;
  alert: boolean;
  disabled: boolean;
  error: string;
  hideLabel: boolean;
  hint: string;
  name: string;
  on: InputTypeOnDefault;
  required: boolean;
  tabIndex: number;
  touched: boolean;
  value: Stringified<unknown>;
};
export declare type States = Generic.Element.Members<RequiredStates, OptionalStates>;
export declare type Watches = Generic.Element.Watchers<RequiredProps, OptionalProps>;
export declare type ComponentApi = Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates>;
export {};
