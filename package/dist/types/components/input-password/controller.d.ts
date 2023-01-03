import { Generic } from '@public-ui/core';
import { InputTypeOnOff } from '../../types/input/types';
import { InputController } from '../@deprecated/input/controller';
import { Props, Watches } from './types';
export declare class InputPasswordController extends InputController implements Watches {
  protected readonly component: Generic.Element.Component & Props;
  private placeholderCache?;
  constructor(component: Generic.Element.Component & Props, name: string, host?: HTMLElement);
  private handleHiddenLabelAndRequired;
  validateAutoComplete(value?: InputTypeOnOff): void;
  validateHideLabel(value?: boolean): void;
  validateMaxLength(value?: number): void;
  validatePattern(value?: string): void;
  validatePlaceholder(value?: string): void;
  validateReadOnly(value?: boolean): void;
  validateRequired(value?: boolean): void;
  validateSize(value?: number): void;
  validateValue(value?: string): void;
  componentWillLoad(): void;
  protected onBlur(event: Event): void;
  protected onFocus(event: Event): void;
}
