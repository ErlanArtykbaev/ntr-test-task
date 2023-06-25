import { AxiosError } from 'axios';

import createAction from 'utils/createAction';

import { IDataRequest, TDataResponse, TTransactionRequestParams, TTransactionsResponse } from './types';

const STATE_KEY = '@data';

export const RESET_DATA_STATE = `${STATE_KEY}_RESET_DATA_STATE`;

export const GET_DATA_REQUEST = `${STATE_KEY}_GET_DATA_REQUEST`;
export const GET_DATA_SUCCESS = `${STATE_KEY}_GET_DATA_SUCCESS`;
export const GET_DATA_FAILURE = `${STATE_KEY}_GET_DATA_FAILURE`;

export const GET_DATA_DETAIL_REQUEST = `${STATE_KEY}_GET_DATA_DETAIL_REQUEST`;
export const GET_DATA_DETAIL_SUCCESS = `${STATE_KEY}_GET_DATA_DETAIL_SUCCESS`;
export const GET_DATA_DETAIL_FAILURE = `${STATE_KEY}_GET_DATA_DETAIL_FAILURE`;

export const SET_DRAWER = `${STATE_KEY}_SET_DRAWER`;

export const SET_SELECTED_CELL = `${STATE_KEY}_SET_SELECTED_CELL`;

export const resetMusicState = createAction(RESET_DATA_STATE);

export const getDataRequest = createAction<IDataRequest>(GET_DATA_REQUEST);
export const getDataSuccess = createAction<TDataResponse[]>(GET_DATA_SUCCESS);
export const getDataFailure = createAction<AxiosError>(GET_DATA_FAILURE);

export const getDataDetailRequest = createAction<TTransactionRequestParams>(GET_DATA_DETAIL_REQUEST);
export const getDataDetailSuccess = createAction<TTransactionsResponse>(GET_DATA_DETAIL_SUCCESS);
export const getDataDetailFailure = createAction<AxiosError>(GET_DATA_DETAIL_FAILURE);

export const setDrawer = createAction<boolean>(SET_DRAWER);
export const setSelectedCell= createAction<string | null>(SET_SELECTED_CELL);
