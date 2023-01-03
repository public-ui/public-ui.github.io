import type { Components, JSX } from "../types/components";

interface KolSymbol extends Components.KolSymbol, HTMLElement {}
export const KolSymbol: {
  prototype: KolSymbol;
  new (): KolSymbol;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
