import { Box, Typography } from '@mui/material';
import { Error } from '@mui/icons-material';

import { Image } from '../../atoms';
import { getClassColor } from './DetectionResultCard.config';

const DetectionResultCard = ({ imgSrc, woundClass, bodyPart, desc }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: '10px', md: '20px' },
        boxShadow: 3,
        borderRadius: '8px',
        padding: { xs: '12px', md: '24px' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 1, md: 2 },
        }}
      >
        <Image src={imgSrc} type="scanCompleteUserImg" />
        <Box>
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: { xs: '14px', md: '18px' },
            }}
          >
            Luka Bakar Terdeteksi di {bodyPart}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: getClassColor(woundClass),
              fontSize: { xs: '14px', md: '16px' },
            }}
          >
            {woundClass}
          </Typography>
        </Box>
      </Box>
      <>
        <Typography
          sx={{
            fontSize: { xs: '12px', md: '14px' },
          }}
        >
          {desc}
        </Typography>
        <Box sx={{ display: 'flex', gap: '5px' }}>
          <Error sx={{ color: '#FF5722' }} />
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: { xs: '10px', md: '14px' },
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
