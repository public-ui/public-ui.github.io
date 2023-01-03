import { Generic } from '@public-ui/core';
import { JSX } from '../../stencil-public-runtime';
import { Events } from '../../enums/events';
import { EventValueCallback } from '../../types/callbacks';
import { HeadingLevel } from '../../types/heading-level';
export declare type KoliBriAccordionCallbacks = {
  [Events.onClick]?: EventValueCallback<Event, boolean>;
};
declare type RequiredProps = {
  heading: string;
};
declare type OptionalProps = {
  level: HeadingLevel;
  open: boolean;
  on: KoliBriAccordionCallbacks;
};
export declare type Props = Generic.Element.Members<RequiredProps, OptionalProps>;
declare type RequiredStates = RequiredProps;
declare type OptionalStates = OptionalProps;
declare type States = Generic.Element.Members<RequiredStates, OptionalStates>;
export declare class KolAccordion implements Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates> {
  private buttonRef?;
  private catchAriaExpanded;
  private triggerAriaExpanded;
  render(): JSX.Element;
  _heading: string;
  _level?: HeadingLevel;
  _on?: KoliBriAccordionCallbacks;
  _open?: boolean;
  state: States;
  validateHeading(value?: string): void;
  validateLevel(value?: HeadingLevel): void;
  validateOn(value?: KoliBriAccordionCallbacks): void;
  validateOpen(value?: boolean): void;
  componentWillLoad(): void;
  private onClick;
}
export {};
