import { useState } from 'react';
import { TextField } from '@mui/material';

import { styleConfig } from './Input.config';

const InputComponent = ({ inputType = 'regular', inputError, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);

  const styleParam = {
    type: inputType,
    showPassword: showPassword,
    setShowPassword: setShowPassword,
    inputError: inputError,
  };

  return (
    <TextField
      error={!!inputError}
      helperText={inputError ? inputError : null}
      {...styleConfig(styleParam)}
      {...rest}
    />
  );
};

export default InputComponent;
