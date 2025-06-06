import { Box, Typography } from '@mui/material';

import { Image } from '../../atoms';
import scanComplete from '../../../assets/scan_complete_icon.png';

const DetectionResultHeader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        justifyContent: 'center',
      }}
    >
      <Image src={scanComplete} type="scanCompleteIcon" />
      <Typography
        sx={{
          fontWeight: 600,
        }}
      >
        Analisa Selesai!
      </Typography>
    </Box>
  );
};

export default DetectionResultHeader;
