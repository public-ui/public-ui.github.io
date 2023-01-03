import type { Components, JSX } from "../types/components";

interface KolTextarea extends Components.KolTextarea, HTMLElement {}
export const KolTextarea: {
  prototype: KolTextarea;
  new (): KolTextarea;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
