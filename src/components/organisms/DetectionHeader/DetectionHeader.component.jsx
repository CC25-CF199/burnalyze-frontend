import { Typography, Box } from '@mui/material';

import { Image } from '../../atoms';
import holdingPhone from '../../../assets/holding_phone.png';

const DetectionHeader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Image src={holdingPhone} type="detectionHeaderImg" />
      <Typography
        variant="h6"
        component="h1"
        sx={{
          color: 'primary.main',
          fontWeight: 700,
          lineHeight: '1.2',
          mb: 1,
        }}
      >
        Deteksi cerdas dan klasifikasi luka bakar
      </Typography>
      <Typography
        variant="body2"
        sx={{
          lineHeight: '1.5',
        }}
      >
        Deteksi dan kategorikan luka bakar pada kulit secara instan menggunakan
        kamera ponsel Anda
      </Typography>
    </Box>
  );
};

export default DetectionHeader;
