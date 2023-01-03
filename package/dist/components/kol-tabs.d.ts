import type { Components, JSX } from "../types/components";

interface KolTabs extends Components.KolTabs, HTMLElement {}
export const KolTabs: {
  prototype: KolTabs;
  new (): KolTabs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
