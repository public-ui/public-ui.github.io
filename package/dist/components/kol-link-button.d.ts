import type { Components, JSX } from "../types/components";

interface KolLinkButton extends Components.KolLinkButton, HTMLElement {}
export const KolLinkButton: {
  prototype: KolLinkButton;
  new (): KolLinkButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
