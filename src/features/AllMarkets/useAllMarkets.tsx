import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../store';
import allMarketsSlice, { MarketObj } from './slice';

export default function useAllMarkets() {
  const dispatch = useDispatch();
  const defaultMarkets = (state: RootState) => state.allMarketsSlice.markets;
  const [inputValue, setInputValue] = useState<string>('');
  const [searchResult, setSearchResult] = useState<MarketObj[]>();

  const allMarkets = useSelector(defaultMarkets);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const marketsByInputValue = (value: string) =>
    createSelector(defaultMarkets, (e: MarketObj[]) =>
      [...e].filter(
        (e) =>
          e.english_name.includes(value) ||
          e.korean_name.includes(value) ||
          e.market.slice(4).includes(value)
      )
    );

  useEffect(() => {
    dispatch(allMarketsSlice.actions.getMarkets());
  }, []);

  useEffect(() => {
    const result = [...allMarkets].filter(
      (e) =>
        e.english_name.toLowerCase().includes(inputValue) ||
        e.korean_name.toLowerCase().includes(inputValue) ||
        e.market.slice(4).toLowerCase().includes(inputValue)
    );
    setSearchResult(result);
  }, [inputValue]);

  return { allMarkets, onChange, searchResult };
}
