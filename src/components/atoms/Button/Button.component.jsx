import { Button } from '@mui/material';

import { styleConfig } from './Button.config';

const ButtonComponent = ({ items, type = 'regular', ...props }) => {
  return (
    <Button
      {...styleConfig[type]}
      {...props}
      sx={{
        ...styleConfig[type]?.sx,
        color: '#ffffff',
        fontWeight: 600,
      }}
    >
      {items}
    </Button>
  );
};

export default ButtonComponent;
