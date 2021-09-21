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
