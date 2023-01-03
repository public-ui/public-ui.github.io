import type { Components, JSX } from "../types/components";

interface KolSpan extends Components.KolSpan, HTMLElement {}
export const KolSpan: {
  prototype: KolSpan;
  new (): KolSpan;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
