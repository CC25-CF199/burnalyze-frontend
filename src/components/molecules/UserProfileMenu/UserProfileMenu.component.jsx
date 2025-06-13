import React from 'react';
import {
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
} from '@mui/material';
import { AccountBox, Settings, ChevronRight } from '@mui/icons-material';

const UserProfileMenu = () => {
  const items = [
    { icon: <AccountBox color="primary" />, label: 'Edit Profile' },
    { icon: <Settings color="primary" />, label: 'Setting' },
  ];

  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <List disablePadding>
        {items.map((item, index) => (
          <React.Fragment key={item.label}>
            <ListItem
              secondaryAction={
                <IconButton edge="end">
                  <ChevronRight />
                </IconButton>
              }
            >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  backgroundColor: 'rgba(0, 255, 255, 0.1)',
                  borderRadius: 2,
                  padding: 1,
                  mr: 2,
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontWeight: 600 }}
              />
            </ListItem>
            {index < items.length - 1 && <Divider component="li" />}
          </React.Fragment>
        ))}
      </List>
    </Card>
  );
};

export default UserProfileMenu;
