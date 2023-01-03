import type { Components, JSX } from "../types/components";

interface KolInputAdapterLeanup extends Components.KolInputAdapterLeanup, HTMLElement {}
export const KolInputAdapterLeanup: {
  prototype: KolInputAdapterLeanup;
  new (): KolInputAdapterLeanup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
