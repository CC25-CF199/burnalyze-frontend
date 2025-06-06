import { Box, Button } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  DetectionResultHeader,
  DetectionResultCard,
} from '../../components/molecules';
import { resetResult, resetUserImage } from '../../redux/detection';

const DetectionResultContainer = () => {
  const dispatch = useDispatch();
  const imgSrc = useSelector(state => state.detection.userImgSrc);
  const woundClass = useSelector(
    state => state.detection.result.message.woundClass
  );

  const handleRescan = () => {
    dispatch(resetResult());
    dispatch(resetUserImage());
  };

  return (
    <Box>
      <DetectionResultHeader />
      <DetectionResultCard imgSrc={imgSrc} woundClass={woundClass} />
      <Button
        component={NavLink}
        to="/detection"
        onClick={handleRescan}
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
