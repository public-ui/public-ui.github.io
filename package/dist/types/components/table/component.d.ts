import { JSX } from '../../stencil-public-runtime';
import { Generic } from '@public-ui/core';
import { Stringified } from '../../types/common';
import { KoliBriDataType, KoliBriSortDirection, KoliBriTableHeaders, KoliBriTablePaginationProps, KoliBriTablePaginationStates } from '../../types/table';
declare type RequiredProps = {
  caption: string;
  data: Stringified<KoliBriDataType[]>;
  headers: Stringified<KoliBriTableHeaders>;
};
declare type OptionalProps = {
  minWidth: string;
  pagination: boolean | Stringified<KoliBriTablePaginationProps>;
};
declare type RequiredStates = {
  caption: string;
  data: KoliBriDataType[];
  headers: KoliBriTableHeaders;
  pagination: KoliBriTablePaginationStates;
  sortedData: KoliBriDataType[];
};
declare type OptionalStates = {
  minWidth: string;
} & {
  sortDirection: KoliBriSortDirection;
};
declare type States = Generic.Element.Members<RequiredStates, OptionalStates>;
export declare class KolTable implements Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates> {
  private horizontal;
  private sortFunction?;
  private sortDirections;
  private showPagination;
  private pageStartSlice;
  private pageEndSlice;
  _caption: string;
  _data: Stringified<KoliBriDataType[]>;
  _headers: Stringified<KoliBriTableHeaders>;
  _minWidth?: string;
  _pagination?: boolean | Stringified<KoliBriTablePaginationProps>;
  state: States;
  validateCaption(value?: string): void;
  validateData(value?: Stringified<KoliBriDataType[]>): void;
  validateHeaders(value?: Stringified<KoliBriTableHeaders>): void;
  validateMinWidth(value?: string): void;
  private readonly handlePagination;
  private readonly beforePatchPagination;
  validatePagination(value?: boolean | Stringified<KoliBriTablePaginationProps>): void;
  componentWillLoad(): void;
  private getNumberOfCols;
  private getNumberOfRows;
  private filterHeaderKeys;
  private getPrimaryHeader;
  private createDataField;
  private selectDisplayedData;
  private cellRender;
  private updateSortedData;
  render(): JSX.Element;
}
export {};
