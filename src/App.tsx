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
      </CenterCanvas>
    </Background>
  );
}

export default App;
