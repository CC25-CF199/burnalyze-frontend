import { InputLabel } from '@mui/material';

import { styleConfig } from './InputLabel.config';

const InputLabelComponent = ({ type = 'regular', items }) => {
  return (
    <InputLabel htmlFor={type}>
      <p {...styleConfig[type]}>{items}</p>
    </InputLabel>
  );
};

export default InputLabelComponent;
