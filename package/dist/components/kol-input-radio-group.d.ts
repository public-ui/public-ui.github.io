import type { Components, JSX } from "../types/components";

interface KolInputRadioGroup extends Components.KolInputRadioGroup, HTMLElement {}
export const KolInputRadioGroup: {
  prototype: KolInputRadioGroup;
  new (): KolInputRadioGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
