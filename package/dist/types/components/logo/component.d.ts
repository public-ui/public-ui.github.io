import { JSX } from '../../stencil-public-runtime';
import { Bundesamt, Bundesanstalt, Bundesministerium } from '../../enums/bund';
import { Generic } from '@public-ui/core';
declare type RequiredProps = {
  org: Bundesministerium | Bundesamt | Bundesanstalt;
};
declare type OptionalProps = {
  abbr: Bundesministerium | Bundesamt | Bundesanstalt;
};
declare type RequiredStates = RequiredProps;
declare type OptionalStates = OptionalProps;
declare type States = Generic.Element.Members<RequiredStates, OptionalStates>;
export declare class KolLogo implements Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates> {
  _abbr?: Bundesministerium | Bundesamt | Bundesanstalt;
  _org: Bundesministerium | Bundesamt | Bundesanstalt;
  state: States;
  validateAbbr(value?: Bundesministerium | Bundesamt | Bundesanstalt): void;
  validateOrg(value?: Bundesministerium | Bundesamt | Bundesanstalt): void;
  componentWillLoad(): void;
  render(): JSX.Element;
}
export {};
