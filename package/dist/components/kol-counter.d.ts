import type { Components, JSX } from "../types/components";

interface KolCounter extends Components.KolCounter, HTMLElement {}
export const KolCounter: {
  prototype: KolCounter;
  new (): KolCounter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
