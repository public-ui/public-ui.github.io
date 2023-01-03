import { Generic } from '@public-ui/core';
import { Stringified } from '../types/common';
export declare const objectObjectHandler: (value: unknown, cb: () => void) => void;
export declare const emptyStringByArrayHandler: (value: unknown, cb: () => void) => void;
export declare const setEventTargetAndStopPropagation: (event: Event, target?: HTMLElement) => void;
declare type SetStateHooks = {
  afterPatch?: Generic.Element.StateHooksCallback;
  beforePatch?: Generic.Element.NextStateHooksCallback;
};
export declare const setState: <T>(component: Generic.Element.Component, propName: string, value?: T | undefined, hooks?: SetStateHooks) => void;
declare type WatchOptions = {
  defaultValue?: unknown;
  hooks?: SetStateHooks;
  required?: boolean;
};
declare type WatchBooleanOptions = WatchOptions & {
  defaultValue?: boolean | null;
};
declare type WatchStringOptions = WatchOptions & {
  defaultValue?: string | null;
  minLength?: number;
};
export declare type WatchNumberOptions = WatchOptions & {
  defaultValue?: number | null;
  min?: number;
  max?: number;
};
export declare const watchValidator: <T>(component: Generic.Element.Component, propName: string, validationFunction: (value?: T | undefined) => boolean, requiredGeneric: Set<string | null | undefined>, value?: T | undefined, options?: WatchOptions) => void;
export declare const watchBoolean: (component: Generic.Element.Component, propName: string, value?: boolean, options?: WatchBooleanOptions) => void;
export declare const watchString: (component: Generic.Element.Component, propName: string, value?: string, options?: WatchStringOptions) => void;
export declare const watchNumber: (component: Generic.Element.Component, propName: string, value?: number, options?: WatchNumberOptions) => void;
export declare const watchJsonArrayString: <T>(component: Generic.Element.Component, propName: string, itemValidation: (item: T) => boolean, value?: Stringified<T[]> | undefined, arrayValidation?: (items: T[]) => boolean, options?: WatchOptions) => void;
export declare const mapString2Unknown: (value: unknown) => unknown;
export declare const stringifyJson: (value: unknown) => string;
export declare const parseJson: <T>(value: unknown) => T;
export declare const mapBoolean2String: (value?: boolean) => string | undefined;
export declare const mapStringOrBoolean2String: (value?: string | boolean) => string | undefined;
export declare const koliBriQuerySelector: <T extends Element>(selector: string, node?: Document | HTMLElement | ShadowRoot) => T | null;
export declare const koliBriQuerySelectorAll: <T extends Element>(selector: string, node?: Document | HTMLElement | ShadowRoot) => T[];
interface A11yColorContrast {
  backgroundColor: string;
  color: string;
  domNode: HTMLElement | HTMLSlotElement;
  level: string;
  score: number;
}
export declare const koliBriA11yColorContrast: (domNode: HTMLElement, a11yColorContrast?: A11yColorContrast) => A11yColorContrast;
export declare const koliBriQuerySelectorColors: (selector: string, a11yColorContrast?: A11yColorContrast) => A11yColorContrast;
export declare const scrollBySelector: (selector: string, document?: Document | HTMLElement | ShadowRoot) => void;
export declare class KoliBriUtils {
  private static executionLock;
  private static cache;
  static queryHtmlElementColors(targetNode: HTMLElement, a11yColorContrast: A11yColorContrast, recursion?: boolean, log?: boolean): A11yColorContrast | null;
}
export declare class KoliBriDevHelper {
  static readonly patchTheme: (name: string, map: Generic.Theming.Map<string, string>) => string;
  static readonly patchThemeTag: (themeName: string, tagName: "GLOBAL" | "PROPERTIES" | `${Uppercase<string>}-${Uppercase<string>}`, css: string) => void;
  static readonly querySelector: <T extends Element>(selector: string, node?: Document | HTMLElement | ShadowRoot | undefined) => T | null;
  static readonly querySelectorAll: <T extends Element>(selector: string, node?: Document | HTMLElement | ShadowRoot | undefined) => T[];
  static readonly scrollByHTMLElement: (element: HTMLElement, parentElement?: HTMLElement | Window) => void;
  static readonly scrollBySelector: (selector: string, document?: Document | HTMLElement | ShadowRoot | undefined) => void;
  static readonly stringifyJson: (value: unknown) => string;
}
export {};
