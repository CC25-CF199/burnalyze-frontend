import { NavLink } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@mui/material';
import { useSelector } from 'react-redux';

import { Image, Button } from '../../atoms';
import burnalyzeLogo from '../../../assets/burnalyze_logo.png';
import { navItems } from '../../../constants/Component.constants';

const DrawerComponent = ({ isDrawerOpen, handleOpenDrawer }) => {
  const isAuth = useSelector(state => state.auth.isLoggedIn);
  const container =
    typeof window !== 'undefined' ? window.document.body : undefined;

  const drawer = (
    <Box onClick={handleOpenDrawer} sx={{ textAlign: 'center' }}>
      <Box
        sx={{
          padding: '20px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Image src={burnalyzeLogo} type="drawerLogo" />
      </Box>
      <Divider />
      <List>
        {navItems.map(item => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.linkTo}
              sx={{ textAlign: 'left' }}
            >
              <ListItemIcon sx={{ minWidth: 5, mr: 3 }}>
                <Image src={item.iconPath} type="drawerItemsIcon" />
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                sx={{
                  '& .MuiTypography-root': {
                    fontWeight: 500,
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        {!isAuth && (
          <ListItem
            disablePadding
            sx={{
              padding: '8px 16px',
            }}
          >
            <ListItemButton
              component={NavLink}
              to="/login"
              sx={{
                textAlign: 'center',
                backgroundColor: 'primary.main',
                borderRadius: '8px',
                color: 'secondary.main',
                '&:hover': {
                  backgroundColor: '#00ADB5',
                },
              }}
            >
              <ListItemText
                primary="Sign In"
                sx={{
                  '& .MuiTypography-root': {
                    fontWeight: 600,
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <Drawer
      container={container}
      variant="temporary"
      open={isDrawerOpen}
      onClose={handleOpenDrawer}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 220 },
      }}
    >
      {drawer}
    </Drawer>
  );
};

export default DrawerComponent;
