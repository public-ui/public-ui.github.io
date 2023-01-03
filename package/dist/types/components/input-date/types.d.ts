import { Generic } from '@public-ui/core';
import { InputDateType, OptionalInputProps } from '../../types/input/control/number';
import { Iso8601 } from '../../types/input/iso8601';
import { InputRequiredProps } from '../input-text/types';
declare type RequiredProps = InputRequiredProps;
declare type OptionalProps = OptionalInputProps<Iso8601 | Date> & {
  type: InputDateType;
};
declare type RequiredStates = unknown;
declare type OptionalStates = {
  max: Iso8601;
  min: Iso8601;
  value: Iso8601;
};
export declare type States = Generic.Element.Members<RequiredStates, OptionalStates>;
export declare type ComponentApi = Generic.Element.Members<RequiredProps, OptionalProps>;
export {};
