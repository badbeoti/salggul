import logo from './logo.svg';
import { request } from './api';
import { useEffect, useState } from 'react';

function App() {
  const [markets, setMarkets] = useState<any[]>();

  useEffect(() => {
    const test = async () => {
      const price = await request.getPriceFromDate('KRW-BTC', '2021-09-05 00:00:00');
      const allMarkets = await request.getAllMarket();
      setMarkets(allMarkets.filter((e: any) => e.market[0] === 'K'));
      console.log(price, allMarkets);
    };

    test();
  }, []);
  //   english_name: "The Graph"
  // korean_name: "그래프"
  // market: "BTC-GRT"
  // market_warning: "NONE"

  return (
    <>
      {markets?.map((e) => (
        <div style={{ display: 'flex' }}>
          <img src={`https://static.upbit.com/logos/${e.market.slice(4)}.png`} />
          <div>{e.korean_name + ' / ' + e.english_name}</div>
        </div>
      ))}
    </>
  );
}

export default App;
