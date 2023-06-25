import { combineReducers } from 'redux';

import { IAppState } from './types';
import data from './data/store';

const rootReducer = combineReducers<IAppState>({
  data,
});

export default rootReducer;
