import type { Components, JSX } from "../types/components";

interface KolSpin extends Components.KolSpin, HTMLElement {}
export const KolSpin: {
  prototype: KolSpin;
  new (): KolSpin;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
