import { JSX } from '../../stencil-public-runtime';
import { Stringified } from '../../types/common';
import { KoliBriIconProp } from '../../types/icon';
import { Props } from './component';
export declare class KolSpan implements Props {
  render(): JSX.Element;
  _icon?: Stringified<KoliBriIconProp>;
  _iconOnly?: boolean;
  _label: string;
}
