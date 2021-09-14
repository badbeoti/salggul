import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../store';
import userDataSlice, { UserObj } from './slice';

export default function useUserData() {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.userDataSlice.data);
  const userResult = useSelector((state: RootState) => state.userDataSlice.result);

  const onChangeUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(userDataSlice.actions.setData({ name, value }));
  };

  const onClickGetResult = () => {
    dispatch(userDataSlice.actions.getResult());
    console.log(userResult);
  };

  return { onChangeUserInput, onClickGetResult, userData, userResult };
}
