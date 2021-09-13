import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface RateObj {
  [index: string]: number | string;
  changeRate7Days: number;
  changeRate30Days: number;
  changeRate90Days: number;
  changeRate180Days: number;
  changeRate365Days: number;
  code: string;
}

const ascentRatesSlice = createSlice({
  name: 'ascentRates',
  initialState: {
    isLoading: false,
    rates: [] as RateObj[],
    error: '',
  },
  reducers: {
    getRates: (state) => {
      state.isLoading = true;
    },
    setRates: (state, action: PayloadAction<Array<RateObj>>) => {
      state.rates = action.payload;
      state.isLoading = false;
    },
    getError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default ascentRatesSlice;
