import { Alert, Typography, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import { Button, InputLabelComponent, FormInputComponent } from '../../atoms';
import { registerUser } from '../../../redux/register/register.action';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const isRegisterError = useSelector(state => state.register.error);
  const isLoading = useSelector(state => state.register.loading);
  const [isRegisterSuccess, setRegisterSuccess] = useState(false);

  const { control, watch, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const password = watch('password');

  const onSubmitForm = async data => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await dispatch(registerUser(data)).unwrap();

      setRegisterSuccess(prevState => !prevState);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '18px' },
          fontWeight: 500,
        }}
      >
        Registrasi Akun Anda
      </Typography>
      <form
        className="flex flex-col space-y-2 lg:space-y-3"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <div className="flex flex-col space-y-1">
          <InputLabelComponent type="email" items="Username" />
          <FormInputComponent
            name="username"
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Kolom harus diisi',
              },
            }}
            inputProps={{ inputType: 'username' }}
          />
        </div>
        <div className="flex space-x-1">
          <div>
            <InputLabelComponent type="email" items="Nama Depan" />
            <FormInputComponent
              name="firstname"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Kolom harus diisi',
                },
              }}
              inputProps={{ inputType: 'firstname' }}
            />
          </div>
          <div>
            <InputLabelComponent type="email" items="Nama Belakang" />
            <FormInputComponent
              name="lastname"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Kolom harus diisi',
                },
              }}
              inputProps={{ inputType: 'lastname' }}
            />
          </div>
        </div>
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
        <div className="flex space-x-1">
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
          <div className="flex flex-col space-y-1">
            <InputLabelComponent type="password" items="Konfirmasi Password" />
            <FormInputComponent
              name="confirmPassword"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Kolom harus diisi',
                },
                validate: value => value === password || 'Password tidak cocok',
              }}
              inputProps={{
                inputType: 'confirmPassword',
              }}
            />
          </div>
        </div>
        {isRegisterSuccess && (
          <Alert variant="outlined" severity="success">
            Registrasi berhasil.
          </Alert>
        )}
        {isRegisterError && (
          <Alert variant="outlined" severity="error">
            {isRegisterError}
          </Alert>
        )}
        <Button items="Sign In" type="loginBtn" loading={isLoading} />
      </form>
      <Typography
        variant="subtitle2"
        sx={{
          textAlign: 'center',
        }}
      >
        Sudah memiliki akun?{' '}
        <NavLink to="/login" className="text-primaryBlue">
          Daftar
        </NavLink>
      </Typography>
    </Box>
  );
};

export default RegistrationForm;
