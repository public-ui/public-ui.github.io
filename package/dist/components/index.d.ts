/* kolibri custom elements */
export { KolAbbr as KolAbbr } from '../types/components/abbr/component';
export { KolAccordion as KolAccordion } from '../types/components/accordion/component';
export { KolAlert as KolAlert } from '../types/components/alert/component';
export { KolBadge as KolBadge } from '../types/components/badge/component';
export { KolBreadcrumb as KolBreadcrumb } from '../types/components/breadcrumb/component';
export { KolButton as KolButton } from '../types/components/button/shadow';
export { KolButtonGroup as KolButtonGroup } from '../types/components/button-group/shadow';
export { KolButtonGroupWc as KolButtonGroupWc } from '../types/components/button-group/component';
export { KolButtonLink as KolButtonLink } from '../types/components/button-link/component';
export { KolButtonWc as KolButtonWc } from '../types/components/button/component';
export { KolCard as KolCard } from '../types/components/card/component';
export { KolColor as KolColor } from '../types/components/@else/color/component';
export { KolCounter as KolCounter } from '../types/components/@else/counter/component';
export { KolDetails as KolDetails } from '../types/components/details/component';
export { KolForm as KolForm } from '../types/components/form/component';
export { KolHeading as KolHeading } from '../types/components/heading/shadow';
export { KolHeadingWc as KolHeadingWc } from '../types/components/heading/component';
export { KolIcon as KolIcon } from '../types/components/icon/component';
export { KolIconFontAwesome as KolIconFontAwesome } from '../types/components/icon-font-awesome/component';
export { KolIconIcofont as KolIconIcofont } from '../types/components/icon-icofont/component';
export { KolIndentedText as KolIndentedText } from '../types/components/indented-text/component';
export { KolInput as KolInput } from '../types/components/input/component';
export { KolInputAdapterLeanup as KolInputAdapterLeanup } from '../types/components/input-adapter-leanup/component';
export { KolInputCheckbox as KolInputCheckbox } from '../types/components/input-checkbox/component';
export { KolInputColor as KolInputColor } from '../types/components/input-color/component';
export { KolInputDate as KolInputDate } from '../types/components/input-date/component';
export { KolInputEmail as KolInputEmail } from '../types/components/input-email/component';
export { KolInputFile as KolInputFile } from '../types/components/input-file/component';
export { KolInputNumber as KolInputNumber } from '../types/components/input-number/component';
export { KolInputPassword as KolInputPassword } from '../types/components/input-password/component';
export { KolInputRadio as KolInputRadio } from '../types/components/input-radio/component';
export { KolInputRadioGroup as KolInputRadioGroup } from '../types/components/input-radio-group/component';
export { KolInputRange as KolInputRange } from '../types/components/input-range/component';
export { KolInputText as KolInputText } from '../types/components/input-text/component';
export { KolKolibri as KolKolibri } from '../types/components/kolibri/component';
export { KolLink as KolLink } from '../types/components/link/shadow';
export { KolLinkButton as KolLinkButton } from '../types/components/link-button/component';
export { KolLinkGroup as KolLinkGroup } from '../types/components/link-group/component';
export { KolLinkWc as KolLinkWc } from '../types/components/link/component';
export { KolLogo as KolLogo } from '../types/components/logo/component';
export { KolModal as KolModal } from '../types/components/modal/component';
export { KolNav as KolNav } from '../types/components/nav/component';
export { KolPagination as KolPagination } from '../types/components/pagination/component';
export { KolProcess as KolProgress } from '../types/components/progress/component';
export { KolSelect as KolSelect } from '../types/components/select/component';
export { KolSkipNav as KolSkipNav } from '../types/components/skip-nav/component';
export { KolSpan as KolSpan } from '../types/components/span/shadow';
export { KolSpanWc as KolSpanWc } from '../types/components/span/component';
export { KolSpin as KolSpin } from '../types/components/spin/component';
export { KolSymbol as KolSymbol } from '../types/components/symbol/component';
export { KolTable as KolTable } from '../types/components/table/component';
export { KolTabs as KolTabs } from '../types/components/tabs/component';
export { KolTextarea as KolTextarea } from '../types/components/textarea/component';
export { KolToast as KolToast } from '../types/components/toast/component';
export { KolTooltip as KolTooltip } from '../types/components/tooltip/component';
export { KolVersion as KolVersion } from '../types/components/version/component';

/**
 * Used to manually set the base path where assets can be found.
 * If the script is used as "module", it's recommended to use "import.meta.url",
 * such as "setAssetPath(import.meta.url)". Other options include
 * "setAssetPath(document.currentScript.src)", or using a bundler's replace plugin to
 * dynamically set the path at build time, such as "setAssetPath(process.env.ASSET_PATH)".
 * But do note that this configuration depends on how your script is bundled, or lack of
 * bundling, and where your assets can be loaded from. Additionally custom bundling
 * will have to ensure the static assets are copied to its build directory.
 */
export declare const setAssetPath: (path: string) => void;

export interface SetPlatformOptions {
  raf?: (c: FrameRequestCallback) => number;
  ael?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
  rel?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
}
export declare const setPlatformOptions: (opts: SetPlatformOptions) => void;
export * from '../types';
