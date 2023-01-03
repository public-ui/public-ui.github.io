import type { Components, JSX } from "../types/components";

interface KolCard extends Components.KolCard, HTMLElement {}
export const KolCard: {
  prototype: KolCard;
  new (): KolCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
