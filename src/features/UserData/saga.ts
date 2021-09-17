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
    const userData: UserObj = yield select((state: RootState) => state.userDataSlice.data);

    const { market, prevDate, seedMoney } = userData;

    for (const [key, value] of Object.entries(userData)) {
      const emptyKey = (key: string) => {
        switch (key) {
          case 'market':
            return '마켓 페어';

          case 'prevDate':
            return '날짜';

          case 'seedMoney':
            return '매수금액';
        }
      };

      if (value === '') {
        yield put(userDataSlice.actions.getError(`${emptyKey(key)}필드를 입력해주세요.`));
        return;
      }
    }

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
