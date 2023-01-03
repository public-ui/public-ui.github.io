import { Generic } from '@public-ui/core';
import { Stringified } from '../../types/common';
import { InputTypeOnOff } from '../../types/input/types';
import { InputController } from '../@deprecated/input/controller';
import { Props, Watches } from './types';
export declare class InputColorController extends InputController implements Watches {
  protected readonly component: Generic.Element.Component & Props;
  constructor(component: Generic.Element.Component & Props, name: string, host?: HTMLElement);
  validateAutoComplete(value?: InputTypeOnOff): void;
  validateList(value?: Stringified<string[]>): void;
  validateValue(value?: string): void;
  componentWillLoad(): void;
}
