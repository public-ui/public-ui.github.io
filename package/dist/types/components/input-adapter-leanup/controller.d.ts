import { Generic } from '@public-ui/core';
import { Props, Watches } from './types';
export declare class ControlledInputController implements Watches {
  protected readonly component: Generic.Element.Component & Props;
  protected readonly name: string;
  protected readonly host?: HTMLElement;
  readonly formAssociated?: HTMLInputElement;
  constructor(component: Generic.Element.Component & Props, name: string, host?: HTMLElement);
  protected readonly syncFormAssociatedName: () => void;
  readonly setFormAssociatedValue: (value?: string | null) => void;
  validateAlert(value?: boolean): void;
  validateTouched(value?: boolean): void;
  componentWillLoad(): void;
}
