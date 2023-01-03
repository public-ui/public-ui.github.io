import type { Components, JSX } from "../types/components";

interface KolButtonWc extends Components.KolButtonWc, HTMLElement {}
export const KolButtonWc: {
  prototype: KolButtonWc;
  new (): KolButtonWc;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
