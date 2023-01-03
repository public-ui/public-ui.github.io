import type { Components, JSX } from "../types/components";

interface KolAbbr extends Components.KolAbbr, HTMLElement {}
export const KolAbbr: {
  prototype: KolAbbr;
  new (): KolAbbr;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
