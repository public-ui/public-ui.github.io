import type { Components, JSX } from "../types/components";

interface KolInputRadio extends Components.KolInputRadio, HTMLElement {}
export const KolInputRadio: {
  prototype: KolInputRadio;
  new (): KolInputRadio;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
