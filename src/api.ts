import axios from 'axios';
import { RateObj } from './features/AscentRates/slice';

const API_PATH = 'https://api.upbit.com/v1/';

export const api = {
  getAllMarket: async () => {
    const res = await axios.get(`${API_PATH}market/all?isDetails=true`);

    return res.data;
  },
  getPriceFromDate: async (market: string, date?: string) => {
    const res = await axios.get(
      `${API_PATH}candles/days?market=${market}${date ? `&to=${date}` : ''}&count=1`
    );

    if (!res.data.length) return 0;

    return res.data[0].trade_price as number;
  },

  getTrendsRate: async () => {
    const res = await axios.get(
      'https://crix-api-cdn.upbit.com/v1/crix/trends/interval_change_rate'
    );

    return res.data as RateObj[];
  },
};
