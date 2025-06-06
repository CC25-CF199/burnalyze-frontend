import { Box } from '@mui/material';

import { styleConfig } from './Image.config';

const Image = ({ src, type }) => {
  return (
    <Box
      component="img"
      {...styleConfig[type]}
      alt="BurnAlyze Logo"
      src={src}
    />
  );
};

export default Image;
