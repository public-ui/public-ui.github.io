import { JSX } from '../../stencil-public-runtime';
import { ButtonProps } from '../../types/button-link';
import { Stringified } from '../../types/common';
import { KoliBriInputIcon } from '../input-text/types';
import { Props } from './types';
export declare class KolInput implements Props {
  render(): JSX.Element;
  _alert?: boolean;
  _disabled?: boolean;
  _error?: string;
  _hideLabel?: boolean;
  _hint?: string;
  _icon?: KoliBriInputIcon;
  _id: string;
  _list?: Stringified<string[]>;
  _readOnly?: boolean;
  _renderNoLabel?: boolean;
  _required?: boolean;
  _smartButton?: ButtonProps;
  _touched?: boolean;
}
