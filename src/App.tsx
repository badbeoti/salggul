import { api } from './api';
import { useEffect, useState } from 'react';
import { Background } from './AppStyled';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import ascentRatesSlice, { RateObj } from './features/AscentRates/slice';
import useAscentRates, { Days } from './features/AscentRates/useAscentRates';

const _sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

function App() {
  const { rates7, rates30, rates90, rates180, rates365 } = useAscentRates();

  return (
    <Background>
      <div style={{ maxWidth: 500 }}>
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
