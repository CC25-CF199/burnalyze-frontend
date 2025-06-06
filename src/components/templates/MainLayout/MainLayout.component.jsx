import { useState } from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { Navbar, Drawer, MainContent } from '../../organisms';

const MainLayoutComponent = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleOpenDrawer = () => {
    setDrawerOpen(prevState => !prevState);
  };

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Navbar handleOpenDrawer={handleOpenDrawer} />
      <Drawer isDrawerOpen={isDrawerOpen} handleOpenDrawer={handleOpenDrawer} />
      <MainContent>
        <Outlet />
      </MainContent>
    </Box>
  );
};

export default MainLayoutComponent;
