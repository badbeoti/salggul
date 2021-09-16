import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../store';
import userDataSlice, { UserObj } from './slice';

import { Days } from '../AscentRates/useAscentRates';
import moment from 'moment';
import { MarketObj } from '../AllMarkets/slice';

export default function useUserData() {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.userDataSlice.data);
  const userResult = useSelector((state: RootState) => state.userDataSlice.result);
  const userInputsError = useSelector((state: RootState) => state.userDataSlice.error);

  const [directSelectDate, setDirectSelectDate] = useState<boolean>(false);
  const [prevDate, setPrevDate] = useState<string>('30');

  const dateLabels = [
    {
      value: '7',
      label: '일주일 전',
    },
    {
      value: '30',
      label: '한 달전',
    },
    {
      value: '90',
      label: '3개월 전',
    },
    {
      value: '180',
      label: '6개월 전',
    },
    {
      value: '365',
      label: '작년',
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
      setDirectSelectDate(true);
      return;
    }
    setPrevDate(e.target.value);
  };

  const onChangeDirectDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (moment(e.target.value) > moment()) return;
    // 현재보다 미래의 날짜를 선택 할 경우 리턴 추후 alert 추가
    dispatch(userDataSlice.actions.setData({ name: 'prevDate', value: e.target.value }));
  };

  const onClickDirectDateCancle = (e: React.MouseEvent<HTMLDivElement>) => {
    setDirectSelectDate(false);
    setPrevDate('30');
  };

  useEffect(() => {
    const prevDateValue = moment().subtract(Number(prevDate), 'days').format('YYYY-MM-DD');
    dispatch(userDataSlice.actions.setData({ name: 'prevDate', value: prevDateValue }));
  }, [prevDate]);

  return {
    onChangeUserInput,
    onClickGetResult,
    userData,
    userResult,
    dateLabels,
    directSelectDate,
    onChangePrevDate,
    prevDate,
    setPrevDate,
    setDirectSelectDate,
    onChangeDirectDate,
    onClickDirectDateCancle,
    userInputsError,
  };
}
