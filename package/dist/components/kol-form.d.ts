import type { Components, JSX } from "../types/components";

interface KolForm extends Components.KolForm, HTMLElement {}
export const KolForm: {
  prototype: KolForm;
  new (): KolForm;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
