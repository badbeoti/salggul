import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../store';
import userDataSlice, { ResultObj, UserObj } from './slice';

import { Days } from '../AscentRates/useAscentRates';
import moment from 'moment';
import allMarketsSlice, { MarketObj } from '../AllMarkets/slice';

export default function useUserData() {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.userDataSlice.data);
  const userResult = useSelector((state: RootState) => state.userDataSlice.result);
  const userInputsError = useSelector((state: RootState) => state.userDataSlice.error);
  const userSeedmoneyInput = useSelector((state: RootState) => state.userDataSlice.seedMoneyInput);
  const userPrevDateInput = useSelector((state: RootState) => state.userDataSlice.prevDateInput);
  const userDirectSelectDate = useSelector(
    (state: RootState) => state.userDataSlice.isDirectSelectDate
  );

  const dateLabels = [
    {
      value: '7',
      label: '1주일',
    },
    {
      value: '30',
      label: '1개월',
    },
    {
      value: '90',
      label: '3개월',
    },
    {
      value: '180',
      label: '6개월',
    },
    {
      value: '365',
      label: '1년',
    },
    {
      value: '0',
      label: '직접 입력',
    },
  ];

  const onChangeUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(userDataSlice.actions.setData({ name, value }));
  };

  const onClickGetResult = () => {
    dispatch(userDataSlice.actions.getResult());
  };

  const onChangePrevDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '0') {
      dispatch(userDataSlice.actions.setDirectDateCancle(true));
      return;
    }
    dispatch(userDataSlice.actions.setPrevDateOption(e.target.value));
  };

  const onChangeDirectDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(userDataSlice.actions.getError(''));

    if (moment(e.target.value) > moment()) {
      dispatch(userDataSlice.actions.getError('현재보다 이전 날짜를 선택해주세요.'));
      return;
    }
    // 현재보다 미래의 날짜를 선택 할 경우 리턴 추후 alert 추가

    dispatch(userDataSlice.actions.setData({ name: 'prevDate', value: e.target.value }));
  };

  const onClickDirectDateCancle = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(userDataSlice.actions.setDirectDateCancle(false));
    dispatch(userDataSlice.actions.setPrevDateOption('30'));
  };

  const onClickResetUserData = () => {
    dispatch(userDataSlice.actions.resetData());
    dispatch(allMarketsSlice.actions.setSearchInput(''));
    dispatch(userDataSlice.actions.setResult({ isGetResult: false } as ResultObj));
  };

  useEffect(() => {
    const prevDateValue = moment().subtract(Number(userPrevDateInput), 'days').format('YYYY-MM-DD');
    dispatch(userDataSlice.actions.setData({ name: 'prevDate', value: prevDateValue }));
  }, [userPrevDateInput]);

  return {
    onChangeUserInput,
    onClickGetResult,
    userData,
    userResult,
    dateLabels,
    onChangePrevDate,
    onChangeDirectDate,
    onClickDirectDateCancle,
    userInputsError,
    onClickResetUserData,
    userSeedmoneyInput,
    userPrevDateInput,
    userDirectSelectDate,
  };
}
