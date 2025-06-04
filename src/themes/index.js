import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#01CEE1',
    },
    secondary: {
      main: '#FFF',
      grayishBlue: '#393E46',
    },
  },
  typography: {
    fontFamily: [
      'Metropolis',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;
