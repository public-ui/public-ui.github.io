import { Generic } from '@public-ui/core';
import { InputController } from '../@deprecated/input/controller';
import { CSSResize, Props, Watches } from './types';
export declare class TextareaController extends InputController implements Watches {
  protected readonly component: Generic.Element.Component & Props;
  constructor(component: Generic.Element.Component & Props, name: string, host?: HTMLElement);
  private afterSyncCharCounter;
  validateHasCounter(value?: boolean): void;
  validateMaxLength(value?: number): void;
  validatePlaceholder(value?: string): void;
  validateReadOnly(value?: boolean): void;
  validateResize(value?: CSSResize): void;
  validateRequired(value?: boolean): void;
  validateRows(value?: number): void;
  validateValue(value?: string): void;
  componentWillLoad(): void;
}
