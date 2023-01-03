import { Generic } from '@public-ui/core';
import { Stringified } from '../../types/common';
import { InputNumberType } from '../../types/input/control/number';
import { Iso8601 } from '../../types/input/iso8601';
import { InputTypeOnOff } from '../../types/input/types';
import { InputController } from '../@deprecated/input/controller';
import { Props, Watches } from './types';
export declare class InputNumberController extends InputController implements Watches {
  private readonly numberOrIsoDateRegex;
  protected readonly component: Generic.Element.Component & Props;
  constructor(component: Generic.Element.Component & Props, name: string, host?: HTMLElement);
  validateAutoComplete(value?: InputTypeOnOff): void;
  validateList(value?: Stringified<string[]>): void;
  private readonly parseToString;
  private readonly validateIso8601;
  validateMax(value?: number | Iso8601): void;
  validateMin(value?: number | Iso8601): void;
  validatePlaceholder(value?: string): void;
  validateReadOnly(value?: boolean): void;
  validateRequired(value?: boolean): void;
  validateStep(value?: number): void;
  validateType(value?: InputNumberType): void;
  validateValue(value?: number | Iso8601): void;
  componentWillLoad(): void;
}
