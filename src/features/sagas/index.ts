import { all, takeLatest } from 'redux-saga/effects';

import allMarketsSlice from '../AllMarkets/slice';
import { handleGetMarkets } from '../AllMarkets/saga';

import ascentRatesSlice from '../AscentRates/slice';
import { handleGetRates } from '../AscentRates/saga';

function* watcherRates() {
  yield takeLatest(ascentRatesSlice.actions.getRates.type, handleGetRates);
}

function* watcherMarkets() {
  yield takeLatest(allMarketsSlice.actions.getMarkets.type, handleGetMarkets);
}

export default function* rootSaga() {
  yield all([watcherRates(), watcherMarkets()]);
}
