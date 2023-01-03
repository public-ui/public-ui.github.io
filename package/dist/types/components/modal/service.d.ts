export declare class ModalService {
  private lockedElements;
  private modalStack;
  private lockElement;
  private unlockElement;
  private unlockLockedElements;
  private lockFocus;
  private renderModalIfExists;
  openModal(modalRef: HTMLElement, activeElement?: HTMLElement): void;
  closeModal(modalRef: HTMLElement): void;
}
