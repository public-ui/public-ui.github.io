import type { Components, JSX } from "../types/components";

interface KolInputRange extends Components.KolInputRange, HTMLElement {}
export const KolInputRange: {
  prototype: KolInputRange;
  new (): KolInputRange;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
