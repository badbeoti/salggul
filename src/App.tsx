import { Background, CenterCanvas } from './CSS/AppStyled';
import useAscentRates from './features/AscentRates/useAscentRates';
import useAllMarkets from './features/AllMarkets/useAllMarkets';
import useUserData from './features/UserData/useUserData';
import { resultTemplate } from './utils';
import UserInputs from './components/UserInputs';
import ResultBoard from './components/ResultBoard';

function App() {
  const { rates7, rates30, rates90, rates180, rates365 } = useAscentRates();
  const { allMarkets, onChangeSearch, searchResult } = useAllMarkets();
  const { onChangeUserInput, onClickGetResult, userData, userResult } = useUserData();

  return (
    <Background>
      <CenterCanvas>
        <UserInputs />
        <button onClick={onClickGetResult}>getResult</button>
        <ResultBoard />
        <br />
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
      </CenterCanvas>
    </Background>
  );
}

export default App;
