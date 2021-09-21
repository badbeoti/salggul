import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../store';
import allMarketsSlice, { MarketObj } from './slice';
import userDataSlice from '../UserData/slice';

export default function useAllMarkets() {
  const dispatch = useDispatch();
  const defaultMarkets = (state: RootState) => state.allMarketsSlice.markets;
  const [searchResult, setSearchResult] = useState<MarketObj[]>([]);

  const allMarkets = useSelector(defaultMarkets);
  const searchInput = useSelector((state: RootState) => state.allMarketsSlice.searchInput);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(allMarketsSlice.actions.setSearchInput(value));
  };

  const onClickSelectMarket = (item: MarketObj) => {
    dispatch(userDataSlice.actions.setData({ name: 'market', value: item.market }));
    dispatch(allMarketsSlice.actions.setSearchInput(item.market));
    setSearchResult([]);
  };

  const getMarketTickers = (market: string) => {
    return allMarkets.find((e) => e.market === market)?.korean_name;
  };

  useEffect(() => {
    dispatch(allMarketsSlice.actions.getMarkets());
  }, []);

  useEffect(() => {
    if (searchInput === '') {
      setSearchResult([]);
      dispatch(userDataSlice.actions.setData({ name: 'market', value: '' }));
      return;
    }

    const result = [...allMarkets].filter(
      (e) =>
        e.english_name.toLowerCase().includes(searchInput) ||
        e.korean_name.toLowerCase().includes(searchInput) ||
        e.market.slice(4).toLowerCase().includes(searchInput)
    );
    setSearchResult(result);
  }, [searchInput]);

  return {
    allMarkets,
    onChangeSearch,
    searchResult,
    onClickSelectMarket,
    searchInput,
    getMarketTickers,
  };
}
