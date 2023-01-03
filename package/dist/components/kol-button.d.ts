import type { Components, JSX } from "../types/components";

interface KolButton extends Components.KolButton, HTMLElement {}
export const KolButton: {
  prototype: KolButton;
  new (): KolButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
