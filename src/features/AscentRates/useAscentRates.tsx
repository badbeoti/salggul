import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../store';
import ascentRatesSlice, { RateObj } from './slice';

export type Days = 7 | 30 | 90 | 180 | 365;

export default function useAscentRates() {
  const dispatch = useDispatch();
  const defaultRates = (state: RootState) => state.ascentRatesSlice.rates;

  const ratesByDays = (day: Days) =>
    createSelector(defaultRates, (e: RateObj[]) =>
      [...e]
        .filter((e) => e[`changeRate${day}Days`])
        .sort((a: RateObj, b: RateObj) => {
          if (a[`changeRate${day}Days`] > b[`changeRate${day}Days`]) return 1;
          if (a[`changeRate${day}Days`] < b[`changeRate${day}Days`]) return -1;
          return 0;
        })
        .reverse()
        .slice(0, 10)
    );

  const rates7 = useSelector(ratesByDays(7));
  const rates30 = useSelector(ratesByDays(30));
  const rates90 = useSelector(ratesByDays(90));
  const rates180 = useSelector(ratesByDays(180));
  const rates365 = useSelector(ratesByDays(365));

  useEffect(() => {
    dispatch(ascentRatesSlice.actions.getRates());
  }, []);

  return { rates7, rates30, rates90, rates180, rates365 };
}
