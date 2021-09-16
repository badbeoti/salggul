import styled from '@emotion/styled';

export const UserInputsDiv = styled.div({
  width: '80%',
  minHeight: 300,
  borderRadius: 24,
  backgroundColor: '#addce4',
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

export const DirectDateCancleButton = styled.div({
  position: 'absolute',
  width: 96,
  height: 16,
  backgroundColor: '#ffffff',
  borderRadius: 8,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 12,
  lineHeight: '12px',
  left: '50%',
  top: 60,
  transform: 'translate(-50%, 0%)',
  paddingTop: 1,
});
