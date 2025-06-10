import { Box, Button } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  DetectionResultHeader,
  DetectionResultCard,
  DetectionResultAccordion,
} from '../../components/molecules';
import { resetResult, resetUserImage } from '../../redux/detection';

const DetectionResultContainer = () => {
  const dispatch = useDispatch();
  const imgSrc = useSelector(state => state.detection.userImgSrc);
  const woundClass = useSelector(
    state => state.detection.result.message.woundClass
  );
  const bodyPart = useSelector(
    state => state.detection.result.message.body_part
  );
  const desc = useSelector(state => state.detection.result.message.desc);
  const treatments = useSelector(
    state => state.detection.result.message.treatments
  );

  const handleRescan = () => {
    dispatch(resetResult());
    dispatch(resetUserImage());
  };

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: {
          xs: 2,
          sm: '16px 10em 16px 10em',
          md: '16px 18em 16px 18em',
        },
      }}
    >
      <DetectionResultHeader />

      <DetectionResultCard
        imgSrc={imgSrc}
        woundClass={woundClass}
        bodyPart={bodyPart}
        desc={desc}
      />
      <DetectionResultAccordion treatments={treatments} />
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
