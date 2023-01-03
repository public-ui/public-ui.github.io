import type { Components, JSX } from "../types/components";

interface KolIcon extends Components.KolIcon, HTMLElement {}
export const KolIcon: {
  prototype: KolIcon;
  new (): KolIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
