import type { Components, JSX } from "../types/components";

interface KolButtonGroup extends Components.KolButtonGroup, HTMLElement {}
export const KolButtonGroup: {
  prototype: KolButtonGroup;
  new (): KolButtonGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
