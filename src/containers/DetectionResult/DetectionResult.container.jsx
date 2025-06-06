import { Box, Button } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

import { NavLink } from 'react-router-dom';

import { DetectionResultHeader } from '../../components/molecules';

const DetectionResultContainer = () => {
  return (
    <Box>
      <DetectionResultHeader />
      <Button
        component={NavLink}
        to="/detection"
        variant="contained"
        startIcon={<PhotoCamera />}
        sx={{
          width: '100%',
          color: '#FFF',
          fontWeight: 600,
          borderRadius: '8px',
          boxShadow: 3,
        }}
      >
        Analisa Lagi
      </Button>
    </Box>
  );
};

export default DetectionResultContainer;
