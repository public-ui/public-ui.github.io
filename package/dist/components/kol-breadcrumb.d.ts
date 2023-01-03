import type { Components, JSX } from "../types/components";

interface KolBreadcrumb extends Components.KolBreadcrumb, HTMLElement {}
export const KolBreadcrumb: {
  prototype: KolBreadcrumb;
  new (): KolBreadcrumb;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
