import useUserData from '../features/UserData/useUserData';
import useAllMarkets from '../features/AllMarkets/useAllMarkets';
import { resultTemplate } from '../utils';
import { ResultAcsentSpan, ResultBoardDiv } from '../CSS/ResultBoardStyled';

export default function ResultBoard() {
  const { userData, userResult, userInputsError, onClickResetUserData } = useUserData();
  const { getMarketTickers } = useAllMarkets();

  return (
    <>
      <ResultBoardDiv>
        <span>{userData.prevDate && `매수일 : ${userData.prevDate}`}</span>
        <span>
          {userData.seedMoney &&
            `매수액수 : ${Number(userData.seedMoney).toLocaleString('ko-KR') + '원'}`}
        </span>
        <span>{userData.market && `매수종목 : ${getMarketTickers(userData.market)}`}</span>
        {userInputsError && <span>{userInputsError}</span>}
        {userResult.isGetResult && (
          <ResultAcsentSpan ascent={userResult.ascent}>
            {resultTemplate(userResult.curSeedMoney, userResult.ascent)}
          </ResultAcsentSpan>
        )}
      </ResultBoardDiv>
    </>
  );
}
