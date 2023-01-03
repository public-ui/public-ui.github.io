import { Generic } from '@public-ui/core';
import { ButtonProps } from '../../../types/button-link';
import { Stringified } from '../../../types/common';
import { InputTypeOnDefault } from '../../../types/input/types';
import { ControlledInputController } from '../../input-adapter-leanup/controller';
import { Props as AdapterProps } from '../../input-adapter-leanup/types';
import { KoliBriInputIcon } from '../../input-text/types';
import { Props, Watches } from './types';
export declare class InputController extends ControlledInputController implements Watches {
  protected readonly component: Generic.Element.Component & Props & AdapterProps;
  hideLabel: boolean;
  constructor(component: Generic.Element.Component & Props, name: string, host?: HTMLElement);
  validateAccessKey(value?: string): void;
  validateAdjustHeight(value?: boolean): void;
  validateDisabled(value?: boolean): void;
  validateError(value?: string): void;
  validateHideLabel(value?: boolean): void;
  validateHint(value?: string): void;
  validateIcon(value?: Stringified<KoliBriInputIcon>): void;
  validateId(value?: string): void;
  validateName(value?: string): void;
  validateOn(value?: InputTypeOnDefault): void;
  validateSmartButton(value?: ButtonProps | string): void;
  validateTabIndex(value?: number): void;
  componentWillLoad(): void;
  protected onBlur(event: Event): void;
  protected onChange(event: Event): void;
  protected onClick(event: Event): void;
  protected onFocus(event: Event): void;
  setValue(event: Event, value: string | number | boolean): void;
  readonly onFacade: {
    onBlur: (event: Event) => void;
    onChange: (event: Event) => void;
    onClick: (event: Event) => void;
    onFocus: (event: Event) => void;
  };
}
