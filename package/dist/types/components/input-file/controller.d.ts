import { Generic } from '@public-ui/core';
import { InputController } from '../@deprecated/input/controller';
import { Props, Watches } from './types';
export declare class InputFileController extends InputController implements Watches {
  protected readonly component: Generic.Element.Component & Props;
  constructor(component: Generic.Element.Component & Props, name: string, host?: HTMLElement);
  validateAccept(value?: string): void;
  validateMultiple(value?: boolean): void;
  validateRequired(value?: boolean): void;
  validateValue(value?: string): void;
  componentWillLoad(): void;
}
