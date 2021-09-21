import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MarketObj {
  [index: string]: string;
  market: string;
  korean_name: string;
  english_name: string;
}

const allMarketsSlice = createSlice({
  name: 'allMarkets',
  initialState: {
    isLoading: false,
    markets: [] as MarketObj[],
    error: '',
    searchInput: '',
  },
  reducers: {
    getMarkets: (state) => {
      state.isLoading = true;
    },
    setMarkets: (state, action: PayloadAction<Array<MarketObj>>) => {
      state.markets = action.payload;
      state.isLoading = false;
    },
    setSearchInput: (state, action: PayloadAction<string>) => {
      state.searchInput = action.payload;
    },
    getError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default allMarketsSlice;
