import type { Components, JSX } from "../types/components";

interface KolVersion extends Components.KolVersion, HTMLElement {}
export const KolVersion: {
  prototype: KolVersion;
  new (): KolVersion;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
