import type { Components, JSX } from "../types/components";

interface KolInputCheckbox extends Components.KolInputCheckbox, HTMLElement {}
export const KolInputCheckbox: {
  prototype: KolInputCheckbox;
  new (): KolInputCheckbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
