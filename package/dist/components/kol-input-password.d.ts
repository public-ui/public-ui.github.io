import type { Components, JSX } from "../types/components";

interface KolInputPassword extends Components.KolInputPassword, HTMLElement {}
export const KolInputPassword: {
  prototype: KolInputPassword;
  new (): KolInputPassword;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
