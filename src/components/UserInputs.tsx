import moment from 'moment';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import useUserData from '../features/UserData/useUserData';
import useAllMarkets from '../features/AllMarkets/useAllMarkets';
import {
  DefaultDateSelect,
  DefaultTextField,
  DirectDateCancleButton,
  SearchListItem,
  SearchResultTab,
  UserInputsDiv,
} from '../CSS/UserInputsStyled';

export default function UserInputs() {
  const { onChangeSearch, searchInput, searchResult, onClickSelectMarket } = useAllMarkets();
  const {
    onChangeUserInput,
    dateLabels,
    onChangePrevDate,
    onChangeDirectDate,
    onClickDirectDateCancle,
    userSeedmoneyInput,
    userPrevDateInput,
    userDirectSelectDate,
  } = useUserData();

  return (
    <UserInputsDiv>
      {userDirectSelectDate ? (
        <>
          <TextField
            style={{ marginBottom: 48, backgroundColor: 'rgba(255,255,255,0.5)' }}
            type="date"
            defaultValue={moment().format('YYYY-MM-DD')}
            onChange={onChangeDirectDate}
          ></TextField>
          <DirectDateCancleButton onClick={onClickDirectDateCancle}>
            직접 입력 취소
          </DirectDateCancleButton>
        </>
      ) : (
        <DefaultDateSelect
          style={{ marginBottom: 48, backgroundColor: 'rgba(255,255,255,0.5)' }}
          select
          value={userPrevDateInput}
          onChange={onChangePrevDate}
          SelectProps={{ native: true }}
        >
          {dateLabels.map((e) => (
            <option key={e.value} value={e.value}>
              {e.value === '0' ? e.label : e.label + ' 전'}
            </option>
          ))}
        </DefaultDateSelect>
      )}
      <DefaultTextField
        style={{ marginBottom: 12, backgroundColor: 'rgba(255,255,255,0.5)' }}
        name="marketTicker"
        type="text"
        value={searchInput}
        onChange={onChangeSearch}
        placeholder="코인명/심볼 검색"
      ></DefaultTextField>
      <SearchResultTab resultArr={searchResult}>
        {searchResult &&
          searchResult.map((e) => (
            <SearchListItem onClick={() => onClickSelectMarket(e)}>
              <img
                width={48}
                height={48}
                src={`https://static.upbit.com/logos/${e.market.slice(4)}.png`}
                alt="market-img"
              />
              <span style={{ marginLeft: 12 }}>{e.korean_name}</span>
            </SearchListItem>
          ))}
      </SearchResultTab>
      <DefaultTextField
        style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
        name="seedMoney"
        type="number"
        onChange={onChangeUserInput}
        value={userSeedmoneyInput}
        placeholder="매수 금액"
      ></DefaultTextField>
    </UserInputsDiv>
  );
}
