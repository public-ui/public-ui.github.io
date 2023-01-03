import type { Components, JSX } from "../types/components";

interface KolInputDate extends Components.KolInputDate, HTMLElement {}
export const KolInputDate: {
  prototype: KolInputDate;
  new (): KolInputDate;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
