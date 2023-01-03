import type { Components, JSX } from "../types/components";

interface KolInputColor extends Components.KolInputColor, HTMLElement {}
export const KolInputColor: {
  prototype: KolInputColor;
  new (): KolInputColor;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
