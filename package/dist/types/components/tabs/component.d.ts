import { JSX } from '../../stencil-public-runtime';
import { Events } from '../../enums/events';
import { KoliBriIconProp } from '../../types/icon';
import { Generic } from '@public-ui/core';
import { EventCallback, EventValueCallback } from '../../types/callbacks';
import { Stringified } from '../../types/common';
import { Alignment } from '../../types/props/alignment';
export declare type KoliBriTabsCallbacks = {
  onCreate?: EventCallback<Event> | {
    label: string;
    callback: EventCallback<Event>;
  };
} & {
  [Events.onSelect]?: EventValueCallback<CustomEvent | KeyboardEvent | PointerEvent, number>;
};
declare type RequiredTabButtonProps = {
  label: string;
};
declare type OptionalTabButtonProps = {
  disabled: boolean;
  icon: Stringified<KoliBriIconProp>;
  iconOnly: boolean;
  on: KoliBriTabsCallbacks;
  tooltipAlign: Alignment;
};
export declare type TabButtonProps = Generic.Element.Members<RequiredTabButtonProps, OptionalTabButtonProps>;
declare type RequiredProps = {
  ariaLabel: string;
  tabs: Stringified<TabButtonProps[]>;
};
declare type OptionalProps = {
  on: KoliBriTabsCallbacks;
  tabsAlign: Alignment;
  selected: number;
};
declare type RequiredStates = {
  ariaLabel: string;
  tabsAlign: Alignment;
  selected: number;
  tabs: TabButtonProps[];
};
declare type OptionalStates = {
  on: KoliBriTabsCallbacks;
};
declare type States = Generic.Element.Members<RequiredStates, OptionalStates>;
export declare class KolTabs implements Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates> {
  private readonly host?;
  private tabPanelsElement?;
  private onCreateLabel;
  private showCreateTab;
  private selectedTimeout?;
  private nextPossibleTabIndex;
  private onKeyDown;
  private readonly onClickSelect;
  private readonly onMouseDown;
  private renderButtonGroup;
  private tabPanelHost?;
  private readonly catchTabPanelHost;
  render(): JSX.Element;
  _ariaLabel: string;
  _on?: KoliBriTabsCallbacks;
  _selected?: number;
  _tabs: Stringified<TabButtonProps[]>;
  _tabsAlign?: Alignment;
  state: States;
  private selectNextNotDisabledTab;
  private syncSelectedAndTabs;
  validateAriaLabel(value?: string): void;
  validateOn(value?: KoliBriTabsCallbacks): void;
  validateSelected(value?: number): void;
  validateTabs(value?: Stringified<TabButtonProps[]>): void;
  validateTabsAlign(value?: Alignment): void;
  componentWillLoad(): void;
  private readonly handleTabPanels;
  componentDidRender(): void;
  private onSelect;
  private onCreate;
}
export {};
