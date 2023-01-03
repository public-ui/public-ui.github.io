import { JSX } from '../../stencil-public-runtime';
import { Stringified } from '../../types/common';
import { InputTypeOnDefault, Option } from '../../types/input/types';
import { Orientation } from '../../types/orientation';
import { Props } from '../input-radio/types';
export declare class KolInputRadioGroup implements Props {
  render(): JSX.Element;
  _accessKey?: string;
  _alert?: boolean;
  _disabled?: boolean;
  _error?: string;
  _hideLabel?: boolean;
  _hint?: string;
  _id: string;
  _list: Stringified<Option<unknown>[]>;
  _name?: string;
  _on?: InputTypeOnDefault;
  _orientation?: Orientation;
  _required?: boolean;
  _tabIndex?: number;
  _touched?: boolean;
  _value?: string;
}
