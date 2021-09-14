import { api } from './api';
import React, { useEffect, useState } from 'react';
import { Background } from './AppStyled';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import ascentRatesSlice, { RateObj } from './features/AscentRates/slice';
import useAscentRates, { Days } from './features/AscentRates/useAscentRates';
import useAllMarkets from './features/AllMarkets/useAllMarkets';

const _sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

function App() {
  const { rates7, rates30, rates90, rates180, rates365 } = useAscentRates();
  const { allMarkets, onChange, searchResult } = useAllMarkets();

  return (
    <Background>
      <div style={{ maxWidth: 500 }}>
        <input type="text" onChange={onChange}></input>
        {searchResult &&
          searchResult.map((e) => (
            <div style={{ display: 'flex' }}>
              <img
                width={64}
                height={64}
                src={`https://static.upbit.com/logos/${e.market.slice(4)}.png`}
              />
              <div>{e.korean_name + ' / ' + e.english_name}</div>
            </div>
          ))}
        <button
          onClick={() =>
            rates7.forEach((e) =>
              console.log(`${e.code} ${Number(e[`changeRate${7}Days`] * 100).toFixed(2)}%`)
            )
          }
        >
          7
        </button>
        <button
          onClick={() =>
            rates30.forEach((e) =>
              console.log(`${e.code} ${Number(e[`changeRate${30}Days`] * 100).toFixed(2)}%`)
            )
          }
        >
          30
        </button>
        <button
          onClick={() =>
            rates90.forEach((e) =>
              console.log(`${e.code} ${Number(e[`changeRate${90}Days`] * 100).toFixed(2)}%`)
            )
          }
        >
          90
        </button>
        <button
          onClick={() =>
            rates180.forEach((e) =>
              console.log(`${e.code} ${Number(e[`changeRate${180}Days`] * 100).toFixed(2)}%`)
            )
          }
        >
          180
        </button>
        <button
          onClick={() =>
            rates365.forEach((e) =>
              console.log(`${e.code} ${Number(e[`changeRate${365}Days`] * 100).toFixed(2)}%`)
            )
          }
        >
          365
        </button>
      </div>
    </Background>
  );
}

export default App;
