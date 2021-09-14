import { api } from './api';
import React, { useEffect, useState } from 'react';
import { Background } from './AppStyled';
import moment from 'moment';
import useAscentRates from './features/AscentRates/useAscentRates';
import useAllMarkets from './features/AllMarkets/useAllMarkets';
import useUserData from './features/UserData/useUserData';
import { resultTemplate } from './utils';

const _sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

function App() {
  const { rates7, rates30, rates90, rates180, rates365 } = useAscentRates();
  const { allMarkets, onChangeSearch, searchResult } = useAllMarkets();
  const { onChangeUserInput, onClickGetResult, userData, userResult } = useUserData();

  return (
    <Background>
      <div style={{ maxWidth: 500 }}>
        <input name="prevDate" type="text" onChange={onChangeUserInput}></input>
        <br />
        <input name="market" type="text" onChange={onChangeUserInput}></input>
        <br />
        <input name="seedMoney" type="number" onChange={onChangeUserInput}></input>
        <br />
        <button onClick={onClickGetResult}>getResult</button>
        <br />
        <br />
        {userResult.isGetResult && (
          <span style={{ color: userResult.ascent > 0 ? 'red' : 'blue' }}>
            {resultTemplate(userResult.curSeedMoney, userResult.ascent)}
          </span>
        )}
        <br />
        <input type="text" onChange={onChangeSearch}></input>
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
