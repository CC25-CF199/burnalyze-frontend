import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#01CEE1',
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
