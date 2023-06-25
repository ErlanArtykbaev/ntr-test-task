import { RecordOf } from 'immutable';

import { ResponseGenericType, THandler, TSelectorReturnType } from 'store/types';

export interface IReport {
  id: string
  date: string | Date
  value: number
}

export interface ISubCategory {
  id: string
  name: string
  reports: IReport[]
}


export interface ICategory {
  id: string
  name: string
  reports: IReport[]
  subCategories?: ISubCategory[]
  isSummary?: boolean
}

export interface ITransaction {
  id: string
  transactionType: string
  date: string | Date  // day of month
  value: number
  companyName: string
  subCategoryId: string
}

export interface ITransactionsDetail {
  subCategoryId: string
  subCategoryName: string
  date: string | Date
  totalValue: number
  transactionsList: ITransaction[]
}

export interface IDrawer {
  isShown: boolean
  cellId: string | null
}

export interface IDataStore {
  data: ResponseGenericType<ICategory>
  detailData: ResponseGenericType<ITransactionsDetail>
  drawer: IDrawer
}

export interface IDataRequest {
  from: string | Date  //start of date
  to: string | Date //end of date
}


export type TDataResponse = ICategory[];

export type TTransactionRequestParams = Pick<IReport, 'id'>;
export type TTransactionsResponse = ITransactionsDetail;

export type TDataStoreRecord = RecordOf<IDataStore>;

export type TDataHandler<T = void> = THandler<TDataStoreRecord, T>;
export type TDataSelectorReturnType<T> = TSelectorReturnType<T, TDataStoreRecord>;
