import { Box } from '@mui/material';

import { Image } from '../../components/atoms';
import { RegistrationForm } from '../../components/molecules';
import burnalyzeLogo from '../../assets/burnalyze_logo.png';

const RegisterContainer = () => {
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
        }}
      >
        <Image src={burnalyzeLogo} type="loginPageLogo" />
        <RegistrationForm />
      </Box>
    </Box>
  );
};

export default RegisterContainer;
