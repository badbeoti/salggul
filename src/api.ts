import axios from 'axios';

const API_PATH = 'https://api.upbit.com/v1/';

export const request = {
  getAllMarket: async () => {
    const res = await axios.get(`${API_PATH}market/all?isDetails=true`);

    return res.data;
  },
  getPriceFromDate: async (market: string, date: string) => {
    const res = await axios.get(`${API_PATH}candles/days?market=${market}&to=${date}&count=1`);

    return res.data;
  },
};
