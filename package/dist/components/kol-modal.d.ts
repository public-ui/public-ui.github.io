import type { Components, JSX } from "../types/components";

interface KolModal extends Components.KolModal, HTMLElement {}
export const KolModal: {
  prototype: KolModal;
  new (): KolModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
