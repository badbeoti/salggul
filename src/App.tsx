import {
  Background,
  CenterCanvas,
  GetResetButton,
  GetResultButton,
  NotiSpan,
  TitleSpan,
} from './CSS/AppStyled';

import useUserData from './features/UserData/useUserData';
import UserInputs from './components/UserInputs';
import ResultBoard from './components/ResultBoard';
import AscentRateChart from './components/AscentRateChart';

function App() {
  const { onClickGetResult, onClickResetUserData } = useUserData();

  return (
    <Background>
      <CenterCanvas>
        {/* <TitleSpan>asd</TitleSpan> */}
        <NotiSpan>종목을 클릭하면 입력창에 해당 매수일과 코인명이 입력됩니다.</NotiSpan>
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
