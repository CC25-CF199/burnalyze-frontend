import { Box, Typography, Button } from '@mui/material';
import { useParams, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  DetectionResultCard,
  DetectionResultAccordion,
} from '../../components/molecules';
import { getHistoryById } from '../../redux/historyDetails/historyDetails.action';

const HistoryDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const details = useSelector(state => state.historyDetails.history?.message);
  const isLoading = useSelector(state => state.historyDetails.loading);

  useEffect(() => {
    if (id) {
      dispatch(getHistoryById(id));
    }
  }, [dispatch, id]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          fontSize: { xs: '16px' },
          fontWeight: 600,
          textAlign: 'center',
        }}
      >
        Detail Riwayat
      </Typography>
      {!isLoading && (
        <>
          <DetectionResultCard
            imgSrc={details.image_url}
            woundClass={details.class}
            desc={details.desc}
          />
          <DetectionResultAccordion treatments={details.treatments} />
          <Button
            component={NavLink}
            to={`/detection/history`}
            size="medium"
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
            }}
          >
            Kembali
          </Button>
        </>
      )}
    </Box>
  );
};

export default HistoryDetails;
