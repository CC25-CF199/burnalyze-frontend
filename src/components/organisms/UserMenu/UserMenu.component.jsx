import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Typography,
  ListItemIcon,
} from '@mui/material';

import { userMenuItems } from '../../../constants/Component.constants';

const UserMenu = () => {
  const username = useSelector(state => state.auth.user.username);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={username} src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {userMenuItems.map(item => {
          const Icon = item.icon;
          return (
            <MenuItem
              key={item.title}
              onClick={() => {
                item.onClick();
              }}
            >
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <Typography
                sx={{ textAlign: 'center', fontSize: { xs: '14px' } }}
              >
                {item.title}
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

export default UserMenu;
