import type { Components, JSX } from "../types/components";

interface KolHeading extends Components.KolHeading, HTMLElement {}
export const KolHeading: {
  prototype: KolHeading;
  new (): KolHeading;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
