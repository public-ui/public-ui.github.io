export declare const configKoliBri: (window: Window) => void;
export declare const getWindow: () => Window;
export declare const getDocument: () => Document;
export declare const getDevMode: () => boolean;
export declare const getExperimalMode: () => boolean;
export declare const getColorContrastAnalysis: () => boolean;
declare type LogShieldOptions = {
  classifier?: string;
  forceLog?: boolean;
  overwriteStyle?: string;
};
export declare class Log {
  private static shield;
  private static mapToArray;
  private static handleClassifier;
  private static getShield;
  static debug(msg: unknown | unknown[], options?: LogShieldOptions): void;
  static info(msg: unknown | unknown[], options?: LogShieldOptions): void;
  static trace(msg: unknown | unknown[], options?: LogShieldOptions): void;
  static warn(msg: unknown | unknown[], options?: LogShieldOptions): void;
  static error(msg: unknown | unknown[], options?: LogShieldOptions): void;
  static throw(msg: unknown | unknown[], options?: LogShieldOptions): void;
}
declare let KoliBri: Record<string, unknown> | null;
export declare const getKoliBri: () => Record<string, unknown>;
export declare const initKoliBri: () => void;
export { KoliBri };
export declare const renderDevAdvice: () => void;
declare let nonce: () => string;
export { nonce };
