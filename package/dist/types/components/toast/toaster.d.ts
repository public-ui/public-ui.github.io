import { AlertType } from '../../types/alert';
declare type Toast = {
  heading: string;
  description: string;
  type: AlertType;
};
export declare class ToasterService {
  private readonly document;
  private readonly toastElement;
  private readonly queue;
  private isOpen;
  constructor(document: Document);
  enqueue(data: Toast): void;
  private showToast;
}
export {};
