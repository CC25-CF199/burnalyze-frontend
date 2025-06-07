import { Box, Typography } from '@mui/material';
import SickIcon from '@mui/icons-material/Sick';

import { Button } from '../../atoms';

const NoRecordCard = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'center',
        boxShadow: 4,
        padding: 2,
        borderRadius: '8px',
      }}
    >
      <SickIcon sx={{ color: '#FF6B6B', fontSize: '40px' }} />
      <Box>
        <Typography
          sx={{
            fontSize: { xs: '18px' },
            fontWeight: 600,
            color: '#01CEE1',
            textAlign: 'center',
          }}
        >
          Riwayatmu masih kosong
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '14px' },
            textAlign: 'center',
          }}
        >
          Masuk atau Daftarkan akunmu untuk mulai melihat riwayat deteksi
        </Typography>
      </Box>
      <Button items="Sign In" type="signInMobile" />
    </Box>
  );
};

export default NoRecordCard;
