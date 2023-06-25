import { fromJS } from 'immutable';
import { AxiosError } from 'axios';

import createReducer from 'utils/createReducer';
import getRequestState from 'utils/requestState';

import {
  RESET_DATA_STATE,
  GET_DATA_REQUEST,
  GET_DATA_FAILURE,
  GET_DATA_SUCCESS,
  GET_DATA_DETAIL_REQUEST,
  GET_DATA_DETAIL_FAILURE,
  GET_DATA_DETAIL_SUCCESS,
  SET_DRAWER,
  SET_SELECTED_CELL,
} from './actions';
import {
  TDataStoreRecord,
  TDataHandler,
  TDataResponse, TTransactionsResponse,
} from './types';


const initialState: TDataStoreRecord = fromJS({
  data: getRequestState<TDataResponse>(),
  detailData: getRequestState<TTransactionsResponse>(),
  drawer: {
    isShown: false,
    cellId: null
  },
});

const resetDataState: TDataHandler = state => state;

const setDataLoading = (value: boolean): TDataHandler =>
  state => state.setIn(['data', 'fetching'], value);
const setDataResponse: TDataHandler<TDataResponse> = (state, action) =>
  state.setIn(['data', 'data'], fromJS(action.payload));
const setDataError: TDataHandler<AxiosError> = (state, action) =>
  state.setIn(['data', 'error'], action.payload);

const setDataDetailLoading = (value: boolean): TDataHandler =>
  state => state.setIn(['detailData', 'fetching'], value);
const setDataDetailResponse: TDataHandler<TTransactionsResponse> = (state, action) =>
  state.setIn(['detailData', 'data'], fromJS(action.payload));
const setDataDetailError: TDataHandler<AxiosError> = (state, action) =>
  state.setIn(['detailData', 'error'], action.payload);

const setDrawer:TDataHandler<boolean> = (state, action) =>
  state.setIn(['drawer', 'isShown'], action.payload);

const setCell:TDataHandler<boolean | null> = (state, action) =>
  state.setIn(['drawer', 'cellId'], action.payload);



export default createReducer<TDataStoreRecord>(initialState, {
  [RESET_DATA_STATE]: resetDataState,

  [SET_DRAWER]: setDrawer,
  [SET_SELECTED_CELL]: setCell,

  [GET_DATA_REQUEST]: setDataLoading(true),
  [GET_DATA_SUCCESS]: [setDataLoading(false), setDataResponse],
  [GET_DATA_FAILURE]: [setDataLoading(false), setDataError],

  [GET_DATA_DETAIL_REQUEST]: setDataDetailLoading(true),
  [GET_DATA_DETAIL_SUCCESS]: [setDataDetailLoading(false), setDataDetailResponse],
  [GET_DATA_DETAIL_FAILURE]: [setDataDetailLoading(false), setDataDetailError],


});
