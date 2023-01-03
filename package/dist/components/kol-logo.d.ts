import type { Components, JSX } from "../types/components";

interface KolLogo extends Components.KolLogo, HTMLElement {}
export const KolLogo: {
  prototype: KolLogo;
  new (): KolLogo;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
