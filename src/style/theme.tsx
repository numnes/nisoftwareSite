import { createTheme, PaletteColorOptions, ThemeProvider } from '@mui/material/styles';
const { palette } = createTheme();

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
});
