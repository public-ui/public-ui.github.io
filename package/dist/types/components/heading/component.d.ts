import { JSX } from '../../stencil-public-runtime';
import { Generic } from '@public-ui/core';
import { HeadingLevel } from '../../types/heading-level';
declare type RequiredProps = unknown;
declare type OptionalProps = {
  level: HeadingLevel;
};
export declare type Props = Generic.Element.Members<RequiredProps, OptionalProps>;
declare type RequiredStates = RequiredProps;
declare type OptionalStates = OptionalProps;
declare type States = Generic.Element.Members<RequiredStates, OptionalStates>;
export declare class KolHeadingWc implements Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates> {
  _level?: HeadingLevel;
  state: States;
  validateLevel(value?: HeadingLevel): void;
  componentWillLoad(): void;
  render(): JSX.Element;
}
export {};
