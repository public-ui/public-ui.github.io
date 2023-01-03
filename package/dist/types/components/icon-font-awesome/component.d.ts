import { JSX } from '../../stencil-public-runtime';
import { FontAwesome, FontAwesomeOssPrefix } from '../../enums/font-awesome';
import { Generic } from '@public-ui/core';
import { AriaLabel } from '../../types/aria-label';
declare type RequiredProps = AriaLabel & {
  icon: FontAwesome;
  prefix: FontAwesomeOssPrefix;
};
declare type OptionalProps = {
  part: string;
};
export declare class KolIconFontAwesome implements Generic.Element.Members<RequiredProps, OptionalProps> {
  render(): JSX.Element;
  _ariaLabel: string;
  _icon: FontAwesome;
  _prefix: FontAwesomeOssPrefix;
  _part?: string;
}
export {};
