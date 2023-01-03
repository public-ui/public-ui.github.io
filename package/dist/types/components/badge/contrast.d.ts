import { RGB } from 'color-convert/conversions';
export declare const getContrastYIQ: (r: number, g: number, b: number) => number;
export declare const calcContrastColor: (baseColor: RGB, contrastColor: RGB, ratio: number, dir?: number) => RGB;
export declare const getContrastColor: (baseColor: RGB, contrastcolor: RGB, ratio: number, dir?: number) => RGB;
export declare type KoliBriContrastColor = {
  baseColor: string;
  contrastColor: string;
};
export declare const createContrastColorPair: (color: string | KoliBriContrastColor, contrastRatio?: number) => KoliBriContrastColor;
