import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    data: {} as UserObj,
    error: '',
    result: { isGetResult: false } as ResultObj,
  },
  reducers: {
    setData: (state, action: PayloadAction<{ name: string; value: string }>) => {
      state.data[action.payload.name] = action.payload.value;
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
