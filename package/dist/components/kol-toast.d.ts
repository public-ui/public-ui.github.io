import type { Components, JSX } from "../types/components";

interface KolToast extends Components.KolToast, HTMLElement {}
export const KolToast: {
  prototype: KolToast;
  new (): KolToast;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
