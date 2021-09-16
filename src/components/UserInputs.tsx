import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import useUserData from '../features/UserData/useUserData';
import useAllMarkets from '../features/AllMarkets/useAllMarkets';
import moment from 'moment';
import { DirectDateCancleButton, UserInputsDiv } from '../CSS/UserInputsStyled';

export default function UserInputs() {
  const { allMarkets, onChangeSearch, searchResult } = useAllMarkets();
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

  console.log(userData);

  return (
    <UserInputsDiv>
      {directSelectDate ? (
        <>
          <TextField
            type="date"
            defaultValue={moment().format('YYYY-MM-DD')}
            onChange={onChangeDirectDate}
          ></TextField>
          <DirectDateCancleButton onClick={onClickDirectDateCancle}>
            직접 입력 취소
          </DirectDateCancleButton>
        </>
      ) : (
        <TextField
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
        </TextField>
      )}
    </UserInputsDiv>
  );
}
