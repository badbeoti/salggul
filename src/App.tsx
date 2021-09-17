import { Background, CenterCanvas, GetResultButton } from './CSS/AppStyled';
import useAscentRates from './features/AscentRates/useAscentRates';
import useAllMarkets from './features/AllMarkets/useAllMarkets';
import useUserData from './features/UserData/useUserData';
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
        <GetResultButton onClick={onClickGetResult}>결과 확인</GetResultButton>
        <ResultBoard />
      </CenterCanvas>
    </Background>
  );
}

export default App;
