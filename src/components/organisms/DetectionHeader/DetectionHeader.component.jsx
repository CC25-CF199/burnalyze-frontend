import { Typography, Box } from '@mui/material';

import { Image } from '../../atoms';
import holdingPhone from '../../../assets/holding_phone.png';

const DetectionHeader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: { xs: 1, md: 3 },
      }}
    >
      <Image src={holdingPhone} type="detectionHeaderImg" />
      <Box>
        <Typography
          variant="h6"
          component="h1"
          sx={{
            fontSize: { xs: '14px', sm: '18px', md: '18px', lg: '20px' },
            color: 'primary.main',
            fontWeight: 700,
            lineHeight: '1.2',
            mb: 0.5,
          }}
        >
          Deteksi cerdas dan klasifikasi luka bakar
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '16px' },
            lineHeight: '1.2',
          }}
        >
          Deteksi dan kategorikan luka bakar pada kulit secara instan
          menggunakan kamera perangkat Anda
        </Typography>
      </Box>
    </Box>
  );
};

export default DetectionHeader;
