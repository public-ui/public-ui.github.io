import type { Components, JSX } from "../types/components";

interface KolButtonGroupWc extends Components.KolButtonGroupWc, HTMLElement {}
export const KolButtonGroupWc: {
  prototype: KolButtonGroupWc;
  new (): KolButtonGroupWc;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
