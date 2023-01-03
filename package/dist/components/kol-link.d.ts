import type { Components, JSX } from "../types/components";

interface KolLink extends Components.KolLink, HTMLElement {}
export const KolLink: {
  prototype: KolLink;
  new (): KolLink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
