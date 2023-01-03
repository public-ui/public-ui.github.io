import { Generic } from '@public-ui/core';
import { Stringified } from '../../types/common';
import { Option, SelectOption } from '../../types/input/types';
import { Orientation } from '../../types/orientation';
import { InputController } from '../@deprecated/input/controller';
import { Props, Watches } from './types';
export declare const fillKeyOptionMap: <T>(keyOptionMap: Map<string, Option<T>>, options: SelectOption<T>[], preKey?: string) => void;
declare type RequiredProps = unknown;
declare type OptionalProps = {
  required: boolean;
};
declare type InputCheckboxRadioProps = Generic.Element.Members<RequiredProps, OptionalProps>;
declare type InputCheckboxRadioWatches = Generic.Element.Watchers<RequiredProps, OptionalProps>;
export declare class InputCheckboxRadioController extends InputController implements InputCheckboxRadioWatches {
  protected readonly component: Generic.Element.Component & InputCheckboxRadioProps;
  constructor(component: Generic.Element.Component & InputCheckboxRadioProps, name: string, host?: HTMLElement);
  validateRequired(value?: boolean): void;
  componentWillLoad(): void;
}
export declare class InputRadioController extends InputCheckboxRadioController implements Watches {
  protected readonly component: Generic.Element.Component & Props;
  private onStateChange;
  private readonly keyOptionMap;
  constructor(component: Generic.Element.Component & Props, name: string, host?: HTMLElement);
  readonly getOptionByKey: (key: string) => Option<unknown> | undefined;
  private readonly isValueInOptions;
  protected readonly beforePatchListValue: (_value: unknown, nextState: Map<string, unknown>) => void;
  validateOrientation(value?: Orientation): void;
  validateList(value?: Stringified<Option<unknown>[]>): void;
  validateValue(value?: Stringified<unknown>): void;
  componentWillLoad(onChange?: (event: Event) => void): void;
}
export {};
