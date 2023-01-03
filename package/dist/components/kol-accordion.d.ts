import type { Components, JSX } from "../types/components";

interface KolAccordion extends Components.KolAccordion, HTMLElement {}
export const KolAccordion: {
  prototype: KolAccordion;
  new (): KolAccordion;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
