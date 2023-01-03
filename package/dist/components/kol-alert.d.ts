import type { Components, JSX } from "../types/components";

interface KolAlert extends Components.KolAlert, HTMLElement {}
export const KolAlert: {
  prototype: KolAlert;
  new (): KolAlert;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
