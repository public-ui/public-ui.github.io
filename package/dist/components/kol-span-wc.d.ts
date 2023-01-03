import type { Components, JSX } from "../types/components";

interface KolSpanWc extends Components.KolSpanWc, HTMLElement {}
export const KolSpanWc: {
  prototype: KolSpanWc;
  new (): KolSpanWc;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
