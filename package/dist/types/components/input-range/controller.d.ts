import { Generic } from '@public-ui/core';
import { Stringified } from '../../types/common';
import { InputTypeOnOff, Option } from '../../types/input/types';
import { InputController } from '../@deprecated/input/controller';
import { Props, Watches } from './types';
export declare class InputRangeController extends InputController implements Watches {
  protected readonly component: Generic.Element.Component & Props;
  constructor(component: Generic.Element.Component & Props, name: string, host?: HTMLElement);
  validateAutoComplete(value?: InputTypeOnOff): void;
  validateList(value?: Stringified<Option<number>[]>): void;
  validateMax(value?: number): void;
  validateMin(value?: number): void;
  validateStep(value?: number): void;
  validateValue(value?: number): void;
  componentWillLoad(): void;
}
