import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../store';
import ascentRatesSlice, { RateObj } from './slice';

type days = 7 | 30 | 90 | 180 | 365;

export default function useAscentRates() {
  const dispatch = useDispatch();
  const defaultRates = (state: RootState) => state.ascentRatesSlice.rates;

  const rates7days = createSelector(defaultRates, (e: RateObj[]) =>
    [...e]
      .sort((a: RateObj, b: RateObj) => {
        if (a.changeRate7Days > b.changeRate7Days) return 1;
        if (a.changeRate7Days < b.changeRate7Days) return -1;
        return 0;
      })
      .reverse()
      .slice(0, 10)
  );

  const ratesByDays = (day: days) =>
    createSelector(defaultRates, (e: RateObj[]) =>
      [...e]
        .sort((a: RateObj, b: RateObj) => {
          if (a[`changeRate${day}Days`] > b[`changeRate${day}Days`]) return 1;
          if (a[`changeRate${day}Days`] < b[`changeRate${day}Days`]) return -1;
          return 0;
        })
        .reverse()
        .slice(0, 10)
    );

  useEffect(() => {
    dispatch(ascentRatesSlice.actions.getRates());
  }, []);

  return { defaultRates, rates7days, ratesByDays };
}
