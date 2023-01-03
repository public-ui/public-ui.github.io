import type { Components, JSX } from "../types/components";

interface KolBadge extends Components.KolBadge, HTMLElement {}
export const KolBadge: {
  prototype: KolBadge;
  new (): KolBadge;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
