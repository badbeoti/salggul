import styled from '@emotion/styled';

export const AscentRateChartDiv = styled.div({
  width: '80%',
  borderRadius: 8,
  backgroundColor: '#387adf',
  boxShadow: '0px 0px 8px 2px rgba(0,0,0,0.1)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginTop: 24,
  paddingTop: 12,
  paddingBottom: 12,
  position: 'relative',
});

export const AscentRateChartTab = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  color: '#ffffff',
  userSelect: 'none',
  fontFamily: 'Noto Sans KR',
  marginBottom: 12,
});

export const AscentRateChartTabItem = styled.div<{ isSelect: boolean }>((props) => ({
  width: '20%',
  height: 24,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: props.isSelect ? '#50c4ed' : 'rgba(0,0,0,0.2)',
  fontSize: 12,
  lineHeight: '12px',
  cursor: 'pointer',
}));

export const AscentRateChartItem = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: '#64ccda',
  paddingTop: 4,
  paddingBottom: 4,
  fontFamily: 'Noto Sans KR',

  '& + &': {
    borderTop: 'solid 1px #ffffff',
  },
});

export const AscentRateChartItemSplit = styled.div<{ ascent?: number }>((props) => ({
  width: '30%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 12,
  lineHeight: '12px',
  cursor: 'pointer',
  color: props.ascent ? (props.ascent > 0 ? 'red' : 'blue') : '#000000',
}));
