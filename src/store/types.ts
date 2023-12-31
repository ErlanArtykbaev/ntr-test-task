import { AxiosError } from 'axios';
import { Task } from 'redux-saga';
import { Store } from 'redux';
import { GetParamsFromSelectors, OutputSelector, SelectorResultArray } from 'reselect';

import { TDataStoreRecord } from 'store/data/types';


export interface IAppState {
  data?: TDataStoreRecord;
}

export interface IWithSagaTaskStore extends Store<IAppState> {
  sagaTask?: Task;
  initialState?: IAppState;
}

export declare type IPayloadAction<P = void, T extends string = string, M = never, E = never> = {
  payload: P;
  type: T;
} & ([M] extends [never]
  ? Record<string, unknown>
  : {
    meta: M;
  }) &
  ([E] extends [never]
    ? Record<string, unknown>
    : {
      error: E;
    });

export declare type THandler<T, S = void> = (state: T, action: IPayloadAction<S>) => T;
export declare type THandlers<T, S = void> = {
  [action: string]: THandler<T, S> | THandler<T, S>[];
};

export interface ResponseGenericType<T, E = Record<string, unknown>> {
  fetching: boolean;
  data: T | null;
  error: AxiosError<E> | null;
}

export type TSelectorReturnType<T, D> = OutputSelector<[((state: IAppState) => D)],
  T,
  (...args: SelectorResultArray<[((state: IAppState) => D)]>) => T,
  GetParamsFromSelectors<[((state: IAppState) => D)]>>;

export interface IListResponseModel<T> {
  count: number;
  results: Array<T>;
}
