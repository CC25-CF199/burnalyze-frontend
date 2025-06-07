import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { Container, AppBar, Box, Toolbar, IconButton } from '@mui/material';
import { useSelector } from 'react-redux';

import burnalyzeLogo from '../../../assets/burnalyze_logo.png';
import { Image, Button } from '../../atoms';
import { UserMenuComponent } from '../../organisms';
import { navItems } from '../../../constants/Component.constants';

function ResponsiveAppBar({ handleOpenDrawer }) {
  const isAuth = useSelector(state => state.auth.isLoggedIn);

  return (
    <AppBar position="sticky" color="secondary">
      <Container
        maxWidth="xl"
        sx={{
          py: '8px',
          px: { md: '72px' },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'space-between',
          }}
        >
          {/* Desktop Logo */}
          <Image src={burnalyzeLogo} type="navbarLogoDesktop" />
          {/* Mobile menu btn */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenDrawer}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          {/* Spacer for mobile layout */}
          <Box sx={{ width: 40, display: { xs: 'block', md: 'none' } }} />
          {/* Desktop Button Page */}
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: 'none',
                md: 'flex',
              },
              justifyContent: {
                md: 'center',
              },
              gap: {
                md: '36px',
              },
            }}
          >
            {navItems.map(item => (
              <NavLink
                key={item.title}
                to={item.linkTo}
                style={({ isActive }) => ({
                  color: 'inherit',
                  fontWeight: 500,
                  textDecoration: 'none',
                  position: 'relative',
                  '&::after': {
                    transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                  },
                })}
              >
                {item.title}
              </NavLink>
            ))}
          </Box>
          {isAuth ? (
            <UserMenuComponent />
          ) : (
            <NavLink to="/login">
              <Button items="Sign In" type="signInDesktop" />
            </NavLink>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
