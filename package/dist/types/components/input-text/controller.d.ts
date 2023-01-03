import { InputPasswordController } from '../input-password/controller';
import { Props as InputTextProps, Watches as InputTextWatches } from './types';
import { Generic } from '@public-ui/core';
import { InputTextType } from '../../types/input/control/text';
import { Stringified } from '../../types/common';
declare type RequiredProps = {
  id: string;
};
declare type OptionalProps = {
  list: Stringified<string[]>;
};
declare type InputTextEmailProps = Generic.Element.Members<RequiredProps, OptionalProps>;
declare type InputTextEmailWatches = Generic.Element.Watchers<RequiredProps, OptionalProps>;
export declare class InputTextEmailController extends InputPasswordController implements InputTextEmailWatches {
  protected readonly component: Generic.Element.Component & InputTextEmailProps;
  constructor(component: Generic.Element.Component & InputTextEmailProps, name: string, host?: HTMLElement);
  validateList(value?: Stringified<string[]>): void;
  componentWillLoad(): void;
}
export declare class InputTextController extends InputTextEmailController implements InputTextWatches {
  protected readonly component: Generic.Element.Component & InputTextProps;
  hasError: boolean;
  hasList: boolean;
  constructor(component: Generic.Element.Component & InputTextProps, name: string, host?: HTMLElement);
  validateType(value?: InputTextType): void;
  componentWillLoad(): void;
}
export {};
