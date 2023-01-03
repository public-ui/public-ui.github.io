import { TooltipAlignment } from '../components/tooltip/component';
import { Events } from '../enums/events';
import { Generic } from '@public-ui/core';
import { EventCallback } from './callbacks';
import { Alignment, KoliBriCustomIcon, KoliBriIconProp } from './icon';
import { Stringified } from './common';
export declare type AriaCurrent = boolean | 'page' | 'step' | 'location' | 'date' | 'time';
export declare type AlternativButtonLinkRole = 'tab';
declare type RequiredButtonAndLinkProps = unknown;
declare type OptionalButtonAndLinkProps = {
  ariaControls: string;
  ariaCurrent: AriaCurrent;
  ariaExpanded: boolean;
  ariaLabel: string;
  ariaSelected: boolean;
  disabled: boolean;
  icon: Stringified<KoliBriIconProp>;
  iconAlign: Alignment;
  iconOnly: boolean;
  role: AlternativButtonLinkRole;
  tabIndex: number;
  tooltipAlign: TooltipAlignment;
};
declare type RequiredButtonAndLinkStates = {
  ariaLabel: string;
  icon: {
    top?: KoliBriCustomIcon;
    right?: KoliBriCustomIcon;
    bottom?: KoliBriCustomIcon;
    left?: KoliBriCustomIcon;
  };
  iconAlign: Alignment;
};
declare type OptionalButtonAndLinkStates = {
  ariaControls: string;
  ariaCurrent: AriaCurrent;
  ariaExpanded: boolean;
  ariaSelected: boolean;
  disabled: boolean;
  iconOnly: boolean;
  role: AlternativButtonLinkRole;
  tabIndex: number;
  tooltipAlign: TooltipAlignment;
};
export declare type KoliBriButtonType = 'button' | 'reset' | 'submit';
export declare type KoliBriButtonVariant = 'primary' | 'secondary' | 'normal' | 'danger' | 'ghost' | 'custom';
export declare type KoliBriButtonCallbacks = {
  [Events.onClick]?: EventCallback<PointerEvent>;
  [Events.onMouseDown]?: EventCallback<MouseEvent>;
};
export declare type KoliBriButtonVariantCustomClass = {
  customClass: string;
  variant: KoliBriButtonVariant;
};
export declare type RequiredButtonLinkProps = RequiredButtonAndLinkProps & {
  label: string;
};
export declare type OptionalButtonLinkProps = OptionalButtonAndLinkProps & {
  accessKey: string;
  id: string;
  on: KoliBriButtonCallbacks;
  type: KoliBriButtonType;
};
export declare type RequiredButtonLinkStates = RequiredButtonAndLinkStates & {
  label: string;
  type: KoliBriButtonType;
};
export declare type OptionalButtonLinkStates = OptionalButtonAndLinkStates & KoliBriButtonVariantCustomClass & {
  accessKey: string;
  id: string;
  on: KoliBriButtonCallbacks;
};
export declare type RequiredButtonProps = RequiredButtonLinkProps;
export declare type OptionalButtonProps = OptionalButtonLinkProps & KoliBriButtonVariantCustomClass;
export declare type ButtonProps = Generic.Element.Members<RequiredButtonProps, OptionalButtonProps>;
export declare type RequiredButtonStates = RequiredButtonLinkStates;
export declare type OptionalButtonStates = OptionalButtonLinkStates & KoliBriButtonVariantCustomClass;
export declare type ButtonStates = Generic.Element.Members<RequiredButtonStates, OptionalButtonStates>;
export declare type LinkOnCallbacks = {
  [Events.onClick]?: EventCallback<Event>;
};
export declare type LinkTarget = '_blank' | '_parent' | '_self' | '_top' | string;
export declare type LinkUseCase = 'text' | 'image' | 'nav';
export declare type RequiredLinkProps = RequiredButtonAndLinkProps;
export declare type OptionalLinkProps = OptionalButtonAndLinkProps & {
  fill: boolean;
  href: string;
  on: LinkOnCallbacks;
  part: string;
  selector: string;
  stealth: boolean;
  target: LinkTarget;
  targetDescription: string;
  underline: boolean;
  useCase: LinkUseCase;
};
export declare type LinkProps = Generic.Element.Members<RequiredLinkProps, OptionalLinkProps>;
export declare type RequiredLinkStates = RequiredButtonAndLinkStates;
export declare type OptionalLinkStates = OptionalButtonAndLinkStates & {
  ariaSelected: boolean;
  fill: boolean;
  href: string;
  on: LinkOnCallbacks;
  part: string;
  selector: string;
  stealth: boolean;
  target: LinkTarget;
  targetDescription: string;
  underline: boolean;
  useCase: LinkUseCase;
};
export declare type LinkStates = Generic.Element.Members<RequiredLinkStates, OptionalLinkStates>;
export declare type RequiredLinkButtonProps = RequiredLinkProps & {
  label: string;
};
export declare type OptionalLinkButtonProps = OptionalLinkProps & KoliBriButtonVariantCustomClass;
export declare type RequiredLinkButtonStates = RequiredLinkStates & {
  label: string;
};
export declare type OptionalLinkButtonStates = OptionalLinkStates & KoliBriButtonVariantCustomClass;
export declare type LinkButtonStates = Generic.Element.Members<RequiredLinkButtonStates, OptionalLinkButtonStates>;
export declare const watchTooltipAlignment: (component: Generic.Element.Component, propName: string, value?: TooltipAlignment) => void;
export {};
