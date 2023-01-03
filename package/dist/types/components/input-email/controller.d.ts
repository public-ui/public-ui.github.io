import { Generic } from '@public-ui/core';
import { InputTextEmailController } from '../input-text/controller';
import { Props, Watches } from './types';
export declare class InputEmailController extends InputTextEmailController implements Watches {
  protected readonly component: Generic.Element.Component & Props;
  constructor(component: Generic.Element.Component & Props, name: string, host?: HTMLElement);
  validateMultiple(value?: boolean): void;
  componentWillLoad(): void;
}
