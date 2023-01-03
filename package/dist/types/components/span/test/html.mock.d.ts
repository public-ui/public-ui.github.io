import { Props } from '../component';
declare type Slots = {
  ''?: string;
  expert?: string;
} & Record<string, undefined | string>;
export declare const getSpanWcHtml: (props: Props, slots?: Slots, additionalAttrs?: string, hiddenSlot?: boolean) => string;
export declare const getSpanHtml: (props: Props) => string;
export {};
