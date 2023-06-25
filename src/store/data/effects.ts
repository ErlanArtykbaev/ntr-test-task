import { all, takeLatest, call, put,  } from 'redux-saga/effects';
import { AxiosError } from 'axios';

// import request from 'api/index';
// import { ApiUrls } from 'api/apiUrls';

import { categoryResponse, transactionsDetail } from 'store/data/mocks';
import { IPayloadAction } from 'store/types';

import {
  GET_DATA_REQUEST,
  getDataSuccess,
  getDataFailure,
  GET_DATA_DETAIL_REQUEST,
  getDataDetailSuccess,
  getDataDetailFailure,
  setDrawer, setSelectedCell,
} from './actions';
import { TDataResponse, TTransactionRequestParams, TTransactionsResponse } from './types';


const fakeRequestForData = () => new Promise<TDataResponse>(res => {
  res(categoryResponse);
});
const fakeRequestForDataDetail = ({ id } : TTransactionRequestParams) => new Promise<TTransactionsResponse>(res => {
  res(transactionsDetail);
});

function* getData(): Generator {
  try {
    // real request should be like this
    // const response = yield call(request.get, ApiUrls.data);

    const response = yield call(fakeRequestForData);
    const data = response as TDataResponse[];
    yield put(getDataSuccess(data));

  } catch (error) {
    yield put(getDataFailure(error as AxiosError));
  }
}

function* getDataDetail(action: IPayloadAction<TTransactionRequestParams>): Generator {
  try {
    // real request should be like this
    // const response = yield call(request.get, ApiUrls.reportDetail);
    const { payload } = action;

    const response = yield call(fakeRequestForDataDetail, payload);
    const data = response as TTransactionsResponse;
    yield put(getDataDetailSuccess(data));

    yield put(setSelectedCell(payload.id));
    yield put(setDrawer(true));

  } catch (error) {
    yield put(getDataDetailFailure(error as AxiosError));
  }
}

function* Saga(): Generator {
  yield all([
    takeLatest(GET_DATA_REQUEST, getData),
    takeLatest(GET_DATA_DETAIL_REQUEST, getDataDetail),
  ]);
}

export default Saga;
