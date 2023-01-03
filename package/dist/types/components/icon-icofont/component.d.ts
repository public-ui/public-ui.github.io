import { JSX } from '../../stencil-public-runtime';
import { Generic } from '@public-ui/core';
import { AriaLabel } from '../../types/aria-label';
import { Icofont } from '../../types/icofont';
declare type RequiredProps = AriaLabel & {
  icon: Icofont;
};
declare type OptionalProps = {
  part: string;
};
export declare type Props = Generic.Element.Members<RequiredProps, OptionalProps>;
export declare class KolIconIcofont implements Generic.Element.Members<RequiredProps, OptionalProps> {
  render(): JSX.Element;
  _ariaLabel: string;
  _icon: Icofont;
  _part?: string;
}
export {};
