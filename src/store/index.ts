import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import allMarketsSlice from '../features/AllMarkets/slice';
import ascentRatesSlice from '../features/AscentRates/slice';
import sagas from '../features/sagas';
import userDataSlice from '../features/UserData/slice';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  ascentRatesSlice: ascentRatesSlice.reducer,
  allMarketsSlice: allMarketsSlice.reducer,
  userDataSlice: userDataSlice.reducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);

export type RootState = ReturnType<typeof reducer>;
export default store;
