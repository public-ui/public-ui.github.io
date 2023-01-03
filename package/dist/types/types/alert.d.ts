import { EventCallback } from './callbacks';
export declare type AlertType = 'default' | 'info' | 'success' | 'warning' | 'error';
export declare type AlertVariant = 'card' | 'msg';
export declare type KoliBriAlertEventCallbacks = {
  onClose?: EventCallback<Event>;
};
