import { Box } from '@mui/material';

const MainContent = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
        height: '100%',
        // padding: {
        //   xs: 2,
        //   sm: '16px 10em 16px 10em',
        //   md: '16px 18em 16px 18em',
        //   lg: '2em 24em 2em 24em',
        // },
      }}
    >
      {children}
    </Box>
  );
};

export default MainContent;
