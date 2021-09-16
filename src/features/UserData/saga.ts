import moment from 'moment';
import { call, fork, put, select } from 'redux-saga/effects';
import { api } from '../../api';
import { RootState } from '../../store';
import userDataSlice, { ResultObj, UserObj } from './slice';

const TODAY = moment().format('YYYY-MM-DD');

const ascent = (curPrice: number, prevPrice: number) =>
  Number(((curPrice - prevPrice) / prevPrice).toFixed(4));

export function* handleGetResult() {
  try {
    const { market, prevDate, seedMoney }: UserObj = yield select(
      (state: RootState) => state.userDataSlice.data
    );

    const prevPrice: number = yield call(api.getPriceFromDate, market, `${prevDate} 00:00:00`);

    if (prevPrice === 0) {
      yield put(userDataSlice.actions.getError('선택하신 날짜의 가격 데이터를 찾을 수 없습니다.'));
      return;
    }

    const curPrice: number = yield call(api.getPriceFromDate, market);

    const curSeedMoney = Number(
      (Number(seedMoney) + Number(seedMoney) * ascent(curPrice, prevPrice)).toFixed(0)
    );

    const newResult: ResultObj = {
      curSeedMoney,
      prevPrice,
      curPrice,
      ascent: ascent(curPrice, prevPrice),
      isGetResult: true,
    };

    yield put(userDataSlice.actions.setResult(newResult));
  } catch (e: any) {
    yield put(userDataSlice.actions.getError(`${e.message}`));
  }
}
