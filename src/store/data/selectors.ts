import { createSelector } from 'reselect';

import { IAppState } from 'store/types';

import { TDataResponse, TDataSelectorReturnType, TDataStoreRecord, TTransactionsResponse } from './types';

const selectState = (state: IAppState): TDataStoreRecord | undefined => state.data;

export const makeSelectDataInfo: TDataSelectorReturnType<TDataResponse | null> = createSelector(
  selectState,
  (state?: TDataStoreRecord): TDataResponse | null => {
    const profile = state?.getIn(['data', 'data']);
    if (!profile) return null;
    return profile.toJS();
  }
);

export const makeSelectDataFetching: TDataSelectorReturnType<boolean> = createSelector(
  selectState,
  (state?: TDataStoreRecord): boolean => {
    const value = state?.getIn(['data', 'fetching']);
    if (typeof value !== 'boolean') return false;
    return value;
  },
);

export const makeSelectDataDetailInfo: TDataSelectorReturnType<TTransactionsResponse | null> = createSelector(
  selectState,
  (state?: TDataStoreRecord): TTransactionsResponse | null => {
    const profile = state?.getIn(['detailData', 'data']);
    if (!profile) return null;
    return profile.toJS();
  }
);

export const makeSelectIsDrawerShown: TDataSelectorReturnType<boolean | undefined> = createSelector(
  selectState,
  (state?: TDataStoreRecord): boolean | undefined => state?.getIn(['drawer', 'isShown']),
);

export const makeSelectSelectedCellId: TDataSelectorReturnType<string | null | undefined> = createSelector(
  selectState,
  (state?: TDataStoreRecord): string | null | undefined => state?.getIn(['drawer', 'cellId']),
);
