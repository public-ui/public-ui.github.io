import { CMYK } from 'color-convert/conversions';
export declare const cmykSaturation: (cmyk: number[], saturation?: number) => CMYK;
export declare const getHexBySat: (hex: string, saturation?: number) => string;
interface KoliBriContrast {
  color: {
    background: string;
    text: string;
  };
  contrast: {
    value: number;
    score: string;
  };
}
export declare const getValues: (hex: string, saturation?: number) => KoliBriContrast;
export {};
