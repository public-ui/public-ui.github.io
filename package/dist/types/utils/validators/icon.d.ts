import { Generic } from '@public-ui/core';
import { Alignment, KoliBriIconProp, KoliBriIconState } from '../../types/icon';
export declare const mapIconProp2State: (icon: KoliBriIconProp, iconAlign?: Alignment) => KoliBriIconState;
export declare const isIcon: (value?: unknown) => boolean;
export declare const validateIcon: (component: Generic.Element.Component, value?: KoliBriIconProp) => void;
export declare const watchIconAlign: (component: Generic.Element.Component, value?: Alignment) => void;
