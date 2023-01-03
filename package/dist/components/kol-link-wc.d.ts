import type { Components, JSX } from "../types/components";

interface KolLinkWc extends Components.KolLinkWc, HTMLElement {}
export const KolLinkWc: {
  prototype: KolLinkWc;
  new (): KolLinkWc;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
