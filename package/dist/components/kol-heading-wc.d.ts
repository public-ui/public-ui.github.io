import type { Components, JSX } from "../types/components";

interface KolHeadingWc extends Components.KolHeadingWc, HTMLElement {}
export const KolHeadingWc: {
  prototype: KolHeadingWc;
  new (): KolHeadingWc;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
