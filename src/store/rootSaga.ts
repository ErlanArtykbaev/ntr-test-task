import { all, fork } from 'redux-saga/effects';

import data from './data/effects';

function* Saga(): Generator {
  yield all([
    fork(data),
  ]);
}

export default Saga;
