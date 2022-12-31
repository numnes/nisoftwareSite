import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#671E75',
    },
    secondary: {
      main: '#67823A',
    },
    info: {
      main: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    h1: {
      fontFamily: 'Hyperion',
      marginBottom: '0rem',
    },
    h2: {
      fontFamily: 'Hyperion',
      marginBottom: '0rem',
    },
    body1: {
      fontFamily: `'Rubik', sans-serif`,
      marginBottom: '0rem',
    },
    body2: {
      fontFamily: `'Rubik', sans-serif`,
      marginBottom: '0rem',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
