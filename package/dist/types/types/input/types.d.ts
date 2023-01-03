import { Events } from '../../enums/events';
import { EventCallback, EventValueCallback } from '../callbacks';
export declare type InputTypeOnOff = 'on' | 'off';
declare type InputTypeOnBlur = {
  [Events.onBlur]?: EventCallback<Event>;
};
declare type InputTypeOnClick = {
  [Events.onClick]?: EventCallback<Event>;
};
declare type InputTypeOnChange = {
  [Events.onChange]?: EventValueCallback<Event, unknown>;
};
declare type InputTypeOnFocus = {
  [Events.onFocus]?: EventCallback<Event>;
};
export declare type Option<T> = {
  disabled?: boolean;
  label: string;
  value: T;
};
export declare type Optgroup<T> = {
  disabled?: boolean;
  label: string;
  options: Option<T>[];
};
export declare type SelectOption<T> = Option<T> | Optgroup<T>;
export declare type InputTypeOnDefault = InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus;
export {};
