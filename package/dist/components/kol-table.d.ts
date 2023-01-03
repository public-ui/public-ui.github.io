import type { Components, JSX } from "../types/components";

interface KolTable extends Components.KolTable, HTMLElement {}
export const KolTable: {
  prototype: KolTable;
  new (): KolTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
