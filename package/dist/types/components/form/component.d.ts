import { JSX } from '../../stencil-public-runtime';
import { Events } from '../../enums/events';
import { Generic } from '@public-ui/core';
import { EventCallback } from '../../types/callbacks';
import { Stringified } from '../../types/common';
export declare type KoliBriFormCallbacks = {
  [Events.onSubmit]?: EventCallback<Event>;
  [Events.onReset]?: EventCallback<Event>;
};
declare type RequiredProps = unknown;
declare type OptionalProps = {
  on: KoliBriFormCallbacks;
  requiredText: string | boolean;
};
export declare type Props = Generic.Element.Members<RequiredProps, OptionalProps>;
declare type RequiredStates = RequiredProps;
declare type OptionalStates = OptionalProps;
declare type States = Generic.Element.Members<RequiredStates, OptionalStates>;
export declare class KolForm implements Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates> {
  private readonly onSubmit;
  private readonly onReset;
  render(): JSX.Element;
  _on?: KoliBriFormCallbacks;
  _requiredText?: Stringified<boolean>;
  state: States;
  validateOn(value?: KoliBriFormCallbacks): void;
  validateRequiredText(value?: Stringified<boolean>): void;
  componentWillLoad(): void;
}
export {};
