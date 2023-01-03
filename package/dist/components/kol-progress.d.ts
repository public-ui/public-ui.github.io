import type { Components, JSX } from "../types/components";

interface KolProgress extends Components.KolProgress, HTMLElement {}
export const KolProgress: {
  prototype: KolProgress;
  new (): KolProgress;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
