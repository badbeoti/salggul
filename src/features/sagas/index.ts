import { all, takeLatest } from 'redux-saga/effects';

import allMarketsSlice from '../AllMarkets/slice';
import { handleGetMarkets } from '../AllMarkets/saga';

import ascentRatesSlice from '../AscentRates/slice';
import { handleGetRates } from '../AscentRates/saga';

import userDataSlice from '../UserData/slice';
import { handleGetResult } from '../UserData/saga';

function* watcherRates() {
  yield takeLatest(ascentRatesSlice.actions.getRates.type, handleGetRates);
}

function* watcherMarkets() {
  yield takeLatest(allMarketsSlice.actions.getMarkets.type, handleGetMarkets);
}

function* watcherData() {
  yield takeLatest(userDataSlice.actions.getResult.type, handleGetResult);
}

export default function* rootSaga() {
  yield all([watcherRates(), watcherMarkets(), watcherData()]);
}
