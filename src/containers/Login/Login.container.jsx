import { Box, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { Image } from '../../components/atoms';
import { LoginForm } from '../../components/molecules';
import burnalyzeLogo from '../../assets/burnalyze_logo.png';
import facebookLogo from '../../assets/icons/facebook.png';
import googleLogo from '../../assets/icons/google.png';

const LoginContainer = () => {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
      }}
    >
      <Box
        sx={{
          width: {
            xs: '100%',
            sm: '70%',
            md: '40%',
            lg: '30%',
          },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: 'auto',
          padding: '0 24px 24px 24px',
          borderRadius: '8px',
          boxShadow: { md: 4 },
          gap: 2,
        }}
      >
        <Image src={burnalyzeLogo} type="loginPageLogo" />
        <LoginForm />
        <Typography
          variant="subtitle2"
          sx={{
            textAlign: 'center',
          }}
        >
          Belum memiliki akun?{' '}
          <NavLink to="/register" className="text-primaryBlue">
            Daftar akun
          </NavLink>
        </Typography>
        <Box>
          <Typography
            variant="subtitle2"
            sx={{
              color: '#666666',
              textAlign: 'center',
              mb: 2,
            }}
          >
            - Atau Sign In dengan -
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
            }}
          >
            <Button
              sx={{
                boxShadow: 2,
              }}
            >
              <Image src={googleLogo} type="oAuth" />
            </Button>
            <Button
              sx={{
                boxShadow: 2,
              }}
            >
              <Image src={facebookLogo} type="oAuth" />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginContainer;
