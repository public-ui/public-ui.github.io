import type { Components, JSX } from "../types/components";

interface KolDetails extends Components.KolDetails, HTMLElement {}
export const KolDetails: {
  prototype: KolDetails;
  new (): KolDetails;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
