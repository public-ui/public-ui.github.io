import type { Components, JSX } from "../types/components";

interface KolLinkGroup extends Components.KolLinkGroup, HTMLElement {}
export const KolLinkGroup: {
  prototype: KolLinkGroup;
  new (): KolLinkGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
