import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../store';
import ascentRatesSlice, { RateObj } from './slice';
import userDataSlice from '../UserData/slice';
import allMarketsSlice from '../AllMarkets/slice';

export type Days = 7 | 30 | 90 | 180 | 365;

interface RatesSelectors {
  [index: string]: RateObj[];
}

export default function useAscentRates() {
  const dispatch = useDispatch();
  const defaultRates = (state: RootState) => state.ascentRatesSlice.rates;
  const curDateTab = useSelector((state: RootState) => state.ascentRatesSlice.curDateTab);

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

  const ratesSelectors: RatesSelectors = {
    rates7: useSelector(ratesByDays(7)),
    rates30: useSelector(ratesByDays(30)),
    rates90: useSelector(ratesByDays(90)),
    rates180: useSelector(ratesByDays(180)),
    rates365: useSelector(ratesByDays(365)),
  };

  const onClickSelectDateTab = (dateValue: string) => {
    dispatch(ascentRatesSlice.actions.setCurDateTab(dateValue));
  };

  const onClickRateChartItem = (item: RateObj) => {
    dispatch(userDataSlice.actions.setData({ name: 'market', value: item.code }));
    dispatch(userDataSlice.actions.setPrevDateOption(curDateTab));
    dispatch(allMarketsSlice.actions.setSearchInput(item.code));
  };

  useEffect(() => {
    dispatch(ascentRatesSlice.actions.getRates());
  }, []);

  return { ratesSelectors, curDateTab, onClickSelectDateTab, onClickRateChartItem };
}
