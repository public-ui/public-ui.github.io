import { Generic } from '@public-ui/core';
import { Stringified } from '../../types/common';
import { Option, SelectOption } from '../../types/input/types';
import { InputController } from '../@deprecated/input/controller';
import { Props, Watches } from './types';
export declare class SelectController extends InputController implements Watches {
  protected readonly component: Generic.Element.Component & Props;
  private onStateChange;
  private readonly keyOptionMap;
  constructor(component: Generic.Element.Component & Props, name: string, host?: HTMLElement);
  readonly getOptionByKey: (key: string) => Option<unknown> | undefined;
  private readonly isValueInOptions;
  private readonly filterValuesInOptions;
  private readonly beforePatchListValue;
  validateHeight(value?: string): void;
  validateList<T>(value?: SelectOption<T>[] | string): void;
  validateMultiple(value?: boolean): void;
  validateRequired(value?: boolean): void;
  validateSize(value?: number): void;
  validateValue(value?: Stringified<unknown[]>): void;
  componentWillLoad(onChange?: (event: Event) => void): void;
}
