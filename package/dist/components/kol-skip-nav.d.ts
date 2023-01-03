import type { Components, JSX } from "../types/components";

interface KolSkipNav extends Components.KolSkipNav, HTMLElement {}
export const KolSkipNav: {
  prototype: KolSkipNav;
  new (): KolSkipNav;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
