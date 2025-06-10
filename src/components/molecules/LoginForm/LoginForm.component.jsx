import { Alert, Typography, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { Button, InputLabelComponent, FormInputComponent } from '../../atoms';
import { store } from '../../../redux';
import { authenticateUser } from '../../../redux/auth';

const LoginFormComponent = () => {
  const [isLoginError, setLoginError] = useState(null);
  const isLoading = useSelector(state => state.auth.loading);
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmitForm = async data => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await store.dispatch(authenticateUser(data)).unwrap();
      setLoginError(null);
      navigate('/');
    } catch (error) {
      console.error(error);
      setLoginError(error.message);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '18px' },
          fontWeight: 500,
        }}
      >
        Masuk ke Akun anda
      </Typography>
      <form
        className="flex flex-col space-y-6 lg:space-y-6"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <div className="flex flex-col space-y-1">
          <InputLabelComponent type="email" items="Email" />
          <FormInputComponent
            name="email"
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Kolom harus diisi',
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Format email tidak valid',
              },
            }}
            inputProps={{ inputType: 'email' }}
          />
        </div>
        <div className="flex flex-col space-y-1">
          <InputLabelComponent type="password" items="Password" />
          <FormInputComponent
            name="password"
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Kolom harus diisi',
              },
            }}
            inputProps={{
              inputType: 'password',
            }}
          />
        </div>
        {isLoginError && (
          <Alert variant="outlined" severity="error">
            {isLoginError}
          </Alert>
        )}

        <Button items="Sign In" type="loginBtn" loading={isLoading} />
      </form>
    </Box>
  );
};

export default LoginFormComponent;
