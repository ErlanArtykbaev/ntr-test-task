import { ICategory, IReport, ISubCategory, TDataResponse } from 'store/data/types';

export interface ITableProps {
  data: TDataResponse | null
}

export interface IRowProps {
  data: ICategory
  isSummaryRow?: boolean
}

export interface ISubRowProps {
  data: ISubCategory
}

export interface ICellProps {
  data: IReport
}

export interface IMonthCellProps {
  month: string
}
