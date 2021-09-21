import { Background, CenterCanvas, GetResetButton, GetResultButton } from './CSS/AppStyled';

import useUserData from './features/UserData/useUserData';
import UserInputs from './components/UserInputs';
import ResultBoard from './components/ResultBoard';
import AscentRateChart from './components/AscentRateChart';

function App() {
  const { onClickGetResult, onClickResetUserData } = useUserData();

  return (
    <Background>
      <CenterCanvas>
        <AscentRateChart />
        <UserInputs />
        <GetResetButton onClick={onClickResetUserData}>입력 초기화</GetResetButton>
        <GetResultButton onClick={onClickGetResult}>결과 확인</GetResultButton>
        <ResultBoard />
      </CenterCanvas>
    </Background>
  );
}

export default App;
