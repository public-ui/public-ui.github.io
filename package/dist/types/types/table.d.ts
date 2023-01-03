import { RequiredProps as PaginationRequiredProps, OptionalProps as PaginationOptionalProps } from '../components/pagination/component';
import { Generic } from '@public-ui/core';
declare type KoliBriTableRender = <T>(domNode: HTMLElement, cell: KoliBriTableCell, tupel: T, data: T[]) => string | void;
declare type KoliBriTableSort = <T>(data: T[]) => T[];
declare type KoliBriTableCellTextAlign = 'center' | 'left' | 'right' | 'justify';
export declare type KoliBriDataType = Record<string, unknown>;
export declare type KoliBriSortFunction = (data: KoliBriDataType[]) => KoliBriDataType[];
export declare type KoliBriSortDirection = 'ASC' | 'DESC' | 'NOS';
export declare type KoliBriTablePaginationProps = Generic.Element.Members<{
  page: number;
}, PaginationRequiredProps & PaginationOptionalProps>;
export declare type KoliBriTablePaginationStates = Generic.Element.Members<{
  page: number;
  total: number;
}, PaginationRequiredProps & PaginationOptionalProps>;
export declare type KoliBriTableCell = {
  asTd?: boolean;
  colSpan?: number;
  label: string;
  render?: KoliBriTableRender;
  rowSpan?: number;
  sort?: KoliBriTableSort;
  textAlign?: KoliBriTableCellTextAlign;
  width?: string;
};
export declare type KoliBriTableHeaderCell = KoliBriTableCell & {
  asTd?: boolean;
  key?: string;
  sort?: KoliBriTableSort;
  sortDirection?: KoliBriSortDirection;
  textAlign?: KoliBriTableCellTextAlign;
};
export declare type KoliBriTableHeaders = {
  horizontal?: KoliBriTableHeaderCell[][];
  vertical?: KoliBriTableHeaderCell[][];
};
export {};
