import useUserData from '../features/UserData/useUserData';
import useAllMarkets from '../features/AllMarkets/useAllMarkets';
import { resultTemplate } from '../utils';
import { ResultBoardDiv } from '../CSS/ResultBoardStyled';

export default function ResultBoard() {
  const { onClickGetResult, userResult, userInputsError } = useUserData();

  if (userInputsError) return <span>{userInputsError}</span>;

  return (
    <ResultBoardDiv>
      {userResult.isGetResult && (
        <span style={{ color: userResult.ascent > 0 ? 'red' : 'blue', whiteSpace: 'pre-line' }}>
          {resultTemplate(userResult.curSeedMoney, userResult.ascent)}
        </span>
      )}
    </ResultBoardDiv>
  );
}
