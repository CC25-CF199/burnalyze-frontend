import { Box } from '@mui/material';

const MainContent = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{
        paddingInline: '20px',
        paddingBlock: '24px',
      }}
    >
      {children}
    </Box>
  );
};

export default MainContent;
