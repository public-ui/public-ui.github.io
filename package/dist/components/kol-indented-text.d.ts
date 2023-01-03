import type { Components, JSX } from "../types/components";

interface KolIndentedText extends Components.KolIndentedText, HTMLElement {}
export const KolIndentedText: {
  prototype: KolIndentedText;
  new (): KolIndentedText;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
