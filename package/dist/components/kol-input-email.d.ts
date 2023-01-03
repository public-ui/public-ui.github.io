import type { Components, JSX } from "../types/components";

interface KolInputEmail extends Components.KolInputEmail, HTMLElement {}
export const KolInputEmail: {
  prototype: KolInputEmail;
  new (): KolInputEmail;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
