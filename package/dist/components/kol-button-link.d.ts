import type { Components, JSX } from "../types/components";

interface KolButtonLink extends Components.KolButtonLink, HTMLElement {}
export const KolButtonLink: {
  prototype: KolButtonLink;
  new (): KolButtonLink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
