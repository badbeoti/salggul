import useUserData from '../features/UserData/useUserData';
import useAllMarkets from '../features/AllMarkets/useAllMarkets';
import { resultTemplate } from '../utils';

export default function ResultBoard() {
  const { onClickGetResult, userResult, userInputsError } = useUserData();

  if (userInputsError) return <span>{userInputsError}</span>;

  return (
    <>
      {userResult.isGetResult && (
        <span style={{ color: userResult.ascent > 0 ? 'red' : 'blue' }}>
          {resultTemplate(userResult.curSeedMoney, userResult.ascent)}
        </span>
      )}
    </>
  );
}
