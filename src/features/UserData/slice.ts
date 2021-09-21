import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';

export interface UserObj {
  [index: string]: string;
  prevDate: string;
  market: string;
  seedMoney: string;
}

export interface ResultObj {
  [index: string]: number | boolean;
  curSeedMoney: number;
  prevPrice: number;
  curPrice: number;
  ascent: number;
  isGetResult: boolean;
}

const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    isLoading: false,
    data: {
      prevDate: '',
      market: '',
      seedMoney: '',
    } as UserObj,
    error: '',
    result: { isGetResult: false } as ResultObj,
    seedMoneyInput: '',
    prevDateInput: '30',
    isDirectSelectDate: false,
  },
  reducers: {
    setData: (state, action: PayloadAction<{ name: string; value: string }>) => {
      state.data[action.payload.name] = action.payload.value;
      if (action.payload.name === 'seedMoney') {
        state.seedMoneyInput = action.payload.value;
      }
    },
    setPrevDateOption: (state, action: PayloadAction<string>) => {
      state.prevDateInput = action.payload;
    },
    setDirectDateCancle: (state, action: PayloadAction<boolean>) => {
      state.isDirectSelectDate = action.payload;
    },
    resetData: (state) => {
      state.data = {
        prevDate: moment().subtract(30, 'days').format('YYYY-MM-DD'),
        market: '',
        seedMoney: '',
      } as UserObj;
      state.seedMoneyInput = '';
      state.prevDateInput = '30';
      state.isDirectSelectDate = false;
    },
    getResult: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    setResult: (state, action: PayloadAction<ResultObj>) => {
      state.result = action.payload;
      state.isLoading = false;
    },
    getError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default userDataSlice;
