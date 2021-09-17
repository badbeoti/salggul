import moment from 'moment';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import useUserData from '../features/UserData/useUserData';
import useAllMarkets from '../features/AllMarkets/useAllMarkets';
import {
  DefaultDateSelect,
  DirectDateCancleButton,
  SearchListItem,
  SearchResultTab,
  UserInputsDiv,
} from '../CSS/UserInputsStyled';

export default function UserInputs() {
  const { allMarkets, onChangeSearch, inputValue, searchResult, onClickSelectMarket } =
    useAllMarkets();
  const {
    onChangeUserInput,
    onClickGetResult,
    userData,
    userResult,
    dateLabels,
    directSelectDate,
    onChangePrevDate,
    prevDate,
    onChangeDirectDate,
    onClickDirectDateCancle,
  } = useUserData();

  return (
    <UserInputsDiv>
      {directSelectDate ? (
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
          value={prevDate}
          onChange={onChangePrevDate}
          SelectProps={{ native: true }}
        >
          {dateLabels.map((e) => (
            <option key={e.value} value={e.value}>
              {e.label}
            </option>
          ))}
        </DefaultDateSelect>
      )}
      <TextField
        style={{ marginBottom: 12, backgroundColor: 'rgba(255,255,255,0.5)' }}
        name="marketTicker"
        type="text"
        value={inputValue}
        onChange={onChangeSearch}
      ></TextField>
      <SearchResultTab resultArr={searchResult}>
        {searchResult &&
          searchResult.map((e) => (
            <SearchListItem onClick={() => onClickSelectMarket(e)}>
              <img
                width={48}
                height={48}
                src={`https://static.upbit.com/logos/${e.market.slice(4)}.png`}
              />
              <span style={{ marginLeft: 12 }}>{e.korean_name}</span>
            </SearchListItem>
          ))}
      </SearchResultTab>
      <TextField
        style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
        name="seedMoney"
        type="number"
        onChange={onChangeUserInput}
      ></TextField>
    </UserInputsDiv>
  );
}
