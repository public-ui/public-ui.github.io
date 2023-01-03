import type { Components, JSX } from "../types/components";

interface KolInputFile extends Components.KolInputFile, HTMLElement {}
export const KolInputFile: {
  prototype: KolInputFile;
  new (): KolInputFile;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
