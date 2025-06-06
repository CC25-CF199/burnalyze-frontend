import { Box, Typography } from '@mui/material';
import { Error } from '@mui/icons-material';

import { Image } from '../../atoms';

const DetectionResultCard = ({ imgSrc, woundClass, desc }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        boxShadow: 3,
        borderRadius: '8px',
        padding: '12px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
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
      <>
        <Typography
          sx={{
            fontSize: '12px',
          }}
        >
          {desc}
        </Typography>
        <Box sx={{ display: 'flex', gap: '5px' }}>
          <Error sx={{ color: '#FF5722' }} />
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: '10px',
              color: '#FF5722',
            }}
          >
            Konsultasikan dengan dokter jika gejala semakin parah.
          </Typography>
        </Box>
      </>
    </Box>
  );
};

export default DetectionResultCard;
