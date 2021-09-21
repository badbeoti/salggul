import useUserData from '../features/UserData/useUserData';
import useAllMarkets from '../features/AllMarkets/useAllMarkets';
import { resultTemplate } from '../utils';
import {
  ResultAcsentSpan,
  ResultBeforeAfterSpanWrap,
  ResultBoardDiv,
  ResultInputErrorSpan,
  ResultInputValueSpan,
  ResultSpanWrap,
} from '../CSS/ResultBoardStyled';

export default function ResultBoard() {
  const { userData, userResult, userInputsError } = useUserData();
  const { getMarketTickers } = useAllMarkets();

  if (userInputsError)
    return (
      <ResultBoardDiv>
        <ResultInputErrorSpan>{userInputsError}</ResultInputErrorSpan>
      </ResultBoardDiv>
    );

  return (
    <>
      <ResultBoardDiv>
        {userData.prevDate && <ResultInputValueSpan>{userData.prevDate}에</ResultInputValueSpan>}
        {userData.seedMoney && (
          <ResultInputValueSpan>
            {Number(userData.seedMoney).toLocaleString('ko-KR')}원으로
          </ResultInputValueSpan>
        )}
        {userData.market && (
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <img
              width={40}
              height={40}
              src={`https://static.upbit.com/logos/${userData.market.slice(4)}.png`}
              alt="market-img"
              style={{ marginRight: 4 }}
            />
            <ResultInputValueSpan>
              {getMarketTickers(userData.market)}을(를) 살시 잔고변화
            </ResultInputValueSpan>
          </div>
        )}
        {userResult.isGetResult && (
          <ResultSpanWrap>
            <ResultBeforeAfterSpanWrap>
              <span>before</span>
              <span>{Number(userData.seedMoney).toLocaleString('ko-KR') + '원'}</span>
            </ResultBeforeAfterSpanWrap>
            <ResultBeforeAfterSpanWrap ascent={userResult.ascent}>
              <span>after</span>
              <span>{userResult.curSeedMoney.toLocaleString('ko-KR')}</span>
              <span>({(userResult.ascent * 100).toFixed(2)}%)</span>
              <span>
                {userResult.ascent > 0
                  ? `+${(userResult.curSeedMoney - Number(userData.seedMoney)).toLocaleString(
                      'ko-KR'
                    )}`
                  : `-${(Number(userData.seedMoney) - userResult.curSeedMoney).toLocaleString(
                      'ko-KR'
                    )}`}
                원
              </span>
            </ResultBeforeAfterSpanWrap>
          </ResultSpanWrap>
        )}
      </ResultBoardDiv>
    </>
  );
}
