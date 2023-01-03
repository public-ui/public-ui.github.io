import type { Components, JSX } from "../types/components";

interface KolNav extends Components.KolNav, HTMLElement {}
export const KolNav: {
  prototype: KolNav;
  new (): KolNav;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
