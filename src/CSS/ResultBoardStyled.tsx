import styled from '@emotion/styled';

export const ResultBoardDiv = styled.div({
  width: '80%',
  minHeight: 50,
  borderRadius: 12,
  backgroundColor: '#ffffff',
  boxShadow: '0px 0px 8px 2px rgba(0,0,0,0.1)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 24,
  padding: 12,
  position: 'relative',
});

export const ResultAcsentSpan = styled.span<{ ascent: number }>((props) => ({
  color: props.ascent > 0 ? 'red' : 'blue',
  whiteSpace: 'pre-line',
}));

export const ResultInputValueSpan = styled.span({
  fontSize: 16,
  fontWeight: 500,
  lineHeight: '16px',
  '& + &': {
    marginTop: 12,
  },
});

export const ResultInputErrorSpan = styled.span({
  fontSize: 16,
  fontWeight: 500,
  lineHeight: '16px',
  color: 'red',
});

export const ResultSpanWrap = styled.div((props) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: 24,
  fontFamily: 'Noto Sans KR',
}));

export const ResultBeforeAfterSpanWrap = styled.div<{ ascent?: number }>((props) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: 16,
  fontWeight: 500,
  lineHeight: '16px',
  color: props.ascent ? (props.ascent > 0 ? 'red' : 'blue') : '#000000',
}));
