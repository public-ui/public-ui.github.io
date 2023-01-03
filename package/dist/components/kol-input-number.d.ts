import type { Components, JSX } from "../types/components";

interface KolInputNumber extends Components.KolInputNumber, HTMLElement {}
export const KolInputNumber: {
  prototype: KolInputNumber;
  new (): KolInputNumber;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
