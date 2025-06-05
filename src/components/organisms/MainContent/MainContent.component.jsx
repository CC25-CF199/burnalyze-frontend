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
        padding: { xs: 2, md: 3 },
      }}
    >
      {children}
    </Box>
  );
};

export default MainContent;
