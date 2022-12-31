import * as React from 'react';
import { styled } from '@mui/system';
import { Stack } from '@mui/material';
import { black } from '../../style/color';

const CenterFlex = styled(Stack)({
  alignItems: 'center',
  justifyContent: 'center',
});

export const FlexBanner = styled(CenterFlex)({
  height: '100vh',
  width: '100vw',
});

export const BaseStyleBanner = styled(CenterFlex)({
  height: '100%',
  width: '100%',
});

export const InitialBanner = styled(BaseStyleBanner)({
  border: 0,
  margin: 0,
  padding: 0,
  backgroundColor: 'background1',
});

export const SecondBanner = styled(CenterFlex)({
  backgroundColor: black[900],
  height: '85vh',
  border: 0,
  margin: 0,
  padding: 0,
});

export const Footer = styled(Stack)({
  width: '100vw',
  height: '15vh',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: 'black',
  border: 0,
  margin: 0,
  padding: 0,
});
