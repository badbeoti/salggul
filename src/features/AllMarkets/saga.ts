import { call, put } from 'redux-saga/effects';
import { api } from '../../api';
import allMarketsSlice, { MarketObj } from './slice';

export function* handleGetMarkets() {
  try {
    const res: MarketObj[] = yield call(api.getAllMarket);
    const newRes = [...res].filter((e) => e.market[0] === 'K');
    yield put(allMarketsSlice.actions.setMarkets(newRes));
  } catch (e: any) {
    yield put(allMarketsSlice.actions.getError(`${e.message}`));
  }
}
