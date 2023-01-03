import type { Components, JSX } from "../types/components";

interface KolPagination extends Components.KolPagination, HTMLElement {}
export const KolPagination: {
  prototype: KolPagination;
  new (): KolPagination;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
