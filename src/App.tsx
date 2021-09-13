import { api } from './api';
import { useEffect, useState } from 'react';
import { Background } from './AppStyled';
import moment from 'moment';

const _sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

function App() {
  const [markets, setMarkets] = useState<any[]>();
  const [trends, setTrends] = useState<any[]>();

  useEffect(() => {
    const test = async () => {
      const price = await api.getPriceFromDate('KRW-BTC');

      const allMarkets = await api.getAllMarket();
      setMarkets(allMarkets.filter((e: any) => e.market[0] === 'K'));

      const allTrends = await api.getTrendsRate();
      setTrends(
        allTrends
          .filter((e: any) => e.code[11] === 'K')
          .sort((a: any, b: any) => {
            if (a.changeRate7Days > b.changeRate7Days) return 1;
            if (a.changeRate7Days < b.changeRate7Days) return -1;
            return 0;
          })
      );

      console.log(
        price,
        allMarkets.filter((e: any) => e.market[0] === 'K'),
        allTrends
          .filter((e: any) => e.code[11] === 'K')
          .sort((a: any, b: any) => {
            if (a.changeRate7Days > b.changeRate7Days) return 1;
            if (a.changeRate7Days < b.changeRate7Days) return -1;
            return 0;
          })
          .reverse()
          // .map((e: any) => e.code.slice(11))
          .slice(0, 10)
      );

      // for (const e of allMarkets.filter((e: any) => e.market[0] === 'K')) {
      //   const test = await api.getPriceFromDate(e.market, '2021-09-09 00:00:00');
      //   await _sleep(300);
      //   console.log(test);
      // }
    };

    console.log(moment().subtract(365, 'days').format('YYYY-MM-DD'));

    test();
  }, []);
  //   english_name: "The Graph"
  // korean_name: "그래프"
  // market: "BTC-GRT"
  // market_warning: "NONE"

  return (
    <Background>
      <div style={{ maxWidth: 500 }}>
        {markets?.map((e) => (
          <div style={{ display: 'flex' }}>
            <img src={`https://static.upbit.com/logos/${e.market.slice(4)}.png`} />
            <div>{e.korean_name + ' / ' + e.english_name}</div>
          </div>
        ))}
      </div>
    </Background>
  );
}

export default App;
