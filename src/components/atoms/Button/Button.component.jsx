import { Button } from '@mui/material';

import { styleConfig } from './Button.config';

const ButtonComponent = ({ items, type = 'regular', ...props }) => {
  return (
    <Button {...styleConfig[type]} {...props}>
      {items}
    </Button>
  );
};

export default ButtonComponent;
