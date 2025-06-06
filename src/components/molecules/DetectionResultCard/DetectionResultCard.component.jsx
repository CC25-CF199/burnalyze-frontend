import { Box, Typography } from '@mui/material';

import { Image } from '../../atoms';

const DetectionResultCard = ({ imgSrc, woundClass }) => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Image src={imgSrc} type="scanCompleteUserImg" />
        <Box>
          <Typography variant="subtitle2">Luka Bakar Terdeteksi</Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: '#01CEE1',
            }}
          >
            {woundClass}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DetectionResultCard;
