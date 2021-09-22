import styled from '@emotion/styled';

export const Background = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  width: '100%',
  minHeight: '100vh',
  backgroundColor: '#addce4',
  paddingBottom: 48,
});

export const CenterCanvas = styled.div({
  width: '100%',
  maxWidth: 500,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingTop: 24,
});

export const GetResultButton = styled.div({
  width: 160,
  height: 40,
  fontSize: 16,
  lineHeight: '16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 20,
  backgroundColor: '#ff7676',
  color: '#ffffff',
  fontWeight: 700,
  boxShadow: '0px 0px 8px 2px rgba(0,0,0,0.1)',
  marginTop: 24,
  userSelect: 'none',
  cursor: 'pointer',
});

export const GetResetButton = styled.div({
  width: 80,
  height: 28,
  fontSize: 12,
  lineHeight: '12px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 14,
  backgroundColor: '#f9f9f9',
  fontWeight: 500,
  boxShadow: '0px 0px 8px 2px rgba(0,0,0,0.1)',
  marginTop: 12,
  userSelect: 'none',
  cursor: 'pointer',
});

export const NotiSpan = styled.span({
  fontWeight: 600,
  fontSize: 12,
  lineHeight: '12px',
  color: '#adaca7',
});

export const TitleSpan = styled.span({
  fontSize: 24,
  lineHeight: '24px',
  color: '#000000',
});
