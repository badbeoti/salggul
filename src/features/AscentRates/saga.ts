import { call, put } from 'redux-saga/effects';
import ascentRatesSlice, { RateObj } from './slice';
import { api } from '../../api';

export function* handleGetRates() {
  try {
    const res: RateObj[] = yield call(api.getTrendsRate);
    const newRes = res
      .map((e: RateObj) => {
        return {
          ...e,
          code: e.code.slice(11),
        };
      })
      .filter((e: RateObj) => e.code[0] === 'K');
    yield put(ascentRatesSlice.actions.setRates(newRes));
  } catch (e: any) {
    yield put(ascentRatesSlice.actions.getError(`${e.message}`));
  }
}
