import type { Components, JSX } from "../types/components";

interface KolInputText extends Components.KolInputText, HTMLElement {}
export const KolInputText: {
  prototype: KolInputText;
  new (): KolInputText;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
