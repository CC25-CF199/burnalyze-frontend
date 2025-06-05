import { Box } from '@mui/material';

const MainContent = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        height: 'auto',
        overflow: 'hidden',
        padding: { xs: 2, md: 3 },
      }}
    >
      {children}
    </Box>
  );
};

export default MainContent;
