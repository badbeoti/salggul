import useUserData from '../features/UserData/useUserData';
import useAllMarkets from '../features/AllMarkets/useAllMarkets';
import { resultTemplate } from '../utils';
import { ResultBoardDiv } from '../CSS/ResultBoardStyled';

export default function ResultBoard() {
  const { onClickGetResult, userResult, userInputsError } = useUserData();

  return (
    <ResultBoardDiv>
      {userInputsError && <span>{userInputsError}</span>}
      {userResult.isGetResult && (
        <span style={{ color: userResult.ascent > 0 ? 'red' : 'blue', whiteSpace: 'pre-line' }}>
          {resultTemplate(userResult.curSeedMoney, userResult.ascent)}
        </span>
      )}
    </ResultBoardDiv>
  );
}
