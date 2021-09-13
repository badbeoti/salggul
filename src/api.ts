import axios from 'axios';

const API_PATH = 'https://api.upbit.com/v1/';

export const api = {
  getAllMarket: async () => {
    const res = await axios.get(`${API_PATH}market/all?isDetails=true`);

    return res.data;
  },
  getPriceFromDate: async (market: string, date: string) => {
    const res = await axios.get(`${API_PATH}candles/days?market=${market}&to=${date}&count=1`);

    return res.data;
  },

  getTrendsRate: async () => {
    const res = await axios.get(
      'https://crix-api-cdn.upbit.com/v1/crix/trends/interval_change_rate'
    );

    return res.data;
  },
};
