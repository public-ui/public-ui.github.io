import { Generic } from '@public-ui/core';
import { InputCheckboxRadioController } from '../input-radio/controller';
import { InputCheckboxVariant, Props, Watches } from './types';
export declare class InputCheckboxController extends InputCheckboxRadioController implements Watches {
  protected readonly component: Generic.Element.Component & Props;
  constructor(component: Generic.Element.Component & Props, name: string, host?: HTMLElement);
  validateChecked(value?: boolean): void;
  validateIndeterminate(value?: boolean): void;
  validateType(value?: InputCheckboxVariant): void;
  validateVariant(value?: InputCheckboxVariant): void;
  validateValue(value?: string): void;
  componentWillLoad(): void;
}
