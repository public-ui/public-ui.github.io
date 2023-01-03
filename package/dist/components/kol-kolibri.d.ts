import type { Components, JSX } from "../types/components";

interface KolKolibri extends Components.KolKolibri, HTMLElement {}
export const KolKolibri: {
  prototype: KolKolibri;
  new (): KolKolibri;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
