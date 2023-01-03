import type { Components, JSX } from "../types/components";

interface KolColor extends Components.KolColor, HTMLElement {}
export const KolColor: {
  prototype: KolColor;
  new (): KolColor;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
