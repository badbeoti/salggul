import styled from '@emotion/styled';

export const Background = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  width: '100%',
  height: '100vh',
  backgroundColor: '#addce4',
});

export const CenterCanvas = styled.div({
  width: '100%',
  maxWidth: 500,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
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
});
