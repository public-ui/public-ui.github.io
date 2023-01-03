import type { Components, JSX } from "../types/components";

interface KolTooltip extends Components.KolTooltip, HTMLElement {}
export const KolTooltip: {
  prototype: KolTooltip;
  new (): KolTooltip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
