import type { Components, JSX } from "../types/components";

interface KolSelect extends Components.KolSelect, HTMLElement {}
export const KolSelect: {
  prototype: KolSelect;
  new (): KolSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
