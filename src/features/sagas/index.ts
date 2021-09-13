import { takeLatest } from 'redux-saga/effects';
import { handleGetRates } from '../AscentRates/saga';
import ascentRatesSlice from '../AscentRates/slice';

export default function* watcherSaga() {
  yield takeLatest(ascentRatesSlice.actions.getRates.type, handleGetRates);
}
