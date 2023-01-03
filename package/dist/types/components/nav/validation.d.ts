import { Generic } from '@public-ui/core';
import { Stringified } from '../../types/common';
import { NavLinkProps } from '../link/component';
export declare const watchNavLinks: (className: string, component: Generic.Element.Component & {
  state: {
    _links: NavLinkProps[];
  };
}, value?: Stringified<NavLinkProps[]>) => void;
